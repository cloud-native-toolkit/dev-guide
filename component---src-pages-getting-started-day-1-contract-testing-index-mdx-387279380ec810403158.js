(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},FoBY:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("XbGe"),c=a("T0C+"),s=(a("qKvR"),{}),b={_frontmatter:s},l=o.a;function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(l,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In IBM Garage Method, one of the Develop practices is ",Object(i.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/code/contract-driven-testing"},"contract-driven testing"),". ",Object(i.b)("a",{parentName:"p",href:"https://docs.pact.io/"},"Pact")," automates contract testing and enables it to be added to a continuous integration pipeline. The ",Object(i.b)(c.a,{name:"env",mdxType:"Globals"}),"’s CI pipeline (",Object(i.b)("a",{parentName:"p",href:"/dev-guide/tools/continuous-integration"},"Jenkins"),", ",Object(i.b)("a",{parentName:"p",href:"/dev-guide/tools/continuous-integration-tekton"},"Tekton"),", etc.) includes a Pact stage. Simply by building your app using the CI pipeline, your code’s contract gets tested, just open the Pact UI to browse the results."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Contract testing")," is a testing discipline that ensures two applications (a consumer and\na provider) have a shared understanding of the interactions or the ",Object(i.b)("em",{parentName:"p"},"contract")," between them."))}d.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),c=a("Wbzz"),s=a("Xrax"),b=a("k4MR"),l=a("TSYQ"),d=a.n(l),u=a("QH2O"),p=a.n(u),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},x=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,s=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+x.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:x.link,href:s},"Edit this page on GitHub"))):null},j=a("dI71"),O=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0,strict:!0}),i=r===n,s=new RegExp(n+"/?(#.*)?$"),b=a.replace(s,r);return Object(m.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=i,t),O.listItem)},Object(m.b)(c.Link,{className:O.link,to:""+b},e))}));return Object(m.b)("div",{className:O.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:O.list},r))))))},t}(r.a.Component),T=a("MjG9"),f=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,l=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,p=l.tabs,x=l.title,j=l.theme,O=l.description,w=l.keywords,k=Object(f.a)().interiorTheme,N=Object(c.useStaticQuery)("223705900").site.pathPrefix,P=N?n.pathname.replace(N,""):n.pathname,y=p?P.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",I=j||k;return Object(m.b)(b.a,{tabs:p,homepage:!1,theme:I,pageTitle:x,pageDescription:O,pageKeywords:w,titleType:u},Object(m.b)(g,{title:r?Object(m.b)(r,null):x,label:"label",tabs:p,theme:I}),p&&Object(m.b)(v,{slug:P,tabs:p,currentTab:y}),Object(m.b)(T.a,{padded:!0},a,Object(m.b)(h,{relativePagePath:d})),Object(m.b)(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-1-contract-testing-index-mdx-387279380ec810403158.js.map