(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("NmYn"),i=a.n(l),b=a("Wbzz"),o=a("Xrax"),c=a("k4MR"),p=a("TSYQ"),d=a.n(p),s=a("QH2O"),m=a.n(s),u=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,r=e.tabs,l=void 0===r?[]:r;return Object(u.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=l.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),N=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,l=r.baseUrl,i=r.subDirectory,o=l+"/edit/"+r.branch+i+"/src/pages"+t;return l?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:o},"Edit this page on GitHub"))):null},g=a("FCXl"),h=a("dI71"),f=a("I8xM"),C=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0,strict:!0}),l=r===n,o=new RegExp(n+"/?(#.*)?$"),c=a.replace(o,r);return Object(u.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(u.b)(b.Link,{className:f.link,to:""+c},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:f.list},r))))))},t}(r.a.Component),y=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,l=t.frontmatter,p=void 0===l?{}:l,d=t.relativePagePath,s=t.titleType,m=p.tabs,j=p.title,h=p.theme,f=p.description,T=p.keywords,w=Object(v.a)().interiorTheme,x=Object(b.useStaticQuery)("2456312558").site.pathPrefix,k=x?n.pathname.replace(x,""):n.pathname,_=m?k.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",I=h||w;return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:I,pageTitle:j,pageDescription:f,pageKeywords:T,titleType:s},Object(u.b)(O,{title:r?Object(u.b)(r,null):j,label:"label",tabs:m,theme:I}),m&&Object(u.b)(C,{slug:k,tabs:m,currentTab:_}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(N,{relativePagePath:d})),Object(u.b)(g.a,{pageContext:t,location:n,slug:k,tabs:m,currentTab:_}),Object(u.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},cQPi:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return j}));var n=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("013z"),b=a("T0C+"),o=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},p=c("PageDescription"),d=c("Tabs"),s=c("Tab"),m=c("InlineNotification"),u={_frontmatter:o},O=i.a;function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(O,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(p,{mdxType:"PageDescription"},Object(l.b)("p",null,"Steps to prepare an environment using the ",Object(l.b)(b.a,{name:"shortName",mdxType:"Globals"})," for ",Object(l.b)(b.a,{name:"ic",mdxType:"Globals"}),"-managed clusters running on classic infrastructure.")),Object(l.b)(d,{mdxType:"Tabs"},Object(l.b)(s,{label:"Private Catalog",open:"true",mdxType:"Tab"},Object(l.b)(m,{mdxType:"InlineNotification"},Object(l.b)("p",null,"These steps assume the private catalog has been created and populated with the ",Object(l.b)(b.a,{name:"shortName",mdxType:"Globals"})," tiles during\nthe ",Object(l.b)("a",{parentName:"p",href:"../prepare-account#3.-create-the-private-catalog"},"prepare the account")," steps.")),Object(l.b)("br",null),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Log in to the ",Object(l.b)(b.a,{name:"ic",mdxType:"Globals"})," Console.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Select ",Object(l.b)("strong",{parentName:"p"},"Catalog")," from the top menu.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"From the side menu, select your catalog from the drop-down list (e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"Team Catalog"),"). (",Object(l.b)("strong",{parentName:"p"},"IBM Cloud catalog")," should be selected initially.)")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click ",Object(l.b)("strong",{parentName:"p"},"Private")," on the side menu to see the private catalog entries")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click on the ",Object(l.b)("strong",{parentName:"p"},"221. Cloud-Native Classic cluster")," tile")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Enter values for the variables list provided."),Object(l.b)("table",{parentName:"li"},Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Variable")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Description")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"eg. Value")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"ibmcloud_api_key")),Object(l.b)("td",{parentName:"tr",align:null},"The API key from IBM Cloud Console that has ClusterAdmin access and supports service creation"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"{guid API key from Console}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"resource_group_name")),Object(l.b)("td",{parentName:"tr",align:null},"The existing resource group in the account where the cluster will be created"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"dev-team-one"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"region")),Object(l.b)("td",{parentName:"tr",align:null},"The region where the cluster will be provisioned."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"us-east"),", ",Object(l.b)("inlineCode",{parentName:"td"},"eu-gb"),", etc")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"cluster_name")),Object(l.b)("td",{parentName:"tr",align:null},"The name of the cluster that will be provisioned."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"dev-team-one-iks-117-vpc"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"private_vlan_id")),Object(l.b)("td",{parentName:"tr",align:null},"The id of an existing private VLAN."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"public_vlan_id")),Object(l.b)("td",{parentName:"tr",align:null},"The id of an existing public VLAN."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"vlan_datacenter")),Object(l.b)("td",{parentName:"tr",align:null},"The VLAN datacenter where the cluster will be provisioned."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"cluster_type")),Object(l.b)("td",{parentName:"tr",align:null},"The type of cluster into which the toolkit will be installed. The default is ",Object(l.b)("inlineCode",{parentName:"td"},"OpenShift 4.5"),"."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"kubernetes"),", ",Object(l.b)("inlineCode",{parentName:"td"},"ocp3"),", ",Object(l.b)("inlineCode",{parentName:"td"},"ocp4"),", ",Object(l.b)("inlineCode",{parentName:"td"},"ocp44"),", or ",Object(l.b)("inlineCode",{parentName:"td"},"ocp45"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"flavor")),Object(l.b)("td",{parentName:"tr",align:null},"The flavor of machine that should be provisioned for each worker. Defaults to ",Object(l.b)("inlineCode",{parentName:"td"},"m3c.4x32"),"."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"m3c.4x32"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"cluster_worker_count")),Object(l.b)("td",{parentName:"tr",align:null},"The number of worker nodes that should be provisioned for each zone. Defaults to ",Object(l.b)("inlineCode",{parentName:"td"},"3")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"3")))))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Check the box to accept the ",Object(l.b)("strong",{parentName:"p"},"Apache 2")," license for the tile.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click ",Object(l.b)("strong",{parentName:"p"},"Install")," to start the install process"))),Object(l.b)("p",null,"This will kick off the installation of the ",Object(l.b)(b.a,{name:"shortName",mdxType:"Globals"})," using an\nIBM Cloud Private Catalog Tile. The progress can be reviewed from the\n",Object(l.b)("strong",{parentName:"p"},"Schematics")," entry")),Object(l.b)(s,{label:"Iteration Zero",mdxType:"Tab"},Object(l.b)("h3",null,"A. Download the Iteration Zero scripts"),Object(l.b)("br",null),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Clone the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"},"ibm-garage-iteration-zero")," Git repository to your local filesystem"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:ibm-garage-cloud/ibm-garage-iteration-zero.git\n")))),Object(l.b)("h3",null,"B. Configure the credentials"),Object(l.b)("br",null),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"In a terminal, change to the ",Object(l.b)("inlineCode",{parentName:"p"},"ibm-garage-iteration-zero")," cloned directory"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell"},"cd ibm-garage-iteration-zero\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Copy the ",Object(l.b)("inlineCode",{parentName:"p"},"credentials.template")," file to a file named ",Object(l.b)("inlineCode",{parentName:"p"},"credentials.properties")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell"},"cp credentials.template credentials.properties\n")),Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Note:")," ",Object(l.b)("inlineCode",{parentName:"p"},"credentials.properties")," is already listed in ",Object(l.b)("inlineCode",{parentName:"p"},".gitignore")," to prevent the\nprivate credentials from being committed to the git repository")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Update the value for the ",Object(l.b)("inlineCode",{parentName:"p"},"ibmcloud.api.key")," property in ",Object(l.b)("inlineCode",{parentName:"p"},"credentials.properties")," with your ",Object(l.b)(b.a,{name:"ic",mdxType:"Globals"})," API key"),Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Note:")," The API key should have been set up during ",Object(l.b)("a",{parentName:"p",href:"/dev-guide/getting-started-0/prepare-account"},"plan installation"),"."))),Object(l.b)("h3",null,"C. Configure the environment variables"),Object(l.b)("br",null),Object(l.b)("p",null,"The settings for creating the ",Object(l.b)(b.a,{name:"shortName",mdxType:"Globals"})," on ",Object(l.b)(b.a,{name:"ic",mdxType:"Globals"})," are set in the ",Object(l.b)("inlineCode",{parentName:"p"},"environment-ibmcloud.tfvars"),"\nfile in the ",Object(l.b)("inlineCode",{parentName:"p"},"./terraform/settings")," directory of the ",Object(l.b)("inlineCode",{parentName:"p"},"ibm-garage-iteration-zero")," repository."),Object(l.b)("p",null,"There are a number of values that can be applied in the file, some required and some optional. Consult with\nthe following table to determine which values should be used:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Variable")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Required?")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Description")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"eg. Value")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"cluster_type")),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"The type of cluster into which the toolkit will be installed"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"kubernetes"),", ",Object(l.b)("inlineCode",{parentName:"td"},"ocp3"),", ",Object(l.b)("inlineCode",{parentName:"td"},"ocp4")," or ",Object(l.b)("inlineCode",{parentName:"td"},"ocp44"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"cluster_exists")),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"Flag indicating if the cluster already exists. (",Object(l.b)("inlineCode",{parentName:"td"},"false")," means the cluster should be provisioned)"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"vpc_cluster")),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"Flag indicating that the cluster has been built on VPC infrastructure. Defaults to ",Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"name_prefix")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"The prefix that should be applied for any resources that are provisioned. Defaults to ",Object(l.b)("inlineCode",{parentName:"td"},"{resource_group_name}")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"dev-one"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"cluster_name")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"The name of the cluster (If ",Object(l.b)("inlineCode",{parentName:"td"},"cluster_exists")," is set to ",Object(l.b)("inlineCode",{parentName:"td"},"true")," then this name should match an existing cluster). Defaults to ",Object(l.b)("inlineCode",{parentName:"td"},"{prefix_name}-cluster")," or ",Object(l.b)("inlineCode",{parentName:"td"},"{resource_group_name}-cluster")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"dev-team-one-iks-117-vpc"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"resource_group_name")),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"Existing resource group in the account where the cluster has been created"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"dev-team-one"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"region")),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"The region where the cluster has been/will be provisioned"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"us-east"),", ",Object(l.b)("inlineCode",{parentName:"td"},"eu-gb"),", etc")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"provision_logdna")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Flag indicating that a new instance of LogDNA should be provisioned. Defaults to ",Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"logdna_name")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"The name of the LogDNA instance (If ",Object(l.b)("inlineCode",{parentName:"td"},"provision_logdna")," is set to ",Object(l.b)("inlineCode",{parentName:"td"},"false")," this value is used by the scripts to bind the existing LogDNA instance to the cluster)"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"cntk-showcase-logdna"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"logdna_region")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"The region where the existing LogDNA instance has been provisioned. If not provided will default to the cluster ",Object(l.b)("inlineCode",{parentName:"td"},"region"),"."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"us-east"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"provision_sysdig")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Flag indicating that a new instance of Sysdig should be provisioned. Defaults to ",Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"sysdig_name")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"The name of the Sysdig instance (If ",Object(l.b)("inlineCode",{parentName:"td"},"provision_sysdig")," is set to ",Object(l.b)("inlineCode",{parentName:"td"},"false")," this value is used by the scripts to bind the existing Sysdig instance to the cluster)"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"cntk-showcase-sysdig"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"sysdig_region")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"The region where the existing Sysdig instance has been provisioned. If not provided will default to the cluster ",Object(l.b)("inlineCode",{parentName:"td"},"region"),"."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"us-east"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"cos_name")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"The name of the Cloud Object Storage instance that will be used with the OCP cluster."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"registry_type")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"The type of the Container Registry that will be used with the cluster. Valid values are ",Object(l.b)("inlineCode",{parentName:"td"},"icr"),", ",Object(l.b)("inlineCode",{parentName:"td"},"ocp"),", ",Object(l.b)("inlineCode",{parentName:"td"},"other"),", or ",Object(l.b)("inlineCode",{parentName:"td"},"none"),"."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"registry_namespace")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"The namespace that should be used in the IBM Container Registry. Defaults to ",Object(l.b)("inlineCode",{parentName:"td"},"{resource_group_name}")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"dev-team-one-registry-2020"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"registry_host")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"The host name of the image registry (e.g. us.icr.io or quay.io). This value is only used if the registry_type is set to “other”"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"quay.io"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"registry_user")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"The username needed to access the image registry. This value is only used if the registry_type is set to “other”"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"{username}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"registry_password")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"The password needed to access the image registry. This value is required if the registry_type is set to “other”."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"{password}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"source_control_type")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"The type of source control system (github, gitlab, or none)"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"github"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"source_control_url")),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"The url to the source control system"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"https://github.com"))))),Object(l.b)("br",null),Object(l.b)("p",null,"Update ",Object(l.b)("inlineCode",{parentName:"p"},"environment-ibmcloud.tfvars")," with the appropriate values for your installation. Particularly, be sure to set the\nfollowing values in order to provision a Classic cluster:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"cluster_exists")," to ",Object(l.b)("inlineCode",{parentName:"li"},"false")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"vpc_cluster")," to ",Object(l.b)("inlineCode",{parentName:"li"},"false"))),Object(l.b)("h3",null,"D. Configure the VLAN settings"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"vlan.tfvars")," file in ",Object(l.b)("inlineCode",{parentName:"p"},"terraform/settings")," contains properties that define the classic infrastructure configuration in order to provision a\nnew cluster. Typical values look like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'vlan_datacenter="dal10"\npublic_vlan_id="2366011"\nprivate_vlan_id="2366012"\n')),Object(l.b)("p",null,"You must set all of these specifically for your cluster. Use the values provided by the account manager."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"vlan_datacenter")," — The zone in the region in which the cluster worker nodes will be provisioned"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"public_vlan_id")," — The public VLAN that the cluster will use"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"private_vlan_id")," — The private VLAN that the cluster will use")),Object(l.b)("h4",null,"Optional: Generate the VLAN properties"),Object(l.b)("p",null,"The ",Object(l.b)("a",{parentName:"p",href:"/dev-guide/getting-started/cli"},"IGC CLI")," can be used to generate these settings, to make the configuration as simple as possible."),Object(l.b)("p",null,"If your account has numerous VLANs and you want your cluster to use specific ones, then skip this step and provide the\nvalues by hand. This tool is for users who don’t know what these required settings should be and want a simple way to\ngather reasonable defaults for their particular account."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Log in using the ",Object(l.b)(b.a,{name:"igcli",mdxType:"Globals"})),Object(l.b)("li",{parentName:"ol"},"Target the region where the cluster will be provisioned with the ",Object(l.b)(b.a,{name:"igcli",mdxType:"Globals"}),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"ibmcloud target -r {region}\n"))),Object(l.b)("li",{parentName:"ol"},"Run the VLAN command",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"igc vlan\n"))),Object(l.b)("li",{parentName:"ol"},"Copy the output values from the CLI Command into your ",Object(l.b)("inlineCode",{parentName:"li"},"vlan.tfvars")," files")),Object(l.b)("h3",null,"E. (Optional) Customize the installed components"),Object(l.b)("br",null),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"terraform/stages")," directory contains the default set of stages that define the\nmodules that will be applied to the environment. The stages can be customized to change\nthe makeup of the environment that is provisioned by either removing or adding stages from/to the\n",Object(l.b)("inlineCode",{parentName:"p"},"terraform/stages")," directory."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," The stages occasionally have dependencies on other stages (e.g. most all\ndepend on the cluster module, many depend on the namespace module, etc.) so be aware of those\ndependencies as you start making changes. Dependencies are reflected in the ",Object(l.b)("inlineCode",{parentName:"p"},"module.{stage name}")," references\nin the stage variable list."),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"terraform/stages/catalog")," directory contains some optional\nstages that are prep-configured and can be dropped into the ",Object(l.b)("inlineCode",{parentName:"p"},"terraform/stages")," directory. Other\nmodules are available from the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/ibm-garage-cloud/garage-terraform-modules"},"Garage Terraform Modules"),"\ncatalog and can be added as stages to the directory as well. Since this is Terraform,\nany other Terraform scripts and modules can be added to the ",Object(l.b)("inlineCode",{parentName:"p"},"terraform/stages")," directory\nas desired."),Object(l.b)("h3",null,"F. Run the installation"),Object(l.b)("br",null),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Open a terminal to the ",Object(l.b)("inlineCode",{parentName:"p"},"ibm-garage-iteration-zero")," directory")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Launch a ",Object(l.b)("a",{parentName:"p",href:"https://github.com/ibm-garage-cloud/ibm-garage-cli-tools",title:"Cloud Garage Tools Docker image"},"Developer Tools Docker container")," from which the Terraform scripts will be run"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell"},"./launch.sh\n")),Object(l.b)("p",{parentName:"li"},"This will download the Cloud Garage Tools Docker image that contains all the necessary tools to execute Terraform scripts\nand exec shell into the running container. When the container starts it\nmounts the filesystem’s ",Object(l.b)("inlineCode",{parentName:"p"},"./terraform/")," directory as ",Object(l.b)("inlineCode",{parentName:"p"},"/home/devops/src/")," and loads the values from the\n",Object(l.b)("inlineCode",{parentName:"p"},"credentials.properties")," file as environment variables.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Apply the Terraform by running the provided ",Object(l.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell"},"./runTerraform.sh\n")),Object(l.b)("p",{parentName:"li"},"This script collects the values provided in the ",Object(l.b)("inlineCode",{parentName:"p"},"environment-ibmcloud.tfvars")," and the\nstages defined in the ",Object(l.b)("inlineCode",{parentName:"p"},"terraform/stages")," to build the Terraform workspace. Along the way it\nwill prompt for a couple pieces of information."),Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Type of installation: ",Object(l.b)("inlineCode",{parentName:"p"},"cluster")),Object(l.b)("p",{parentName:"li"},"This prompt can be skipped by providing ",Object(l.b)("inlineCode",{parentName:"p"},"--cluster")," as an argument to ",Object(l.b)("inlineCode",{parentName:"p"},"./runTerraform.sh"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Handling of an old workspace (if applicable): ",Object(l.b)("inlineCode",{parentName:"p"},"keep")," or ",Object(l.b)("inlineCode",{parentName:"p"},"delete")),Object(l.b)("p",{parentName:"li"},"If you executed the script previously for the current cluster configuration and the workspace directory still\nexists then you will be prompted to either keep or delete the workspace directory. Keep the workspace directory if\nyou want to use the state from the previous run as a starting point to either add or remove configuration. Delete\nthe workspace if you want to start with a clean install of the Toolkit."),Object(l.b)("p",{parentName:"li"},"This prompt can be skipped by providing ",Object(l.b)("inlineCode",{parentName:"p"},"--delete")," or ",Object(l.b)("inlineCode",{parentName:"p"},"--keep")," as an argument to ",Object(l.b)("inlineCode",{parentName:"p"},"./runTerraform.sh"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Verify the installation configuration"),Object(l.b)("p",{parentName:"li"},"The script will verify some basic settings and prompt if you want to proceed. After you select ",Object(l.b)("strong",{parentName:"p"},"Y")," (for yes),\nthe Terraform Apply process will begin to create the infrastructure and services for your environment."),Object(l.b)("p",{parentName:"li"},"This prompt can be skipped by providing ",Object(l.b)("inlineCode",{parentName:"p"},"--auto-approve")," as an argument to ",Object(l.b)("inlineCode",{parentName:"p"},"./runTerraform.sh")))),Object(l.b)("p",{parentName:"li"},"Creating a new cluster takes about 1.5 hours on average (but can also take considerably longer)\nand the rest of the process takes about 30 minutes."))))),Object(l.b)("h2",null,"Troubleshooting"),Object(l.b)("p",null,"If you find that the Terraform provisioning has failed, for Private Catalog delete the workspace and for Iteration Zero  try re-running the ",Object(l.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script again.\nThe state will be saved and Terraform will try and apply the configuration to match the desired end state."),Object(l.b)("p",null,"If you find that some of the services have failed to create in the time allocated, try the following with Iteration zero:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Manually delete the service instances in your resource group")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Re-run the ",Object(l.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script with the ",Object(l.b)("inlineCode",{parentName:"p"},"--delete")," argument to clean up the state"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell"},"./runTerraform.sh --delete\n")))))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-0-provision-cluster-ibm-cloud-classic-mdx-fab650242189a7f2a204.js.map