(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),s=a("NmYn"),r=a.n(s),o=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),p=a("QH2O"),g=a.n(p),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.theme,i=e.tabs,s=void 0===i?[]:i;return Object(u.b)("div",{className:d()(g.a.pageHeader,(t={},t[g.a.withTabs]=s.length,t[g.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:g.a.text},a)))))},h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,s=i.baseUrl,r=i.subDirectory,c=s+"/edit/"+i.branch+r+"/src/pages"+t;return s?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("9Hrx"),x=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=r()(e,{lower:!0,strict:!0}),s=i===n,c=new RegExp(n+"/?(#.*)?$"),l=a.replace(c,i);return Object(u.b)("li",{key:e,className:d()((t={},t[x.selectedItem]=s,t),x.listItem)},Object(u.b)(o.Link,{className:x.link,to:""+l},e))}));return Object(u.b)("div",{className:x.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:x.list},i))))))},t}(i.a.Component),A=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,s=t.frontmatter,b=void 0===s?{}:s,d=t.relativePagePath,p=t.titleType,g=b.tabs,h=b.title,f=b.theme,x=b.description,w=b.keywords,N=Object(y.a)().interiorTheme,T=Object(o.useStaticQuery)("2456312558").site.pathPrefix,S=T?n.pathname.replace(T,""):n.pathname,k=g?S.split("/").filter(Boolean).slice(-1)[0]||r()(g[0],{lower:!0}):"",z=f||N;return Object(u.b)(l.a,{tabs:g,homepage:!1,theme:z,pageTitle:h,pageDescription:x,pageKeywords:w,titleType:p},Object(u.b)(m,{title:i?Object(u.b)(i,null):h,label:"label",tabs:g,theme:z}),g&&Object(u.b)(v,{slug:S,tabs:g,currentTab:k}),Object(u.b)(A.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:d})),Object(u.b)(j.a,{pageContext:t,location:n,slug:S,tabs:g,currentTab:k}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},rHSq:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a("k1TG"),i=a("8o2o"),s=(a("q1tI"),a("7ljp")),r=a("013z"),o=a("T0C+"),c=(a("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",t)}},b=l("PageDescription"),d=l("InlineNotification"),p={_frontmatter:c},g=r.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)(g,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)(b,{mdxType:"PageDescription"},Object(s.b)("p",null,"Complete the steps for setting up the Sysdig tool")),Object(s.b)(d,{mdxType:"InlineNotification"},Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Note"),": An ",Object(s.b)("strong",{parentName:"p"},"environment administrator")," performs the steps on this page. See ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/admin/plan-installation#roles"}),"Plan Installation > Roles")," for the overview of the roles involved.")),Object(s.b)("h2",null,"Overview"),Object(s.b)("p",null,"Sysdig is the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/tools/monitoring"}),Object(s.b)(o.a,{name:"env",mdxType:"Globals"}),"’s monitoring tool"),". Before you can use it as part of the environment, you must finish setting up the new instance."),Object(s.b)("h2",null,"Setup"),Object(s.b)("p",null,"Finish setting up the new Sysdig instance. If this is your first time opening the Sysdig dashboard, Sysdig will open a platform dialog and an Onboarding wizard."),Object(s.b)("p",null,"Select the platform"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"On the Welcome to Sysdig Monitor panel click ",Object(s.b)("strong",{parentName:"li"},"Next")),Object(s.b)("li",{parentName:"ul"},"Choose ",Object(s.b)("strong",{parentName:"li"},"Kubernetes | GKE | OpenShift")," as the installation method"),Object(s.b)("li",{parentName:"ul"},"The agent is already installed in the cluster, so click ",Object(s.b)("strong",{parentName:"li"},"Go to next step!")," to access the dashboard")),Object(s.b)("p",null,"Configure the monitoring agent"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The first page shows the hosts (i.e. Kubernetes nodes) and containers that Sysdig found, as well as the integrations it has\nselected to monitor them\n",Object(s.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"848px"}}),"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.06944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAB00lEQVQoz4VT7Y7TMBDsu/I28CqIh4DfCAE6iZaLOF2v1zYfjmPnw/FHhrETH1ckhKXt2O7uzO56s8OrtSxLwudB4dBVKFSDe9qDbvHYy7TPdhn1TUxeu3iRLWw42Bli7CEGjaZXaLmXtHZY7wRxmA1ex2ZLhCGETWlV89ZBKwUpBETToFcaulNQUhI1sYOZzJrhFhMhLAG7TOaJUgdUwwUuWIqsjsHzfmwwurXEZrqmQB88mpG+FJeDQGcEeI2dZ0Ckb7XHu/cSpTTp7JxLtt/vcXx6pIDHpARma2BZ7qQlnLcoigKHn3tGUMR7Em4Zxoxkv8DSKapbksXsYynek3zxKcPZTS8PYP2cq037lZA/MTBmM7HZT/UvzCS1LMWRuDMdrixNiTNM06aWnOsSp/MzSnVmPzkFx6/QtmN7lrWHSc1alGUJ2XbpHAVipoW8Rzk3sPyvZmnR+1LX+H53h6GfcDoe8FB8eYlJGUZr2xY1HRVfN56jQC4ZfwBVJK4qPkDY5jCX7FLMLpdrDBs9TQlTdiSNaJ1dMVbAsblS+CJaPHOkJjOvvrTbwcbtWv5h8QHD9gHkfVwjRT/XJ/yQ1e2X8j/7e2XC09DhzacPePvtI34D1YykwZxYxR0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sysdig Onboarding pt 1",title:"Sysdig Onboarding pt 1",src:"/dev-guide/static/a4432402b5fca7b76a3c37b42cc9d760/c6377/sysdig-wizard-1.png",srcSet:["/dev-guide/static/a4432402b5fca7b76a3c37b42cc9d760/7fc1e/sysdig-wizard-1.png 288w","/dev-guide/static/a4432402b5fca7b76a3c37b42cc9d760/a5df1/sysdig-wizard-1.png 576w","/dev-guide/static/a4432402b5fca7b76a3c37b42cc9d760/c6377/sysdig-wizard-1.png 848w"],sizes:"(max-width: 848px) 100vw, 848px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\nNotice there are different types of integrations for different types of runtimes such as Java, servers such as Tomcat,\nand even infrasturcture integrations for monitoring the Kubernetes cluster itself and its containerd engines.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Press ",Object(s.b)("strong",{parentName:"p"},"Next"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The second page shows the predefined metrics, dashboards, and alerts that Sysdig will start using to monitor the apps\nin your cluster\n",Object(s.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"848px"}}),"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.333333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABqUlEQVQoz11TTW/cIBD1/24vvfRHRWpXants1NxyiHabtquQGG9sMMYGbF5n8OJld6QxMB9v3gy4wllijFhIWV6txrN+x141OOgTnjqJgzolfWzf8M90yd77acvNUvEhKS5ig4d2E5QbU5IJDgPr7NFOFppsrG6eURJirTL6MAz4K2q0SqMUPzkcjy8Q9QlNLXEtEUKSve020A2Q2x0fvyG04qriQvupOZLvOzwx2jqKS4pz4gn+dLwA4hyQQJ/vgV6u7Rd2mHdE9hWFGJC9Uf4G1Ou6LxnyKlsNSy3eDnokW2dGlLG5ZT2McGEpGDKzZcE40gVonWYZQkC2T9MEaweYXqe9c24DnGhv+p5yLbz36y3zZ6bZGGNSsLU2rSwMzPYV1KZiXDgD8p7tZU4C5ENPlTQxZOWALAyilErA7MuJzIjPHfk6XrWCJwLnlufkFEKgaZrEKM8k2+u6hpRy8zH7NJ7eYDFEwK9vsvJhpll4xHjzwspbvpH8R/H3x9sffBV77MQBu5c9qnSDVCWcX/0t0OWZXGtqmzr7/LDDh593+Hh/h0+/vuA/ZHel58SX8+gAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sysdig Onboarding pt 2",title:"Sysdig Onboarding pt 2",src:"/dev-guide/static/02c00d38caf3da10cd11c514183e8755/c6377/sysdig-wizard-2.png",srcSet:["/dev-guide/static/02c00d38caf3da10cd11c514183e8755/7fc1e/sysdig-wizard-2.png 288w","/dev-guide/static/02c00d38caf3da10cd11c514183e8755/a5df1/sysdig-wizard-2.png 576w","/dev-guide/static/02c00d38caf3da10cd11c514183e8755/c6377/sysdig-wizard-2.png 848w"],sizes:"(max-width: 848px) 100vw, 848px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Press ",Object(s.b)("strong",{parentName:"p"},"Complete Onboarding")))),Object(s.b)("h2",null,"Conclusion"),Object(s.b)("p",null,"The environment’s Sysdig instance is now setup and ready for developers to use."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-sysdig-setup-index-mdx-463a79a80b7ddc076db6.js.map