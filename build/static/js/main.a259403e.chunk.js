(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(13),s=a.n(r),c=(a(51),a(4)),o=a(5),i=a(7),m=a(6),u=a(8),d=(a(53),a(106)),p=a(108),f=a(107),b=(a(55),a(17)),E=(a(57),a(3)),h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(b.a)(Object(b.a)(a))),a.state={isOpen:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return l.a.createElement("div",{className:"nav-bar"},l.a.createElement(E.h,{color:"light",light:!0,expand:"md"},l.a.createElement(E.i,{href:"/"},"ggtalk"),l.a.createElement(E.j,{onClick:this.toggle}),l.a.createElement(E.c,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(E.e,{className:"ml-auto",navbar:!0},l.a.createElement(E.f,null,l.a.createElement(E.g,{href:"/"},"\u8282\u76ee\u5217\u8868")),l.a.createElement(E.f,null,l.a.createElement(E.g,{target:"_blank",href:"https://swift.gg"},"SwiftGG \u7f51\u7ad9")),l.a.createElement(E.f,null,l.a.createElement(E.g,{target:"_blank",href:"https://www.weibo.com/swiftguide"},"SwiftGG \u5fae\u535a")),l.a.createElement(E.f,null,l.a.createElement(E.g,{target:"_blank",href:"https://github.com/SwiftGGTeam/ggtalk"},"GitHub")),l.a.createElement(E.f,null,l.a.createElement(E.g,{href:"/android"},"\u5b89\u5353\u8bf4\u660e")),l.a.createElement(E.f,null,l.a.createElement(E.g,{href:"/about"},"\u5173\u4e8e")),l.a.createElement(E.f,null,l.a.createElement(E.g,{href:"/faq"},"\u65e0\u6cd5\u64ad\u653e\uff1f"))))))}}]),t}(n.Component),g=a(105),j=(a(61),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(E.k,{className:"btns"},l.a.createElement(E.b,{sm:12,md:{size:8,offset:2},lg:{size:6,offset:3}},l.a.createElement(E.k,null,l.a.createElement(E.b,{sm:3},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://talkcdn.swift.gg/static/rss.xml"},l.a.createElement(E.a,{outline:!0,color:"secondary"},"RSS"))),l.a.createElement(E.b,{sm:6},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://itunes.apple.com/cn/podcast/ggtalk/id1440443653"},l.a.createElement(E.a,{outline:!0,color:"secondary"},"\u82f9\u679c Podcasts"))),l.a.createElement(E.b,{sm:3},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"/android"},l.a.createElement(E.a,{outline:!0,color:"secondary"},"\u5b89\u5353")))),l.a.createElement(E.k,null,l.a.createElement(E.b,null,l.a.createElement("a",{className:"faq-link",target:"_blank",rel:"noopener noreferrer",href:"/faq"},"\u65e0\u6cd5\u64ad\u653e\uff1f")))))}}]),t}(n.Component)),v=(a(63),function(){return l.a.createElement("div",{className:"loader"})}),k=a(34),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).formatDate=function(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),l=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[l,a,n].join("-")},a.state={episodes:[],loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];fetch("https://talkcdn.swift.gg/static/rss.xml").then(function(e){return e.text()}).then(function(a){var n=k.xml2js(a,{compact:!0});t=n.rss.channel.item,Array.isArray(t)||(t=[t]),e.setState({episodes:t,loading:!1})})}},{key:"render",value:function(){var e=this;return l.a.createElement(E.d,{fluid:!0,className:"main"},l.a.createElement(E.k,null,l.a.createElement(h,null)),l.a.createElement(E.k,null,l.a.createElement(E.b,{className:"screen"},l.a.createElement("div",{className:"title"},"ggtalk"),l.a.createElement("div",{className:"intro"},"\u7a0b\u5e8f\u5458\u7684\u95f2\u804a\u8282\u76ee"))),l.a.createElement(j,null),l.a.createElement(E.k,{className:"desc"},l.a.createElement(E.b,{className:"center",xs:12,sm:10,md:8,lg:6},l.a.createElement("div",{className:"subtitle"},"\u7b80\u4ecb"),l.a.createElement("div",{className:"description"},"\u63a5\u5730\u6c14\u3001\u6709\u4ef7\u503c\u7684\u95f2\u804a\u8282\u76ee\u3002\u4e00\u5e2e\u7a0b\u5e8f\u5458\uff0c\u5728\u65e0\u5c3d\u7684\u63a5\u9700\u6c42\u5199\u4ee3\u7801\u6539 bug \u52a0\u73ed\u4e0a\u7ebf\u5faa\u73af\u4e2d\u5f00\u8f9f\u51fa\u6765\u7684\u4e00\u5757\u7a7a\u5730\uff0c\u60f3\u60f3\u8fc7\u53bb\uff0c\u804a\u804a\u73b0\u5728\uff0c\u5076\u5c14\u4e5f\u5c55\u671b\u4e00\u4e0b\u672a\u6765\u3002",l.a.createElement("br",null),l.a.createElement("br",null),"\u5934\u53d1\u8d8a\u6765\u8d8a\u5c11\uff0c\u7ecf\u9a8c\u8d8a\u6765\u8d8a\u591a\uff1b\u9888\u690e\u5f00\u59cb\u50f5\u786c\uff0c\u5934\u8111\u4f9d\u7136\u7075\u6d3b\u3002\u4ee3\u7801\u5199\u591a\u4e86\u5c31\u60f3\u5c1d\u8bd5\u70b9\u65b0\u4e1c\u897f\uff0c\u804a\u6280\u672f\uff0c\u804a\u5de5\u4f5c\uff0c\u804a\u751f\u6d3b\u3002\u6324\u5730\u94c1\uff1f\u53c8\u5835\u8f66\uff1f\u968f\u4fbf\u70b9\u4e00\u671f\u5427\uff0c\u542c\u4e2a\u4e50\u5475\u3002",l.a.createElement("br",null),l.a.createElement("br",null),"\u6211\u4eec\u7684\u7f51\u7ad9\uff1a",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://swift.gg"},"https://swift.gg"),"\uff0c\u6211\u4eec\u7684\u5fae\u535a ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.weibo.com/swiftguide"},"@SwiftGG\u7ffb\u8bd1\u7ec4"),"\uff0c\u6211\u7684\u5fae\u535a ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.weibo.com/numbbbbb"},"@\u6881\u6770_numbbbbb"),"\uff0c\u6211\u7684\u90ae\u7bb1\uff1anumbbbbb@swift.gg\u3002"))),l.a.createElement(E.k,{className:"episodes"},l.a.createElement(E.b,{className:"center",xs:12,sm:10,md:8,lg:6},l.a.createElement("div",{className:"subtitle"},"\u8282\u76ee\u5217\u8868"),this.state.loading&&l.a.createElement(v,null),this.state.episodes.map(function(t,a){return l.a.createElement(E.k,{className:"episode",key:a},l.a.createElement(E.b,null,l.a.createElement(g.a,{target:"_blank",className:"title",to:"/"+a},t.title._text),l.a.createElement("div",{className:"intro"},"\u53d1\u5e03\u65e5\u671f\uff1a",e.formatDate(t.pubDate._text),"\xa0|\xa0\u957f\u5ea6\uff1a",t["itunes:duration"]._text),l.a.createElement("div",{className:"description"},t["itunes:summary"]._text?t["itunes:summary"]._text.split("\n")[1]:t["itunes:summary"].p[0]._text)))}).reverse())))}}]),t}(n.Component),y=(a(83),a(43)),N=a(94),x=a(34),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).formatDate=function(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),l=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[l,a,n].join("-")},a.state={episodes:[],loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];fetch("https://talkcdn.swift.gg/static/rss.xml").then(function(e){return e.text()}).then(function(a){var n=x.xml2js(a,{compact:!1});t=n.elements[0].elements[0].elements.filter(function(e){return"item"===e.name}),e.setState({episodes:t,loading:!1}),document.title="ggtalk | "+t[e.props.match.params.id].elements.find(function(e){return"title"===e.name}).elements[0].text})}},{key:"render",value:function(){if(this.state.loading)return l.a.createElement("div",{className:"episode"},l.a.createElement(E.d,{fluid:!0},l.a.createElement(E.k,null,l.a.createElement(h,null)),l.a.createElement(E.k,null,l.a.createElement(v,null))));var e=this.props.match.params.id,t=this.state.episodes[e],a=t.elements.find(function(e){return"title"===e.name}).elements[0].text,n=t.elements.find(function(e){return"pubDate"===e.name}).elements[0].text,r=t.elements.find(function(e){return"itunes:duration"===e.name}).elements[0].text,s=t.elements.find(function(e){return"guid"===e.name}).elements[0].text,c=t.elements.find(function(e){return"description"===e.name});return l.a.createElement("div",{className:"episode"},l.a.createElement(E.d,{fluid:!0},l.a.createElement(E.k,null,l.a.createElement(h,null)),l.a.createElement(E.k,null,l.a.createElement(E.b,{className:"screen"},l.a.createElement("div",{className:"title"},a),l.a.createElement("div",{className:"intro"},"\u7b2c ",e," \u671f\xa0\xb7\xa0",this.formatDate(n),"\xa0\xb7\xa0",r))),l.a.createElement(E.k,{className:"audio"},l.a.createElement(E.b,{className:"center",xs:12,sm:10,md:8,lg:6},l.a.createElement(y.a,{source:s,id:"audioplayer",controls:!0,width:"100%"}))),l.a.createElement(j,null),l.a.createElement(E.k,{className:"desc"},l.a.createElement(E.b,{className:"center",xs:12,sm:10,md:8,lg:6},l.a.createElement("div",{className:"subtitle"},"\u7b80\u4ecb"),l.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:N.link(x.js2xml(c,{compact:!1,ignoreComment:!0,spaces:4}))}})))))}}]),t}(n.Component),S=(a(95),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(E.d,{fluid:!0,className:"about"},l.a.createElement(E.k,null,l.a.createElement(h,null)),l.a.createElement(E.k,null,l.a.createElement(E.b,{className:"screen"},l.a.createElement("div",{className:"title"},"\u5173\u4e8e\u6211\u4eec"),l.a.createElement("div",{className:"intro"},"//"," \u4e00\u4e2a\u4e1a\u4f59\u9879\u76ee",l.a.createElement("del",null,"\u6700\u91cd\u8981\u7684\u90e8\u5206"),"\u5fc5\u987b\u6709\u7684\u90e8\u5206"))),l.a.createElement(j,null),l.a.createElement(E.k,{className:"desc"},l.a.createElement(E.b,{className:"center",xs:12,sm:10,md:8,lg:6},"\u4e4b\u540e\u53ef\u80fd\u4f1a\u4e13\u95e8\u5199\u4e00\u7bc7\u6587\u7ae0\u6216\u8005\u5f55\u4e00\u671f\u8282\u76ee\u6765\u8be6\u7ec6\u8bb2\u8bb2\u4e3a\u4ec0\u4e48\u60f3\u505a\u7535\u53f0\uff0c\u76ee\u524d\u6765\u8bf4\uff0c\u5148\u590d\u7528\u4e00\u4e0b\u9996\u9875\u7684\u4ecb\u7ecd\u5427\u2026\u2026",l.a.createElement("br",null),l.a.createElement("br",null),"\u63a5\u5730\u6c14\u3001\u6709\u4ef7\u503c\u7684\u95f2\u804a\u8282\u76ee\u3002\u4e00\u5e2e\u7a0b\u5e8f\u5458\uff0c\u5728\u65e0\u5c3d\u7684\u63a5\u9700\u6c42\u5199\u4ee3\u7801\u6539 bug \u52a0\u73ed\u4e0a\u7ebf\u5faa\u73af\u4e2d\u5f00\u8f9f\u51fa\u6765\u7684\u4e00\u5757\u7a7a\u5730\uff0c\u60f3\u60f3\u8fc7\u53bb\uff0c\u804a\u804a\u73b0\u5728\uff0c\u5076\u5c14\u4e5f\u5c55\u671b\u4e00\u4e0b\u672a\u6765\u3002",l.a.createElement("br",null),l.a.createElement("br",null),"\u5934\u53d1\u8d8a\u6765\u8d8a\u5c11\uff0c\u7ecf\u9a8c\u8d8a\u6765\u8d8a\u591a\uff1b\u9888\u690e\u5f00\u59cb\u50f5\u786c\uff0c\u5934\u8111\u4f9d\u7136\u7075\u6d3b\u3002\u4ee3\u7801\u5199\u591a\u4e86\u5c31\u60f3\u5c1d\u8bd5\u70b9\u65b0\u4e1c\u897f\uff0c\u804a\u6280\u672f\uff0c\u804a\u5de5\u4f5c\uff0c\u804a\u751f\u6d3b\u3002\u6324\u5730\u94c1\uff1f\u53c8\u5835\u8f66\uff1f\u968f\u4fbf\u70b9\u4e00\u671f\u5427\uff0c\u542c\u4e2a\u4e50\u5475\u3002",l.a.createElement("br",null),l.a.createElement("br",null),"\u6211\u4eec\u7684\u7f51\u7ad9\uff1a",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://swift.gg"},"https://swift.gg"),"\uff0c\u6211\u4eec\u7684\u5fae\u535a",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.weibo.com/swiftguide"},"@SwiftGG\u7ffb\u8bd1\u7ec4"),"\uff0c\u6211\u7684\u5fae\u535a",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.weibo.com/numbbbbb"},"@\u6881\u6770_numbbbbb"),"\uff0c\u6211\u7684\u90ae\u7bb1\uff1anumbbbbb@swift.gg\u3002")),l.a.createElement(E.k,{className:"desc"},l.a.createElement(E.b,{className:"center",xs:12,sm:10,md:8,lg:6},"\u7279\u522b\u9e23\u8c22\uff1a\u7f8a\u53d4",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.weibo.com/shanksyang"},"@shanksyang"),"\u5bf9\u672c\u8282\u76ee\u7684\u5927\u529b\u652f\u6301\uff01\u7f8a\u53d4\u957f\u671f\u8d44\u52a9\u6211\u4eec\u7684 CDN \u6d41\u91cf\uff0c\u4e00\u5fc3\u4ed8\u51fa\u4e0d\u6c42\u56de\u62a5\u3002\u5728\u8fd9\u91cc\u795d\u7f8a\u53d4\u65e9\u65e5 T4\uff0c\u5fc3\u60f3\u4e8b\u6210\uff01",l.a.createElement("br",null),l.a.createElement("br",null))))}}]),t}(n.Component)),_=(a(97),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(E.d,{fluid:!0,className:"android"},l.a.createElement(E.k,null,l.a.createElement(h,null)),l.a.createElement(E.k,null,l.a.createElement(E.b,{className:"screen"},l.a.createElement("div",{className:"title"},"\u65e0\u6cd5\u64ad\u653e\uff1f"),l.a.createElement("div",{className:"intro"},"\u8bf7\u5c1d\u8bd5\u4e0b\u5217\u65b9\u6cd5\uff0c \u6216\u8005\u7ed9\u6211\u53cd\u9988\uff1alj925184928@gmail.com\uff0c\u5fae\u535a",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.weibo.com/numbbbbb"},"@\u6881\u6770_numbbbbb")))),l.a.createElement(j,null),l.a.createElement(E.k,{className:"desc"},l.a.createElement(E.b,{className:"center",xs:12,sm:10,md:8,lg:6},"\u6700\u8fd1\u4e00\u6bb5\u65f6\u95f4\u9646\u9646\u7eed\u7eed\u6709\u542c\u4f17\u53cd\u9988\u65e0\u6cd5\u64ad\u653e\u3002\u6211\u4eec\u4f7f\u7528\u7684\u662f\u817e\u8baf\u4e91\u7684 CDN \u670d\u52a1\uff0c\u53ea\u9488\u5bf9\u56fd\u5185\u6709\u6548\uff0c\u5982\u679c\u5728\u6d77\u5916\uff0c\u6216\u8005\u4f7f\u7528\u4e86\u4ee3\u7406\uff0c\u53ef\u80fd\u4f1a\u4e0d\u592a\u7a33\u5b9a\u3002",l.a.createElement("br",null),l.a.createElement("br",null),"\u5982\u679c\u65e0\u6cd5\u64ad\u653e\uff0c\u53ef\u4ee5\u5c1d\u8bd5\uff1a",l.a.createElement("br",null),"\xa0\xa0\u2022 \u5173\u95ed\u4ee3\u7406",l.a.createElement("br",null),"\xa0\xa0\u2022 \u5237\u65b0\u7f51\u9875",l.a.createElement("br",null),"\xa0\xa0\u2022 \u5237\u65b0 RSS\uff08\u82f9\u679c podcast \u53ef\u4ee5\u5728\u64ad\u5ba2\u5217\u8868\u9875\u4e0b\u62c9\u5237\u65b0\uff09",l.a.createElement("br",null),"\xa0\xa0\u2022 \u7b2c\u4e09\u65b9\u5e94\u7528\u53ef\u4ee5\u5c1d\u8bd5\u53d6\u6d88\u8ba2\u9605\u540e\u91cd\u65b0\u8ba2\u9605\uff0c\u6216\u8005\u53d6\u6d88\u8ba2\u9605\u540e\u7528 RSS \u5730\u5740\uff08https://talkcdn.swift.gg/static/rss.xml\uff09\u91cd\u65b0\u8ba2\u9605",l.a.createElement("br",null),"\xa0\xa0\u2022 \u8bbf\u95ee\u8fd9\u4e2a",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pan.baidu.com/s/1fT5zZp2lVE2DHtgdr1MtgQ"},"\u767e\u5ea6\u76d8"),"\uff0c\u6211\u4f1a\u4e0a\u4f20\u6240\u6709\u97f3\u9891\u6587\u4ef6",l.a.createElement("br",null),l.a.createElement("br",null),"\u5982\u679c\u8fd8\u6709\u95ee\u9898\uff0c\u8bf7\u76f4\u63a5\u8054\u7cfb\u6211\uff1alj925184928@gmail.com\uff0c\u5fae\u535a",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.weibo.com/numbbbbb"},"@\u6881\u6770_numbbbbb"),"\u3002")))}}]),t}(n.Component)),C=(a(99),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(E.d,{fluid:!0,className:"android"},l.a.createElement(E.k,null,l.a.createElement(h,null)),l.a.createElement(E.k,null,l.a.createElement(E.b,{className:"screen"},l.a.createElement("div",{className:"title"},"\u5b89\u5353\u8bf4\u660e"))),l.a.createElement(j,null),l.a.createElement(E.k,{className:"desc"},l.a.createElement(E.b,{className:"center",xs:12,sm:10,md:8,lg:6},"\u82f9\u679c\u53ef\u4ee5\u4f7f\u7528\u81ea\u5e26\u7684 Podcasts \u5e94\u7528\u6536\u542c\u8282\u76ee\uff0c\u975e\u5e38\u65b9\u4fbf\uff0c\u6ca1\u4ec0\u4e48\u597d\u8bf4\u7684\u3002\u4f46\u662f\u5b89\u5353\u7684\u60c5\u51b5\u6bd4\u8f83\u590d\u6742\u3002",l.a.createElement("br",null),l.a.createElement("br",null),"Google \u5b98\u65b9\u6709\u4e00\u4e2a\u7535\u53f0\u5e94\u7528\uff0c\u53eb ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://play.google.com/store/apps/details?id=com.google.android.apps.podcasts"},"Google Podcasts"),"\u3002\u4e0d\u8fc7\u7531\u4e8e\u662f\u5b98\u65b9\u51fa\u54c1\uff0c\u56fd\u5185\u53ef\u80fd\u4f7f\u7528\u8d77\u6765\u5e76\u4e0d\u65b9\u4fbf\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u8fd8\u662f\u8981\u9009\u62e9\u7b2c\u4e09\u65b9\u5e94\u7528\u6536\u542c\u8282\u76ee\u3002",l.a.createElement("br",null),l.a.createElement("br",null),"\u5b89\u5353\u5e73\u53f0\u7684\u7b2c\u4e09\u65b9\u7535\u53f0\u7c7b\u5e94\u7528\u4e0d\u5c11\uff0c\u4f46\u662f\u76ee\u524d\u4f3c\u4e4e\u8fd8\u6ca1\u6709\u51fa\u73b0\u4e00\u4e2a\u516c\u8ba4\u7684\u6700\u5f3a\u8005\uff0c\u6bcf\u4e2a\u90fd\u6709\u597d\u6709\u574f\u3002\u6211\u6574\u7406\u4e86\u4e00\u4e0b\u6bd4\u8f83\u51fa\u540d\u7684\u5e94\u7528\uff0c\u5927\u5bb6\u53ef\u4ee5\u81ea\u884c\u641c\u7d22\u4f7f\u7528\uff1a",l.a.createElement("br",null),"\xa0\xb7 Pocket Casts",l.a.createElement("br",null),"\xa0\xb7 PlayerFM",l.a.createElement("br",null),"\xa0\xb7 CastBox",l.a.createElement("br",null),"\xa0\xb7 Audvel",l.a.createElement("br",null),l.a.createElement("br",null),"\u4e00\u822c\u6765\u8bf4\uff0c\u8fd9\u7c7b\u7535\u53f0\u5e94\u7528\u90fd\u53ef\u4ee5\u901a\u8fc7 RSS \u5730\u5740\u6765\u8ba2\u9605\u7535\u53f0\uff0c\u6211\u4eec\u7684 RSS \u5730\u5740\u662f\uff1a",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://talkcdn.swift.gg/static/rss.xml"},"https://talkcdn.swift.gg/static/rss.xml"),"\uff0c\u4f60\u53ef\u4ee5\u81ea\u884c\u590d\u5236\u8ba2\u9605\u3002",l.a.createElement("br",null),l.a.createElement("br",null),"\u5982\u679c\u4f60\u4e0d\u592a\u6e05\u695a\u5982\u4f55\u8bbe\u7f6e\uff0c\u6216\u8005\u4e0d\u60f3\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e94\u7528\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728\u6211\u4eec\u7684\u7f51\u9875\u4e2d\u64ad\u653e\u3002\u5728\u8282\u76ee\u5217\u8868\u4e2d\u70b9\u51fb\u6807\u9898\uff0c\u6253\u5f00\u7684\u8be6\u60c5\u9875\u91cc\u6709\u64ad\u653e\u6309\u94ae\u3002",l.a.createElement("br",null),l.a.createElement("br",null),"\u6211\u81ea\u5df1\u5f88\u5c11\u4f7f\u7528\u5b89\u5353\uff0c\u5f88\u96be\u5bf9\u8fd9\u4e9b\u5e94\u7528\u8fdb\u884c\u6bd4\u8f83\u3002\u5927\u5bb6\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u5982\u679c\u53d1\u73b0\u597d\u7528\u7684\u5e94\u7528\u8bf7\u544a\u8bc9\u6211\uff0c\u6211\u4f1a\u66f4\u65b0\u5230\u8fd9\u91cc\u3002")))}}]),t}(n.Component)),P=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(p.a,null,l.a.createElement(f.a,{path:"/about",component:S}),l.a.createElement(f.a,{path:"/faq",component:_}),l.a.createElement(f.a,{path:"/android",component:C}),l.a.createElement(f.a,{path:"/:id",component:O}),l.a.createElement(f.a,{path:"/",component:w})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(102);s.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return m});var n=a(4),l=a(5),r=a(7),s=a(6),c=a(8),o=a(1),i=a.n(o),m=(a(85),a(87),a(89),a(90),a(91),a(92),function(t){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,t),Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.source,a='<audio id="'.concat(e.id,'" width="').concat(e.width,'" controls src="').concat(t,'" />');return i.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})}},{key:"componentDidMount",value:function(){var t=e.MediaElementPlayer;t&&(this.player=new t(this.props.id,{defaultSpeed:"1.00",features:["playpause","current","progress","duration","tracks","speed"]}))}},{key:"componentWillUnmount",value:function(){this.player&&(this.player.remove(),this.player=null)}}]),a}(o.Component))}).call(this,a(12))},46:function(e,t,a){e.exports=a(104)},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},71:function(e,t){},73:function(e,t){},83:function(e,t,a){},90:function(e,t,a){(function(e){var t;!function e(a,n,l){function r(c,o){if(!n[c]){if(!a[c]){if(!o&&("function"==typeof t&&t))return t(c,!0);if(s)return s(c,!0);var i=new Error("Cannot find module '"+c+"'");throw i.code="MODULE_NOT_FOUND",i}var m=n[c]={exports:{}};a[c][0].call(m.exports,function(e){var t=a[c][1][e];return r(t||e)},m,m.exports,e,a,n,l)}return n[c].exports}for(var s="function"==typeof t&&t,c=0;c<l.length;c++)r(l[c]);return r}({1:[function(t,a,n){"use strict";e.mejs.i18n.en["mejs.speed-rate"]="Speed Rate",Object.assign(e.mejs.MepDefaults,{speeds:["2.00","1.50","1.25","1.00","0.75"],defaultSpeed:"1.00",speedChar:"x",speedText:null}),Object.assign(e.MediaElementPlayer.prototype,{buildspeed:function(t,a,n,l){var r=this;if(null!==r.media.rendererName&&/(native|html5)/i.test(r.media.rendererName)){for(var s=[],c=e.mejs.Utils.isString(r.options.speedText)?r.options.speedText:e.mejs.i18n.t("mejs.speed-rate"),o=function(e){for(var t=0,a=s.length;t<a;t++)if(s[t].value===e)return s[t].name},i=void 0,m=!1,u=0,d=r.options.speeds.length;u<d;u++){var p=r.options.speeds[u];"string"===typeof p?(s.push({name:""+p+r.options.speedChar,value:p}),p===r.options.defaultSpeed&&(m=!0)):(s.push(p),p.value===r.options.defaultSpeed&&(m=!0))}m||s.push({name:r.options.defaultSpeed+r.options.speedChar,value:r.options.defaultSpeed}),s.sort(function(e,t){return parseFloat(t.value)-parseFloat(e.value)}),r.cleanspeed(t),t.speedButton=document.createElement("div"),t.speedButton.className=r.options.classPrefix+"button "+r.options.classPrefix+"speed-button",t.speedButton.innerHTML='<button type="button" aria-controls="'+r.id+'" title="'+c+'" aria-label="'+c+'" tabindex="0">'+o(r.options.defaultSpeed)+'</button><div class="'+r.options.classPrefix+"speed-selector "+r.options.classPrefix+'offscreen"><ul class="'+r.options.classPrefix+'speed-selector-list"></ul></div>',r.addControlElement(t.speedButton,"speed");for(var f=0,b=s.length;f<b;f++){var E=r.id+"-speed-"+s[f].value;t.speedButton.querySelector("ul").innerHTML+='<li class="'+r.options.classPrefix+'speed-selector-list-item"><input class="'+r.options.classPrefix+'speed-selector-input" type="radio" name="'+r.id+'_speed"disabled="disabled" value="'+s[f].value+'" id="'+E+'"  '+(s[f].value===r.options.defaultSpeed?' checked="checked"':"")+'/><label for="'+E+'" class="'+r.options.classPrefix+"speed-selector-label"+(s[f].value===r.options.defaultSpeed?" "+r.options.classPrefix+"speed-selected":"")+'">'+s[f].name+"</label></li>"}i=r.options.defaultSpeed,t.speedSelector=t.speedButton.querySelector("."+r.options.classPrefix+"speed-selector");for(var h=["mouseenter","focusin"],g=["mouseleave","focusout"],j=t.speedButton.querySelectorAll('input[type="radio"]'),v=t.speedButton.querySelectorAll("."+r.options.classPrefix+"speed-selector-label"),k=0,w=h.length;k<w;k++)t.speedButton.addEventListener(h[k],function(){e.mejs.Utils.removeClass(t.speedSelector,r.options.classPrefix+"offscreen"),t.speedSelector.style.height=t.speedSelector.querySelector("ul").offsetHeight,t.speedSelector.style.top=-1*parseFloat(t.speedSelector.offsetHeight)+"px"});for(var y=0,N=g.length;y<N;y++)t.speedSelector.addEventListener(g[y],function(){e.mejs.Utils.addClass(this,r.options.classPrefix+"offscreen")});for(var x=0,O=j.length;x<O;x++){var S=j[x];S.disabled=!1,S.addEventListener("click",function(){var a=this.value;i=a,l.playbackRate=parseFloat(a),t.speedButton.querySelector("button").innerHTML=o(a);for(var n=t.speedButton.querySelectorAll("."+r.options.classPrefix+"speed-selected"),s=0,c=n.length;s<c;s++)e.mejs.Utils.removeClass(n[s],r.options.classPrefix+"speed-selected");this.checked=!0;for(var m=e.mejs.Utils.siblings(this,function(t){return e.mejs.Utils.hasClass(t,r.options.classPrefix+"speed-selector-label")}),u=0,d=m.length;u<d;u++)e.mejs.Utils.addClass(m[u],r.options.classPrefix+"speed-selected")})}for(var _=0,C=v.length;_<C;_++)v[_].addEventListener("click",function(){var t=e.mejs.Utils.siblings(this,function(e){return"INPUT"===e.tagName})[0],a=e.mejs.Utils.createEvent("click",t);t.dispatchEvent(a)});t.speedSelector.addEventListener("keydown",function(e){e.stopPropagation()}),l.addEventListener("loadedmetadata",function(){i&&(l.playbackRate=parseFloat(i))})}},cleanspeed:function(e){e&&(e.speedButton&&e.speedButton.parentNode.removeChild(e.speedButton),e.speedSelector&&e.speedSelector.parentNode.removeChild(e.speedSelector))}})},{}]},{},[1])}).call(this,a(12))},91:function(e,t,a){"use strict";(function(e){void 0!==e.mejs.i18n.ca&&(e.mejs.i18n.ca["global.mejs.speed-rate"]="Velocitat"),void 0!==e.mejs.i18n.cs&&(e.mejs.i18n.cs["global.mejs.speed-rate"]="Rychlost"),void 0!==e.mejs.i18n.de&&(e.mejs.i18n.de["global.mejs.speed-rate"]="Geschwindigkeitsrate"),void 0!==e.mejs.i18n.es&&(e.mejs.i18n.es["global.mejs.speed-rate"]="Velocidad"),void 0!==e.mejs.i18n.fa&&(e.mejs.i18n.fa["global.mejs.speed-rate"]="\u0646\u0631\u062e \u0633\u0631\u0639\u062a"),void 0!==e.mejs.i18n.fr&&(e.mejs.i18n.fr["global.mejs.speed-rate"]="Vitesse"),void 0!==e.mejs.i18n.hr&&(e.mejs.i18n.hr["global.mejs.speed-rate"]="Brzina reprodukcije"),void 0!==e.mejs.i18n.hu&&(e.mejs.i18n.hu["global.mejs.speed-rate"]="Sebess\xe9g"),void 0!==e.mejs.i18n.it&&(e.mejs.i18n.it["global.mejs.speed-rate"]="Velocit\xe0"),void 0!==e.mejs.i18n.ja&&(e.mejs.i18n.ja["global.mejs.speed-rate"]="\u9ad8\u901f"),void 0!==e.mejs.i18n.ko&&(e.mejs.i18n.ko["global.mejs.speed-rate"]="\uc18d\ub3c4 \uc18d\ub3c4"),void 0!==e.mejs.i18n.nl&&(e.mejs.i18n.nl["global.mejs.speed-rate"]="Snelheidsgraad"),void 0!==e.mejs.i18n.pl&&(e.mejs.i18n.pl["global.mejs.speed-rate"]="Pr\u0119dko\u015b\u0107"),void 0!==e.mejs.i18n.pt&&(e.mejs.i18n.pt["global.mejs.speed-rate"]="Taxa de velocidade"),void 0!==e.mejs.i18n.ro&&(e.mejs.i18n.ro["global.mejs.speed-rate"]="Vitez\u0103 de vitez\u0103"),void 0!==e.mejs.i18n.ru&&(e.mejs.i18n.ru["global.mejs.speed-rate"]="\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f"),void 0!==e.mejs.i18n.sk&&(e.mejs.i18n.sk["global.mejs.speed-rate"]="R\xfdchlos\u0165"),void 0!==e.mejs.i18n.sv&&(e.mejs.i18n.sv["global.mejs.speed-rate"]="Hastighet"),void 0!==e.mejs.i18n.uk&&(e.mejs.i18n.uk["global.mejs.speed-rate"]="\u0428\u0432\u0438\u0434\u043a\u0456\u0441\u0442\u044c \u0432\u0456\u0434\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f"),void 0!==e.mejs.i18n.zh&&(e.mejs.i18n.zh["global.mejs.speed-rate"]="\u901f\u5ea6"),void 0!==e.mejs.i18n["zh-CN"]&&(e.mejs.i18n["zh-CN"]["global.mejs.speed-rate"]="\u901f\u5ea6")}).call(this,a(12))},92:function(e,t,a){},95:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){}},[[46,2,1]]]);
//# sourceMappingURL=main.a259403e.chunk.js.map