(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),l=a.n(b),i=a("Wbzz"),c=a("Xrax"),o=a("k4MR"),p=a("TSYQ"),d=a.n(p),s=a("QH2O"),m=a.n(s),O=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(O.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=b.length,t[m.a.darkMode]="dark"===n,t))},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12"},Object(O.b)("h1",{id:"page-title",className:m.a.text},a)))))},u=a("BAC9"),N=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,l=r.subDirectory,c=b+"/edit/"+r.branch+l+"/src/pages"+t;return b?Object(O.b)("div",{className:"bx--row "+u.row},Object(O.b)("div",{className:"bx--col"},Object(O.b)("a",{className:u.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),h=a("9Hrx"),f=a("I8xM"),C=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0,strict:!0}),b=r===n,c=new RegExp(n+"/?(#.*)?$"),o=a.replace(c,r);return Object(O.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(O.b)(i.Link,{className:f.link,to:""+o},e))}));return Object(O.b)("div",{className:f.tabsContainer},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(O.b)("nav",null,Object(O.b)("ul",{className:f.list},r))))))},t}(r.a.Component),y=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,p=void 0===b?{}:b,d=t.relativePagePath,s=t.titleType,m=p.tabs,u=p.title,h=p.theme,f=p.description,T=p.keywords,w=Object(v.a)().interiorTheme,x=Object(i.useStaticQuery)("2456312558").site.pathPrefix,k=x?n.pathname.replace(x,""):n.pathname,_=m?k.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",P=h||w;return Object(O.b)(o.a,{tabs:m,homepage:!1,theme:P,pageTitle:u,pageDescription:f,pageKeywords:T,titleType:s},Object(O.b)(j,{title:r?Object(O.b)(r,null):u,label:"label",tabs:m,theme:P}),m&&Object(O.b)(C,{slug:k,tabs:m,currentTab:_}),Object(O.b)(y.a,{padded:!0},a,Object(O.b)(N,{relativePagePath:d})),Object(O.b)(g.a,{pageContext:t,location:n,slug:k,tabs:m,currentTab:_}),Object(O.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},umc3:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a("k1TG"),r=a("8o2o"),b=(a("q1tI"),a("7ljp")),l=a("013z"),i=a("T0C+"),c=(a("qKvR"),{}),o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",t)}},p=o("PageDescription"),d=o("Tabs"),s=o("Tab"),m=o("InlineNotification"),O={_frontmatter:c},j=l.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(j,Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)(p,{mdxType:"PageDescription"},Object(b.b)("p",null,"Steps to provision a new ",Object(b.b)(i.a,{name:"ic",mdxType:"Globals"}),"-managed cluster\nrunning on VPC infrastructure using the ",Object(b.b)(i.a,{name:"shortName",mdxType:"Globals"}),".")),Object(b.b)("p",null,"See the following for instructions on how to\nprovision ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"./ibm-cloud-on-classic"}),"new ",Object(b.b)(i.a,{name:"ic",mdxType:"Globals"}),"-managed clusters running on classic\ninfrastructure")),Object(b.b)(d,{mdxType:"Tabs"},Object(b.b)(s,{label:"Private Catalog",open:"true",mdxType:"Tab"},Object(b.b)(m,{mdxType:"InlineNotification"},Object(b.b)("p",null,"These steps assume the private catalog has been created and populated with the ",Object(b.b)(i.a,{name:"shortName",mdxType:"Globals"})," tiles during\nthe ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../prepare-account#3.-create-the-private-catalog"}),"prepare the account")," steps.")),Object(b.b)("br",null),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Log in to the ",Object(b.b)(i.a,{name:"ic",mdxType:"Globals"})," Console.")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Select ",Object(b.b)("strong",{parentName:"p"},"Catalog")," from the top menu.")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"From the side menu, select your catalog from the drop-down list (e.g. ",Object(b.b)("inlineCode",{parentName:"p"},"Team Catalog"),"). (",Object(b.b)("strong",{parentName:"p"},"IBM Cloud catalog")," should be selected initially.)")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Click ",Object(b.b)("strong",{parentName:"p"},"Private")," on the side menu to see the private catalog entries")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Click on the ",Object(b.b)("strong",{parentName:"p"},"220. Cloud-Native VPC cluster")," tile")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Enter values for the variables list provided."),Object(b.b)("table",{parentName:"li"},Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"Variable")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"Description")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"eg. Value")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ibmcloud_api_key")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The API key from IBM Cloud Console that has ClusterAdmin access and supports service creation"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"{guid API key from Console}"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"resource_group_name")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The existing resource group in the account where the cluster will be created"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"dev-team-one"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"region")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The region where the cluster will be provisioned."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"us-east"),", ",Object(b.b)("inlineCode",{parentName:"td"},"eu-gb"),", etc")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cluster_name")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the cluster that will be provisioned."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"dev-team-one-iks-117-vpc"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"vpc_zone_names")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A comma-separated list of the VPC zones that should be used for worker nodes."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"us-south-1")," or ",Object(b.b)("inlineCode",{parentName:"td"},"us-east-1,us-east-2"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cluster_type")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The type of cluster into which the toolkit will be installed. The default is ",Object(b.b)("inlineCode",{parentName:"td"},"OpenShift 4.5"),"."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"kubernetes"),", ",Object(b.b)("inlineCode",{parentName:"td"},"ocp3"),", ",Object(b.b)("inlineCode",{parentName:"td"},"ocp4"),", ",Object(b.b)("inlineCode",{parentName:"td"},"ocp44"),", or ",Object(b.b)("inlineCode",{parentName:"td"},"ocp45"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"flavor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The flavor of machine that should be provisioned for each worker. Defaults to ",Object(b.b)("inlineCode",{parentName:"td"},"mx2.4x32"),"."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"mx2.4x32"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cluster_worker_count")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The number of worker nodes that should be provisioned for each zone. Defaults to ",Object(b.b)("inlineCode",{parentName:"td"},"3")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"3"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cluster_provision_cos")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag indicating that a new Object Storage instance should be provisioned. Defaults to ",Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")," or ",Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cos_name")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the Object Storage instance (If ",Object(b.b)("inlineCode",{parentName:"td"},"cluster_provision_cose")," is set to ",Object(b.b)("inlineCode",{parentName:"td"},"true")," this value is required"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cntk-showcase-cos")))))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Check the box to accept the ",Object(b.b)("strong",{parentName:"p"},"Apache 2")," license for the tile.")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Click ",Object(b.b)("strong",{parentName:"p"},"Install")," to start the install process"))),Object(b.b)("p",null,"This will kick off the installation of the ",Object(b.b)(i.a,{name:"shortName",mdxType:"Globals"})," using an\nIBM Cloud Private Catalog Tile. The progress can be reviewed from the\n",Object(b.b)("strong",{parentName:"p"},"Schematics")," entry")),Object(b.b)(s,{label:"Iteration Zero",mdxType:"Tab"},Object(b.b)("h3",null,"A. Download the Iteration Zero scripts"),Object(b.b)("br",null),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Clone the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"}),"ibm-garage-iteration-zero")," Git repository to your local filesystem"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"git clone git@github.com:ibm-garage-cloud/ibm-garage-iteration-zero.git\n")))),Object(b.b)("h3",null,"B. Configure the credentials"),Object(b.b)("br",null),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"In a terminal, change to the ",Object(b.b)("inlineCode",{parentName:"p"},"ibm-garage-iteration-zero")," cloned directory"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"cd ibm-garage-iteration-zero\n"))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Copy the ",Object(b.b)("inlineCode",{parentName:"p"},"credentials.template")," file to a file named ",Object(b.b)("inlineCode",{parentName:"p"},"credentials.properties")),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"cp credentials.template credentials.properties\n")),Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Note:")," ",Object(b.b)("inlineCode",{parentName:"p"},"credentials.properties")," is already listed in ",Object(b.b)("inlineCode",{parentName:"p"},".gitignore")," to prevent the\nprivate credentials from being committed to the git repository")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Update the value for the ",Object(b.b)("inlineCode",{parentName:"p"},"ibmcloud.api.key")," property in ",Object(b.b)("inlineCode",{parentName:"p"},"credentials.properties")," with your ",Object(b.b)(i.a,{name:"ic",mdxType:"Globals"})," API key"),Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Note:")," The API key should have been set up during ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/getting-started-0/prepare-account"}),"plan installation"),"."))),Object(b.b)("h3",null,"C. Configure the environment variables"),Object(b.b)("br",null),Object(b.b)("p",null,"The settings for creating the ",Object(b.b)(i.a,{name:"shortName",mdxType:"Globals"})," on ",Object(b.b)(i.a,{name:"ic",mdxType:"Globals"})," are set in the ",Object(b.b)("inlineCode",{parentName:"p"},"environment-ibmcloud.tfvars"),"\nfile in the ",Object(b.b)("inlineCode",{parentName:"p"},"./terraform/settings")," directory of the ",Object(b.b)("inlineCode",{parentName:"p"},"ibm-garage-iteration-zero")," repository."),Object(b.b)("p",null,"There are a number of values that can be applied in the file, some required and some optional. Consult with\nthe following table to determine which values should be used:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"Variable")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"Required?")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"Description")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"eg. Value")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cluster_type")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The type of cluster into which the toolkit will be installed"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"kubernetes"),", ",Object(b.b)("inlineCode",{parentName:"td"},"ocp3"),", ",Object(b.b)("inlineCode",{parentName:"td"},"ocp4")," or ",Object(b.b)("inlineCode",{parentName:"td"},"ocp44"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cluster_exists")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag indicating if the cluster already exists. (",Object(b.b)("inlineCode",{parentName:"td"},"false")," means the cluster should be provisioned)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"vpc_cluster")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag indicating that the cluster has been built on VPC infrastructure. Defaults to ",Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"name_prefix")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The prefix that should be applied for any resources that are provisioned. Defaults to ",Object(b.b)("inlineCode",{parentName:"td"},"{resource_group_name}")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"dev-one"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cluster_name")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the cluster (If ",Object(b.b)("inlineCode",{parentName:"td"},"cluster_exists")," is set to ",Object(b.b)("inlineCode",{parentName:"td"},"true")," then this name should match an existing cluster). Defaults to ",Object(b.b)("inlineCode",{parentName:"td"},"{prefix_name}-cluster")," or ",Object(b.b)("inlineCode",{parentName:"td"},"{resource_group_name}-cluster")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"dev-team-one-iks-117-vpc"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"resource_group_name")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Existing resource group in the account where the cluster has been created"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"dev-team-one"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"region")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The region where the cluster has been/will be provisioned"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"us-east"),", ",Object(b.b)("inlineCode",{parentName:"td"},"eu-gb"),", etc")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"vpc_zone_names")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A comma-separated list of the VPC zones that should be used for worker nodes. This value is required if ",Object(b.b)("inlineCode",{parentName:"td"},"cluster_exists")," is set to ",Object(b.b)("inlineCode",{parentName:"td"},"false")," and ",Object(b.b)("inlineCode",{parentName:"td"},"vpc_cluster")," is set to ",Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"us-south-1")," or ",Object(b.b)("inlineCode",{parentName:"td"},"us-east-1,us-east-2"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"provision_logdna")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag indicating that a new instance of LogDNA should be provisioned. Defaults to ",Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")," or ",Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"logdna_name")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the LogDNA instance (If ",Object(b.b)("inlineCode",{parentName:"td"},"provision_logdna")," is set to ",Object(b.b)("inlineCode",{parentName:"td"},"false")," this value is used by the scripts to bind the existing LogDNA instance to the cluster)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cntk-showcase-logdna"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"logdna_region")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The region where the existing LogDNA instance has been provisioned. If not provided will default to the cluster ",Object(b.b)("inlineCode",{parentName:"td"},"region"),"."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"us-east"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"provision_sysdig")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag indicating that a new instance of Sysdig should be provisioned. Defaults to ",Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")," or ",Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"sysdig_name")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the Sysdig instance (If ",Object(b.b)("inlineCode",{parentName:"td"},"provision_sysdig")," is set to ",Object(b.b)("inlineCode",{parentName:"td"},"false")," this value is used by the scripts to bind the existing Sysdig instance to the cluster)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cntk-showcase-sysdig"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"sysdig_region")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The region where the existing Sysdig instance has been provisioned. If not provided will default to the cluster ",Object(b.b)("inlineCode",{parentName:"td"},"region"),"."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"us-east"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cos_name")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the Cloud Object Storage instance that will be used with the OCP cluster."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"registry_type")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The type of the Container Registry that will be used with the cluster. Valid values are ",Object(b.b)("inlineCode",{parentName:"td"},"icr"),", ",Object(b.b)("inlineCode",{parentName:"td"},"ocp"),", ",Object(b.b)("inlineCode",{parentName:"td"},"other"),", or ",Object(b.b)("inlineCode",{parentName:"td"},"none"),"."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"registry_namespace")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The namespace that should be used in the IBM Container Registry. Defaults to ",Object(b.b)("inlineCode",{parentName:"td"},"{resource_group_name}")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"dev-team-one-registry-2020"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"registry_host")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The host name of the image registry (e.g. us.icr.io or quay.io). This value is only used if the registry_type is set to “other”"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"quay.io"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"registry_user")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The username needed to access the image registry. This value is only used if the registry_type is set to “other”"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"{username}"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"registry_password")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The password needed to access the image registry. This value is required if the registry_type is set to “other”."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"{password}"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"source_control_type")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The type of source control system (github, gitlab, or none)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"github"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"source_control_url")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The url to the source control system"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"https://github.com"))))),Object(b.b)("br",null),Object(b.b)("p",null,"Update ",Object(b.b)("inlineCode",{parentName:"p"},"environment-ibmcloud.tfvars")," with the appropriate values for your installation. Particularly, be sure to set the\nfollowing values in order to provision a VPC cluster:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"cluster_exists")," to ",Object(b.b)("inlineCode",{parentName:"li"},"false")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"vpc_cluster")," to ",Object(b.b)("inlineCode",{parentName:"li"},"true"))),Object(b.b)("h3",null,"D. (Optional) Customize the installed components"),Object(b.b)("br",null),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"terraform/stages")," directory contains the default set of stages that define the\nmodules that will be applied to the environment. The stages can be customized to change\nthe makeup of the environment that is provisioned by either removing or adding stages from/to the\n",Object(b.b)("inlineCode",{parentName:"p"},"terraform/stages")," directory."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")," The stages occasionally have dependencies on other stages (e.g. most all\ndepend on the cluster module, many depend on the namespace module, etc.) so be aware of those\ndependencies as you start making changes. Dependencies are reflected in the ",Object(b.b)("inlineCode",{parentName:"p"},"module.{stage name}")," references\nin the stage variable list."),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"terraform/stages/catalog")," directory contains some optional\nstages that are prep-configured and can be dropped into the ",Object(b.b)("inlineCode",{parentName:"p"},"terraform/stages")," directory. Other\nmodules are available from the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/garage-terraform-modules"}),"Garage Terraform Modules"),"\ncatalog and can be added as stages to the directory as well. Since this is Terraform,\nany other Terraform scripts and modules can be added to the ",Object(b.b)("inlineCode",{parentName:"p"},"terraform/stages")," directory\nas desired."),Object(b.b)("h3",null,"E. Run the installation"),Object(b.b)("br",null),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Open a terminal to the ",Object(b.b)("inlineCode",{parentName:"p"},"ibm-garage-iteration-zero")," directory")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Launch a ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cli-tools",title:"Cloud Garage Tools Docker image"}),"Developer Tools Docker container")," from which the Terraform scripts will be run"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"./launch.sh\n")),Object(b.b)("p",{parentName:"li"},"This will download the Cloud Garage Tools Docker image that contains all the necessary tools to execute Terraform scripts\nand exec shell into the running container. When the container starts it\nmounts the filesystem’s ",Object(b.b)("inlineCode",{parentName:"p"},"./terraform/")," directory as ",Object(b.b)("inlineCode",{parentName:"p"},"/home/devops/src/")," and loads the values from the\n",Object(b.b)("inlineCode",{parentName:"p"},"credentials.properties")," file as environment variables.")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Apply the Terraform by running the provided ",Object(b.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"./runTerraform.sh\n")),Object(b.b)("p",{parentName:"li"},"This script collects the values provided in the ",Object(b.b)("inlineCode",{parentName:"p"},"environment-ibmcloud.tfvars")," and the\nstages defined in the ",Object(b.b)("inlineCode",{parentName:"p"},"terraform/stages")," to build the Terraform workspace. Along the way it\nwill prompt for a couple pieces of information."),Object(b.b)("ol",{parentName:"li"},Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Type of installation: ",Object(b.b)("inlineCode",{parentName:"p"},"cluster")),Object(b.b)("p",{parentName:"li"},"This prompt can be skipped by providing ",Object(b.b)("inlineCode",{parentName:"p"},"--cluster")," as an argument to ",Object(b.b)("inlineCode",{parentName:"p"},"./runTerraform.sh"))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Handling of an old workspace (if applicable): ",Object(b.b)("inlineCode",{parentName:"p"},"keep")," or ",Object(b.b)("inlineCode",{parentName:"p"},"delete")),Object(b.b)("p",{parentName:"li"},"If you executed the script previously for the current cluster configuration and the workspace directory still\nexists then you will be prompted to either keep or delete the workspace directory. Keep the workspace directory if\nyou want to use the state from the previous run as a starting point to either add or remove configuration. Delete\nthe workspace if you want to start with a clean install of the Toolkit."),Object(b.b)("p",{parentName:"li"},"This prompt can be skipped by providing ",Object(b.b)("inlineCode",{parentName:"p"},"--delete")," or ",Object(b.b)("inlineCode",{parentName:"p"},"--keep")," as an argument to ",Object(b.b)("inlineCode",{parentName:"p"},"./runTerraform.sh"))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Verify the installation configuration"),Object(b.b)("p",{parentName:"li"},"The script will verify some basic settings and prompt if you want to proceed. After you select ",Object(b.b)("strong",{parentName:"p"},"Y")," (for yes),\nthe Terraform Apply process will begin to create the infrastructure and services for your environment."),Object(b.b)("p",{parentName:"li"},"This prompt can be skipped by providing ",Object(b.b)("inlineCode",{parentName:"p"},"--auto-approve")," as an argument to ",Object(b.b)("inlineCode",{parentName:"p"},"./runTerraform.sh")))),Object(b.b)("p",{parentName:"li"},"Creating a new cluster takes about 1.5 hours on average (but can also take considerably longer)\nand the rest of the process takes about 30 minutes."))))),Object(b.b)("h2",null,"Troubleshooting"),Object(b.b)("p",null,"If you find that the Terraform provisioning has failed, for Private Catalog delete the workspace and for Iteration Zero  try re-running the ",Object(b.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script again.\nThe state will be saved and Terraform will try and apply the configuration to match the desired end state."),Object(b.b)("p",null,"If you find that some of the services have failed to create in the time allocated, try the following with Iteration zero:"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Manually delete the service instances in your resource group")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Re-run the ",Object(b.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script with the ",Object(b.b)("inlineCode",{parentName:"p"},"--delete")," argument to clean up the state"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"./runTerraform.sh --delete\n")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-0-provision-cluster-ibm-cloud-vpc-mdx-305e1cc4c02ad57a967a.js.map