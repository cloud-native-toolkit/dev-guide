(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),r=a.n(o),s=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),m=a("QH2O"),u=a.n(m),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(p.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=o.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,r=i.subDirectory,l=o+"/edit/"+i.branch+r+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),v=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=r()(e,{lower:!0,strict:!0}),o=i===n,l=new RegExp(n+"/?(#.*)?$"),c=a.replace(l,i);return Object(p.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=o,t),v.listItem)},Object(p.b)(s.Link,{className:v.link,to:""+c},e))}));return Object(p.b)("div",{className:v.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:v.list},i))))))},t}(i.a.Component),y=a("MjG9"),k=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,b=void 0===o?{}:o,d=t.relativePagePath,m=t.titleType,u=b.tabs,g=b.title,O=b.theme,v=b.description,w=b.keywords,T=Object(k.a)().interiorTheme,N=Object(s.useStaticQuery)("2456312558").site.pathPrefix,P=N?n.pathname.replace(N,""):n.pathname,C=u?P.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"",I=O||T;return Object(p.b)(c.a,{tabs:u,homepage:!1,theme:I,pageTitle:g,pageDescription:v,pageKeywords:w,titleType:m},Object(p.b)(h,{title:i?Object(p.b)(i,null):g,label:"label",tabs:u,theme:I}),u&&Object(p.b)(x,{slug:P,tabs:u,currentTab:C}),Object(p.b)(y.a,{padded:!0},a,Object(p.b)(f,{relativePagePath:d})),Object(p.b)(j.a,{pageContext:t,location:n,slug:P,tabs:u,currentTab:C}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},RjXp:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("013z"),s=a("T0C+"),l=(a("qKvR"),{}),c={_frontmatter:l},b=r.a;function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Deploying an application into containers involves both the application logic and the associated configuration. The application\nlogic is packaged into a container image so that it can be deployed but in order to make the container image portable\nacross different environments, the application configuration should be managed separately and applied to the application\ncontainer image at deployment time."),Object(o.b)("p",null,"Fortunately, container platforms lik ",Object(o.b)(s.a,{name:"ocp",mdxType:"Globals"})," and ",Object(o.b)(s.a,{name:"kube",mdxType:"Globals"})," provides a mechanism to easily\nprovide the configuration at deployment time: ConfigMaps and Secrets. Both ConfigMaps and Secrets work in the same way to\nrepresent information in key value pairs and allow that information to be attached to a running container in a number of\ndifferent ways. Unlike ConfigMaps, Secrets are intended to hold sensitive information (like passwords) and have additional access control facilities to limit who can read and use that information."),Object(o.b)("p",null,"With a ",Object(o.b)("a",{parentName:"p",href:"/dev-guide/getting-started-day-0/git-ops"},"GitOps")," approach to ",Object(o.b)("a",{parentName:"p",href:"/dev-guide/getting-started-day-2/continuous-delivery"},"continuous delivery"),",\nthe application container image and the associated configuration are represented in the Git repository together. When\nthe desired state defined in Git is applied to an environment, the relevant ",Object(o.b)(s.a,{name:"kube",mdxType:"Globals"})," resources like Deployments,\nConfigMaps, and Secrets are generated from the provided Git configuration."),Object(o.b)("p",null,"A common issue when doing GitOps is how to handle sensitive information that should not be stored in the Git repository\n(e.g. passwords, keys, etc). There are two different approaches to how to handle this issue:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Inject the values from another source into kubernetes Secret(s) at deployment time"),Object(o.b)("li",{parentName:"ol"},"Inject the values from another source in the pod at startup time via an InitContainer")),Object(o.b)("p",null,"The “other source” in this case would be a key management system that centralizes the storage and management of sensitive\ninformation. There are a number of key management systems available to manage the secret values:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/dev-guide/tools/secret-management-with-key-protect"},"Key Protect")),Object(o.b)("li",{parentName:"ul"},"Hyper Protect"),Object(o.b)("li",{parentName:"ul"},"Hashicorp Vault")),Object(o.b)("h2",null,"Use the key management system at deployment time"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/dev-guide/tools/argocd"},"CD with ArgoCD")," covers how to use ArgoCD to do GitOps, including how to manage sensitive information in a\nkey management system."),Object(o.b)("h2",null,"Use the key management system at pod startup time"),Object(o.b)("p",null,"Coming soon"))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-2-secret-management-index-mdx-3d8f431a6f4d8d296626.js.map