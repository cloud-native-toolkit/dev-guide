(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{"013z":function(e,t,a){"use strict";var o=a("q1tI"),i=a.n(o),r=a("NmYn"),l=a.n(r),n=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),p=a.n(u),m=a("qKvR"),h=function(e){var t,a=e.title,o=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===o,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),w=function(e){var t=e.relativePagePath,a=e.repository,o=Object(n.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||o,r=i.baseUrl,l=i.subDirectory,c=r+"/edit/"+i.branch+l+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},v=a("FCXl"),O=a("9Hrx"),j=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=l()(e,{lower:!0,strict:!0}),r=i===o,c=new RegExp(o+"/?(#.*)?$"),s=a.replace(c,i);return Object(m.b)("li",{key:e,className:d()((t={},t[j.selectedItem]=r,t),j.listItem)},Object(m.b)(n.Link,{className:j.link,to:""+s},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:j.list},i))))))},t}(i.a.Component),y=a("MjG9"),x=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,r=t.frontmatter,b=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,p=b.tabs,g=b.title,O=b.theme,j=b.description,T=b.keywords,N=Object(x.a)().interiorTheme,k=Object(n.useStaticQuery)("2456312558").site.pathPrefix,C=k?o.pathname.replace(k,""):o.pathname,P=p?C.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",B=O||N;return Object(m.b)(s.a,{tabs:p,homepage:!1,theme:B,pageTitle:g,pageDescription:j,pageKeywords:T,titleType:u},Object(m.b)(h,{title:i?Object(m.b)(i,null):g,label:"label",tabs:p,theme:B}),p&&Object(m.b)(f,{slug:C,tabs:p,currentTab:P}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(w,{relativePagePath:d})),Object(m.b)(v.a,{pageContext:t,location:o,slug:C,tabs:p,currentTab:P}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},gyRF:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return n})),a.d(t,"default",(function(){return b}));var o=a("k1TG"),i=a("8o2o"),r=(a("q1tI"),a("7ljp")),l=a("013z"),n=(a("qKvR"),{}),c={_frontmatter:n},s=l.a;function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(s,Object(o.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Collection of videos that give an overview of the Toolkit and various use cases."),Object(r.b)("h2",null,"Cloud-Native development with the Garage Method"),Object(r.b)("p",null,"Walks through an example project delivered using the IBM Garage Method and accelerated with the Cloud-Native Toolkit."),Object(r.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.25%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(r.b)("iframe",Object(o.a)({parentName:"div"},{src:"https://www.youtube.com/embed/u3PTRqkd94k",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))," "),Object(r.b)("h2",null,"Cloud-Native Toolkit: Introduction"),Object(r.b)("p",null,"Provides an introduction to the IBM Cloud-Native Toolkit."),Object(r.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.25%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(r.b)("iframe",Object(o.a)({parentName:"div"},{src:"https://www.youtube.com/embed/4-HKLoMN9jM",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))," "),Object(r.b)("h2",null,"Cloud-Native Toolkit: Installation"),Object(r.b)("p",null,"Walkthrough of the Cloud Native Toolkit installation on RedHat OpenShift."),Object(r.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.25%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(r.b)("iframe",Object(o.a)({parentName:"div"},{src:"https://www.youtube.com/embed/97s_uredoSw",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))," "),Object(r.b)("h2",null,"Cloud-Native Toolkit: Deploying an App"),Object(r.b)("p",null,"Shows how to quickly register a CI pipeline in an OpenShift cluster using the IBM Cloud-Native Toolkit."),Object(r.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.25%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(r.b)("iframe",Object(o.a)({parentName:"div"},{src:"https://www.youtube.com/embed/czYQfvPTa7Y",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))," "),Object(r.b)("h2",null,"Cloud-Native Toolkit: Continuous Delivery with GitOps using Argo CD"),Object(r.b)("p",null,"Shows how to use GitOps and Argo CD to deploy an application to test and staging namespaces in an OpenShift cluster using the IBM Cloud-Native Toolkit."),Object(r.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.25%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(r.b)("iframe",Object(o.a)({parentName:"div"},{src:"https://www.youtube.com/embed/plK2C-efwW8",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))," "))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-toolkit-resources-videos-index-mdx-ef7b9440cd41cca7210d.js.map