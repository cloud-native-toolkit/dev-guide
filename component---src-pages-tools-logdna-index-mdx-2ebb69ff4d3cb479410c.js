(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),l=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),p=a("TSYQ"),b=a.n(p),d=a("QH2O"),g=a.n(d),m=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(m.b)("div",{className:b()(g.a.pageHeader,(t={},t[g.a.withTabs]=i.length,t[g.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:g.a.text},a)))))},h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,s=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},j=a("FCXl"),y=a("dI71"),f=a("I8xM"),A=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=r()(e,{lower:!0,strict:!0}),i=o===n,s=new RegExp(n+"/?(#.*)?$"),c=a.replace(s,o);return Object(m.b)("li",{key:e,className:b()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(m.b)(l.Link,{className:f.link,to:""+c},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},o))))))},t}(o.a.Component),N=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,p=void 0===i?{}:i,b=t.relativePagePath,d=t.titleType,g=p.tabs,h=p.title,y=p.theme,f=p.description,v=p.keywords,x=Object(w.a)().interiorTheme,T=Object(l.useStaticQuery)("2456312558").site.pathPrefix,k=T?n.pathname.replace(T,""):n.pathname,C=g?k.split("/").filter(Boolean).slice(-1)[0]||r()(g[0],{lower:!0}):"",L=y||x;return Object(m.b)(c.a,{tabs:g,homepage:!1,theme:L,pageTitle:h,pageDescription:f,pageKeywords:v,titleType:d},Object(m.b)(u,{title:o?Object(m.b)(o,null):h,label:"label",tabs:g,theme:L}),g&&Object(m.b)(A,{slug:k,tabs:g,currentTab:C}),Object(m.b)(N.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:b})),Object(m.b)(j.a,{pageContext:t,location:n,slug:k,tabs:g,currentTab:C}),Object(m.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"pC+I":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),l=a("T0C+"),s=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},p=c("PageDescription"),b=c("AnchorLinks"),d=c("AnchorLink"),g={_frontmatter:s},m=r.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(m,Object(n.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(p,{mdxType:"PageDescription"},Object(i.b)("p",null,"Use LogDNA to manage your running application’s logs")),Object(i.b)("p",null,"In IBM Garage Method, one of the Operate practices is to ",Object(i.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/manage/practice_automated_monitoring/"},"automate application monitoring"),", including logging. Imagine your application isn’t working right in production even though the environment is fine. What information would you want in your logs to help you figure out what’s wrong with your application? Build logging messages for that information into your application."),Object(i.b)("p",null,"Given that your application is logging, as are lots of other applications and services in your cloud environment, these logs need to be managed and made accessible. LogDNA adds log management capabilities to a Kubernetes cluster and its deployments. The ",Object(i.b)(l.a,{name:"env",mdxType:"Globals"})," includes an IBM Log Analysis with LogDNA service instance configured with a LogDNA agent installed in the environment’s cluster. Simply by deploying your application into the ",Object(i.b)(l.a,{name:"env",mdxType:"Globals"}),", LogDNA collects the logs, just open the LogDNA web UI from the IBM Cloud dashboard to browse your application’s logs."),Object(i.b)("h2",null,"LogDNA log management"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/Log-Analysis-with-LogDNA"},"IBM Log Analysis with LogDNA")," explains how to configure and use an instance of the LogDNA service, but the ",Object(i.b)(l.a,{name:"env",mdxType:"Globals"})," has already done this for you. You can skip these steps about provisioning an instance, installing an agent, and user access."),Object(i.b)("h2",null,"Give it a try"),Object(i.b)("p",null,"Before you start to understanding how to look at your application logs, make sure you have ",Object(i.b)("a",{parentName:"p",href:"/dev-guide/getting-started-day-1/deploy-app"},"deployed an app")," into your development cluster. Each of the template apps has a logging framework included, this ",Object(i.b)("em",{parentName:"p"},"Git it a Try")," will use ",Object(i.b)("a",{parentName:"p",href:"/dev-guide/starterkits/gitrepos#git-repo-links"},"template-node-typescript")," as an example."),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"LogDNA")," service is already created, bound and configured to listen to logs from your development cluster."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the **LogDNA instance that is named the same as your development cluster")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click on ",Object(i.b)("strong",{parentName:"p"},"All Apps")," and enter the name of your app or narrow the app selection using the suffix that you used to create it\n",Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"605px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.68055555555555%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABA0lEQVQoz6WN0VKDMBRE+f/fUl86VahASbBFCy0wJSSQpA6UwhrS6oMv6piZM7t3s3Ov4y7v4S7vQIIFIn8Bz8yrxwfLhjxhS91fkcQeEqMO26VgaYYmz9EccvD94Yu2KCCL0vCp37nmc49nGfYJhTPUCtA9cDrf6K/zjJrpfkZ3eC85FGdw+q6H1hoDkxhKgbE7YxxHjJfLn5imCUpyOForVNUR7FihFQ3+81RrFkp9gmglpGwheI1GcKPMeiFq1KwCMwdnnZlzXjP7ZzumWxa5zexCGlNEhGC7oaCRjxcaIiYByPrZahh4CH0PUbiyfh0Y9V28JjHKPEVx2OHt5mXD8AHYeQ4VEbpCVgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"AllAps",title:"AllAps",src:"/dev-guide/static/0c42420d71c996f75d96205ed7b54c39/29a2c/allapps.png",srcSet:["/dev-guide/static/0c42420d71c996f75d96205ed7b54c39/7fc1e/allapps.png 288w","/dev-guide/static/0c42420d71c996f75d96205ed7b54c39/a5df1/allapps.png 576w","/dev-guide/static/0c42420d71c996f75d96205ed7b54c39/29a2c/allapps.png 605w"],sizes:"(max-width: 605px) 100vw, 605px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Select the app you want to monitor")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You will now see just the logs for your app"))),Object(i.b)("h3",null,"Add some logging to your app"),Object(i.b)("p",null,"All the common logging frameworks support the ability publish different types of log statement. The developer can use the log level to help trap specific information or error conditions. The common log levels are  ",Object(i.b)("inlineCode",{parentName:"p"},"info"),", ",Object(i.b)("inlineCode",{parentName:"p"},"debug"),", ",Object(i.b)("inlineCode",{parentName:"p"},"warn")," and ",Object(i.b)("inlineCode",{parentName:"p"},"fatal"),". It is best practice to add log statements to help operations teams and monitoring services to help identify possible issues quickly."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add the following ",Object(i.b)("inlineCode",{parentName:"p"},"debug")," statement and ",Object(i.b)("inlineCode",{parentName:"p"},"error")," condition to the ",Object(i.b)("inlineCode",{parentName:"p"},"greetings")," implementation in your app."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"\n  async greeting(name: string = 'World'): Promise<string> {\n    this.logger.info(`Generating greeting for ${name}`);\n\n    this.logger.debug('This is a debug message from inside my API');\n\n    // Only Trigger error if the name passed in matches ERROR\n    if (name === 'ERROR' ) {\n        try {\n          throw new Error('\"Throwing an error');\n        } catch (e) {\n          this.logger.error(e);\n          throw new Error('\"Catching and Throwing errors');\n        } finally {\n          throw new Error('Last chance to trap this Error');\n        }\n    }\n\n    return `Hello, ${name}!`;\n  }\n\n")))),Object(i.b)("p",null,"Now that we have introduced some debug messages, let’s adjust the log level for the application."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To add ",Object(i.b)("inlineCode",{parentName:"p"},"LOG_LEVEL")," settings to you app, edit the ",Object(i.b)("inlineCode",{parentName:"p"},"deployment.yaml")," in your ",Object(i.b)("inlineCode",{parentName:"p"},"chart")," folder and add the following ",Object(i.b)("inlineCode",{parentName:"p"},"debug")," value to the ",Object(i.b)("inlineCode",{parentName:"p"},"LOG_LEVEL")," env property"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"-env:\n    name: LOG_LEVEL\n    value: debug\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Test the app changes locally first before deploying"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm run start\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Push your changes back to your server repo and wait for your CI pipeline to complete build and deploy")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open up the ",Object(i.b)("strong",{parentName:"p"},"LogDNA")," console and narrow the logs to just your app")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the app into a browser: Run ",Object(i.b)("inlineCode",{parentName:"p"},"igc ingress -n {your namespace}")," and select your running app")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Switch to ",Object(i.b)("inlineCode",{parentName:"p"},"HTTPS")," and test the ",Object(i.b)("inlineCode",{parentName:"p"},"/hello/{name}")," API and pass in some data. You have introduced a ",Object(i.b)("inlineCode",{parentName:"p"},"DEBUG")," message and an ",Object(i.b)("inlineCode",{parentName:"p"},"ERROR")," into this API logic. Click the ",Object(i.b)("strong",{parentName:"p"},"Execute")," button a few times to simulate some API calls.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Try the API with your own name, and you will see just the ",Object(i.b)("inlineCode",{parentName:"p"},"DEBUG")," message appearing")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Try the API with ",Object(i.b)("inlineCode",{parentName:"p"},"ERROR")," as the name , and this will trigger the error code we put in the API service")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You will see the errors appearing in ",Object(i.b)("strong",{parentName:"p"},"LogDNA")," triggered by your application"))),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.833333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABUklEQVQoz42S3VLDIBCF8xpJgJTfhJCGJP3RmTpeeeP7P9BxF622M3X04gMW2AMcthrSiDxFbL3GJRmsYw83Lni9XHA8bNjWFWneY5oS1iVTvGBPY45znnHYVoR5hs0ZylpULgTEMSIFi9wbDM7C+Yj30xnWGoJirdF1HXa7XYHHJf6ak9QLpdA0DSrRtmWREw1xTVK0gZFSQgiBlvZxwl9UnNCRgDYGhriezmIsdAuLPqK5woJKSVh6kqfb8ROvgnxQ2za/ijwUZkEeeBKa44ApDRh6j+AdHHtJ81qzBZ83/pdgTY0SEtGRCD+bBHSnyHDykG7JsM/tt0/1nWd1TXF94+E+Ory9bIhDwPH5iLQeEOcFISZ4qgAfeqQ8Fazz9HHuB+MwUMn53tGaLT5XKUWcnzbyTyOfZvQUh3EoP26dK31aUkFxeQh5h6Q/KJUgReEDcNb6JUYz8PwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Error",title:"Error",src:"/dev-guide/static/bba5aa64c3be95d578cf0aea68bf3f49/3cbba/errorcondition.png",srcSet:["/dev-guide/static/bba5aa64c3be95d578cf0aea68bf3f49/7fc1e/errorcondition.png 288w","/dev-guide/static/bba5aa64c3be95d578cf0aea68bf3f49/a5df1/errorcondition.png 576w","/dev-guide/static/bba5aa64c3be95d578cf0aea68bf3f49/3cbba/errorcondition.png 1152w","/dev-guide/static/bba5aa64c3be95d578cf0aea68bf3f49/a9016/errorcondition.png 1430w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Try scaling you pods for the app and calling the API again and come and watch the logs and see where the API call is being routed and which pod is triggering the error")),Object(i.b)("p",null,"There is lots more information around how to use ",Object(i.b)("strong",{parentName:"p"},"LogDNA"),", these links will help:"),Object(i.b)(b,{mdxType:"AnchorLinks"},Object(i.b)(d,{to:"https://docs.logdna.com/docs/filters",mdxType:"AnchorLink"},"More information on using LogDNA log filtering"),Object(i.b)(d,{to:"https://docs.logdna.com/docs/time",mdxType:"AnchorLink"},"Understand how to jump to a specific timeframe")),Object(i.b)("h2",null,"Conclusion"),Object(i.b)("p",null,"It’s important to be able to manage the logs of your deployed applications to help identify issues and quickly understand how to resolve them. The Developer Tools configures LogDNA directly to you development cluster to make it easy to get the log you data you need as a developer. Just deploy your application into your ",Object(i.b)(l.a,{name:"env",mdxType:"Globals"})," and its logs start appearing automatically, open the LogDNA web UI and browse your logs."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tools-logdna-index-mdx-2ebb69ff4d3cb479410c.js.map