(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),b=a("NmYn"),o=a.n(b),i=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),r=a("TSYQ"),p=a.n(r),d=a("QH2O"),m=a.n(d),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,l=e.tabs,b=void 0===l?[]:l;return Object(u.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=b.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,b=l.baseUrl,o=l.subDirectory,c=b+"/edit/"+l.branch+o+"/src/pages"+t;return b?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("9Hrx"),N=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var t,l=o()(e,{lower:!0,strict:!0}),b=l===n,c=new RegExp(n+"/?(#.*)?$"),s=a.replace(c,l);return Object(u.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=b,t),N.listItem)},Object(u.b)(i.Link,{className:N.link,to:""+s},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:N.list},l))))))},t}(l.a.Component),T=a("MjG9"),x=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,l=e.Title,b=t.frontmatter,r=void 0===b?{}:b,p=t.relativePagePath,d=t.titleType,m=r.tabs,h=r.title,f=r.theme,N=r.description,y=r.keywords,w=Object(x.a)().interiorTheme,A=Object(i.useStaticQuery)("2456312558").site.pathPrefix,k=A?n.pathname.replace(A,""):n.pathname,S=m?k.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",C=f||w;return Object(u.b)(s.a,{tabs:m,homepage:!1,theme:C,pageTitle:h,pageDescription:N,pageKeywords:y,titleType:d},Object(u.b)(g,{title:l?Object(u.b)(l,null):h,label:"label",tabs:m,theme:C}),m&&Object(u.b)(v,{slug:k,tabs:m,currentTab:S}),Object(u.b)(T.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:p})),Object(u.b)(j.a,{pageContext:t,location:n,slug:k,tabs:m,currentTab:S}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},xK77:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return h}));var n=a("k1TG"),l=a("8o2o"),b=(a("q1tI"),a("7ljp")),o=a("013z"),i=a("T0C+"),c=(a("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",t)}},r=s("PageDescription"),p=s("Tabs"),d=s("Tab"),m=s("InlineNotification"),u={_frontmatter:c},g=o.a;function h(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(b.b)(g,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)(r,{mdxType:"PageDescription"},Object(b.b)("p",null,"Explore the resources at your fingertips provided by the ",Object(b.b)(i.a,{name:"shortName",mdxType:"Globals"})," Developer Dashboard")),Object(b.b)("p",null,"The Developer Dashboard is one of the tools running in your ",Object(b.b)(i.a,{name:"devenv",mdxType:"Globals"}),". It is designed to help you navigate\nto the installed tools and provide a simple way to perform common developer tasks, such as:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Dashboard"),": Navigate to the tools installed in the cluster"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Activation"),": Links to education to help you learn cloud-native development and deployment using IBM Cloud Kubernetes Service and Red Hat OpenShift on IBM Cloud"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)(i.a,{name:"templates",mdxType:"Globals"})),": Links to templates that will help accelerate your project")),Object(b.b)("p",null,"With the release of ",Object(b.b)("strong",{parentName:"p"},Object(b.b)(i.a,{name:"ocp",mdxType:"Globals"})," 4.x"),", it is now even easier for developers to integrate the SDLC tools into the OpenShift console. This Developer Dashboard is mainly focused on providing a simple navigation experience when the ",Object(b.b)(i.a,{name:"shortName",mdxType:"Globals"})," is installed into ",Object(b.b)(i.a,{name:"iks",mdxType:"Globals"}),"."),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.84722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAB0UlEQVQ4y5VTSXLbMBDkB/MBH0SpVCVd84G8T5fkpOTigxPb2ihS3Imd7GCGJiiVc8lUTRFoAD09C6PNZoPtdovFYoE4jkH79XrNGH3Jl8vlg69WH+vVir9xvMCXp294Wn5FdLlckKYprtcrsiyDtRbOORhjeH3vzrtSGp2QMNZBCMG4lBJZ0UAZh6hpGgaJgFwpxRdoTcQPhM5CG4tWWAjl11p7fHznPgJGXdcxAfn9mgjIhmHAv+0Rp2vkUXq7IUkSJiEjVWVZcDqkgIwU5HnOGJ2TaW1wKyp+N2EUPBL7Xyy173uOaTuB9pyNFzxGRrXd7/cBI9QVCczz91GnJ+L3RJj9eeVUyQg0PnKapGjaltOmS8KrOJxPfE6p9v0AowSa9OQbJDiDQHjMjrBmrpfzB2XTzmmQmk5BvCYPpZP+za0VdzUcRsJalGFEiKR3XqUZoLTyajUHcFJBJTmknwBSQq6prnXNNaTJmLKJTu8HP1M2dFXpDi9vP31jKv9obIrUFr8PZ1RVGboupMabx47HAzdsbkpdhQ2VqJU53rMfIZW+d56wRz1n57OwIyZnLCg8+z+lKAqWfT9zU01GaGAPGD5jk0W73S4AU31msv/3vzjY1cF7fbX7AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(b.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Developer Dashboard",title:"Developer Dashboard",src:"/dev-guide/static/e1119d58eaecb610979b4be7eb179cef/3cbba/developer-dashboard.png",srcSet:["/dev-guide/static/e1119d58eaecb610979b4be7eb179cef/7fc1e/developer-dashboard.png 288w","/dev-guide/static/e1119d58eaecb610979b4be7eb179cef/a5df1/developer-dashboard.png 576w","/dev-guide/static/e1119d58eaecb610979b4be7eb179cef/3cbba/developer-dashboard.png 1152w","/dev-guide/static/e1119d58eaecb610979b4be7eb179cef/5cbab/developer-dashboard.png 1449w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(b.b)("p",null,"Here are some recent improvements:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"More tools can be added to the dashboard using a simple ",Object(b.b)("inlineCode",{parentName:"li"},"igc tool-config")," command"),Object(b.b)("li",{parentName:"ul"},"Prefix (shown above as “IBM”) and Title (shown above as “Cloud Native Toolkit”) can be customized to you own names"),Object(b.b)("li",{parentName:"ul"},"The IBM Cloud link can be overidden to support links to other cloud vendors when OpenShift is running on Azure, AWS, Google Cloud, or VMWare"),Object(b.b)("li",{parentName:"ul"},"The tools view is split into more columns to enable more reuse of the screen"),Object(b.b)("li",{parentName:"ul"},"The Cluster information is now available when you click on “Developer Dashboard” title"),Object(b.b)("li",{parentName:"ul"},"The ",Object(b.b)(i.a,{name:"igccli",mdxType:"Globals"})," now installs an alias into the ",Object(b.b)("inlineCode",{parentName:"li"},"oc")," and ",Object(b.b)("inlineCode",{parentName:"li"},"kubectl")," so it is now possible to open the dashboard quickly using ",Object(b.b)("inlineCode",{parentName:"li"},"oc dashboard")," and ",Object(b.b)("inlineCode",{parentName:"li"},"kubectl dashboard"))),Object(b.b)("h3",null,"Tools configured with OpenShift console"),Object(b.b)("p",null,"When the administrator configures your ",Object(b.b)(i.a,{name:"devenv",mdxType:"Globals"}),", they can customize a set of short cut links to common\ntools you often use as a developer."),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.02777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAB80lEQVQoz31Sy3KbQBDkM/JSkIIkC4EdpZI/sGVLscrJIaf8cM6+5xZbiOfyfqP27AIJ0iFb1TXUDDTdPSuNRyN8WWqYzS8gyzLmsxkmkwmm0ykURRHgz7ynaTp2ux0eHr7h+4+fUJc6VFWFruv4uPoEjSAttCssL1d4MxpjffcVhmlibxhwHBuMMYIvahAECMMWZVmiququFyKKEwSHZziPvyBxsrmq49Xb97i53cIIHNiuC8uy4Pt+R8qQpglKIgnjGGVRoK5rDE8d+0h+P0JS9StB+PqdjOvbDdwgQRjFSJIETdPgeDx2tRGEHvunsp8feSVSDuly9blVSITcsud5Qh2vBSnJsgx5niMvcvhBRHFY1M/JckWqU6RZKub8ucgzSLPFEspcFQrXm3uwgJFlC5bTwjD3oj5TRrbtIGAhMvqQExzMg+iblokn4wk25S6NlTk+zBad5S0SCpi/zC1zhVyJWEJdIUtzWkREqlPRa5dD86qtHNJketERjkWGf4w94iRFTUMK6CT4qi7JNiNrhcgPp2NxBoQybu62sFwGP84RZRXirGxD74jLqoDLHKT8h7TlfjbECeGaCD0/RkzWxHY7op6waY7iBkRR9JdwOD9VSBf7er0R2+Wb7c9QYX+FevyfsLuHnOzcxvlHw3PefwF2sQ5Z+jZskQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(b.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"OpenShift Links",title:"OpenShift Links",src:"/dev-guide/static/dcba3d292f18588ea311afdaed636eeb/3cbba/openshift-console-tools.png",srcSet:["/dev-guide/static/dcba3d292f18588ea311afdaed636eeb/7fc1e/openshift-console-tools.png 288w","/dev-guide/static/dcba3d292f18588ea311afdaed636eeb/a5df1/openshift-console-tools.png 576w","/dev-guide/static/dcba3d292f18588ea311afdaed636eeb/3cbba/openshift-console-tools.png 1152w","/dev-guide/static/dcba3d292f18588ea311afdaed636eeb/6e2ae/openshift-console-tools.png 1529w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(b.b)("p",null,"You can see how these tools are configured by reading the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/admin/config-dashboard"}),"tools configuration guide")),Object(b.b)("h3",null,"Opening the Dashboard"),Object(b.b)("p",null,"You can open the Dashboard from a terminal."),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Open a terminal")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Make sure your terminal is logged into your cluster"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"In the IBM Cloud console, navigate to your cluster’s overview"),Object(b.b)("li",{parentName:"ul"},"Switch to the ",Object(b.b)("strong",{parentName:"li"},"Access")," tab"),Object(b.b)("li",{parentName:"ul"},"Follow the instructions to log in from the command line"))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Use the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/getting-started/cli#dashboard"}),Object(b.b)(i.a,{name:"igccli",mdxType:"Globals"}))," to open the Dashboard in your environment"),Object(b.b)(p,{mdxType:"Tabs"},Object(b.b)(d,{label:"OpenShift",mdxType:"Tab"},Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"oc dashboard\n"))),Object(b.b)(d,{label:"Kubernetes",mdxType:"Tab"},Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl dashboard\n"))),Object(b.b)(d,{label:"IGC",mdxType:"Tab"},Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"igc dashboard\n")))),Object(b.b)("p",{parentName:"li"},"The command should print the url to the dashboard then open the default browser to the url."))),Object(b.b)("h3",null,"Opening the Kubernetes/OpenShift console"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Use the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/getting-started/cli"}),Object(b.b)(i.a,{name:"igccli",mdxType:"Globals"}))," ",Object(b.b)("inlineCode",{parentName:"p"},"console")," command to open the IKS or OpenShift console:"),Object(b.b)(p,{mdxType:"Tabs"},Object(b.b)(d,{label:"OpenShift",mdxType:"Tab"},Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"oc console\n"))),Object(b.b)(d,{label:"Kubernetes",mdxType:"Tab"},Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl console\n"))),Object(b.b)(d,{label:"IGC",mdxType:"Tab"},Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"igc console\n")))),Object(b.b)("p",{parentName:"li"},"  This command will determine the type of cluster (IKS or OpenShift), get the url for the console, and launch\nthe url in the default browser. If the default browser is not available then the url will be printed to the\nscreen."))),Object(b.b)("h3",null,"Access the URLs to endpoints in the cluster"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Use the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/getting-started/cli"}),Object(b.b)(i.a,{name:"igccli",mdxType:"Globals"}))," ",Object(b.b)("inlineCode",{parentName:"p"},"endpoints")," command to list the endpoints for a given namespace/project:"),Object(b.b)(p,{mdxType:"Tabs"},Object(b.b)(d,{label:"OpenShift",mdxType:"Tab"},Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"oc endpoints -n tools\n"))),Object(b.b)(d,{label:"Kubernetes",mdxType:"Tab"},Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl endpoints -n tools\n"))),Object(b.b)(d,{label:"IGC",mdxType:"Tab"},Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"igc endpoints -n tools\n")))),Object(b.b)("p",{parentName:"li"},"  This will return the route and ingress URLs for the ",Object(b.b)("inlineCode",{parentName:"p"},"tools")," namespace where the DevOps tools have been installed in the cluster:"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"? Endpoints in the 'tools' namespace. Select an endpoint to launch the default browser or 'Exit'.\n\n 1) Exit\n 2) developer-dashboard - http://dashboard.garage-dev-ocp4-c-518489-0143c5dd31acd8e030a1d6e0ab1380e3-0000.us-east.containers.appdomain.cloud\n 3) argocd-server - https://argocd-tools.gsi-learning-ocp311-clu-7ec5d722a0ab3f463fdc90eeb94dbc70-0001.eu-gb.containers.appdomain.cloud\n 4) artifactory - https://artifactory-tools.gsi-learning-ocp311-clu-7ec5d722a0ab3f463fdc90eeb94dbc70-0001.eu-gb.containers.appdomain.cloud\n 5) dashboard - https://dashboard-tools.gsi-learning-ocp311-clu-7ec5d722a0ab3f463fdc90eeb94dbc70-0001.eu-gb.containers.appdomain.cloud\n 6) developer-dashboard - http://dashboard.garage-dev-ocp4-c-518489-0143c5dd31acd8e030a1d6e0ab1380e3-0000.us-east.containers.appdomain.cloud\n(Move up and down to reveal more choices)\n Answer:\n")),Object(b.b)("p",{parentName:"li"},"  You can then select the URL and launch it in the default browser."))),Object(b.b)("h3",null,"Credentials"),Object(b.b)("p",null,"In the future, the tools in the Dashboard will be linked using a single sign-on (SSO) service. In the meantime, the CLI includes a command to list the tools’ logins."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Use the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/getting-started/cli"}),Object(b.b)(i.a,{name:"igccli",mdxType:"Globals"}))," ",Object(b.b)("inlineCode",{parentName:"p"},"credentials")," command to list the endpoints and credentials for the tools"),Object(b.b)(p,{mdxType:"Tabs"},Object(b.b)(d,{label:"OpenShift",mdxType:"Tab"},Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"oc credentials\n"))),Object(b.b)(d,{label:"Kubernetes",mdxType:"Tab"},Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl credentials\n"))),Object(b.b)(d,{label:"IGC",mdxType:"Tab"},Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"igc credentials\n")))),Object(b.b)("p",{parentName:"li"},"  The command lists the ",Object(b.b)("inlineCode",{parentName:"p"},"userid")," and ",Object(b.b)("inlineCode",{parentName:"p"},"password")," for each tool installed. You can use these credentials to log into\neach of the installed tools.\nMore of the tools in ",Object(b.b)(i.a,{name:"ocp",mdxType:"Globals"})," will be integrated into the OpenShift console login process"),Object(b.b)(m,{mdxType:"InlineNotification"},Object(b.b)("p",{parentName:"li"},"  If you are using OpenShift, the Jenkins credential will be ",Object(b.b)("inlineCode",{parentName:"p"},"undefined")," because the OpenShift built in Jenkins\nservice uses IBM cloud single sign-on mechanism.")))))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-1-dashboard-index-mdx-6041ab8be20eb82baf36.js.map