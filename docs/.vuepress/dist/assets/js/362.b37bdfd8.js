(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{1999:function(s,t,e){s.exports=e.p+"assets/img/1627121673764-9e7e67c3-6ba1-4b52-8d75-c79939b467bd.0b59c957.png"},2e3:function(s,t,e){s.exports=e.p+"assets/img/1627121673728-3ab16545-7d91-4918-9308-7343b2fe7998.8db0c692.png"},2432:function(s,t,e){"use strict";e.r(t);var a=e(75),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"weblogic-反序列化远程代码执行漏洞-cve-2019-2725"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weblogic-反序列化远程代码执行漏洞-cve-2019-2725"}},[s._v("#")]),s._v(" Weblogic 反序列化远程代码执行漏洞 CVE-2019-2725")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("2019年06月15日，360CERT监测到在野的Oracle Weblogic远程反序列化命令执行漏洞，该漏洞绕过了最新的Weblogic补丁（CVE-2019-2725），攻击者可以发送精心构造的恶意HTTP请求，在未授权的情况下远程执行命令。目前官方补丁未发布，漏洞细节未公开。360CERT经研判后判定该漏洞综合评级为“高危”，强烈建议受影响的用户尽快根据临时修补建议进行临时处置，防止收到攻击者攻击。")]),s._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("Weblogic 10.3.6")]),a("br"),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("Weblogic 12.1.3")]),a("br"),s._v(" "),a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/vulhub/vulhub.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" vulhub/weblogic/CVE-2017-10271\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up -d\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("a-alert",{attrs:{type:"success",message:"漏洞分析文章: https://xz.aliyun.com/t/5024",description:"",showIcon:""}}),s._v(" "),a("br"),s._v(" "),a("p",[s._v("这里使用POC进行复现")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("POC地址: https://github.com/TopScrew/CVE-2019-2725\nPOC可利用于命令执行和Webshell上传\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:e(1999),alt:"weblogic-19.png"}})]),s._v(" "),a("p",[a("img",{attrs:{src:e(2e3),alt:"weblogic-20.png"}})])],1)}),[],!1,null,null,null);t.default=r.exports}}]);