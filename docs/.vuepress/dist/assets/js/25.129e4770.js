(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1020:function(s,t,a){s.exports=a.p+"assets/img/yzmcms-1.129c6f22.png"},1021:function(s,t,a){s.exports=a.p+"assets/img/image-20220313234840629.e6bf7c49.png"},1022:function(s,t,a){s.exports=a.p+"assets/img/yzmcms-4.e72432fb.png"},1023:function(s,t,a){s.exports=a.p+"assets/img/yzmcms-5.aaeb59c1.png"},1024:function(s,t,a){s.exports=a.p+"assets/img/yzmcms-3.4db02fc2.png"},1025:function(s,t,a){s.exports=a.p+"assets/img/yzmcms-6.f2f78e37.png"},1026:function(s,t,a){s.exports=a.p+"assets/img/yzmcms-7.704783ed.png"},2149:function(s,t,a){"use strict";a.r(t);var r=a(75),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"yzmcms-后台采集模块-ssrf漏洞"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yzmcms-后台采集模块-ssrf漏洞"}},[s._v("#")]),s._v(" YzmCMS 后台采集模块 SSRF漏洞")]),s._v(" "),r("h2",{attrs:{id:"漏洞描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),r("p",[r("a",{attrs:{href:"https://www.yzmcms.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("YzmCMS内容管理系统"),r("OutboundLink")],1),s._v("是一款"),r("strong",[s._v("轻量级开源内容管理系统")]),s._v("，它采用自主研发的框架"),r("strong",[s._v("YZMPHP")]),s._v("开发。程序基于PHP+Mysql架构，并采用MVC框架式开发的一款高效开源的内容管理系统，可运行在Linux、Windows、MacOSX、Solaris等各种平台上。")]),s._v(" "),r("p",[s._v("源码存在协议识别的缺陷，导致存在SSRF漏洞")]),s._v(" "),r("h2",{attrs:{id:"漏洞影响"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),r("a-checkbox",{attrs:{checked:""}},[s._v("YzmCMS version <  V5.8正式版")]),r("br"),s._v(" "),r("h2",{attrs:{id:"环境搭建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),r("a-alert",{attrs:{type:"success",message:"按照文档安装即可:https://github.com/yzmcms/yzmcms",description:"",showIcon:""}}),s._v(" "),r("br"),s._v(" "),r("p",[r("img",{attrs:{src:a(1020),alt:"img"}})]),s._v(" "),r("h2",{attrs:{id:"漏洞复现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),r("p",[s._v("登录后台 --\x3e 模块管理 --\x3e 采集管理")]),s._v(" "),r("p",[r("img",{attrs:{src:a(1021),alt:"image-20220313234840629"}})]),s._v(" "),r("p",[s._v("添加采集规则")]),s._v(" "),r("p",[r("img",{attrs:{src:a(1022),alt:"img"}})]),s._v(" "),r("p",[s._v("在你的服务器上编辑HTML代码")]),s._v(" "),r("p",[r("img",{attrs:{src:a(1023),alt:"img"}})]),s._v(" "),r("p",[s._v("根目录可能不同，payload需要更改")]),s._v(" "),r("p",[s._v("点击采集读取根目录下的 Flag")]),s._v(" "),r("p",[r("img",{attrs:{src:a(1024),alt:"img"}})]),s._v(" "),r("p",[s._v("出现漏洞的代码位置 "),r("code",[s._v("yzmcms/yzmphp/core/class/cache_factory.class.php")])]),s._v(" "),r("p",[r("img",{attrs:{src:a(1025),alt:"img"}})]),s._v(" "),r("p",[s._v("这里调用 "),r("em",[r("strong",[s._v("url_check")])]),s._v(" 函数")]),s._v(" "),r("p",[r("img",{attrs:{src:a(1026),alt:"img"}})]),s._v(" "),r("p",[s._v("可以看到这里只检测了前4位是否为 http，使用 httpxxx 即可绕过")])],1)}),[],!1,null,null,null);t.default=e.exports}}]);