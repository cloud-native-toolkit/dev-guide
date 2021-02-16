(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),b=a.n(i),l=a("Wbzz"),o=a("Xrax"),c=a("k4MR"),d=a("TSYQ"),p=a.n(d),s=a("QH2O"),m=a.n(s),g=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(g.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,b=r.subDirectory,o=i+"/edit/"+r.branch+b+"/src/pages"+t;return i?Object(g.b)("div",{className:"bx--row "+O.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},N=a("FCXl"),h=a("dI71"),v=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=b()(e,{lower:!0,strict:!0}),i=r===n,o=new RegExp(n+"/?(#.*)?$"),c=a.replace(o,r);return Object(g.b)("li",{key:e,className:p()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(g.b)(l.Link,{className:v.link,to:""+c},e))}));return Object(g.b)("div",{className:v.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:v.list},r))))))},t}(r.a.Component),w=a("MjG9"),f=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,d=void 0===i?{}:i,p=t.relativePagePath,s=t.titleType,m=d.tabs,O=d.title,h=d.theme,v=d.description,x=d.keywords,C=Object(f.a)().interiorTheme,T=Object(l.useStaticQuery)("2456312558").site.pathPrefix,I=T?n.pathname.replace(T,""):n.pathname,k=m?I.split("/").filter(Boolean).slice(-1)[0]||b()(m[0],{lower:!0}):"",D=h||C;return Object(g.b)(c.a,{tabs:m,homepage:!1,theme:D,pageTitle:O,pageDescription:v,pageKeywords:x,titleType:s},Object(g.b)(u,{title:r?Object(g.b)(r,null):O,label:"label",tabs:m,theme:D}),m&&Object(g.b)(y,{slug:I,tabs:m,currentTab:k}),Object(g.b)(w.a,{padded:!0},a,Object(g.b)(j,{relativePagePath:p})),Object(g.b)(N.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:k}),Object(g.b)(o.a,null))}},"7E3T":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return g}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),b=a("013z"),l=a("T0C+"),o=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},d=c("PageDescription"),p=c("InlineNotification"),s={_frontmatter:o},m=b.a;function g(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(m,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(d,{mdxType:"PageDescription"},Object(i.b)("p",null,"Learning tasks for developers to understand how application development works with Red Hat OpenShift on IBM Cloud")),Object(i.b)(p,{mdxType:"InlineNotification"},Object(i.b)("p",null,"Before you proceed, make sure you have installed ",Object(i.b)("strong",{parentName:"p"},Object(i.b)(l.a,{name:"shortName",mdxType:"Globals"}))," into you development cluster and it ready to use.")),Object(i.b)("p",null,"This set of learning tasks focuses on how to use Red Hat OpenShift Developer\nExperience to develop and deploy a set of basic cloud-native applications. If also covers the use of common tools designed to help the developer monitor, log and debug their applications."),Object(i.b)("p",null,"This self-paced agenda is part of the ",Object(i.b)("a",{parentName:"p",href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/"},"Cloud-Native Learning Journey")),Object(i.b)("h3",null,"Learning Tasks"),Object(i.b)("p",null,"The learning tasks help you understand the Developer Experience with IBM Cloud and working with an IBM Red Hat OpenShift or IBM Kubernetes managed cluster. These are the getting started and initial setup tasks that help you start a project."),Object(i.b)("h2",null,"Self-paced Agenda"),Object(i.b)("p",null,"Please complete these tasks before attending the first session. This will help you get started quickly with the practical exercises."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Task"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:"left"},"Link"),Object(i.b)("th",{parentName:"tr",align:null},"Time"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Prerequisites"),Object(i.b)("td",{parentName:"tr",align:null},"Install the prerequisite tools"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/dev-guide/getting-started/prereqs"},"Setup Prerequisites")),Object(i.b)("td",{parentName:"tr",align:null},"30 mins")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Software Delivery Lifecycle"),Object(i.b)("td",{parentName:"tr",align:null},"Overview of the Tools you will be using with the Sandbox"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://www.youtube.com/watch?v=LcWboN1T7Zk",target:"_newwindow"},"Video")),Object(i.b)("td",{parentName:"tr",align:null},"30 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"Introduction to Cloud-Native Development")),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"What is Cloud-Native"),Object(i.b)("td",{parentName:"tr",align:null},"Introduction to Cloud-Native Development"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-foundation/cloud-native-overview",target:"_newwindow"},"Cloud-Native Development")),Object(i.b)("td",{parentName:"tr",align:null},"15 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Cloud-Native Applications"),Object(i.b)("td",{parentName:"tr",align:null},"Cloud-Native Application Characteristics"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-foundation/cloud-native-overview/appDev",target:"_newwindow"},"Cloud-Native Applications")),Object(i.b)("td",{parentName:"tr",align:null},"15 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"Container Concepts")),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Containers"),Object(i.b)("td",{parentName:"tr",align:null},"Containers Overview"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-foundation/containers",target:"_newwindow"},"Containers")),Object(i.b)("td",{parentName:"tr",align:null},"15 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Hands On Lab"),Object(i.b)("td",{parentName:"tr",align:null},"Deploying Containers"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://www.katacoda.com/courses/docker/deploying-first-container",target:"_newwindow"}," Deploy a Redis Container ")," ",Object(i.b)("br",null)," ",Object(i.b)("a",{href:"https://www.katacoda.com/courses/docker/create-nginx-static-web-server",target:"_newwindow"}," Deploy a Nginx Container ")),Object(i.b)("td",{parentName:"tr",align:null},"15 mins")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"OpenShift Overview")),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"OpenShift"),Object(i.b)("td",{parentName:"tr",align:null},"OpenShift Overview"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-foundation/openshift",target:"_newwindow"},"OpenShift Overview")),Object(i.b)("td",{parentName:"tr",align:null},"15 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Hands On Lab"),Object(i.b)("td",{parentName:"tr",align:null},"Deploying applications on OpenShift"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://learn.openshift.com/introduction/getting-started/",target:"_newwindow"}," OpenShift - Getting Started ")," ",Object(i.b)("br",null)," ",Object(i.b)("a",{href:"https://learn.openshift.com/middleware/courses/middleware-spring-boot/spring-getting-started",target:"_newwindow"}," Deploy a Spring-Boot Application ")),Object(i.b)("td",{parentName:"tr",align:null},"15 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"DevSecOps")),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Continuous Integration"),Object(i.b)("td",{parentName:"tr",align:null},"Overview of Continuous Integration"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-foundation/continuous-integration",target:"_newwindow"},"CI")),Object(i.b)("td",{parentName:"tr",align:null},"15 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Continuous Delivery"),Object(i.b)("td",{parentName:"tr",align:null},"Overview of Continuous Delivery"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-foundation/continuous-delivery",target:"_newwindow"},"CD")),Object(i.b)("td",{parentName:"tr",align:null},"15 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"Learn how to develop and deploy apps with enterprise DevSecOps")),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"DevSecOps"),Object(i.b)("td",{parentName:"tr",align:null},"DevSecOps Overview"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-intermediate/content-overview",target:"_newwindow"},"DevSecOps")),Object(i.b)("td",{parentName:"tr",align:null},"20 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Preparing for the Hands-On Labs"),Object(i.b)("td",{parentName:"tr",align:null},"Setting up the Development Tools"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/getting-started/devenvsetup",target:"_newwindow"},"Dev. Tools Setup")),Object(i.b)("td",{parentName:"tr",align:null},"10 mins")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Deploy your first app"),Object(i.b)("td",{parentName:"tr",align:null},"The very first experience of deploying an app in OpenShift or Kubernetes"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/dev-guide/getting-started-day-1/deploy-app"},"Deploy First App")),Object(i.b)("td",{parentName:"tr",align:null},"30 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Code Analysis"),Object(i.b)("td",{parentName:"tr",align:null},"Code Quality with Sonarqube"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-intermediate/code-analysis",target:"_newwindow"},"Code Analysis")),Object(i.b)("td",{parentName:"tr",align:null},"15 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Image Registry"),Object(i.b)("td",{parentName:"tr",align:null},"Container Registry"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-intermediate/image-registry",target:"_newwindow"},"Image Registry")),Object(i.b)("td",{parentName:"tr",align:null},"10 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Artifact Management"),Object(i.b)("td",{parentName:"tr",align:null},"Artifact Management with Artifactory"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-intermediate/artifact-management",target:"_newwindow"},"Artifact Management")),Object(i.b)("td",{parentName:"tr",align:null},"10 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Monitoring"),Object(i.b)("td",{parentName:"tr",align:null},"Sysdig Monitoring"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-intermediate/monitoring",target:"_newwindow"},"Monitoring")),Object(i.b)("td",{parentName:"tr",align:null},"10 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Logging"),Object(i.b)("td",{parentName:"tr",align:null},"Logging with LogDNA"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-intermediate/log-management",target:"_newwindow"},"Logging")),Object(i.b)("td",{parentName:"tr",align:null},"10 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"Apply all we have learnt so far to develop a set of Microservices and deploy them on OpenShift")),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Inventory Application"),Object(i.b)("td",{parentName:"tr",align:null},"Objective of the exercise"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-intermediate/inventory-app",target:"_newwindow"},"Objective")),Object(i.b)("td",{parentName:"tr",align:null},"15 mins")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Inventory Backend"),Object(i.b)("td",{parentName:"tr",align:null},"Creating the Inventory Service with Java"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-intermediate/inventory-svc",target:"_newwindow"},"Inventory Backend")),Object(i.b)("td",{parentName:"tr",align:null},"30 mins")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Inventory BFF"),Object(i.b)("td",{parentName:"tr",align:null},"Creating the Inventory BFF with GraphQL"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-intermediate/inventory-bff",target:"_newwindow"},"Inventory BFF")),Object(i.b)("td",{parentName:"tr",align:null},"25 mins")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Inventory UI"),Object(i.b)("td",{parentName:"tr",align:null},"Creating the UI microservice"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-intermediate/inventory-ui",target:"_newwindow"},"Inventory UI")),Object(i.b)("td",{parentName:"tr",align:null},"25 mins")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"Optional:")),Object(i.b)("td",{parentName:"tr",align:null},"Complete Inventory App creation using a Kubernetes cluster"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-intermediate/inventory-app",target:"_newwindow"},"Inventory Application")),Object(i.b)("td",{parentName:"tr",align:null},"60 mins")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"Cover Cloud Pak for Applications and how it helps developers run existing apps, migrate apps and develop cloud-native apps")),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Cloud Pak for Applications"),Object(i.b)("td",{parentName:"tr",align:null},"Overview"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-intermediate/cp4apps-overview",target:"_newwindow"},"CP4Apps")),Object(i.b)("td",{parentName:"tr",align:null},"30 mins")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Application Modernization"),Object(i.b)("td",{parentName:"tr",align:null},"Overview"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-intermediate/appmodern",target:"_newwindow"},"AppMod")),Object(i.b)("td",{parentName:"tr",align:null},"30 mins")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"Cover Transformation Advisor hands on session and showcase how it helps developers to modernize their existing applications")),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Modernize Legacy App"),Object(i.b)("td",{parentName:"tr",align:null},"Scan"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-intermediate/appmod-exercise1-part1",target:"_newwindow"},"Scan Existing App")),Object(i.b)("td",{parentName:"tr",align:null},"45 mins")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Modernize Legacy App"),Object(i.b)("td",{parentName:"tr",align:null},"Analyse"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-intermediate/appmod-exercise1-part2",target:"_newwindow"},"Analyze Results")),Object(i.b)("td",{parentName:"tr",align:null},"45 mins")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Modernize Legacy App"),Object(i.b)("td",{parentName:"tr",align:null},"Migrate"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{href:"https://ibm-gsi-ecosystem.github.io/ibm-gsi-cloudnative-journey/developer-intermediate/appmod-exercise1-part3",target:"_newwindow"},"Migrate App]")),Object(i.b)("td",{parentName:"tr",align:null},"45 mins")))),Object(i.b)(p,{kind:"success",mdxType:"InlineNotification"},Object(i.b)("p",null,"You have successfully completed the ",Object(i.b)("strong",{parentName:"p"},"Developer Intermediate")," material"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You have become familiar with IBM Cloud and Red Hat OpenShift"),Object(i.b)("li",{parentName:"ul"},"You have deployed your first application with OpenShift 4.x"),Object(i.b)("li",{parentName:"ul"},"You have understood how monitor, access logs"),Object(i.b)("li",{parentName:"ul"},"Understand where your artifacts are being managed"),Object(i.b)("li",{parentName:"ul"},"Understand how application can be deployed with a CI pipeline"))),Object(i.b)("p",null,"Developers will begin the learning journey with different skill levels and familiarity with this material, but will complete the Cloud-Native enablement with a more detailed understanding of how to build solutions for the IBM Cloud."))}g.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-learning-intermediate-index-mdx-f6a2d95b051fd4ba6842.js.map