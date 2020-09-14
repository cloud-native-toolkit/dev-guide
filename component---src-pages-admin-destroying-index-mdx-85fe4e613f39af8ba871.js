(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"b+mk":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return h}));var a=n("k1TG"),r=n("8o2o"),o=(n("q1tI"),n("7ljp")),l=n("013z"),i=n("T0C+"),s=(n("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},p=c("PageDescription"),b=c("InlineNotification"),m={_frontmatter:s},d=l.a;function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(d,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(p,{mdxType:"PageDescription"},Object(o.b)("p",null,"Use the ",Object(o.b)(i.a,{name:"longName",mdxType:"Globals"})," environment to delete itself")),Object(o.b)(b,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": An ",Object(o.b)("strong",{parentName:"p"},"environment administrator")," performs the steps on this page. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-guide/admin/plan-installation#roles"}),"Plan Installation > Roles")," for the overview of the roles involved.")),Object(o.b)("p",null,"Not only can the ",Object(o.b)(i.a,{name:"shortName",mdxType:"Globals"})," create the environment, the environment can also delete itself. The\nenvironment is installed using Terraform, which stores the state of the applied modules in the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace/{cluster name}"),"\nfolder. Terraform can use that state to delete what it installed."),Object(o.b)("p",null,"Destroy a ",Object(o.b)(i.a,{name:"env",mdxType:"Globals"})," following these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run the following command to launch a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-guide/tools/tools-image"}),"Developer Tools container"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"./launch.sh\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the container, change to the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace/{cluster name}")," directory:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"cd workspace/{cluster name}\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the container, run the ",Object(o.b)("inlineCode",{parentName:"p"},"destroy.sh")," script to apply the Terraform destroy:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"./destroy.sh\n")),Object(o.b)("p",{parentName:"li"},"Rather than directly running ",Object(o.b)("inlineCode",{parentName:"p"},"terraform desroy"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"destroy.sh")," script first builds a “destroy plan” from the current\nstate then applies that plan. Performing the destroy in this way is more reliable and allows for certain resources\nto be selectively destroyed/saved."))))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-destroying-index-mdx-85fe4e613f39af8ba871.js.map