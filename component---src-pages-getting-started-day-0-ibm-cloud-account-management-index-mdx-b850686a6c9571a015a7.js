(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("NmYn"),s=a.n(c),i=a("Wbzz"),o=a("Xrax"),b=a("k4MR"),l=a("TSYQ"),u=a.n(l),p=a("QH2O"),m=a.n(p),d=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,c=void 0===r?[]:r;return Object(d.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=c.length,t[m.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,c=r.baseUrl,s=r.subDirectory,o=c+"/edit/"+r.branch+s+"/src/pages"+t;return c?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:o},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("9Hrx"),v=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=s()(e,{lower:!0,strict:!0}),c=r===n,o=new RegExp(n+"/?(#.*)?$"),b=a.replace(o,r);return Object(d.b)("li",{key:e,className:u()((t={},t[v.selectedItem]=c,t),v.listItem)},Object(d.b)(i.Link,{className:v.link,to:""+b},e))}));return Object(d.b)("div",{className:v.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:v.list},r))))))},t}(r.a.Component),N=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,c=t.frontmatter,l=void 0===c?{}:c,u=t.relativePagePath,p=t.titleType,m=l.tabs,h=l.title,f=l.theme,v=l.description,A=l.keywords,T=Object(w.a)().interiorTheme,y=Object(i.useStaticQuery)("2456312558").site.pathPrefix,P=y?n.pathname.replace(y,""):n.pathname,C=m?P.split("/").filter(Boolean).slice(-1)[0]||s()(m[0],{lower:!0}):"",k=f||T;return Object(d.b)(b.a,{tabs:m,homepage:!1,theme:k,pageTitle:h,pageDescription:v,pageKeywords:A,titleType:p},Object(d.b)(g,{title:r?Object(d.b)(r,null):h,label:"label",tabs:m,theme:k}),m&&Object(d.b)(x,{slug:P,tabs:m,currentTab:C}),Object(d.b)(N.a,{padded:!0},a,Object(d.b)(O,{relativePagePath:u})),Object(d.b)(j.a,{pageContext:t,location:n,slug:P,tabs:m,currentTab:C}),Object(d.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},jyMt:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a("k1TG"),r=a("8o2o"),c=(a("q1tI"),a("7ljp")),s=a("013z"),i=a("T0C+"),o=(a("qKvR"),{}),b={_frontmatter:o},l=s.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(l,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)(i.a,{name:"ic",mdxType:"Globals"})," environment is provided with a number of powerful tools to manage user access and resource provisioning\nbut little is configured for you out of the box. This guide gives an approach to managing the account in a sensible way that can\neasily be extended or re-configured based upon the requirements of a given situation. "),Object(c.b)("p",null,"This approach to managing the account is organized around four key roles:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Account owner(s)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Account managers")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Environment administrators")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Environment users"))),Object(c.b)("p",null,"This diagram from ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/toolkit-resources/resource-mgmt#access-group-example"}),"Resource Access Management"),"\nshows the relationship of these access groups to a pair of development environments:"),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"89.58333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAAEWklEQVQ4y4VSa0wUVxS+wKZBMbwSW1vTFtNImlhiGkj7yxZoTBNbjTz6QAwWKGqDLyTQpl1EXtZYa0xUShqwpWjESkpbaqMoLRR5CUFBHu5jZmef7LKzOzuzOzM7uzuc3lmW2LQ1nuRk7pxv5tzvO99BABCFcNDB5eeOhsnENwoOZm/NyXp5Z2nRxnd2v5+6p7I85eOayudyDhSvyztU+pgsWZd7aO8zKBLRK4f8ms7YtNdQHPqfmPkeRf+Qi6J6jqPonmM4a5ef12pQNDQjdKAE/2cxm9J/af8m226zpEZaqrpvXHvFy3HVWq2ubnr6QSPDeI77/YEsBcWK0OOibF9snPIBsLQD/KI41XquPsz03oO7+Urd7XYDTdPKEfx+f4eCqdXTT6WmQkxcPKi2Z4IKX6F6fQuoEp6GqOJizNAvBRqNTrbBJ4j7IrdHDY71bXEuLg7q9fp+rVb7h8lkGnc6nRUKODzs2EsZnXMmEz2qJ53jtCs4RjuFaQMpXS4t25OIQl73i6KdUhglLRPfFtPb35NhNFJtGo3mW8ysJRQKdfC8UKig8w/99QpjicfKWIBgKCwALAvcfNXhz5ORwPOnlIIg+ndFRqEaGR98D/4VPM93KuDsNKhnFsbgpq5ZmDIPSD4WRJ8ognXBP/5ZZWUS0lica43sUtpDgoqPMFR1/35lczAgNQQCgTpRFGsxy5Msy20POz0FjebgLNwyNwPBTYK8tHwhS3q1RV/WJyPRRSUMdp/diGurIgyj+od636QMhkmSJO/ihqNer3fO42GrFXBiIvSBiYLbVhN0UyT8arHIP7sZuGEywdldBe8mIs7Lngjf4PXlrUgeGhvIUdzV6XRgMBhAlmVFcit6Quzfj1YjTpBecgtynsvDrl0BRiYGtpIk4SAIwmKz2UyLi4ucJAWaFGxomNsxr3V1agimbV7HfGezhy66XHCZoqCusPDtBCS5bGvsk38+i0nGLrfLiOnp7XrVajGfwZK/EgThFJ7heYZhwgp0856m8NBEPDzGCxCZodns0VUcPZaMJJE/GV6DQPDDf0qW5RDgJiBJ0rLLPt9FBbROudWOhfswqf9N0BGj0hLNiGwwAOZF/7i6/EgSsjmZNBvDlzhc7udXTPlr5HaWHArNyfLSdDAYvI+TxMaoFdAxw9ctyP1w3X4CCL4fQNnDoAwekp0tO92UjDxO0/o7Ny9l4hklPmrY9xZB6CmNRqvDjTQsy9qxSfUKqL3nLacNVqudpOZo0qLx0eI8z4WMDux2QWlREuJ8XGPYZc6XuyL5DpaMjQDcEHR6PeB9xC4LYZfbr8OqtkuQ0NUB8a3tEK8+DfF15yCh5gKsLi5OXoO8grTeJy1lcj5hhSGamOzLpgyEBSdFOx0E46ZdctBf+6S1qf4Ixf6nuPmTW7G7v2jc1PJjZ3pL10/p569cTb/QeTWj6uszm7aVH3whr6IqJb/y0w35R6sfJX7H9Q07Dx9J+RsscCdLyQ10uQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Access groups example",title:"Access groups example",src:"/dev-guide/static/97670ac0e688220fa7f8e2810d92d96b/3cbba/access-example.png",srcSet:["/dev-guide/static/97670ac0e688220fa7f8e2810d92d96b/7fc1e/access-example.png 288w","/dev-guide/static/97670ac0e688220fa7f8e2810d92d96b/a5df1/access-example.png 576w","/dev-guide/static/97670ac0e688220fa7f8e2810d92d96b/3cbba/access-example.png 1152w","/dev-guide/static/97670ac0e688220fa7f8e2810d92d96b/58488/access-example.png 1604w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("h3",null,"Account owner(s)"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"account owner(s)")," is the user who owns the account or users who have been granted super-user access to the account\nat the same level as the account owner."),Object(c.b)("p",null,"An account owner must create the access group for account managers. The account owner will:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Create an ",Object(c.b)("inlineCode",{parentName:"li"},"ACCT-MGR-IAM-ADMIN")," access group using the ",Object(c.b)("inlineCode",{parentName:"li"},"acp-mgr")," script"),Object(c.b)("li",{parentName:"ul"},"Add a functional ID, configured using the ",Object(c.b)("inlineCode",{parentName:"li"},"acp-iaas")," script, with API keys for the account managers")),Object(c.b)("h3",null,"Account managers"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"account managers")," are an account owner or other users with ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-account-services"}),"account management permissions")),Object(c.b)("p",null,"As described in ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/admin/config-account"}),"Configure Account"),", the account managers can set up the resource groups\nand access groups needed to install and use the environments. For each environment, the account managers will:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Create a resource group"),Object(c.b)("li",{parentName:"ul"},"Create an access group named ",Object(c.b)("inlineCode",{parentName:"li"},"<resource_group>-ADMIN")," using the script ",Object(c.b)("inlineCode",{parentName:"li"},"acp-admin")),Object(c.b)("li",{parentName:"ul"},"Create an access group named ",Object(c.b)("inlineCode",{parentName:"li"},"<resource_group>-USER")," using the script ",Object(c.b)("inlineCode",{parentName:"li"},"acp-user"))),Object(c.b)("h3",null,"Environment administrators"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"environment administrators")," are users in the account\nwith ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-userroles#platformroles"}),"permissions to create services in the environment’s resource group"),". In\nthis case, the “environment” is scoped to the ",Object(c.b)("inlineCode",{parentName:"p"},"resource group"),". Environment administrators are granted broad access\nto create, manage, and destroy services and resources within a given ",Object(c.b)("inlineCode",{parentName:"p"},"resource group"),"."),Object(c.b)("h3",null,"Environment users"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"environment users")," are users in the account with ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-userroles#service_access_roles"}),"permissions to use existing services in the environment’s resource group"),"\n(e.g. developers, data scientists, etc.). They are consumers of the services and resources that have been provisioned in\norder to build and deploy business applications."),Object(c.b)("h2",null,"Architecture"),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/arch/environment"}),"Environment Architecture")," page shows the structure of the environment that will be installed. Depending upon\nthe approach for development teams, each ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/arch/teams"}),"development team")," can be assigned its own (small) environment or\nmultiple teams can share a single environment. The environment structure is designed to support best practices for\na ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/arch/application"}),"cloud-native application architecture"),", including designing applications that\nare ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/arch/manageable"}),"built to manage"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-0-ibm-cloud-account-management-index-mdx-b850686a6c9571a015a7.js.map