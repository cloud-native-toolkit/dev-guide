(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),l=a.n(i),o=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),p=a.n(b),u=a("QH2O"),m=a.n(u),d=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(d.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,l=r.subDirectory,s=i+"/edit/"+r.branch+l+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+g.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},j=a("FCXl"),N=a("dI71"),f=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0,strict:!0}),i=r===n,s=new RegExp(n+"/?(#.*)?$"),c=a.replace(s,r);return Object(d.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(d.b)(o.Link,{className:f.link,to:""+c},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:f.list},r))))))},t}(r.a.Component),v=a("MjG9"),x=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,u=t.titleType,m=b.tabs,g=b.title,N=b.theme,f=b.description,T=b.keywords,w=Object(x.a)().interiorTheme,C=Object(o.useStaticQuery)("2456312558").site.pathPrefix,k=C?n.pathname.replace(C,""):n.pathname,A=m?k.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",I=N||w;return Object(d.b)(c.a,{tabs:m,homepage:!1,theme:I,pageTitle:g,pageDescription:f,pageKeywords:T,titleType:u},Object(d.b)(h,{title:r?Object(d.b)(r,null):g,label:"label",tabs:m,theme:I}),m&&Object(d.b)(y,{slug:k,tabs:m,currentTab:A}),Object(d.b)(v.a,{padded:!0},a,Object(d.b)(O,{relativePagePath:p})),Object(d.b)(j.a,{pageContext:t,location:n,slug:k,tabs:m,currentTab:A}),Object(d.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},VkPo:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return j}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),l=a("013z"),o=a("T0C+"),s=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},b=c("InlineNotification"),p=c("Tabs"),u=c("Tab"),m=c("PageDescription"),d=c("AnchorLinks"),h=c("AnchorLink"),g={_frontmatter:s},O=l.a;function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(O,Object(n.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),": An ",Object(i.b)("strong",{parentName:"p"},"environment administrator")," performs the steps on this page. See ",Object(i.b)("a",{parentName:"p",href:"/dev-guide/admin/plan-installation#roles"},"Plan Installation > Roles")," for the overview of the roles involved.")),Object(i.b)(p,{mdxType:"Tabs"},Object(i.b)(u,{label:"Prerequisites",mdxType:"Tab"},Object(i.b)(m,{mdxType:"PageDescription"},Object(i.b)("p",null,"Prepare to run Terraform to install the Development Tools into an existing IBM Cloud managed cluster")),Object(i.b)("p",null,"The ",Object(i.b)(o.a,{name:"env",mdxType:"Globals"})," is installed by an environment administrator, who will run the scripts to create the environment in an IBM Cloud account. The scripts will run as the environment administrator’s user, so the user needs the permissions described in ",Object(i.b)("a",{parentName:"p",href:"/dev-guide/admin/plan-installation"},"Plan Installation"),". These instructions explain how to configure and run the Terraform ",Object(i.b)("a",{parentName:"p",href:"/dev-guide/admin/terraform"},"infrastructure-as-code")," (IasC) scripts to create the ",Object(i.b)(o.a,{name:"env",mdxType:"Globals"}),"."),Object(i.b)(b,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),": The Terraform scripts will clean up the cluster to remove any existing resources that overlap with the resources\nprovisioned by the scripts. You will need to remember to remove any IBM Cloud services that were previously\ncreated."),Object(i.b)("p",null,"Use the helper script ",Object(i.b)("inlineCode",{parentName:"p"},"terraform/scripts/destroy-service.sh")," to help automate the deletion You can also run it\nto remove all the services beside ",Object(i.b)("strong",{parentName:"p"},"PostgreSQL")," ",Object(i.b)("inlineCode",{parentName:"p"},"./destroy-services.sh postgres"))),Object(i.b)("h3",null,"Prepare local system"),Object(i.b)("p",null,"To run the scripts, install the client tools needed to use the ",Object(i.b)(o.a,{name:"env",mdxType:"Globals"}),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Install the ",Object(i.b)("a",{parentName:"li",href:"/dev-guide/getting-started/prereqs"},"Prerequisites"))),Object(i.b)("h3",null,"Test login"),Object(i.b)("p",null,"Optional: The environment administrator must be able to log into IBM Cloud, specifying the account, region, and resource group. That is effectively what the scripts will do when they run, using the environment administrator’s API key."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Log in to IBM Cloud using the CLI",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"ibmcloud login -a cloud.ibm.com -r <region> -g <resource-group>\n")))),Object(i.b)("h3",null,"Confirm resources"),Object(i.b)("p",null,"Optional: To help confirm that the account has the resources the scripts will require (see ",Object(i.b)("a",{parentName:"p",href:"/dev-guide/admin/plan-installation"},"Plan Installation"),"), the environment administrator may log into the account view the resources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cloud.ibm.com/classic/network/vlans"},"Existing VLANs")," — Verify that the two VLANs specified are in the list and that they are defined in the proper data center"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cloud.ibm.com/account/resource-groups"},"Existing resource groups")," — Having logged in using the environment’s resource group, it should certainly be in the list"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cloud.ibm.com/kubernetes/clusters"},"Existing Kubernetes clusters")," — See what clusters (Kubernetes and OpenShift) already exist in the resource group and confirm one does not already exist for the environment you want to create")),Object(i.b)("h3",null,"Confirm permissions"),Object(i.b)("p",null,"Optional: To help confirm that the scripts will have the permissions they’ll require (see the administrators access group in ",Object(i.b)("a",{parentName:"p",href:"/dev-guide/admin/plan-installation"},"Plan Installation"),"), the environment administrator may log into the account and test creating a couple of resources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cloud.ibm.com/kubernetes/catalog/cluster/create"},"Create a cluster")," — Make it single-zone, and specify the proper data center and resource group"),Object(i.b)("li",{parentName:"ul"},"Create a namespace in the image registry"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cloud.ibm.com/catalog/services/cloudant"},"Create an instance of Cloudant")," — Select a paid plan and specify the proper region and resource group"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cloud.ibm.com/observe/monitoring/create"},"Create an instance of Sysdig")," — Select a paid plan and specify the proper region and resource group")),Object(i.b)("p",null,"As long as the user can create these resources successfully, the scripts should be able to as well. You may delete these test resources.")),Object(i.b)(u,{label:"Download",mdxType:"Tab"},Object(i.b)(m,{mdxType:"PageDescription"},Object(i.b)("p",null,"Obtain the Terraform infrastructure-as-code (IasC) scripts that will install the tools into your IBM Cloud managed cluster")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Clone the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"},"ibm-garage-iteration-zero")," Git repository to your local filesystem"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:ibm-garage-cloud/ibm-garage-iteration-zero.git\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Switch to the cloned directory"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cd ibm-garage-iteration-zero\n"))))),Object(i.b)(u,{label:"API key",mdxType:"Tab"},Object(i.b)(m,{mdxType:"PageDescription"},Object(i.b)("p",null,"Configure the key the CLI uses to create cloud services")),Object(i.b)("p",null,"The installation scripts need an API key to authenticate to IBM Cloud.\nThe following steps create the required API key and put them into a properties file."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.properties")," property file looks like this:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"classic.username=<CLASSIC_USERNAME>\nclassic.api.key=<CLASSIC_API_KEY>\nibmcloud.api.key=<IBMCLOUD_API_KEY>\n")))),Object(i.b)("p",null,"Since the cluster already exists, we’ll only need to set the ",Object(i.b)("inlineCode",{parentName:"p"},"ibmcloud.api.key")," property."),Object(i.b)("h3",null,"Step A. Create the credentials.properties file"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Inside the ",Object(i.b)("inlineCode",{parentName:"p"},"ibm-garage-iteration-zero")," folder, copy ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.template")," to a file named ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.properties"),"."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cd ibm-garage-iteration-zero\ncp credentials.template credentials.properties\n")),Object(i.b)("p",{parentName:"li"},"  The ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.properties")," file is already listed in the ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore")," file so that the file containing\nyour private API key will not be pushed to the server repository."))),Object(i.b)("h3",null,"Step B. Set the IBM Cloud API key"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Follow these instructions to create an IBM Cloud API key:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/iam?topic=iam-userapikey",title:"Managing user API keys"},"Managing user API keys")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Edit the ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.properties")," file to set the value for the ",Object(i.b)("inlineCode",{parentName:"p"},"ibmcloud.api.key")," property.")))),Object(i.b)(u,{label:"Configuration",mdxType:"Tab"},Object(i.b)(m,{mdxType:"PageDescription"},Object(i.b)("p",null,"Configure the properties describing the environment")),Object(i.b)("p",null,"The settings for installing the Developer Tools go in a single property file\nin the ",Object(i.b)("inlineCode",{parentName:"p"},"./terraform/settings")," directory:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"environment.tfvars")," — Properties for installing the Developer Tools")),Object(i.b)("p",null,"Follow the instructions below to set the existing cluster’s details in the ",Object(i.b)("inlineCode",{parentName:"p"},"environment.tfvars")," file."),Object(i.b)("h3",null,"Environment variables"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"environment.tfvars")," properties will be used to install the Development Tools."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Typical values look like this:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},'# The type of cluster that will be created/used (kubernetes or openshift)\ncluster_type="openshift"\n# Flag indicating if we are using an existing cluster or creating a new one\ncluster_exists="true"\n\n# The prefix that should be applied to the cluster name and service names (if not provided\n# explicitly). If not provided then the resource_group_name will be used as the prefix.\n#name_prefix="<name prefix for cluster and services>"\n#name_prefix="garage-cloud-surge"\n\n# The cluster name can be provided (particularly if using an existing cluster). The value\n# for cluster name used by the scripts will be set in the following order of presidence:\n# - "${cluster_name}"\n# - "${name_prefix}-cluster"\n# - "${resource_group_name}-cluster"\n#cluster_name="<cluster name>"\ncluster_name="garage-cloud-surge-ocp-cluster"\n\nresource_group_name="garage-cloud-surge"\nvlan_region="us-south"\n')))),Object(i.b)("p",null),Object(i.b)("p",null,"Set them based on the existing cluster:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resource_group_name")," — The existing cluster’s resource group"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"vlan_region")," — The existing cluster’s region"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cluster_exists")," — Set to ",Object(i.b)("inlineCode",{parentName:"li"},"true")," for an existing cluster"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cluster_type")," — Specify the existing cluster’s type",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"kubernetes")," — Kubernetes"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"openshift")," — OpenShift v3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"ocp3")," — OpenShift v3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"ocp4")," — OpenShift v4"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"crc")," — CodeReady Containers"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cluster_name")," — The existing cluster’s name"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"registry_namespace")," — The namespace that will be created with the IBM Container Registry. If not provided\nthe value will default to the ",Object(i.b)("inlineCode",{parentName:"li"},"resource_group_name")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"logdna_exists")," — “true” or “false” flag indicating that the logdna instance already exists and a new one\nshould not be provisioned"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"logdna_name")," — The name of the logdna instance, particularly if one already exists. If not provided the name\nwill be generated as ",Object(i.b)("inlineCode",{parentName:"li"},"{prefix-name || resource-group-name}-logdna")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sysdig_exists")," — “true” or “false” flag indicating that the sysdig instance already exists and a new one\nshould not be provisioned"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sysdig_name")," — The name of the sysdig instance, particularly if one already exists. If not provided the name\nwill be generated as ",Object(i.b)("inlineCode",{parentName:"li"},"{prefix-name || resource-group-name}-sysdig"))),Object(i.b)("p",null),Object(i.b)(b,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),": The values for ",Object(i.b)("inlineCode",{parentName:"p"},"resource_group_name")," and ",Object(i.b)("inlineCode",{parentName:"p"},"cluster_name")," can be found on the Resource List\npage in the IBM Cloud Console - ",Object(i.b)("a",{parentName:"p",href:"https://cloud.ibm.com/resources"},"https://cloud.ibm.com/resources"))),Object(i.b)("p",null),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABLElEQVQoz51RWU7FMAzsCTkAd+EEfHILLvN+4OMJpLaI7mmTdF+SDLZfewEiWbEn9mg8iZxz6PteYlkW/Oe8vANPr8DzGxBN04S6adC2LYwxQmytldzaHsMwSM05Y53WUnedPnGDJOvw+V3i46tAxARpmqIoS5QUeVGgqioopXC73XC/3wmvUBKWZRniOEZd10iSBHmeo6D+/PcHqi7QqgrRPM8YiJQJWM22bTiOAz4EUtFBk6p93yXYHn7j4PzCdqp3wTwi9q0l+ayQ1w9EFMgXvq9zZfJ2hg/+vAOcf3SwGCG0dhCPxnGUj5FG70Uxx0EqGOMBY6wom+bxsY0LmDcvhOu60spEsNGH1OwdeaO1OQmD2NA0iggOGWB72Dce7IySeneAHp28L8uKP6buGbjtKksYAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Resource list",title:"Resource list",src:"/dev-guide/static/f01c393435ac78a82739776989e5539b/3cbba/cloud.ibm.com-resources.png",srcSet:["/dev-guide/static/f01c393435ac78a82739776989e5539b/7fc1e/cloud.ibm.com-resources.png 288w","/dev-guide/static/f01c393435ac78a82739776989e5539b/a5df1/cloud.ibm.com-resources.png 576w","/dev-guide/static/f01c393435ac78a82739776989e5539b/3cbba/cloud.ibm.com-resources.png 1152w","/dev-guide/static/f01c393435ac78a82739776989e5539b/764ce/cloud.ibm.com-resources.png 1295w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null)),Object(i.b)(u,{label:"Run",mdxType:"Tab"},Object(i.b)(m,{mdxType:"PageDescription"},Object(i.b)("p",null,"Run the scripts that create the environment")),Object(i.b)("p",null,"Having configured the ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.properties")," and ",Object(i.b)("inlineCode",{parentName:"p"},"environment.tfvars")," properties files, we are now ready to kick off the installation."),Object(i.b)("p",null,"Launch a ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ibm-garage-cloud/ibm-garage-cli-tools",title:"Cloud Garage Tools Docker image"},"Developer Tools Docker container"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Run the following command to run the Docker container:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"./launch.sh\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"This will install the Cloud Garage Tools Docker image and exec shell into the running container. The container will\nmount the filesystem’s ",Object(i.b)("inlineCode",{parentName:"p"},"./terraform/")," directory as ",Object(i.b)("inlineCode",{parentName:"p"},"/home/devops/src/"),". Once the Docker container has started and\nthe script has exec shelled into it, you will see an IBM Garage banner. This will help you identify you are running\ninside the Docker image that has just mounted your file system."),Object(i.b)("p",{parentName:"li"}," For more information on the ",Object(i.b)("strong",{parentName:"p"},"Developer Tools Image")," see the following guide link below.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Create the ",Object(i.b)(o.a,{name:"env",mdxType:"Globals"})),Object(i.b)("p",{parentName:"li"},"  The supplied Terraform script is ready to run using the settings in the properties files.\nYou optionally can extend or modify the scripts and tailor them for your project’s specific needs."))),Object(i.b)(b,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),": If you run this approach multiple times remember to delete any pre existing cloud services that were created previously")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Run this script in the container:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"./runTerraform.sh\n")),Object(i.b)("p",{parentName:"li"},"  This script will create the ",Object(i.b)(o.a,{name:"env",mdxType:"Globals"}),"."),Object(i.b)("p",{parentName:"li"},"  If you executed the script previously for the current cluster configuration and the workspace directory still\nexists then you will be prompted to either keep or delete the workspace directory. Keep the workspace directory if\nyou want to use the state from the previous run as a starting point to either add or remove configuration. Delete\nthe workspace if you want to start with a clean install of the Toolkit."),Object(i.b)("p",{parentName:"li"},"  The script will verify some basic settings and prompt if you want to proceed. After you select ",Object(i.b)("strong",{parentName:"p"},"Y")," (for yes),\nthe Terraform Apply process will begin to create the infrastructure and services for your environment."),Object(i.b)("p",{parentName:"li"},"  Both of the prompts can be skipped via command-line arguments passed to the script. To bypass the workspace\nprompt, provided either ",Object(i.b)("inlineCode",{parentName:"p"},"--delete")," or ",Object(i.b)("inlineCode",{parentName:"p"},"--keep")," to either delete or keep the workspace, respectively. To\nbypass the verification prompt provide ",Object(i.b)("inlineCode",{parentName:"p"},"--auto-approve")," and the script will automatically answer ",Object(i.b)("inlineCode",{parentName:"p"},"Yes")," to\nthe prompt and start the terraform process."),Object(i.b)("p",{parentName:"li"},"  Installing the tools into an existing cluster takes about 30 minutes."),Object(i.b)(b,{kind:"success",mdxType:"InlineNotification"},Object(i.b)("p",{parentName:"li"},"  You should now have your ",Object(i.b)(o.a,{name:"env",mdxType:"Globals"}),"\nfully provisioned and configured. Enjoy!")))),Object(i.b)("h3",null,Object(i.b)(o.a,{name:"env",mdxType:"Globals"})),Object(i.b)("p",null,"Once the Terraform scripts have finished, you can see the resources that the scripts created in IBM Cloud:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In the IBM Cloud console, open the ",Object(i.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/overview?topic=overview-ui#dashboardview",title:"Managing resources in the resource list"},"Resource List")),Object(i.b)("li",{parentName:"ul"},"On the Resource List page, filter by your Resource Group (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"appdev-team"),")"),Object(i.b)("li",{parentName:"ul"},"You should see these resources listed:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Clusters"),": 1, either Kubernetes or OpenShift"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Services"),": 5 or so, such as PostgreSQL, LogDNA, etc."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Storage"),": 1, an instance of Cloud Object Storage"))),Object(i.b)("li",{parentName:"ul"},"Select the cluster and open the Kubernetes dashboard or OpenShift web console. You should see:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Namespaces: ",Object(i.b)("inlineCode",{parentName:"li"},"tools"),", ",Object(i.b)("inlineCode",{parentName:"li"},"dev"),", ",Object(i.b)("inlineCode",{parentName:"li"},"test"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"staging")),Object(i.b)("li",{parentName:"ul"},"Deployments in the ",Object(i.b)("inlineCode",{parentName:"li"},"tools")," namespace: ",Object(i.b)("inlineCode",{parentName:"li"},"developer-dashboard"),", ",Object(i.b)("inlineCode",{parentName:"li"},"jenkins"),", etc.")))),Object(i.b)("p",null,"To get started with code use the following guides:"),Object(i.b)(d,{mdxType:"AnchorLinks"},Object(i.b)(h,{to:"/getting-started-day-1/deploy-app",mdxType:"AnchorLink"},"Deploy First App"),Object(i.b)(h,{to:"/tools",mdxType:"AnchorLink"},"Guides"),Object(i.b)(h,{to:"/tools/tools-image",mdxType:"AnchorLink"},"Developer Tools Image")),Object(i.b)("h3",null,"Possible issues"),Object(i.b)("p",null,"If you find that that the Terraform provisioning has failed, try re-running the ",Object(i.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script again.\nThe state will be saved and Terraform will try and apply the configuration to match the desired end state."),Object(i.b)("p",null,"If you find that some of the services have failed to create in the time allocated, you can try this:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Manually delete the service instances in your resource group"),Object(i.b)("li",{parentName:"ul"},"Delete the ",Object(i.b)("inlineCode",{parentName:"li"},"workspace")," directory (which will remove any state that has been created by Terraform)"),Object(i.b)("li",{parentName:"ul"},"Re-run the ",Object(i.b)("inlineCode",{parentName:"li"},"runTerraform.sh")," script",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"rm -rf workspace\n./runTerraform.sh\n")))))))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-installation-existing-index-mdx-8088d5fa7ce891d567e1.js.map