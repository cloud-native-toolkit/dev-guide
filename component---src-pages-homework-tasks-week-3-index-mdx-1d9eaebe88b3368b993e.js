(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),l=a.n(b),o=a("Wbzz"),c=a("Xrax"),i=a("k4MR"),s=a("TSYQ"),p=a.n(s),d=a("QH2O"),u=a.n(d),m=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(m.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=b.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,l=r.subDirectory,c=b+"/edit/"+r.branch+l+"/src/pages"+t;return b?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),N=a("9Hrx"),f=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0,strict:!0}),b=r===n,c=new RegExp(n+"/?(#.*)?$"),i=a.replace(c,r);return Object(m.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(m.b)(o.Link,{className:f.link,to:""+i},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},r))))))},t}(r.a.Component),v=a("MjG9"),k=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,p=t.relativePagePath,d=t.titleType,u=s.tabs,j=s.title,N=s.theme,f=s.description,x=s.keywords,T=Object(k.a)().interiorTheme,y=Object(o.useStaticQuery)("2456312558").site.pathPrefix,P=y?n.pathname.replace(y,""):n.pathname,C=u?P.split("/").filter(Boolean).slice(-1)[0]||l()(u[0],{lower:!0}):"",I=N||T;return Object(m.b)(i.a,{tabs:u,homepage:!1,theme:I,pageTitle:j,pageDescription:f,pageKeywords:x,titleType:d},Object(m.b)(O,{title:r?Object(m.b)(r,null):j,label:"label",tabs:u,theme:I}),u&&Object(m.b)(w,{slug:P,tabs:u,currentTab:C}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(h,{relativePagePath:p})),Object(m.b)(g.a,{pageContext:t,location:n,slug:P,tabs:u,currentTab:C}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},tAzP:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a("k1TG"),r=a("8o2o"),b=(a("q1tI"),a("7ljp")),l=a("013z"),o=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",t)}},i=c("PageDescription"),s=c("InlineNotification"),p={_frontmatter:o},d=l.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(d,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)(i,{mdxType:"PageDescription"},Object(b.b)("p",null,"Homework for students in the MOOC, Session 2")),Object(b.b)("p",null,"This is the homework tasks for the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/homework/teams"}),"Garage OpenShift and Cloud Pak MOOC"),". Week 3 focuses on developing an application using the Cloud Pak for Applications (CP4Apps)."),Object(b.b)("h2",null,"Session 2 — New Apps - IBM Cloud Pak for Applications"),Object(b.b)(s,{mdxType:"InlineNotification"},Object(b.b)("p",null,"Before you proceed, make sure you have signed up for the MOOC development environment. It is a paid IBM Cloud account with the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/overview"}),"Developer Tools environment")," already installed and ready for you to use, including both a Kubernetes cluster and an OpenShift cluster. (The environment is locked down to prevent creating any new services.) Also, before proceeding:"),Object(b.b)("p",null,"Be sure you have already done the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/homework/teams"}),"Welcome to your MOOC team")," tasks")),Object(b.b)("p",null,"Week 3 of the MOOC focuses on how to use the Cloud Pak for Applications (CP4Apps) to create new cloud-native applications."),Object(b.b)("p",null,"This homework assumes that you have:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Reviewed the Playback from the Week 3 Monday session"),Object(b.b)("li",{parentName:"ul"},"Seen a demo of each of the homework tasks below"),Object(b.b)("li",{parentName:"ul"},"Seen demos and discussion about what is expected from the homework")),Object(b.b)(s,{mdxType:"InlineNotification"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note"),": Support is provided in the ",Object(b.b)("inlineCode",{parentName:"p"},"#openshift-cldpak-mooc")," Slack channel (in the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://ibm-garage.slack.com"}),"IBM Garage for Cloud Slack Org")," team). This channel will also be used to share any common issues found.")),Object(b.b)("h3",null,"Homework tasks"),Object(b.b)("p",null,"The homework for Week 3 helps you understand the capabilities offered by ICP4Apps to create new applications. "),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Task"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Link"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Time"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Explore CP4Apps"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Learn how to navigate the CP4Apps dashboards"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/dev-guide/practical/cp4apps#cp4apps-dashboard"}),"CP4Apps Dashboard")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"15 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dev Tools"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Setup Dev Tools"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/dev-guide/practical/cp4apps#cp4apps-dev-tools"}),"Setup Tools")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"15 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"New Apps - CLI"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Learn how to use Appsody CLI"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/dev-guide/practical/cp4apps#create-a-new-app-using-the-appsody-cli"}),"Appsody")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"15 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"New Apps - IDE"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Learn how to use CodeWind"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/dev-guide/practical/cp4apps#create-a-new-app-using-codewind"}),"Codewind")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"15 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Build Apps"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Learn how to use Tekton Pipelines"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/dev-guide/practical/cp4apps#build-an-app-with-a-tekton-pipeline"}),"Tekton Pipelines")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"15 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Serverless"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Learn how to scale to zero"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/dev-guide/practical/cp4apps#scale-to-zero-serverless"}),"Serverless")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Bonus Credit")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Learn how to work with a frontend and backend"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/dev-guide/practical/cp4apps2"}),"Microservices")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 mins")))),Object(b.b)("p",null,"Once you have completed these tasks, you will have completed the homework for Day 3 New Apps with IBM Cloud Pak for Applications. "),Object(b.b)("h3",null,"Homework Review Week 3"),Object(b.b)("p",null,"The homework review will take the form of a show-and-tell and a retrospective. The show-and-tell includes a description of tasks that didn’t go so well. It will close with a retrospective for the attendees who have completed the homework tasks. We are looking for feedback from three perspectives:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"What went well?")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"What needs improvement?")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Next steps?"))),Object(b.b)("p",null,"Please use the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://reetro-io.herokuapp.com/board/5dd8b70091a43c001725ade8/5dd8b77791a43c001725adf2"}),"online retrospective")," board during the live Homework session to evaluate the session. As students enter feedback, we’ll all be able to see it on this shared screen."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-homework-tasks-week-3-index-mdx-1d9eaebe88b3368b993e.js.map