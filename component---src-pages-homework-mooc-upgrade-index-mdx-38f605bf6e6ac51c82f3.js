(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),l=a.n(o),s=a("Wbzz"),r=a("Xrax"),b=a("k4MR"),c=a("TSYQ"),p=a.n(c),d=a("QH2O"),u=a.n(d),g=a("qKvR"),m=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(g.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=o.length,t[u.a.darkMode]="dark"===n,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:u.a.text},a)))))},h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,l=i.subDirectory,r=o+"/edit/"+i.branch+l+"/src/pages"+t;return o?Object(g.b)("div",{className:"bx--row "+h.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:h.link,href:r},"Edit this page on GitHub"))):null},O=a("FCXl"),A=a("9Hrx"),j=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(A.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=l()(e,{lower:!0,strict:!0}),o=i===n,r=new RegExp(n+"/?(#.*)?$"),b=a.replace(r,i);return Object(g.b)("li",{key:e,className:p()((t={},t[j.selectedItem]=o,t),j.listItem)},Object(g.b)(s.Link,{className:j.link,to:""+b},e))}));return Object(g.b)("div",{className:j.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:j.list},i))))))},t}(i.a.Component),v=a("MjG9"),N=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,c=void 0===o?{}:o,p=t.relativePagePath,d=t.titleType,u=c.tabs,h=c.title,A=c.theme,j=c.description,y=c.keywords,x=Object(N.a)().interiorTheme,k=Object(s.useStaticQuery)("2456312558").site.pathPrefix,C=k?n.pathname.replace(k,""):n.pathname,T=u?C.split("/").filter(Boolean).slice(-1)[0]||l()(u[0],{lower:!0}):"",D=A||x;return Object(g.b)(b.a,{tabs:u,homepage:!1,theme:D,pageTitle:h,pageDescription:j,pageKeywords:y,titleType:d},Object(g.b)(m,{title:i?Object(g.b)(i,null):h,label:"label",tabs:u,theme:D}),u&&Object(g.b)(w,{slug:C,tabs:u,currentTab:T}),Object(g.b)(v.a,{padded:!0},a,Object(g.b)(f,{relativePagePath:p})),Object(g.b)(O.a,{pageContext:t,location:n,slug:C,tabs:u,currentTab:T}),Object(g.b)(r.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},FPwz:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a("k1TG"),i=a("8o2o"),o=(a("q1tI"),a("7ljp")),l=a("013z"),s=(a("qKvR"),{}),r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=r("PageDescription"),c=r("InlineNotification"),p={_frontmatter:s},d=l.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(d,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},Object(o.b)("p",null,"Release notes for the MOOC v1.1 Cluster Update")),Object(o.b)("h2",null,"Cluster Upgrades"),Object(o.b)("p",null,"The MOOC enablement team has replaced\nall the current MOOC\nClusters with new white listed OpenShift clusters. This is to enable the\nMOOC to continue into 2020. The decision was made not to migrate\ndata at this point as it is a living breathing learning platform so can be cleared down at the discretion of the enablement team."),Object(o.b)("p",null,"The good news is all your apps are stored in your teams Git Organization so will not be effected. The following is a list of steps to enable your existing apps to be redeployed. "),Object(o.b)(c,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": If you have not completed any MOOC Education activities you are not\neffected. This is purely for the early adopters that started on the platform during the live education sessions.")),Object(o.b)("h3",null,"Dashboard"),Object(o.b)("p",null,"The Dashboard now supports OpenShift single sign on and uses the OAuth\nChallenge."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Approve the Authentication by clicking ",Object(o.b)("strong",{parentName:"li"},"Log in with OpenShift"),Object(o.b)("span",Object(n.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1089px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.513888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8UlEQVQoz62S0WqDMBiFfcT6jKXv0YtBb8p2190O3CqKiyam8Y9JPTNpFFM26qCBj8A5OUfDn2SzSZGmzyPhnKPve2itn0KS5zlcadM0EXVd32AMLDBrgfuMIymKAm3b+tIJKSWICNR1oN6ArgP0eAsifdNHlFJRZiIqFEL4vRuL5lUWkG9HVOUZMBpDkK21c2bJn4VDSGZfFXb7E7avGQ4fzGvOMsb8r/DqGweUymL/qfCSSbxXndec5wa5utDtThOixUVwWMlhLhwkRz94y8xdYRkNZSqdcNOsvpmHsTrylmcf/uEaVl15efC3Z/Howz+36yW3Nqfw5AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Approve",title:"Approve",src:"/dev-guide/static/6c0c4e7ff13718a6f80d72f653a5443d/5b11e/approve.png",srcSet:["/dev-guide/static/6c0c4e7ff13718a6f80d72f653a5443d/7fc1e/approve.png 288w","/dev-guide/static/6c0c4e7ff13718a6f80d72f653a5443d/a5df1/approve.png 576w","/dev-guide/static/6c0c4e7ff13718a6f80d72f653a5443d/5b11e/approve.png 1089w"],sizes:"(max-width: 1089px) 100vw, 1089px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("li",{parentName:"ul"},"Select the Authorize Access click on ",Object(o.b)("strong",{parentName:"li"},"Allow selected permissions"),Object(o.b)("span",Object(n.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1083px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAAz0lEQVQoz52SjQ6DIAyEef8HZREH6ORH0dh5OIhGMU6SSxXq9WuRtW1LSilC1FqTtZb+WfM8794Z5y/inJMQgqqqIikl9X0fjRG99/EZcs7thPNkmoyZXuhABnWdIbskDsMQjRDxUTLAXpL75R0Ma6kjlTGGxnHMh1udtVZs+a07qmsRDVGxJJBO01Qslgk/xpNaCNFyCOEgUN8hy4QhoPpKkYYPmkR1JpCWTFnTNHGG66V00fBsjnfnytBSai3N6Mn/lw2vkh8RXiXfpd2uL2YOYmBI7cKdAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Select",title:"Select",src:"/dev-guide/static/a9afa41837c9fcf5f59850b58a57342b/17353/select.png",srcSet:["/dev-guide/static/a9afa41837c9fcf5f59850b58a57342b/7fc1e/select.png 288w","/dev-guide/static/a9afa41837c9fcf5f59850b58a57342b/a5df1/select.png 576w","/dev-guide/static/a9afa41837c9fcf5f59850b58a57342b/17353/select.png 1083w"],sizes:"(max-width: 1083px) 100vw, 1083px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("li",{parentName:"ul"},"You will now see the Dashboard in Authorised mode\n",Object(o.b)("span",Object(n.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.3611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACVElEQVQ4y41Su24TQRTdb6Cio0SU/ACFGzpXmMh2a6RU1DxEkYImCGQpQhG2U7imobMioRgJIrnJSwhikzghxPZ6d/3Yx+xzdvcwM7vexAIhrnU1V+Odc8+590iWZeHi/Ay9Xg+6rsM0TXESQhBFkcgwDPG/IXHAyUSD67riIopjxCw5EKUUvu+LutVqoV5voNls4u1mHRubW3hX30Kj0RBZrVbRbrchcUbD4RADlrKsQFVVKIoqmNq2nbHL5XKQJOmfWSgUIC2YAPxhDBo67PDh+jSVGwnA9fVXKJfLqFQqLB+hVCrh4cqKACkWi8jn86jVahwwFg+UqYuXb77idm4X7aNEfhB5ogkPz7XBx3M9qEMQBsHyDBfF49fHkG5u495qF+8/j/BkbQ937newf+qJ/y3TgOM42aJ8GiIa9+HMNFYndwEDly7HLo5/miDs9302F9JLzw8h3drBgxenOFFtATifG9A0bWmu3A2yLGM6nQowwfCgS/DpwMDHXRmrzw7R+xVA9UzsjyZcaCZFH4zhGETUcZQ4YTJzYJhEMOdN+F0mea16ght3v2Bnj7KFeHi60cd2R08A2Bht18NsznxqGJm1bNsRfuXWWliNLYWLDHF0ruFDW4Vs2lDmHjrfSPaQh9M/gzUcwQup6BDHEXRNZQ4J06ZxyjDme2T0fQMXZAKLuktbWwC6qobAtFLJyRJcYsHzvEwuPxPJMf4AidI5LQBnloFu/weIRbLv+JIuBwP4Ab2yDdd/nfLfkjekMWVeVZgXrwBtNj+TeTNMvWyw+f4G6S6ok1z94uUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dashboard",title:"Dashboard",src:"/dev-guide/static/f70f4f89dd94689543454fdfe66d67c7/3cbba/dashboard.png",srcSet:["/dev-guide/static/f70f4f89dd94689543454fdfe66d67c7/7fc1e/dashboard.png 288w","/dev-guide/static/f70f4f89dd94689543454fdfe66d67c7/a5df1/dashboard.png 576w","/dev-guide/static/f70f4f89dd94689543454fdfe66d67c7/3cbba/dashboard.png 1152w","/dev-guide/static/f70f4f89dd94689543454fdfe66d67c7/afad3/dashboard.png 1469w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)("h3",null,"CLI"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install the latest IBM Garage for Cloud Developer Tools CLI, there has been\nsome minor bug fixes to address issues seen from the first phase of the MOOC\n.   ",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-$bash"}),"npm i -g @garage-catalyst/ibm-garage-cloud-cli\n")))),Object(o.b)("h3",null,"JenkinsFile update"),Object(o.b)("p",null,"You will need to make two code changes to your ",Object(o.b)("inlineCode",{parentName:"p"},"Jenkinsfile")," in your\nindividual app code repositories. The good news is Tekton is going to make\nthis a lot easier for the future with the Tasks being separated from the\npipeline definitions."),Object(o.b)("p",null,"replace ",Object(o.b)("inlineCode",{parentName:"p"},'def workingDir = env.CLOUD_NAME == "openshift" ? "/home/jenkins" : "/home/jenkins/agent"\t')," with ",Object(o.b)("inlineCode",{parentName:"p"},'def workingDir = "/home/jenkins/agent"')),Object(o.b)("p",null,"This change is required to enable support for the newer version of Jenkins that is now installed as part of OpenShift. "),Object(o.b)("p",null,"To prevent the build from not starting on the new Jenkins instances. Replace\n",Object(o.b)("inlineCode",{parentName:"p"},"    return \"a.${jobName}.${buildNumber}\".replace('_', '-').replace('/', '-').replace('-.', '.');\t")," with     ",Object(o.b)("inlineCode",{parentName:"p"},"return \"a.${jobName}${buildNumber}\".replace('_', '-').replace('/', '-').replace('-.', '.');")),Object(o.b)("p",null,"This is generic for all Starter Kit Templates, the templates themselves have\nbeen updated so any new apps created based on them will will work without\nissue. "),Object(o.b)("h3",null,"Registering you pipeline"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Run the following commands for each app that you have previously deployed. ",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc new-project dev-{initials}\nigc namespace dev-{initials}\nigc pipeline -n dev-{initials}\n")))),Object(o.b)("h3",null,"ArgoCD Continue Delivery setup"),Object(o.b)("p",null,"You will need to complete this section of the Session 1,Week 2 material."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm-garage-cloud.github.io/ibm-garage-developer-guide/practical/inventory-part2#using-cd-to-deploy-to-test"}),"Argo CD Setup")),Object(o.b)("h3",null,"AppID Enabling Authentication"),Object(o.b)("p",null,"You will need to complete this section of the Session 1, Week 2 material, the section where you configure AppID"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm-garage-cloud.github.io/ibm-garage-developer-guide/practical/inventory-part2#securing-the-solution-with-app-id"}),"AppID setup")),Object(o.b)("h3",null,"Data in Cloudant"),Object(o.b)("p",null,"You will need to complete this section of the Session 1, Week 2 material to\nrepopulate your database."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm-garage-cloud.github.io/ibm-garage-developer-guide/practical/inventory-part2#add-a-cloudant-integration-to-your-backend-service"}),"Populate Cloudant Database")),Object(o.b)("p",null,"You will need to update the ",Object(o.b)("inlineCode",{parentName:"p"},"mappings.json")," with the new Cloudant Instance\ncredentials"),Object(o.b)("h3",null,"WebHook for CP4Apps"),Object(o.b)("p",null," You will need to configure a web hook for Cloud Pak for Applications "),Object(o.b)("p",null," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm-garage-cloud.github.io/ibm-garage-developer-guide/practical/cp4apps#connect-the-pipeline-to-git"}),"Configure Web Hook")),Object(o.b)("p",null,"Thank you for all the help and support during the Live Sessions. You can\ncontinue to return to the MOOC and walk through the self paced material."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"MOOC Enablement Team")))}u.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-homework-mooc-upgrade-index-mdx-38f605bf6e6ac51c82f3.js.map