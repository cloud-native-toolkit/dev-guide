(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),l=a("Wbzz"),p=a("Xrax"),b=a("k4MR"),c=a("TSYQ"),s=a.n(c),m=a("QH2O"),O=a.n(m),u=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(u.b)("div",{className:s()(O.a.pageHeader,(t={},t[O.a.withTabs]=r.length,t[O.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:O.a.text},a)))))},N=a("BAC9"),d=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,p=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+N.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:N.link,href:p},"Edit this page on GitHub"))):null},g=a("FCXl"),h=a("dI71"),T=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=o()(e,{lower:!0,strict:!0}),r=i===n,p=new RegExp(n+"/?(#.*)?$"),b=a.replace(p,i);return Object(u.b)("li",{key:e,className:s()((t={},t[T.selectedItem]=r,t),T.listItem)},Object(u.b)(l.Link,{className:T.link,to:""+b},e))}));return Object(u.b)("div",{className:T.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:T.list},i))))))},t}(i.a.Component),f=a("MjG9"),C=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,c=void 0===r?{}:r,s=t.relativePagePath,m=t.titleType,O=c.tabs,N=c.title,h=c.theme,T=c.description,y=c.keywords,I=Object(C.a)().interiorTheme,R=Object(l.useStaticQuery)("2456312558").site.pathPrefix,w=R?n.pathname.replace(R,""):n.pathname,E=O?w.split("/").filter(Boolean).slice(-1)[0]||o()(O[0],{lower:!0}):"",L=h||I;return Object(u.b)(b.a,{tabs:O,homepage:!1,theme:L,pageTitle:N,pageDescription:T,pageKeywords:y,titleType:m},Object(u.b)(j,{title:i?Object(u.b)(i,null):N,label:"label",tabs:O,theme:L}),O&&Object(u.b)(v,{slug:w,tabs:O,currentTab:E}),Object(u.b)(f.a,{padded:!0},a,Object(u.b)(d,{relativePagePath:s})),Object(u.b)(g.a,{pageContext:t,location:n,slug:w,tabs:O,currentTab:E}),Object(u.b)(p.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},uzot:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return p})),a.d(t,"default",(function(){return m}));var n,i=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),l=a("013z"),p=(a("T0C+"),a("qKvR"),{}),b=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),c={_frontmatter:p},s=l.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(s,Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},Object(o.b)("p",null,"Deploy a 3 tier Microservice using React, Node.js, and Java")),Object(o.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.25%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(o.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/gvuJi7qEZck",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Prerequisites"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The instructor should ",Object(o.b)("a",{parentName:"li",href:"/dev-guide/workshop/setup"},"Setup Workshop Environment")),Object(o.b)("li",{parentName:"ul"},"The student should ",Object(o.b)("a",{parentName:"li",href:"/dev-guide/workshop/setup#4.-(optional)-auto-configure-terminal-shell"},"Setup CLI and Terminal Shell")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Instructor will provide the following info:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"OpenShift Console URL (OCP_CONSOLE_URL)"),Object(o.b)("li",{parentName:"ul"},"The username and password for OpenShift and Git Server (default values are user1, user2, etc.. for users and ",Object(o.b)("inlineCode",{parentName:"li"},"password")," for password)."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Set ",Object(o.b)("inlineCode",{parentName:"p"},"TOOLKIT_USERNAME")," environment variable replace ",Object(o.b)("inlineCode",{parentName:"p"},"user1")," with assigned usernames"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"TOOLKIT_USERNAME=user1\n\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"(Skip if using KubeAdmin or IBM Cloud)")," Login into OpenShift using ",Object(o.b)("inlineCode",{parentName:"p"},"oc")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If using IBM Cloud cluster then login with your IBM account email and IAM API Key or Token, if using a cluster that was configured with the workshop scripts outside IBM Cloud then use ",Object(o.b)("inlineCode",{parentName:"li"},"user1")," or respective assigned username, and the password is ",Object(o.b)("inlineCode",{parentName:"li"},"password"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc login $OCP_URL -u $TOOLKIT_USERNAME -p password\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Set ",Object(o.b)("inlineCode",{parentName:"p"},"TOOLKIT_PROJECT")," environment variable replace ",Object(o.b)("inlineCode",{parentName:"p"},"project1")," or ",Object(o.b)("inlineCode",{parentName:"p"},"projectx")," based on user id assigned"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"TOOLKIT_PROJECT=project1\n\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a project/namespace using your project prefix, and ",Object(o.b)("inlineCode",{parentName:"p"},"-dev")," and suffix"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"oc sync $TOOLKIT_PROJECT-dev\n\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fork Inventory Sample Application Java"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Open Developer Dashboard from the OpenShift Console"),Object(o.b)("li",{parentName:"ul"},"Select Starter Kits"),Object(o.b)("li",{parentName:"ul"},"Select ",Object(o.b)("strong",{parentName:"li"},"Inventory Service")," (Java)"),Object(o.b)("li",{parentName:"ul"},"Click Fork"),Object(o.b)("li",{parentName:"ul"},"Login into GIT Sever using the provided username and password (ie ",Object(o.b)("inlineCode",{parentName:"li"},"user1")," and ",Object(o.b)("inlineCode",{parentName:"li"},"password"),")"),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"Fork Repository")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Setup environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"GIT_URL")," for the git url using the value from previous step or as following"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"GIT_REPO=inventory-management-svc-solution\nGIT_URL=http://${TOOLKIT_USERNAME}:password@$(oc get route -n tools gogs --template='{{.spec.host}}')/${TOOLKIT_USERNAME}/${GIT_REPO}\necho GIT_URL=${GIT_URL}\n\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a pipeline for the application"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"oc pipeline --tekton ${GIT_URL}#master -p scan-image=false\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Open the url to see the pipeline running in the OpenShift Console")))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Fork Inventory Sample Application TypeScript",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Open Developer Dashboard from the OpenShift Console"),Object(o.b)("li",{parentName:"ul"},"Select Starter Kits"),Object(o.b)("li",{parentName:"ul"},"Select ",Object(o.b)("strong",{parentName:"li"},"Inventory BFF")," (TypeScript)"),Object(o.b)("li",{parentName:"ul"},"Click Fork"),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"Fork Repository"))))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Setup environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"GIT_URL")," for the git url using the value from previous step or as following"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"GIT_REPO=inventory-management-bff-solution\nGIT_URL=http://${TOOLKIT_USERNAME}:password@$(oc get route -n tools gogs --template='{{.spec.host}}')/${TOOLKIT_USERNAME}/${GIT_REPO}\necho GIT_URL=${GIT_URL}\n\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a pipeline for the application"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"oc pipeline --tekton ${GIT_URL}#master -p scan-image=false\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Open the url to see the pipeline running in the OpenShift Console"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fork Inventory Sample Application React"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Open Developer Dashboard from the OpenShift Console"),Object(o.b)("li",{parentName:"ul"},"Select Starter Kits"),Object(o.b)("li",{parentName:"ul"},"Select ",Object(o.b)("strong",{parentName:"li"},"Inventory UI")," (React)"),Object(o.b)("li",{parentName:"ul"},"Click Fork"),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"Fork Repository")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Setup environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"GIT_URL")," for the git url using the value from previous step or as following"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"GIT_REPO=inventory-management-ui-solution\nGIT_URL=http://${TOOLKIT_USERNAME}:password@$(oc get route -n tools gogs --template='{{.spec.host}}')/${TOOLKIT_USERNAME}/${GIT_REPO}\necho GIT_URL=${GIT_URL}\n\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a pipeline for the application"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"oc pipeline --tekton ${GIT_URL}#master -p scan-image=false\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Open the url to see the pipeline running in the OpenShift Console")))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Setup environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"GIT_OPS_URL")," for the git url using the value from previous step or as following"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"GIT_OPS_URL=http://${TOOLKIT_USERNAME}:password@$(oc get route -n tools gogs --template='{{.spec.host}}')/toolkit/gitops\necho GIT_OPS_URL=${GIT_OPS_URL}\n\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Clone the git repository and change directory"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ngit clone $GIT_OPS_URL gitops-inventory\ncd gitops-inventory\n\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Review the ",Object(o.b)("inlineCode",{parentName:"p"},"qa")," directory in the git repository, the directory might be empty if the 3 pipelines are not done yet."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"ls -l qa/${TOOLKIT_PROJECT}/\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Review the ",Object(o.b)("inlineCode",{parentName:"p"},"qa")," directory in the git repository again"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"ls -l qa/${TOOLKIT_PROJECT}/\n")),Object(o.b)("p",{parentName:"li"},"You should see 3 directories"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"inventory-management-bff-solution/\ninventory-management-svc-solution/\ninventory-management-ui-solution/\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Note"),":If you don’t see the directories, this is a good time for a coffee break of 15 minutes until all 3 Pipeline Runs are done."))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Once the Pipeline Runs are done, try to list the directories again. Each directory contains their corresponding yaml manifest files (ie Helm Chart)"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"ls -l qa/${TOOLKIT_PROJECT}/inventory-management-bff-solution\nls -l qa/${TOOLKIT_PROJECT}/inventory-management-svc-solution\nls -l qa/${TOOLKIT_PROJECT}/inventory-management-ui-solution\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Promote the application to ",Object(o.b)("strong",{parentName:"p"},"QA")," using git by creating a manifest yaml (ie Helm Chart) that leverage the Cloud Native Toolkit chart ",Object(o.b)("inlineCode",{parentName:"p"},"argocd-config")," to automate the creation of multiple ArgoCD Applications."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},'git config --local user.email "${TOOLKIT_USERNAME}@example.com"\ngit config --local user.name "${TOOLKIT_USERNAME}"\n\ncat > qa/${TOOLKIT_PROJECT}/Chart.yaml <<EOF\napiVersion: v2\nversion: 1.0.0\nname: project-config-helm\ndescription: Chart to configure ArgoCD with the inventory application\n\ndependencies:\n- name: argocd-config\n  version: 0.16.0\n  repository: https://cloud-native-toolkit.github.io/toolkit-charts\nEOF\n\ncat > qa/${TOOLKIT_PROJECT}/values.yaml <<EOF\nglobal: {}\nargocd-config:\n  repoUrl: "http://gogs.tools:3000/toolkit/gitops.git"\n  project: inventory-qa\n  applicationTargets:\n  - targetRevision: master\n    createNamespace: true\n    targetNamespace: ${TOOLKIT_PROJECT}-qa\n    applications:\n    - name: qa-${TOOLKIT_PROJECT}-inventory-svc\n      path: qa/${TOOLKIT_PROJECT}/inventory-management-svc-solution\n      type: helm\n    - name: qa-${TOOLKIT_PROJECT}-inventory-bff\n      path: qa/${TOOLKIT_PROJECT}/inventory-management-bff-solution\n      type: helm\n    - name: qa-${TOOLKIT_PROJECT}-inventory-ui\n      path: qa/${TOOLKIT_PROJECT}/inventory-management-ui-solution\n      type: helm\nEOF\n\ncat qa/${TOOLKIT_PROJECT}/values.yaml\n\ngit add .\ngit commit -m "Add inventory application to gitops for project ${TOOLKIT_PROJECT}"\ngit push -u origin master\n\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Register the Application in ArgoCD to deploy using GitOps"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Select ArgoCD from the Console Link and login using OpenShift login"),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"NEW APP")),Object(o.b)("li",{parentName:"ul"},"Application Name: ${TOOLKIT_PROJECT}-inventory (ie project1-inventory)"),Object(o.b)("li",{parentName:"ul"},"ArgoCD Project: ",Object(o.b)("inlineCode",{parentName:"li"},"default")),Object(o.b)("li",{parentName:"ul"},"Sync Policy: ",Object(o.b)("inlineCode",{parentName:"li"},"Automatic")," (Check prune resources and self heal)"),Object(o.b)("li",{parentName:"ul"},"Repository URL: ",Object(o.b)("inlineCode",{parentName:"li"},"http://gogs.tools:3000/toolkit/gitops.git")),Object(o.b)("li",{parentName:"ul"},"Revision: ",Object(o.b)("inlineCode",{parentName:"li"},"HEAD")),Object(o.b)("li",{parentName:"ul"},"Path: ",Object(o.b)("inlineCode",{parentName:"li"},"qa/${TOOLKIT_PROJECT}")," (ie qa/project1)"),Object(o.b)("li",{parentName:"ul"},"Cluster: ",Object(o.b)("inlineCode",{parentName:"li"},"in-cluster")),Object(o.b)("li",{parentName:"ul"},"Namespace: ",Object(o.b)("inlineCode",{parentName:"li"},"tools")),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"CREATE")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Review the Applications in ArgoCD"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Filter by Namespace ",Object(o.b)("inlineCode",{parentName:"li"},"${TOOLKIT_PROJECT}-qa")," (ie project1-qa)"),Object(o.b)("li",{parentName:"ul"},"Review Application: inventory-management-svc-solution"),Object(o.b)("li",{parentName:"ul"},"Review Application: inventory-management-bff-solution"),Object(o.b)("li",{parentName:"ul"},"Review Application: inventory-management-ui-solution"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Review the Application in OpenShift"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Switch to Developer perspective"),Object(o.b)("li",{parentName:"ul"},"Select ",Object(o.b)("strong",{parentName:"li"},"Topology")," from the menu"),Object(o.b)("li",{parentName:"ul"},"Switch to project ",Object(o.b)("inlineCode",{parentName:"li"},"${TOOLKIT_PROJECT}-qa")," (ie project1-qa)"),Object(o.b)("li",{parentName:"ul"},"Open the Application from the JavaScript UI and make sure the stocks show up in the browser. Click on the route url on from the ui deployment, or the link on the circle."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Now the Microservices application is ready for the development teams, in some cases each team will own and work with the git repository for the microservices, while the gitops git repository is own by the operations team.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Congratulations you finished this activity, continue with another lab in the workshop"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-workshop-inventory-index-mdx-1ecab4f4f50d70a9dbce.js.map