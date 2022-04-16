(window.webpackJsonp=window.webpackJsonp||[]).push([[489],{2327:function(e,a,s){"use strict";s.r(a);var t=s(75),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"🌟-vulmap-web-vulnerability-scanning-and-verification-tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🌟-vulmap-web-vulnerability-scanning-and-verification-tools"}},[e._v("#")]),e._v(" 🌟 Vulmap - Web vulnerability scanning and verification tools")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/zhzyker/vulmap"}},[s("img",{attrs:{alt:"Release",src:"https://img.shields.io/badge/python-3.8+-blueviolet"}})]),e._v(" "),s("a",{attrs:{href:"https://github.com/zhzyker/vulmap"}},[s("img",{attrs:{alt:"Release",src:"https://img.shields.io/badge/Version-vulmap 0.8-yellow"}})]),e._v(" "),s("a",{attrs:{href:"https://github.com/zhzyker/vulmap"}},[s("img",{attrs:{alt:"Release",src:"https://img.shields.io/badge/LICENSE-GPL-ff69b4"}})]),e._v(" "),s("img",{attrs:{src:"https://img.shields.io/github/stars/zhzyker/vulmap?color=gree",alt:"GitHub Repo stars"}}),e._v(" "),s("img",{attrs:{src:"https://img.shields.io/github/forks/zhzyker/vulmap",alt:"GitHub forks"}})]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/zhzyker/vulmap",target:"_blank",rel:"noopener noreferrer"}},[e._v("中文版本(Chinese Version)"),s("OutboundLink")],1)]),e._v(" "),s("blockquote",[s("p",[e._v("Vulmap is a web vulnerability scanning and verification tool that can scan webapps for vulnerabilities and has vulnerability exploitation functions. Currently supported webapps include activemq, flink, shiro, solr, struts2, tomcat, unomi, drupal, elasticsearch, fastjson, jenkins , nexus, weblogic, jboss, spring, thinkphp")]),e._v(" "),s("p",[e._v("Vulmap combines vulnerability scanning and verification (vulnerability exploitation), and to a large extent, it is convenient for testers to take the next step in time after discovering vulnerabilities. The tool pursues efficiency and convenience\nEfficient: Batch scanning, Fofa, Shodan batch scanning are slowly introduced in the gradual development, and multi-threading is supported by default to enable coroutines to scan a large number of assets at the fastest speed\nConvenience: You can take advantage of vulnerabilities found, scan a large number of assets and output results in multiple formats")]),e._v(" "),s("p",[e._v("Vulmap version 0.8 starts to support the direct vulnerability scanning of the dismap recognition result file "),s("code",[e._v("-f output.txt")])])]),e._v(" "),s("h2",{attrs:{id:"🛒-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🛒-installation"}},[e._v("#")]),e._v(" 🛒 Installation")]),e._v(" "),s("p",[e._v("The operating system must have python3, python3.8 or higher is recommended")]),e._v(" "),s("ul",[s("li",[e._v("git or go to release to get the original code")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git clone https://github.com/zhzyker/vulmap.git\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("Installation dependency")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("pip3 install -r requirements.txt\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("Linux & MacOS & Windows")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("python vulmap.py -u http://example.com\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Configure Fofa Api && Shodan Api && Ceye")]),e._v(" "),s("ul",[s("li",[e._v("Fofa info: https://fofa.so/user/users/info")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace xxxxxxxxxx with fofa email")]),e._v("\nglobals.set_value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"fofa_email"')]),e._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"xxxxxxxxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("  \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace xxxxxxxxxx with fofa key")]),e._v("\nglobals.set_value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"fofa_key"')]),e._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"xxxxxxxxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("ul",[s("li",[e._v("Shodan key: https://account.shodan.io")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace xxxxxxxxxx with your shodan key")]),e._v("\nglobals.set_value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"shodan_key"')]),e._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"xxxxxxxxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ul",[s("li",[e._v("Ceye info: http://ceye.io")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace xxxxxxxxxx with your own domain name")]),e._v("\nglobals.set_value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ceye_domain"')]),e._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"xxxxxxxxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("  \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace xxxxxxxxxx with your own ceye token")]),e._v("\nglobals.set_value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ceye_token"')]),e._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"xxxxxxxxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h2",{attrs:{id:"📑-licenses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#📑-licenses"}},[e._v("#")]),e._v(" 📑 Licenses")]),e._v(" "),s("p",[e._v("Add the following disclaimer to the original agreement "),s("a",{attrs:{href:"https://github.com/zhzyker/vulmap/blob/main/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[e._v("LICENSE"),s("OutboundLink")],1),e._v(". In case of conflict with the original agreement, the disclaimer shall prevail.")]),e._v(" "),s("p",[e._v("Unauthorized commercial use of this tool is prohibited, and unauthorized commercial use after secondary development is prohibited")]),e._v(" "),s("p",[e._v("This tool is only for legally authorized corporate security construction activities. When using this tool for testing, you should ensure that the behavior complies with local laws and regulations and has obtained sufficient authorization.")]),e._v(" "),s("p",[e._v("If you have any illegal behavior in the process of using this tool, you need to bear the corresponding consequences yourself, and we will not bear any legal and joint liabilities.")]),e._v(" "),s("p",[e._v("Before using this tool, please read carefully and fully understand the content of each clause. Restrictions, exemptions, or other clauses involving your major rights and interests may be bolded, underlined, etc. to remind you to pay attention. Unless you have fully read, fully understood and accepted all the terms of this agreement, please do not use this tool. Your use behavior or your acceptance of this agreement in any other express or implied manner shall be deemed to have been read and agreed to be bound by this agreement.")]),e._v(" "),s("h2",{attrs:{id:"🙋-discussion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🙋-discussion"}},[e._v("#")]),e._v(" 🙋 Discussion")]),e._v(" "),s("ul",[s("li",[e._v("Vulmap bug feedback or new feature suggestions"),s("a",{attrs:{href:"https://github.com/zhzyker/vulmap/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("Point Me"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Telegram: t.me/zhzyker")])]),e._v(" "),s("h2",{attrs:{id:"🔧-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔧-options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('optional arguments:\n  -h, --help            show this help message and exit\n  -u URL, --url URL     target URL (e.g. -u "http://example.com")\n  -f FILE, --file FILE  select a target list file (e.g. -f "list.txt")\n  --fofa keyword        call fofa api to scan (e.g. --fofa "app=Apache-Shiro")\n  --shodan keyword      call shodan api to scan (e.g. --shodan "Shiro")\n  -m MODE, --mode MODE  supports poc and exp, if not specified the default poc\n  -a APP [APP ...]      specify webapps (e.g. -a "tomcat") allow multiple\n  -v VUL, --vul VUL     exploit, specify vuln number (e.g. -v CVE-2019-2729)\n  -t NUM, --thread NUM  number of scanning function threads, default 10 threads\n  --dnslog server       dnslog server (hyuga,dnslog,ceye) default automatic\n  --output-text file    result export txt file (e.g. "result.txt")\n  --output-json file    result export json file (e.g. "result.json")\n  --proxy-socks SOCKS   socks proxy (e.g. --proxy-socks 127.0.0.1:1080)\n  --proxy-http HTTP     http proxy (e.g. --proxy-http 127.0.0.1:8080)\n  --fofa-size SIZE      Fofa query target number, default 100 (1-10000)\n  --user-agent UA       you can customize the user-agent headers\n  --delay DELAY         delay check time, default 0s\n  --timeout TIMEOUT     scan timeout time, default 10s\n  --list                display the list of supported vulnerabilities\n  --debug               exp echo request and responses, poc echo vuln lists\n  --check               survival check (on and off), default on\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br")])]),s("h2",{attrs:{id:"🐾-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🐾-examples"}},[e._v("#")]),e._v(" 🐾 Examples")]),e._v(" "),s("p",[e._v("Test all vulnerabilities poc mode")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("python3 vulmap.py -u http://example.com\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Check http://example.com for struts2 vuln")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("python3 vulmap.py -u http://example.com -a struts2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("python3 vulmap.py -u http://example.com -m poc -a struts2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Exploit the CVE-2019-2729 vuln of WebLogic on http://example.com:7001")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("python3 vulmap.py -u http://example.com:7001 -v CVE-2019-2729\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("python3 vulmap.py -u http://example.com:7001 -m exp -v CVE-2019-2729\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Export scan results to result.json")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("python3 vulmap.py -u http://example.com:7001 --output-json result.json\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h1",{attrs:{id:"call-fofa-api-batch-scan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#call-fofa-api-batch-scan"}},[e._v("#")]),e._v(" Call fofa api batch scan")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("python3 vulmap.py --fofa app=Apache-Shiro\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"🍵-vulnerabilitys-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🍵-vulnerabilitys-list"}},[e._v("#")]),e._v(" 🍵 Vulnerabilitys List")]),e._v(" "),s("p",[e._v("Vulmap supported vulnerabilities are as follows")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" +-------------------+------------------+-----+-----+-------------------------------------------------------------+\n | Target type       | Vuln Name        | Poc | Exp | Impact Version && Vulnerability description                 |\n +-------------------+------------------+-----+-----+-------------------------------------------------------------+\n | Apache ActiveMQ   | CVE-2015-5254    |  Y  |  N  | < 5.13.0, deserialization remote code execution             |\n | Apache ActiveMQ   | CVE-2016-3088    |  Y  |  Y  | < 5.14.0, http put&move upload webshell                     |\n | Apache Druid      | CVE-2021-25646   |  Y  |  Y  | < 0.20.1, apache druid console remote code execution        |\n | Apache Flink      | CVE-2020-17518   |  Y  |  N  | < 1.11.3 or < 1.12.0, upload path traversal                 |\n | Apache Flink      | CVE-2020-17519   |  Y  |  Y  | 1.5.1 - 1.11.2, 'jobmanager/logs' path traversal            |\n | Apache OFBiz      | CVE-2021-26295   |  Y  |  N  | < 17.12.06, rmi deserializes arbitrary code execution       |\n | Apache OFBiz      | CVE-2021-29200   |  Y  |  N  | < 17.12.07, rmi deserializes arbitrary code execution       |\n | Apache OFBiz      | CVE-2021-30128   |  Y  |  Y  | < 17.12.07, deserialize remote command execution            | \n | Apache Shiro      | CVE-2016-4437    |  Y  |  Y  | <= 1.2.4, shiro-550, rememberme deserialization rce         |\n | Apache Solr       | CVE-2017-12629   |  Y  |  Y  | < 7.1.0, runexecutablelistener rce & xxe, only rce is here  |\n | Apache Solr       | CVE-2019-0193    |  Y  |  N  | < 8.2.0, dataimporthandler module remote code execution     |\n | Apache Solr       | CVE-2019-17558   |  Y  |  Y  | 5.0.0 - 8.3.1, velocity response writer rce                 |\n | Apache Solr       | time-2021-0318   |  Y  |  Y  | all, apache solr arbitrary file reading                     |\n | Apache Solr       | CVE-2021-27905   |  Y  |  N  | 7.0.0-7.7.3, 8.0.0-8.8.1, replication handler ssrf          |\n | Apache Struts2    | S2-005           |  Y  |  Y  | 2.0.0 - 2.1.8.1, cve-2010-1870 parameters interceptor rce   |\n | Apache Struts2    | S2-008           |  Y  |  Y  | 2.0.0 - 2.3.17, debugging interceptor rce                   |\n | Apache Struts2    | S2-009           |  Y  |  Y  | 2.1.0 - 2.3.1.1, cve-2011-3923 ognl interpreter rce         |\n | Apache Struts2    | S2-013           |  Y  |  Y  | 2.0.0 - 2.3.14.1, cve-2013-1966 ognl interpreter rce        |\n | Apache Struts2    | S2-015           |  Y  |  Y  | 2.0.0 - 2.3.14.2, cve-2013-2134 ognl interpreter rce        |\n | Apache Struts2    | S2-016           |  Y  |  Y  | 2.0.0 - 2.3.15, cve-2013-2251 ognl interpreter rce          |\n | Apache Struts2    | S2-029           |  Y  |  Y  | 2.0.0 - 2.3.24.1, ognl interpreter rce                      |\n | Apache Struts2    | S2-032           |  Y  |  Y  | 2.3.20-28, cve-2016-3081 rce can be performed via method    |\n | Apache Struts2    | S2-045           |  Y  |  Y  | 2.3.5-31, 2.5.0-10, cve-2017-5638 jakarta multipart rce     |\n | Apache Struts2    | S2-046           |  Y  |  Y  | 2.3.5-31, 2.5.0-10, cve-2017-5638 jakarta multipart rce     |\n | Apache Struts2    | S2-048           |  Y  |  Y  | 2.3.x, cve-2017-9791 struts2-struts1-plugin rce             |\n | Apache Struts2    | S2-052           |  Y  |  Y  | 2.1.2 - 2.3.33, 2.5 - 2.5.12 cve-2017-9805 rest plugin rce  |\n | Apache Struts2    | S2-057           |  Y  |  Y  | 2.0.4 - 2.3.34, 2.5.0-2.5.16, cve-2018-11776 namespace rce  |\n | Apache Struts2    | S2-059           |  Y  |  Y  | 2.0.0 - 2.5.20, cve-2019-0230 ognl interpreter rce          |\n | Apache Struts2    | S2-061           |  Y  |  Y  | 2.0.0-2.5.25, cve-2020-17530 ognl interpreter rce           |\n | Apache Struts2    | S2-devMode       |  Y  |  Y  | 2.1.0 - 2.5.1, devmode remote code execution                |\n | Apache Tomcat     | Examples File    |  Y  |  N  | all version, /examples/servlets/servlet                     |\n | Apache Tomcat     | CVE-2017-12615   |  Y  |  Y  | 7.0.0 - 7.0.81, put method any files upload                 |\n | Apache Tomcat     | CVE-2020-1938    |  Y  |  Y  | 6, 7 < 7.0.100, 8 < 8.5.51, 9 < 9.0.31 arbitrary file read  |\n | Apache Unomi      | CVE-2020-13942   |  Y  |  Y  | < 1.5.2, apache unomi remote code execution                 |\n | CoreMail          | time-2021-0414   |  Y  |  N  | Coremail configuration information disclosure vulnerability |\n | Drupal            | CVE-2018-7600    |  Y  |  Y  | 6.x, 7.x, 8.x, drupalgeddon2 remote code execution          |\n | Drupal            | CVE-2018-7602    |  Y  |  Y  | < 7.59, < 8.5.3 (except 8.4.8) drupalgeddon2 rce            |\n | Drupal            | CVE-2019-6340    |  Y  |  Y  | < 8.6.10, drupal core restful remote code execution         |\n | Ecology           | time-2021-0515   |  Y  |  Y  | <= 9.0, e-cology oa workflowservicexml rce                  |\n | Elasticsearch     | CVE-2014-3120    |  Y  |  Y  | < 1.2, elasticsearch remote code execution                  |\n | Elasticsearch     | CVE-2015-1427    |  Y  |  Y  | < 1.3.7, < 1.4.3, elasticsearch remote code execution       |\n | Exchange          | CVE-2021-26855   |  Y  |  N  | 2010 2013 2016 2019, microsoft exchange server ssrf         |\n | Exchange          | CVE-2021-27065   |  Y  |  Y  | 2010 2013 2016 2019, exchange arbitrary file write          |\n | Eyou Email        | CNVD-2021-26422  |  Y  |  Y  | eyou email system has remote command execution              |\n | F5 BIG-IP         | CVE-2020-5902    |  Y  |  Y  | < 11.6.x, f5 big-ip remote code execution                   |\n | F5 BIG-IP         | CVE-2021-22986   |  Y  |  Y  | < 16.0.1, f5 big-ip remote code execution                   |\n | Fastjson          | VER-1224-1       |  Y  |  Y  | <= 1.2.24 fastjson parse object remote code execution       |\n | Fastjson          | VER-1224-2       |  Y  |  Y  | <= 1.2.24 fastjson parse object remote code execution       |\n | Fastjson          | VER-1224-3       |  Y  |  Y  | <= 1.2.24 fastjson parse object remote code execution       |\n | Fastjson          | VER-1247         |  Y  |  Y  | <= 1.2.47 fastjson autotype remote code execution           |\n | Fsatjson          | VER-1262         |  Y  |  Y  | <= 1.2.62 fastjson autotype remote code execution           |\n | Jenkins           | CVE-2017-1000353 |  Y  |  N  | <= 2.56, LTS <= 2.46.1, jenkins-ci remote code execution    |\n | Jenkins           | CVE-2018-1000861 |  Y  |  Y  | <= 2.153, LTS <= 2.138.3, remote code execution             |\n | Laravel           | CVE-2018-15133   |  N  |  Y  | 5.5.x <= 5.5.40, 5.6.x <= 5.6.29, laravel get app_key rce   |\n | Laravel           | CVE-2021-3129    |  Y  |  N  | ignition <= 2.5.1, laravel debug mode remote code execution |\n | Nexus OSS/Pro     | CVE-2019-7238    |  Y  |  Y  | 3.6.2 - 3.14.0, remote code execution vulnerability         |\n | Nexus OSS/Pro     | CVE-2020-10199   |  Y  |  Y  | 3.x <= 3.21.1, remote code execution vulnerability          |\n | Node.JS           | CVE-2021-21315   |  Y  |  N  | systeminformation < 5.3.1, node.js command injection        |\n | Oracle Weblogic   | CVE-2014-4210    |  Y  |  N  | 10.0.2 - 10.3.6, weblogic ssrf vulnerability                |\n | Oracle Weblogic   | CVE-2016-0638    |  Y  |  N  | 10.3.6.0, 12.2.1-3, t3 deserialization rce                  |\n | Oracle Weblogic   | CVE-2017-3506    |  Y  |  Y  | 10.3.6.0, 12.1.3.0, 12.2.1.0-2, weblogic wls-wsat rce       |\n | Oracle Weblogic   | CVE-2017-10271   |  Y  |  Y  | 10.3.6.0, 12.1.3.0, 12.2.1.1-2, weblogic wls-wsat rce       |\n | Oracle Weblogic   | CVE-2018-2894    |  Y  |  Y  | 12.1.3.0, 12.2.1.2-3, deserialization any file upload       |\n | Oracle Weblogic   | CVE-2018-3191    |  Y  |  N  | 10.3.6.0, 12.1.3.0, 12.2.1.3, t3 deserialization rce        |\n | Oracle Weblogic   | CVE-2019-2725    |  Y  |  Y  | 10.3.6.0, 12.1.3.0, weblogic wls9-async deserialization rce |\n | Oracle Weblogic   | CVE-2019-2890    |  Y  |  N  | 10.3.6.0, 12.1.3.0, 12.2.1.3, t3 deserialization rce        |\n | Oracle Weblogic   | CVE-2019-2729    |  Y  |  Y  | 10.3.6.0, 12.1.3.0, 12.2.1.3 wls9-async deserialization rce |\n | Oracle Weblogic   | CVE-2020-2551    |  Y  |  N  | 10.3.6.0, 12.1.3.0, 12.2.1.3-4, wlscore deserialization rce |\n | Oracle Weblogic   | CVE-2020-2555    |  Y  |  Y  | 3.7.1.17, 12.1.3.0.0, 12.2.1.3-4.0, t3 deserialization rce  |\n | Oracle Weblogic   | CVE-2020-2883    |  Y  |  Y  | 10.3.6.0, 12.1.3.0, 12.2.1.3-4, iiop t3 deserialization rce |\n | Oracle Weblogic   | CVE-2020-14882   |  Y  |  Y  | 10.3.6.0, 12.1.3.0, 12.2.1.3-4, 14.1.1.0, console rce       |\n | Oracle Weblogic   | CVE-2020-2109    |  Y  |  Y  | 10.3.6.0, 12.1.3.0, 12.2.1.3-4, 14.1.1.0, unauthorized jndi |\n | QiAnXin           | time-2021-0410   |  Y  |  Y  | qianxin ns-ngfw netkang next generation firewall front rce  |\n | RedHat JBoss      | CVE-2010-0738    |  Y  |  Y  | 4.2.0 - 4.3.0, jmx-console deserialization any files upload |\n | RedHat JBoss      | CVE-2010-1428    |  Y  |  Y  | 4.2.0 - 4.3.0, web-console deserialization any files upload |\n | RedHat JBoss      | CVE-2015-7501    |  Y  |  Y  | 5.x, 6.x, jmxinvokerservlet deserialization any file upload |\n | RuiJie            | time_2021_0424   |  Y  |  N  | get account password, background rce                        |\n | Saltstack         | CVE-2021-25282   |  Y  |  Y  | < 3002.5, saltStack arbitrary file writing vulnerability    |\n | Spring Data       | CVE-2018-1273    |  Y  |  Y  | 1.13 - 1.13.10, 2.0 - 2.0.5, spring data commons rce        |\n | Spring Cloud      | CVE-2019-3799    |  Y  |  Y  | 2.1.0-2.1.1, 2.0.0-2.0.3, 1.4.0-1.4.5, directory traversal  |\n | Spring Cloud      | CVE-2020-5410    |  Y  |  Y  | < 2.2.3, < 2.1.9, directory traversal vulnerability         |\n | ThinkPHP          | CVE-2019-9082    |  Y  |  Y  | < 3.2.4, thinkphp rememberme deserialization rce            |\n | ThinkPHP          | CVE-2018-20062   |  Y  |  Y  | <= 5.0.23, 5.1.31, thinkphp rememberme deserialization rce  |\n | Vmware vCenter    | time-2020-1013   |  Y  |  N  | <= 6.5u1, vmware vcenter arbitrary file reading (not cve)   |\n | Vmware vCenter    | CVE-2021-21972   |  Y  |  Y  | 7.0 < 7.0U1c, 6.7 < 6.7U3l, 6.5 < 6.5U3n, any file upload   |\n | VMware vRealize   | CVE-2021-21975   |  Y  |  N  | <= 8.3.0, vmware vrealize operations manager api ssrf       |\n +-------------------+------------------+-----+-----+-------------------------------------------------------------+\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br"),s("span",{staticClass:"line-number"},[e._v("45")]),s("br"),s("span",{staticClass:"line-number"},[e._v("46")]),s("br"),s("span",{staticClass:"line-number"},[e._v("47")]),s("br"),s("span",{staticClass:"line-number"},[e._v("48")]),s("br"),s("span",{staticClass:"line-number"},[e._v("49")]),s("br"),s("span",{staticClass:"line-number"},[e._v("50")]),s("br"),s("span",{staticClass:"line-number"},[e._v("51")]),s("br"),s("span",{staticClass:"line-number"},[e._v("52")]),s("br"),s("span",{staticClass:"line-number"},[e._v("53")]),s("br"),s("span",{staticClass:"line-number"},[e._v("54")]),s("br"),s("span",{staticClass:"line-number"},[e._v("55")]),s("br"),s("span",{staticClass:"line-number"},[e._v("56")]),s("br"),s("span",{staticClass:"line-number"},[e._v("57")]),s("br"),s("span",{staticClass:"line-number"},[e._v("58")]),s("br"),s("span",{staticClass:"line-number"},[e._v("59")]),s("br"),s("span",{staticClass:"line-number"},[e._v("60")]),s("br"),s("span",{staticClass:"line-number"},[e._v("61")]),s("br"),s("span",{staticClass:"line-number"},[e._v("62")]),s("br"),s("span",{staticClass:"line-number"},[e._v("63")]),s("br"),s("span",{staticClass:"line-number"},[e._v("64")]),s("br"),s("span",{staticClass:"line-number"},[e._v("65")]),s("br"),s("span",{staticClass:"line-number"},[e._v("66")]),s("br"),s("span",{staticClass:"line-number"},[e._v("67")]),s("br"),s("span",{staticClass:"line-number"},[e._v("68")]),s("br"),s("span",{staticClass:"line-number"},[e._v("69")]),s("br"),s("span",{staticClass:"line-number"},[e._v("70")]),s("br"),s("span",{staticClass:"line-number"},[e._v("71")]),s("br"),s("span",{staticClass:"line-number"},[e._v("72")]),s("br"),s("span",{staticClass:"line-number"},[e._v("73")]),s("br"),s("span",{staticClass:"line-number"},[e._v("74")]),s("br"),s("span",{staticClass:"line-number"},[e._v("75")]),s("br"),s("span",{staticClass:"line-number"},[e._v("76")]),s("br"),s("span",{staticClass:"line-number"},[e._v("77")]),s("br"),s("span",{staticClass:"line-number"},[e._v("78")]),s("br"),s("span",{staticClass:"line-number"},[e._v("79")]),s("br"),s("span",{staticClass:"line-number"},[e._v("80")]),s("br"),s("span",{staticClass:"line-number"},[e._v("81")]),s("br"),s("span",{staticClass:"line-number"},[e._v("82")]),s("br"),s("span",{staticClass:"line-number"},[e._v("83")]),s("br"),s("span",{staticClass:"line-number"},[e._v("84")]),s("br"),s("span",{staticClass:"line-number"},[e._v("85")]),s("br"),s("span",{staticClass:"line-number"},[e._v("86")]),s("br"),s("span",{staticClass:"line-number"},[e._v("87")]),s("br"),s("span",{staticClass:"line-number"},[e._v("88")]),s("br"),s("span",{staticClass:"line-number"},[e._v("89")]),s("br"),s("span",{staticClass:"line-number"},[e._v("90")]),s("br")])]),s("h2",{attrs:{id:"🐟-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🐟-docker"}},[e._v("#")]),e._v(" 🐟 Docker")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" build -t vulmap/vulmap "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run --rm -ti vulmap/vulmap  python vulmap.py -u https://www.example.com\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);