(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),b=a.n(o),i=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),p=a.n(u),m=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,b=r.subDirectory,c=o+"/edit/"+r.branch+b+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),f=a("9Hrx"),N=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=b()(e,{lower:!0,strict:!0}),o=r===n,c=new RegExp(n+"/?(#.*)?$"),l=a.replace(c,r);return Object(m.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(m.b)(i.Link,{className:N.link,to:""+l},e))}));return Object(m.b)("div",{className:N.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:N.list},r))))))},t}(r.a.Component),k=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,s=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,p=s.tabs,g=s.title,f=s.theme,N=s.description,x=s.keywords,y=Object(v.a)().interiorTheme,P=Object(i.useStaticQuery)("2456312558").site.pathPrefix,T=P?n.pathname.replace(P,""):n.pathname,A=p?T.split("/").filter(Boolean).slice(-1)[0]||b()(p[0],{lower:!0}):"",C=f||y;return Object(m.b)(l.a,{tabs:p,homepage:!1,theme:C,pageTitle:g,pageDescription:N,pageKeywords:x,titleType:u},Object(m.b)(O,{title:r?Object(m.b)(r,null):g,label:"label",tabs:p,theme:C}),p&&Object(m.b)(w,{slug:T,tabs:p,currentTab:A}),Object(m.b)(k.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:d})),Object(m.b)(h.a,{pageContext:t,location:n,slug:T,tabs:p,currentTab:A}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OEGd:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a("k1TG"),r=a("8o2o"),o=(a("q1tI"),a("7ljp")),b=a("013z"),i=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},l=c("PageDescription"),s=c("InlineNotification"),d={_frontmatter:i},u=b.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(u,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l,{mdxType:"PageDescription"},Object(o.b)("p",null,"Homework for students in the MOOC, Session 4")),Object(o.b)("p",null,"This is the homework tasks for the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/homework/teams"}),"Garage OpenShift and Cloud Pak MOOC\n"),". Week 5 focuses on IBM Cloud Pak for Integration\n, including using the API Connect, App Connect, Event Streams with Kafka and\nmuch more (CP4Integration)."),Object(o.b)("h2",null,"Session 4 - Cloud Pak for Integration"),Object(o.b)(s,{mdxType:"InlineNotification"},Object(o.b)("p",null,"Before you proceed, make sure you have signed up for the MOOC development environment. It is a paid IBM Cloud account. (The environment is locked down to prevent creating any new services.) Also, before proceeding:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Be sure you have already done the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/dev-guide/homework/teams"}),"Welcome to your MOOC team")," tasks"))),Object(o.b)("p",null,"Session 4 of the MOOC focuses on Cloud Pak for Integration (CP4I) and it has been installed with single sign on in the IBM Cloud in the same way a client\nwould have it configured for their account. This gives you access to all the software that is included in the\n",Object(o.b)("strong",{parentName:"p"},"CP4I")," offering, see the welcome screen below.   "),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAADSElEQVQ4y02S7U+bZRTGbxxQFxG09OnT9mkpbVegK4V2K3SdBYZg4mRxyjJdMlhiJsYPanzBxWhiiC7xZR9GJL5SFrIggw86kaFOv/gP+B8YE0d1bGPt1rWU1/087ZR4J1fOdXKfXOe6r+dR9pYERrQHI9yN4YtguIP4/c0YhgdNc2K1ukrQNIfUIuzCbaVqter3oOnY7S7c7gaUGphAnfoB9fICZZFhdu4a5GFLHM3SLsP7ZLgN3dqG3bZXeBCbHsBhaxTuR9d9Ul1yL0u1ABZLG6qse4QHRn7m/ncv8+DBM1geOYXu7MFmTWDVO8RNHJstTmtLnyzYg8cTJ9x6gF3ednzevbLYS6CpFcMRktl2VLX/GfShL7G9NkVV3xlqet/D8D6O09WD3fUY5pJoouRW06KCsDgKi9OIuNpNrblenNYLb6K2NoLSGvoxR05Q2f0mqu99dj59FiN4BEfjk1R7D+MO9VPfdAizZZ846qLOlcBdt1/QjssVpakxJkJ10ock+04RbD5KuPdFwk+8gufEaWpfTaL1DlMTO0nZ/jeoij7PQ4GnqHY+KqF3iPNOqUXEcBhhESzm7cPlDOL1xlCOPc/yxfRlfvz1Nz6YmEcNvo0a+hh18C3US5PSj3Jf7AVM4ePU6HEs1nZ0o0syjmLRmjGb/djlQ+nyfIulCaW3HcXXNYhX4O4cpCp2jB0Dw5S/fpryD8+x46NJTCffQT8+Qk34GC7PAfyhPoKBHnEnwnoLoeZiFGH5EwKoikAvqqEb5ZP3uxMop8AQRA5Lps+hjgyhOvpRXQOowCGUBF9uj1FRtRuTqYGKCg+VlU5MlQ4qK2yoc7Pf89XsPGMXLvHZzJzUOT6ZvsjZyYuMTV9i7NufGJ1ZYHT+F+nn+PTr7/j8wgLj579hPDlLcmJG6jTj41Mkk1Mo/j2/L+X/oywXIJXd2u6v5WDx1nbLUrbA/8/ttbvbXG1ubpLN5fgjdZVsvsDW1iapG1n+XLrB6toaxfvrt+6QWs6wIbxQKLB4Lc31dJaN9XXyK6tcubpMLp9nfX3jnsOcCGbSaVZXi4J3uZO9TfrmsgyslwRSi1f4+69Uia/JksLKSglFgazMZtI3yWQypeX/AKYlOKpr0l5pAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"CP4I Software Console",title:"CP4I Software Console",src:"/dev-guide/static/7206d41e1772852ad5a4d01276bf10a2/3cbba/icp4iwelcome.png",srcSet:["/dev-guide/static/7206d41e1772852ad5a4d01276bf10a2/7fc1e/icp4iwelcome.png 288w","/dev-guide/static/7206d41e1772852ad5a4d01276bf10a2/a5df1/icp4iwelcome.png 576w","/dev-guide/static/7206d41e1772852ad5a4d01276bf10a2/3cbba/icp4iwelcome.png 1152w","/dev-guide/static/7206d41e1772852ad5a4d01276bf10a2/0b124/icp4iwelcome.png 1728w","/dev-guide/static/7206d41e1772852ad5a4d01276bf10a2/4ea69/icp4iwelcome.png 2304w","/dev-guide/static/7206d41e1772852ad5a4d01276bf10a2/d4a77/icp4iwelcome.png 2370w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("p",null,"This homework assumes that you have:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Reviewed the Playback from the Session 4 Monday session"),Object(o.b)("li",{parentName:"ul"},"Seen a demo of each of the homework tasks below"),Object(o.b)("li",{parentName:"ul"},"Seen demos and discussion about what is expected from the homework")),Object(o.b)(s,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": Support is provided in the ",Object(o.b)("inlineCode",{parentName:"p"},"#openshift-cldpak-mooc")," Slack channel (in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://ibm-garage.slack.com"}),"IBM Garage for Cloud Slack Org")," team). This channel will also be used to share any common issues found.")),Object(o.b)("h3",null,"Homework tasks"),Object(o.b)("p",null,"This week’s homework starts with some background reading."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Task"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Link"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Time"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Introduction"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Introduction to IBM Cloud Pak for Integration"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.ibm.com/cloud/cloud-pak-for-integration"}),"Introduction")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1 hour")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Review"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IBM Garage Reference Architecture for Integration"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.ibm.com/cloud/garage/architectures/modern-integration"}),"Reference Architecture")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1 Hour")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Integration Modernization"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Agile Integration Architecture"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.ibm.com/cloud/integration/agile-integration"}),"Agile Architecture")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1 Hour")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Videos"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Product Tours and Hands on lab for Cloud Pak for Integration"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.ibm.com/demos/collection/Cloud-Pak-for-Integration/"}),"Product Tours")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4 hours")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Review Asset Repository"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Review the IBM Garage and Solution Engineering teams Asset repository"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://ibm-cloud-architecture.github.io/deliverables/integration.html"}),"Asset Repository")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4 hours")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Labs 1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable order processing flow using Event Streams, App Connect, MQ , API Connect and Asset Repository"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.ibm.com/rsundara/cp4i-labs/tree/master/lab1"}),"Lab")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2 Hours")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Product Education"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Education for products contained in the Cloud Pak for Integration"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.ibm.com/services/learning/ites.wss/zz-en?pageType=journey_category&c=&tag=o-itns-01-02"}),"Product Education")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Self Paced")))),Object(o.b)("p",null,"Once you have completed these tasks, you will have completed the homework for Session 4. You will now have an understanding of the IBM Cloud Garage\napproach to using ",Object(o.b)("strong",{parentName:"p"},"CP4I")," in Integration Solutions."),Object(o.b)("h3",null,"Homework Review"),Object(o.b)("p",null,"This is no planned Homework review for this session."))}p.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-homework-tasks-week-5-index-mdx-755aef89297dfffc5c19.js.map