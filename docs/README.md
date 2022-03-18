---
home: true
heroImage: /assets/img/CrossC2_logo.a07b4fbd.png
#actionBtn:
#  text: 开始使用🍃
#  link: /
#  type: primary
#  ghost: true
#  size: large
#preactionBtn:
#  text: 支持项目🍃
# link: /about/support
#  type: primary
#  ghost: true
#  size: large
#features:
#- title: 实用
#  details: 内容优质，细节详尽
#- title: 记录
#  details: 记录平时学习所得
#- title: 开放
#  details: 每个人都可以学到知识

head: [
    ['link', { rel: 'icon', href: '/img/home.svg' }],
    ['meta', { name: 'referrer', content: 'never' }],
    ['meta', { name: 'keywords', content: '知识库,漏洞复现,AWSL文库,代码审计,渗透测试' }],
    ['meta', { name: 'description', content: '如今漏洞的各种复现文章已经填满了互联网，但是每次去尝试漏洞复现时，总会纠结于环境搭建，POC和漏洞原理上。由于这些因素，通常都需要翻阅很多很多的文章才能理解这个漏洞，于是，便萌生了把环境搭建，POC，漏洞原理全部集合在一个文库的想法，PeiQI WiKi-POC文库便由此而来🐣' }],
  ]
footer: Powered by AWSL | Copyright © 2020-2022 AWSL
---

</br>
</br>

<a-alert type="info" message="提示" description="本文库仅限南通大学AWSL战队内部阅读，由于传播、利用此文所提供的信息而造成的任何直接或者间接的后果及损失，均由使用者本人负责，文章作者不为此承担任何责任。AWSL战队拥有对此文章的修改和解释权。" showIcon>
</a-alert>


</br>
</br>






<p></p> 

<template>
  <a-timeline>
    <a-timeline-item>
      2022.3.18
      <p>
        - <a-tag color="pink">红蓝对抗</a-tag>新增内网渗透文章：<a href='/redteam/innet/批量利用/蓝凌OA任意文件任意文件写入之批量上线.html'>蓝凌OA任意文件任意文件写入之批量上线</a><br/>
        - <a-tag color="pink">红蓝对抗</a-tag>新增内网渗透文章：<a href='/redteam/innet/批量利用/redis未授权访问漏洞的批量攻击.html'>redis未授权访问漏洞的批量攻击</a><br/>
        - <a-tag color="purple">文库动态</a-tag>修改样式表和布局，更加美观<br/>
        - <a-tag color="red">黑客技能</a-tag>新增安卓攻防文章：<a href='/hackskill/android/安卓设备/远程黑进智能电视.html'>远程黑进智能电视</a><br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      2022.3.17
      <p>
        - <a-tag color="yellow">CTF</a-tag>新增WEB文章：<a href='/ctf/WEB/RCE/利用PHP FFI 预加载执行命令.html'>PHP FFI 预加载执行命令</a><br/>
        - <a-tag color="yellow">CTF</a-tag>新增PWN文章：<a href='/ctf/PWN/自救指南/自救指南.html'>自救指南</a><br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      2022.3.16
      <p>
        - <a-tag color="purple">文库动态</a-tag>开源文库至Github<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      2022.3.14
      <p>
        - <a-tag color="purple">文库动态</a-tag>制作文库Docker镜像让文库更容易部署<br/>
        - <a-tag color="red">漏洞相关</a-tag>漏洞相关文档全部转移完成(阅读效果优化未完成)<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      2022.3.13
      <p>
        - <a-tag color="purple">文库动态</a-tag>文库README文档全部完成<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      2022.3.10
      <p>
        - <a-tag color="green">漏洞相关</a-tag>同步服务器应用漏洞<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      2022.3.8
      <p>
        - <a-tag color="red">漏洞相关</a-tag>Linux DirtyPipe权限提升漏洞 CVE-2022-0847<br/>
        - <a-tag color="green">漏洞相关</a-tag>同步Web服务器漏洞(Apache,Nginx等)<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      2022.3.6
      <p>
        - <a-tag color="green">漏洞相关</a-tag>同步操作系统漏洞(Linux, Windows)<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      2022.3.5
      <p>
        - <a-tag color="red">漏洞相关</a-tag>开始同步文库之前的内容，并重构文章Md文档，更加适合阅读<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      2022.3.4
      <p>
        - <a-tag color="purple">文库动态</a-tag>添加插件：Vssue评论，Copy代码插件，阅读进度条插件<br/>
        - <a-tag color="purple">文库动态</a-tag>添加模块：建议反馈<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      2022.3.3
      <p>
        - <a-tag color="green">文库动态</a-tag>开始编写各项分类 README文档<br/>
        - <a-tag color="purple">文库动态</a-tag>添加分类：漏洞相关，CTF，红蓝对抗，文库动态，关于文库<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      2022.3.2
      <p>
        - <a-tag color="green">文库动态</a-tag>装修网站，修饰主题<br/>
        - <a-tag color="purple">文库动态</a-tag>搭建主题确定: AntDocs of VuePress<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      2022.3.1
      <p>
        - <a-tag color="green">文库动态</a-tag>开始重构文库<br/>
      </p>
    </a-timeline-item>
  </a-timeline>
<a-steps>
    <a-step status="finish" title="Star">
      <a-icon slot="icon" type="star" />
    </a-step>
    <a-step status="process" title="Reading">
      <a-icon slot="icon" type="loading" />
    </a-step>
    <a-step status="wait" title="Thank">
      <a-icon slot="icon" type="smile-o" />
    </a-step>
  </a-steps>
</template>
<script>



import ACTI

export default {

components: {ACTI 视频监控}

}
</script>

