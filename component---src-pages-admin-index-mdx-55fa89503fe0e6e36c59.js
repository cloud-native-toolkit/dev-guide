(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"013z":function(A,e,t){"use strict";var a=t("q1tI"),i=t.n(a),s=t("NmYn"),n=t.n(s),o=t("Wbzz"),d=t("Xrax"),r=t("k4MR"),c=t("TSYQ"),l=t.n(c),b=t("QH2O"),g=t.n(b),m=t("qKvR"),p=function(A){var e,t=A.title,a=A.theme,i=A.tabs,s=void 0===i?[]:i;return Object(m.b)("div",{className:l()(g.a.pageHeader,(e={},e[g.a.withTabs]=s.length,e[g.a.darkMode]="dark"===a,e))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:g.a.text},t)))))},u=t("BAC9"),E=function(A){var e=A.relativePagePath,t=A.repository,a=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=t||a,s=i.baseUrl,n=i.subDirectory,d=s+"/edit/"+i.branch+n+"/src/pages"+e;return s?Object(m.b)("div",{className:"bx--row "+u.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:u.link,href:d},"Edit this page on GitHub"))):null},j=t("FCXl"),B=t("dI71"),Q=t("I8xM"),x=function(A){function e(){return A.apply(this,arguments)||this}return Object(B.a)(e,A),e.prototype.render=function(){var A=this.props,e=A.tabs,t=A.slug,a=t.split("/").filter(Boolean).slice(-1)[0],i=e.map((function(A){var e,i=n()(A,{lower:!0,strict:!0}),s=i===a,d=new RegExp(a+"/?(#.*)?$"),r=t.replace(d,i);return Object(m.b)("li",{key:A,className:l()((e={},e[Q.selectedItem]=s,e),Q.listItem)},Object(m.b)(o.Link,{className:Q.link,to:""+r},A))}));return Object(m.b)("div",{className:Q.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:Q.list},i))))))},e}(i.a.Component),f=t("MjG9"),h=t("CzIb");e.a=function(A){var e=A.pageContext,t=A.children,a=A.location,i=A.Title,s=e.frontmatter,c=void 0===s?{}:s,l=e.relativePagePath,b=e.titleType,g=c.tabs,u=c.title,B=c.theme,Q=c.description,w=c.keywords,N=Object(h.a)().interiorTheme,y=Object(o.useStaticQuery)("2456312558").site.pathPrefix,C=y?a.pathname.replace(y,""):a.pathname,v=g?C.split("/").filter(Boolean).slice(-1)[0]||n()(g[0],{lower:!0}):"",Y=B||N;return Object(m.b)(r.a,{tabs:g,homepage:!1,theme:Y,pageTitle:u,pageDescription:Q,pageKeywords:w,titleType:b},Object(m.b)(p,{title:i?Object(m.b)(i,null):u,label:"label",tabs:g,theme:Y}),g&&Object(m.b)(x,{slug:C,tabs:g,currentTab:v}),Object(m.b)(f.a,{padded:!0},t,Object(m.b)(E,{relativePagePath:l})),Object(m.b)(j.a,{pageContext:e,location:a,slug:C,tabs:g,currentTab:v}),Object(m.b)(d.a,null))}},BAC9:function(A,e,t){A.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(A,e,t){A.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(A,e,t){A.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},nzrK:function(A,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return o})),t.d(e,"default",(function(){return p}));var a=t("wx14"),i=t("zLVn"),s=(t("q1tI"),t("7ljp")),n=t("013z"),o=(t("T0C+"),t("qKvR"),{}),d=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",e)}},r=d("PageDescription"),c=d("Row"),l=d("Column"),b=d("ArticleCard"),g={_frontmatter:o},m=n.a;function p(A){var e=A.components,t=Object(i.a)(A,["components"]);return Object(s.b)(m,Object(a.a)({},g,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)(r,{mdxType:"PageDescription"},Object(s.b)("p",null,"Provides information for a system administrator on how to use and extend the Toolkit components to manage the\ncloud environments. ")),Object(s.b)(c,{mdxType:"Row"},Object(s.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(s.b)(b,{color:"dark",title:"Configure the dashboard",subTitle:"Customize the Developer Dashboard and OpenShift console",href:"/admin/config-dashboard",mdxType:"ArticleCard"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFA//EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAUGE6pLMA//EABsQAAIDAAMAAAAAAAAAAAAAAAECAAMRBCEi/9oACAEBAAEFAlYS1+g0qX3zFGYJ/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGxAAAgIDAQAAAAAAAAAAAAAAAAECMRBBYXH/2gAIAQEABj8C0KqH6RXSLx//xAAaEAADAQEBAQAAAAAAAAAAAAAAARFBMVFx/9oACAEBAAE/Ianq9FuiTwIvAQ2NgkimFm/p/9oADAMBAAIAAwAAABCrz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/EKf/xAAcEAEAAwEAAwEAAAAAAAAAAAABABEhMUFRYXH/2gAIAQEAAT8QADRNF4pIm8gU6138l5XSezfCtvzJVjQyegybESkYz//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"sysadmins2",title:"sysadmins2",src:"/dev-guide/static/dba5f615522e72f3748d545d53073859/2e753/sysadmins2.jpg",srcSet:["/dev-guide/static/dba5f615522e72f3748d545d53073859/69549/sysadmins2.jpg 288w","/dev-guide/static/dba5f615522e72f3748d545d53073859/473e3/sysadmins2.jpg 576w","/dev-guide/static/dba5f615522e72f3748d545d53073859/2e753/sysadmins2.jpg 1152w","/dev-guide/static/dba5f615522e72f3748d545d53073859/74f4b/sysadmins2.jpg 1728w","/dev-guide/static/dba5f615522e72f3748d545d53073859/de5bb/sysadmins2.jpg 2304w","/dev-guide/static/dba5f615522e72f3748d545d53073859/cab92/sysadmins2.jpg 2500w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(s.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(s.b)(b,{color:"dark",title:"Infrastructure as Code",subTitle:"Review the framework and modules that provide Infrastructure as Code scripts",href:"/admin/terraform",mdxType:"ArticleCard"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1002px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAABA//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABPhmgLnbn/8QAGhABAQACAwAAAAAAAAAAAAAAAgEAAxESIf/aAAgBAQABBQLXVJ3Sylc6/VtEJtuf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAEhMf/aAAgBAgEBPwGdU//EABsQAAIBBQAAAAAAAAAAAAAAAAAQARESIUGB/9oACAEBAAY/ArdHKqDC/8QAGRABAAMBAQAAAAAAAAAAAAAAAQARMSFB/9oACAEBAAE/IeGWtJQoC/CM6IkD7B7ugl7Wf//aAAwDAQACAAMAAAAQi8//xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEDAQE/EBcu3//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/EAQ//8QAGxABAAIDAQEAAAAAAAAAAAAAAQARITFRQXH/2gAIAQEAAT8QXJjKk5sfsp2ARxbWcy+Kr6pEEsQZhbJteQAosdn/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"sysadmins",title:"sysadmins",src:"/dev-guide/static/c416dfbbacfaea1aa920491f05c55409/0c625/sysadmins.jpg",srcSet:["/dev-guide/static/c416dfbbacfaea1aa920491f05c55409/69549/sysadmins.jpg 288w","/dev-guide/static/c416dfbbacfaea1aa920491f05c55409/473e3/sysadmins.jpg 576w","/dev-guide/static/c416dfbbacfaea1aa920491f05c55409/0c625/sysadmins.jpg 1002w"],sizes:"(max-width: 1002px) 100vw, 1002px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(s.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(s.b)(b,{color:"dark",title:"Cluster configuration",subTitle:"Understand the metadata used to configure the cluster and the tools to customize and manage the environment",href:"/admin/cluster-configuration",mdxType:"ArticleCard"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQD/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAABxkvklvwBT//EABgQAQADAQAAAAAAAAAAAAAAAAIAETEQ/9oACAEBAAEFAmaNcerJ/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/AUJc/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFhABAQEAAAAAAAAAAAAAAAAAEAHR/9oACAEBAAY/AsY//8QAGRAAAwEBAQAAAAAAAAAAAAAAAAERITFh/9oACAEBAAE/IbCy+CWuIgr2eNGRT//aAAwDAQACAAMAAAAQQw//xAAXEQEAAwAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/ENwin//EABYRAQEBAAAAAAAAAAAAAAAAAAEREP/aAAgBAgEBPxAWzP/EABoQAQEBAQADAAAAAAAAAAAAAAERACFBcZH/2gAIAQEAAT8QtAOqRH5pqA+uuAWaCBWwJM7zy4e//9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"code2",title:"code2",src:"/dev-guide/static/d41e8261a5cf31d7c026b62f70377e00/4edc6/code2.jpg",srcSet:["/dev-guide/static/d41e8261a5cf31d7c026b62f70377e00/69549/code2.jpg 288w","/dev-guide/static/d41e8261a5cf31d7c026b62f70377e00/473e3/code2.jpg 576w","/dev-guide/static/d41e8261a5cf31d7c026b62f70377e00/4edc6/code2.jpg 1000w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-index-mdx-55fa89503fe0e6e36c59.js.map