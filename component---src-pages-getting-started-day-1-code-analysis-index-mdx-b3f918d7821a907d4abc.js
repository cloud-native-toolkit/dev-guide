(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),l=a.n(r),o=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),u=a.n(s),m=a("QH2O"),p=a.n(m),d=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(d.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,l=i.subDirectory,b=r+"/edit/"+i.branch+l+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:b},"Edit this page on GitHub"))):null},h=a("FCXl"),N=a("dI71"),y=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=l()(e,{lower:!0,strict:!0}),r=i===n,b=new RegExp(n+"/?(#.*)?$"),c=a.replace(b,i);return Object(d.b)("li",{key:e,className:u()((t={},t[y.selectedItem]=r,t),y.listItem)},Object(d.b)(o.Link,{className:y.link,to:""+c},e))}));return Object(d.b)("div",{className:y.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:y.list},i))))))},t}(i.a.Component),x=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,s=void 0===r?{}:r,u=t.relativePagePath,m=t.titleType,p=s.tabs,j=s.title,N=s.theme,y=s.description,w=s.keywords,T=Object(v.a)().interiorTheme,k=Object(o.useStaticQuery)("2456312558").site.pathPrefix,C=k?n.pathname.replace(k,""):n.pathname,P=p?C.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",I=N||T;return Object(d.b)(c.a,{tabs:p,homepage:!1,theme:I,pageTitle:j,pageDescription:y,pageKeywords:w,titleType:m},Object(d.b)(g,{title:i?Object(d.b)(i,null):j,label:"label",tabs:p,theme:I}),p&&Object(d.b)(f,{slug:C,tabs:p,currentTab:P}),Object(d.b)(x.a,{padded:!0},a,Object(d.b)(O,{relativePagePath:u})),Object(d.b)(h.a,{pageContext:t,location:n,slug:C,tabs:p,currentTab:P}),Object(d.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"Yj/f":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),o=a("T0C+"),b=(a("qKvR"),{}),c={_frontmatter:b},s=l.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In IBM Garage Method, one of the Develop practices is to ",Object(r.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/code/practice_automated_testing/"},"automate tests for continuous delivery"),", in part by using ",Object(r.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/code/practice_automated_testing/tool_lint"},"static source code analysis tools"),". ",Object(r.b)("a",{parentName:"p",href:"https://www.sonarqube.org/"},"SonarQube")," automates performing static code analysis and enables it to be added to a continuous integration pipeline. The ",Object(r.b)(o.a,{name:"env",mdxType:"Globals"}),"’s CI pipeline (",Object(r.b)("a",{parentName:"p",href:"/dev-guide/tools/continuous-integration"},"Jenkins"),", ",Object(r.b)("a",{parentName:"p",href:"/dev-guide/tools/continuous-integration-tekton"},"Tekton"),", etc.) includes a SonarQube stage. Simply by building your app using the pipeline, your code gets analyzed, just open the SonarQube UI to browse the findings."),Object(r.b)("h2",null,"What is code analysis"),Object(r.b)("p",null,"Static code analysis (a.k.a. code analysis) is a method of debugging by performing automated evaluation of code\nwithout executing the program. The analysis is structured as a set of coding rules that evaluate the code’s quality.\nAnalysis can be performed on source code or compiled code. The analyzer must support the programming language\nthe code is written in so that it can parse the code like a compiler or simulate its execution."),Object(r.b)("p",null,"Static code analysis differs from dynamic analysis, which observes and evaluates a running program. Dynamic analysis\nrequires test inputs and can meansure user functionality as well as runtime qualities like execution time and resource consumption.\nA code review is static code analysis performed by a human."),Object(r.b)("p",null,"Static code analysis can evaluate several different aspects of code quality, such as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Reliability"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Bug"),": Programming error that breaks functionality"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Security"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Vulnerability"),": A point in a program that can be attacked"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Hotspot"),": Code that uses a security-sensitive API"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Maintainability"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Coding standards"),": Practices that increase the human readability and undestandability of code"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Code smell"),": Code that is confusing and difficult to maintain"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Technical debt"),": Estimated time required to fix all maintainability issues"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Complexity"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Code complexity"),": Code’s control flow and number of paths through the code"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Duplications"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Duplicated code"),": The same code sequence appearing more than once in the same program"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Manageability"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Testability"),": How easily tests can be developed and used to show the program meets requirements"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Portability"),": How easily the program can be reused in different environments"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Reusability"),": The program’s modularity, loose coupling, and limited interdependencies")))),Object(r.b)("p",null,"Static code analysis collects several metrics that measure code quality:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Issues"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Type"),": Bug, Vunerability, Code Smell"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Sevarity"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Blocker"),": Bug with a high probability to impact the behavior of the application in production"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Critical"),": Bug with a low probability to impact the behavior of the application in production, or a security vulnerability"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Major"),": Code smell with high impact to developer productivity"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Minor"),": Code smell with slight impact to developer productivity"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Info"),": Neither a bug nor a code smell, just a finding"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Size"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Classes"),": Number of class definitions (concrete, abstract, nested, interfaces, enums, annotations)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Lines of code"),": Linespace seperated text that is not whitespace or comments"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Comment lines"),": Linespace seperated text containing significant commentary or commented-out code"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Coverage"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Test coverage"),": Code that was executed by a test suite")))),Object(r.b)("p",null,"A ",Object(r.b)("strong",{parentName:"p"},"Quality gate")," defines a policy that assesses pass/fail whether or not the number of issues and their severity is acceptable."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-1-code-analysis-index-mdx-b3f918d7821a907d4abc.js.map