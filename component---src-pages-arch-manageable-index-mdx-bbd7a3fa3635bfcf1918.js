(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),r=a.n(o),l=a("Wbzz"),b=a("Xrax"),s=a("k4MR"),c=a("TSYQ"),p=a.n(c),d=a("QH2O"),m=a.n(d),u=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(u.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,r=i.subDirectory,b=o+"/edit/"+i.branch+r+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:b},"Edit this page on GitHub"))):null},j=a("FCXl"),x=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=r()(e,{lower:!0,strict:!0}),o=i===n,b=new RegExp(n+"/?(#.*)?$"),s=a.replace(b,i);return Object(u.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(u.b)(l.Link,{className:f.link,to:""+s},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:f.list},i))))))},t}(i.a.Component),N=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,c=void 0===o?{}:o,p=t.relativePagePath,d=t.titleType,m=c.tabs,g=c.title,x=c.theme,f=c.description,T=c.keywords,y=Object(w.a)().interiorTheme,k=Object(l.useStaticQuery)("2456312558").site.pathPrefix,P=k?n.pathname.replace(k,""):n.pathname,C=m?P.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",I=x||y;return Object(u.b)(s.a,{tabs:m,homepage:!1,theme:I,pageTitle:g,pageDescription:f,pageKeywords:T,titleType:d},Object(u.b)(h,{title:i?Object(u.b)(i,null):g,label:"label",tabs:m,theme:I}),m&&Object(u.b)(v,{slug:P,tabs:m,currentTab:C}),Object(u.b)(N.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:p})),Object(u.b)(j.a,{pageContext:t,location:n,slug:P,tabs:m,currentTab:C}),Object(u.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XWU7:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var n,i=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),b=a("T0C+"),s=(a("qKvR"),{}),c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),p={_frontmatter:s},d=l.a;function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(d,Object(i.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"PageDescription"},Object(r.b)("p",null,"Develop applications that can be managed well in production")),Object(r.b)("p",null,"The ",Object(r.b)(b.a,{name:"env",mdxType:"Globals"})," is designed to support best practices for developing cloud-native applications that can be managed well in production, known as ",Object(r.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/code/build-to-manage"},"built to manage"),". Such components implement endpoints to make them manageable:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Health"),": The component provides a ",Object(r.b)("inlineCode",{parentName:"li"},"/health")," endpoint that answers whether it’s running successfully, ",Object(r.b)("inlineCode",{parentName:"li"},"UP")," or ",Object(r.b)("inlineCode",{parentName:"li"},"DOWN"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Metrics"),": The component provides a ",Object(r.b)("inlineCode",{parentName:"li"},"/metrics")," endpoint that answers measurements of both the system and application."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Readiness"),": Kubernetes verifies whether a pod is ready to start receiving traffic, typically by probing the component’s ",Object(r.b)("inlineCode",{parentName:"li"},"/health")," endpoint."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Liveness"),": Kubernetes verifies whether a pod should be restarted, typically by probing the component’s ",Object(r.b)("inlineCode",{parentName:"li"},"/health")," endpoint.\nKubernetes and the environment’s Ops tools for monitoring use these endpoints to report the status of the application’s components, which can be used to make the applications self-healing.")),Object(r.b)("p",null,"Another important feature is for components to log a history of their significant actions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Logging"),": Log status to ",Object(r.b)("inlineCode",{parentName:"li"},"stdout")," indicating level of severity (such as ",Object(r.b)("inlineCode",{parentName:"li"},"info"),", ",Object(r.b)("inlineCode",{parentName:"li"},"debug"),", ",Object(r.b)("inlineCode",{parentName:"li"},"warn"),", ",Object(r.b)("inlineCode",{parentName:"li"},"error"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"fatal"),").")),Object(r.b)("p",null,"The environment’s Ops tools for logging will gather and display this history."),Object(r.b)("p",null,"An easy way to get started with this architecture is by using one of the ",Object(r.b)("a",{parentName:"p",href:"/dev-guide/starterkits"},Object(r.b)(b.a,{name:"templates",mdxType:"Globals"}))," to create the skeleton for each microservice."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-arch-manageable-index-mdx-bbd7a3fa3635bfcf1918.js.map