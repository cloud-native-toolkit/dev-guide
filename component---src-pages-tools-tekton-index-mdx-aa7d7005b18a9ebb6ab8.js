(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},G2OU:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return j}));var n=a("wx14"),i=a("zLVn"),l=(a("q1tI"),a("7ljp")),o=a("XbGe"),b=a("T0C+"),s=(a("qKvR"),{}),r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},p=r("PageDescription"),c=r("InlineNotification"),d=r("Tabs"),m=r("Tab"),u=r("AnchorLinks"),g=r("AnchorLink"),h={_frontmatter:s},O=o.a;function j(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)(O,Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(p,{mdxType:"PageDescription"},Object(l.b)("p",null,"Use Tekton to automate your continuous integration process")),Object(l.b)("h2",null,"Overview"),Object(l.b)("p",null,"Continuous integration is a software development technique where software is built regularly by a team in an automated fashion."),Object(l.b)("p",null,"Tekton is a new emerging CI tool that has been built to support Kubernetes and OpenShift from the ground up."),Object(l.b)("h2",null,"What is Tekton"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://tekton.dev/"},"Tekton")," is a powerful yet flexible Kubernetes-native open-source framework for creating continuous integration and delivery (CI/CD) systems. It lets you build, test, and deploy across multiple cloud providers or on-premises systems by abstracting away the underlying implementation details."),Object(l.b)("h3",null,"Tekton 101"),Object(l.b)("iframe",{width:"80%",height:"315",src:"https://www.youtube.com/embed/TWxKD9dLpmk",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(l.b)("p",null,"Tekton provides open-source components to help you standardize your CI/CD tooling and processes across vendors, languages, and deployment environments. Industry specifications around pipelines, releases, workflows, and other CI/CD components available with Tekton will work well with existing CI/CD tools such as Jenkins, Jenkins X, Skaffold, and Knative, among others."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Read the this ",Object(l.b)("a",{parentName:"p",href:"/dev-guide/tools/tekton#what-is-tekton"},"Overview of Tekton"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"For more information read up about it ",Object(l.b)("a",{parentName:"p",href:"https://developer.ibm.com/tutorials/knative-build-app-development-with-tekton/"},"Tekton Tutorial"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"For more information read up about it ",Object(l.b)("a",{parentName:"p",href:"https://developer.ibm.com/tutorials/knative-build-app-development-with-tekton/"},"App Build Tutorial with Tekton")))),Object(l.b)("p",null,"The IBM Cloud is standardizing on using Tekton in both IBM Cloud DevOps\nservice and IBM Cloud Pak for Applications. OpenShift 4.2 will also natively\nsupport it."),Object(l.b)("p",null,"This guide will focus on using Tekton when the Development tools have been\ninstalled in Redhat OpenShift, IBM Kubernetes Managed services and ",Object(l.b)("strong",{parentName:"p"},"Red Hat\nCode Ready Containers")," to give you choice for you Continuous Integration\ncloud native development toolset."),Object(l.b)(c,{mdxType:"InlineNotification"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," This guide will help you set up the ",Object(l.b)("a",{parentName:"p",href:"/dev-guide/starterkits"},Object(l.b)(b.a,{name:"templates",mdxType:"Globals"}))," with  ",Object(l.b)("strong",{parentName:"p"},"Tekton")," and requires that you have installed Tekton with ",Object(l.b)("strong",{parentName:"p"},"Red Hat Code Ready Containers 4.2")," or have installed open source Tekton into the The IBM Kubernetes Cluster.")),Object(l.b)("h3",null,"Common App Tasks"),Object(l.b)("p",null,"The following gives a description of each ",Object(l.b)("inlineCode",{parentName:"p"},"Task")," that is commonly used in a\n",Object(l.b)("inlineCode",{parentName:"p"},"Pipeline"),". The ",Object(l.b)("em",{parentName:"p"},"Optional")," stages can be deleted or ignored if the tool support it is not installed. These stages represent a typical production pipeline flow for a Cloud Native application."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Setup")," clones the code into the pipeline"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Build")," runs the build commands for the code"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Test"),"\tvalidates the unit tests for the code"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Publish pacts"),"\t(",Object(l.b)("em",{parentName:"li"},"optional"),") publishes any pact contracts that have been defined"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Verify pact")," (",Object(l.b)("em",{parentName:"li"},"optional"),") verifies the pact contracts"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Sonar scan")," (",Object(l.b)("em",{parentName:"li"},"optional"),") runs a sonar code scan of the source code and publishes the results to SonarQube"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Build image")," Builds the code into a Docker images and stores it in the IBM Cloud Image registry"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Deploy to DEV env"),"\tDeploys the Docker image tagged version to ",Object(l.b)("inlineCode",{parentName:"li"},"dev")," namespace using Helm Chart"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Health Check")," Validates the Health Endpoint of the deployed application"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Package Helm Chart")," (",Object(l.b)("em",{parentName:"li"},"optional"),") Stores the tagged version of the Helm chart into Artifactory"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Trigger CD Pipeline")," (",Object(l.b)("em",{parentName:"li"},"optional"),") This is a GitOps stage that will\nupdate the build number in designated git repo and trigger ArgoCD for\ndeployment to ",Object(l.b)("strong",{parentName:"li"},"test")," namespace")),Object(l.b)("h3",null,"Install Tekton"),Object(l.b)("p",null,"Tekton can be installed in both RedHat Openshift and IBM Kubernetes manage\nservice and RedHat Code Ready Containers. To install the necessary\ncomponents follow the steps below."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Install ",Object(l.b)("a",{parentName:"li",href:"/dev-guide/admin"},"IBM Garage for Cloud Developer Tools")," on your\nmanaged OpenShift,CRC or IKS development cluster on the IBM Cloud. This will\nhelp configure the tools and ",Object(l.b)("inlineCode",{parentName:"li"},"secrets")," and ",Object(l.b)("inlineCode",{parentName:"li"},"configMap")," to make working with\nIBM Cloud so much easier.")),Object(l.b)(d,{mdxType:"Tabs"},Object(l.b)(m,{label:"OpenShift 3.11",mdxType:"Tab"},Object(l.b)("h3",null,"IBM Cloud Pak for Applications 3.0.1"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Install Tekton on OpenShift 3.11",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Install ",Object(l.b)("a",{parentName:"li",href:"https://cloud.ibm.com/catalog/content/ibm-cp-applications"},"IBM Cloud Paks for Applications 3.0.1")," on the OpenShift Cluster from the\nIBM Cloud Catalog Software tab"))))),Object(l.b)(m,{label:"OpenShift 4.x",mdxType:"Tab"},Object(l.b)("h3",null,"Install on OpenShift 4.x"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"If you have installed the IBM Garage for Cloud Developer Tools into your\ncluster this will automatically install the operator for you.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Install Tekton on OpenShift 4 including CodeReady Containers (CRC)"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Install via operator hub Administrator perspective view, click\n",Object(l.b)("strong",{parentName:"li"},"Operator Hub")," search for ",Object(l.b)("inlineCode",{parentName:"li"},"OpenShift Pipelines")," and install operator"))))),Object(l.b)(m,{label:"Kubernetes",mdxType:"Tab"},Object(l.b)("h3",null,"Install Tekton on IBM Kubernetes Managed Service"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Install Tekton via Knative add-on (can be found in the ",Object(l.b)("strong",{parentName:"li"},"Add On")," tab in\nthe Kubernetes managed service dashboard)\n, it includes\nTekton support by default and the Webhook extension."),Object(l.b)("li",{parentName:"ul"},"Install ",Object(l.b)("a",{parentName:"li",href:"https://github.com/tektoncd/dashboard#install-dashboard"},"Tekton Dashboard")," follow the instructions in the ",Object(l.b)("inlineCode",{parentName:"li"},"README.md")),Object(l.b)("li",{parentName:"ul"},"Add Ingress endpoint for the ",Object(l.b)("strong",{parentName:"li"},"Tekton Dashboard")," add a host name that uses\nthe IKS cluster subdomain",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"  apiVersion: extensions/v1beta1\n  kind: Ingress\n  metadata:\n    name: tekton-dashboard\n    namespace: tekton-pipelines\n  spec:\n    rules:\n    - host: tekton-dashboard.showcase-dev-iks-cluster.us-south.containers.appdomain.cloud\n      http:\n        paths:\n        - backend:\n            serviceName: tekton-dashboard\n            servicePort: 9097\n"))),Object(l.b)("li",{parentName:"ul"},"Install ",Object(l.b)("a",{parentName:"li",href:"https://github.com/tektoncd/experimental/tree/master/webhooks-extension#install-webhook-extension"},"Tekton Webhook Extension"))))),Object(l.b)("h3",null,"Setup Tekton"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Install Tekton pipelines and tasks into the ",Object(l.b)("inlineCode",{parentName:"li"},"dev")," namespace following the\ninstructions in the repository ",Object(l.b)("a",{parentName:"li",href:"https://github.com/cloud-native-toolkit/ibm-garage-tekton-tasks/blob/master/README.md"},"ibm-garage-tekton-tasks")),Object(l.b)("li",{parentName:"ul"},"Install the ",Object(l.b)("inlineCode",{parentName:"li"},"Tasks"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f ibm-garage-tekton-tasks/tasks/ -n dev\n"))),Object(l.b)("li",{parentName:"ul"},"Install the ",Object(l.b)("inlineCode",{parentName:"li"},"Pipelines"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f ibm-garage-tekton-tasks/pipelines/ -n dev\n")))),Object(l.b)("h3",null,"Configure namespace for development"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Install the Tekton CLI ",Object(l.b)("inlineCode",{parentName:"p"},"tkn")," ",Object(l.b)("a",{parentName:"p",href:"https://github.com/tektoncd/cli"},"https://github.com/tektoncd/cli"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Create a new namespace (ie ",Object(l.b)("inlineCode",{parentName:"p"},"dev-{initials}"),") and copy all config and secrets"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"igc namespace -n {new-namespace}\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Set your ",Object(l.b)("inlineCode",{parentName:"p"},"new-namespace")," the current namespace context"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"oc project {new-namespace}\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The template ",Object(l.b)("inlineCode",{parentName:"p"},"Pipelines")," provided support for ",Object(l.b)("inlineCode",{parentName:"p"},"Java")," or ",Object(l.b)("inlineCode",{parentName:"p"},"Node.js")," based apps. You can configure your own custom ",Object(l.b)("inlineCode",{parentName:"p"},"Tasks")," for other runtimes. There are a number of default ",Object(l.b)("inlineCode",{parentName:"p"},"Tasks")," to get you started they are detailed above. To create an application use one of the provided ",Object(l.b)("a",{parentName:"p",href:"/dev-guide/starterkits"},Object(l.b)(b.a,{name:"templates",mdxType:"Globals"}))," these templates work seamlessly with the ",Object(l.b)("inlineCode",{parentName:"p"},"Tasks")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Pipelines")," provided."))),Object(l.b)("h3",null,"Register the App with Tekton"),Object(l.b)("p",null,"With Tetkon enabled and your default ",Object(l.b)("inlineCode",{parentName:"p"},"Tasks")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Pipelines")," installed into\nthe ",Object(l.b)("inlineCode",{parentName:"p"},"dev")," namespace. You can now configure your applications to be built, packaged, tested and deployed to your OpenShift or Kubernetes development cluster."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Connect to the pipeline. (See the ",Object(l.b)("a",{parentName:"p",href:"/dev-guide/getting-started/cli"},"IGC CLI")," for details about how the ",Object(l.b)("inlineCode",{parentName:"p"},"pipeline")," command works.)"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"igc pipeline -n dev-{initials} --tekton\n")))),Object(l.b)("h3",null,"Verify the pipeline"),Object(l.b)("p",null,"To validate your pipeline have been correctly configured, and has triggered a\n",Object(l.b)("inlineCode",{parentName:"p"},"PipelineRun"),"\nuse the following ",Object(l.b)("strong",{parentName:"p"},"Tekton")," dashboards or ",Object(l.b)("inlineCode",{parentName:"p"},"tkn")," CLI to validate it ran\ncorrectly without errors."),Object(l.b)(d,{mdxType:"Tabs"},Object(l.b)(m,{label:"OpenShift 4.x",mdxType:"Tab"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Review you ",Object(l.b)("strong",{parentName:"p"},"Pipeline")," in the OpenShift 4.x Console\n",Object(l.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6UlEQVQY04VQy1LDMAz0/38MJ6698BNcONBCC1OaNHGc+CHZi+Q4ZSYXdkbWWJZXqzXOOShKKXrUvMV/yDnXUFwPT7i9PMNUshZ7lN2A/bAQArz3YKbHH3PqZlxsxJfEeQhwPiHFCGJ+KNgI6r0RMv/VNft5hpssjI8ElsYkDZTlYXFCGDaN9VQV1tpKRikhLKtNTIRxHEGS1yEMMzhColz9U5y6gLuLmBaCj1xrfd9jal6ff654/RjweWcs8k6UqqBtEyFMsl4zt2QcuwStTbOsTlybVIWqVFw6h7dvj/dbagOL/F3VqQ2/cvzWOaJkR78AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Pipelinerun",title:"Pipelinerun",src:"/dev-guide/static/b9f14d105bd04e3cddc427d9b8f046f1/3cbba/pipeline.png",srcSet:["/dev-guide/static/b9f14d105bd04e3cddc427d9b8f046f1/7fc1e/pipeline.png 288w","/dev-guide/static/b9f14d105bd04e3cddc427d9b8f046f1/a5df1/pipeline.png 576w","/dev-guide/static/b9f14d105bd04e3cddc427d9b8f046f1/3cbba/pipeline.png 1152w","/dev-guide/static/b9f14d105bd04e3cddc427d9b8f046f1/0b124/pipeline.png 1728w","/dev-guide/static/b9f14d105bd04e3cddc427d9b8f046f1/4ea69/pipeline.png 2304w","/dev-guide/static/b9f14d105bd04e3cddc427d9b8f046f1/dd77a/pipeline.png 2484w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Review your ",Object(l.b)("strong",{parentName:"p"},"Tasks"),"\n",Object(l.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1UlEQVQoz5VS227DIAzl/3+pT3vby76ha3oLpE0g5WZIcuqwRsqkVlstWccGYx/5IFSf4XxE399gnUPOGdM04b+21HZfH2g/NxCHlkozYwxjD2stxnEshe/4yERmF8YSMyQQRaSUfk3+s8kyeEVAaK3RdV3xEAISpdJ4RnrERMSYH/iTD8PwdLBQFwXZ1GgY98cK1/aK7/0WquH8VKFWNc7yjOqwK2cLzsPXO1xMaKNZDAvHgnjvEGPkFTiEGOCD54e+xG59x81eMpRSFjFmdd+1Z7/hDgtYI1mSiUBfAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Tasks",title:"Tasks",src:"/dev-guide/static/43ac10b40fa67d0ebd944161e29cdbca/3cbba/tasks.png",srcSet:["/dev-guide/static/43ac10b40fa67d0ebd944161e29cdbca/7fc1e/tasks.png 288w","/dev-guide/static/43ac10b40fa67d0ebd944161e29cdbca/a5df1/tasks.png 576w","/dev-guide/static/43ac10b40fa67d0ebd944161e29cdbca/3cbba/tasks.png 1152w","/dev-guide/static/43ac10b40fa67d0ebd944161e29cdbca/0b124/tasks.png 1728w","/dev-guide/static/43ac10b40fa67d0ebd944161e29cdbca/4ea69/tasks.png 2304w","/dev-guide/static/43ac10b40fa67d0ebd944161e29cdbca/f0987/tasks.png 2490w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Review your ",Object(l.b)("strong",{parentName:"p"},"Steps"),"\n",Object(l.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.79166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABW0lEQVQoz51Ru0oDQRSdD0ihhTE+kBASlW2MCBY2JmCRCGqR2s4f8BcEe8HaiAb8Ga0E0ZBsyFM2y87u7HvNmhx3RiLBKsmBwxzuzJw59w5hjEHXdUFKKWzbBsdoNMIY02pO4nkeqE7hOi4sy4JuUJimJYx5nT/INa8zZghtRCsPYFk2mMnEOTvSpmmCKIqCl9dn1OQaur0u3utv6CldGIaBequGRksWutGuR5QjI4rOZxtV+QN9tQ9FVcQdVVOhaRpIqVSCJEnI7maRTCZRqVRECzxtEARwPReO6yDwA/BuuPZ9X/C/5vvkqJDH2sYKEssJxGIxlMt3wnA4HGIekOJZAamtFNKZTSzF47h//E0YhuHfoGchOSnmsZ1ax04mjdXFBTzc3vB8GETtTv7e1AkvL85xnDvAae4Q+f09PF1fAY0qBo49n6HaV9FptuBHQ/3yPXxPbM5iNMYPOaaI7+DAWhkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Steps",title:"Steps",src:"/dev-guide/static/c5055673e16d6d6c72b473519809cd64/3cbba/steps.png",srcSet:["/dev-guide/static/c5055673e16d6d6c72b473519809cd64/7fc1e/steps.png 288w","/dev-guide/static/c5055673e16d6d6c72b473519809cd64/a5df1/steps.png 576w","/dev-guide/static/c5055673e16d6d6c72b473519809cd64/3cbba/steps.png 1152w","/dev-guide/static/c5055673e16d6d6c72b473519809cd64/0b124/steps.png 1728w","/dev-guide/static/c5055673e16d6d6c72b473519809cd64/f7471/steps.png 1776w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))))),Object(l.b)(m,{label:"Opensource Tekton Dashboard",mdxType:"Tab"},Object(l.b)("p",null,"If you are running Tekton with IBM Cloud Pak for Applications or Knative with\nKubernetes managed service your dashboard view will look similar to below."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Review your ",Object(l.b)("strong",{parentName:"li"},"Pipeline"),Object(l.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.56944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABhklEQVQoz4VSu0oDQRTdv7CzVghYW/kPFpaiFmksBD9AsAoJNkp+QYKFWAtqRNBGxKQQ1MRAbNQk675ndmd25jgzax6aRC+cnZ29c8+ee+5Yrac30JhjGPIb6inlGPq54TmJ0bA6nQg+kdCclFJwJsESgThJMC00r5Sj++yDXi3GuSrWYIgigvvGNR7bNbiuD9tx8Ol48PzQwHEDEJqYszRm5j3bp6BKBFWr9dJswrZt9LpduF6AevMWr+8tcCWQRhxhQOD7PoIggOO4qpiqwsh0QGlsukq4QBgjIySEgPPMQ6YSd891XNSquKxXcfNwivZHw7THUoFUSHNmHKniSEGUb5b+s5DCEOpW9o7yWCvOYaOUw/LODA7PCiaXCj5xSKPQ1hmF/UgYR6mSx2phXhEuYGV3FpXzkskJkeK/0F4ahYnxgyqDY5RPtrG5v4it8hLWizkcXx0MCP9SNyD0PM8YzhhTClP4kZpqaCv04CqQOPxxJ8ev0C9CTSSEGAxlQs1EommEX7fj9wniZot2AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"PipelineRun",title:"PipelineRun",src:"/dev-guide/static/9f446c196dfa2c4a625858139fc1d00f/3cbba/pipeline-os.png",srcSet:["/dev-guide/static/9f446c196dfa2c4a625858139fc1d00f/7fc1e/pipeline-os.png 288w","/dev-guide/static/9f446c196dfa2c4a625858139fc1d00f/a5df1/pipeline-os.png 576w","/dev-guide/static/9f446c196dfa2c4a625858139fc1d00f/3cbba/pipeline-os.png 1152w","/dev-guide/static/9f446c196dfa2c4a625858139fc1d00f/0b124/pipeline-os.png 1728w","/dev-guide/static/9f446c196dfa2c4a625858139fc1d00f/6a339/pipeline-os.png 2048w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(l.b)(m,{label:"Tekton CLI",mdxType:"Tab"},Object(l.b)("p",null,"If you are running ",Object(l.b)("strong",{parentName:"p"},"Tekton")," with IBM Cloud Pak for Applications or Knative\nwith Kubernetes managed service your dashboard view will look similar to below."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Review your ",Object(l.b)("strong",{parentName:"li"},"Pipeline"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"tkn pipelinerun list\n"))),Object(l.b)("li",{parentName:"ul"},"Review ",Object(l.b)("strong",{parentName:"li"},"Pipeline")," details",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"tkn pipelinerun describe {pipeline-name}\n")))))),Object(l.b)("h3",null,"Running Application"),Object(l.b)("p",null,"Once the ",Object(l.b)("strong",{parentName:"p"},"Tekton")," pipeline has successfully completed you can validate your\napp has been successfully deployed."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Open the OpenShift Console and select the {new-namespace} project and click on ",Object(l.b)("strong",{parentName:"p"},"Workloads"),"\n",Object(l.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.138888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABhklEQVQoz6WQyUoDQRCGW03IoigeFBXx7m40MVEwBLz4XILg3S0mxu1pvLjE4Ap6EURwSWJmuqd7eua3MiYaF7xY8FF0dW1/sZ7ePvT3D6CruwftHZ0IhdvgDwTh8wfAWDPRVPONUKzZh0CoDcFQKwLBsEeLzw8WTS4gOpPCRGwOi0vLyOZ2sZHJeX5re+93dvaRJb+6lsbKehrr6Qw2szlktrbBpmbnMZVIIRJP4urqGv81Njw+jcGxqMfBYR4PZYGbhxfclziK3P6TktAoChuvNUqmBBuJJDA8EcfQeAzHp2cwNfBsKpQtB9x2YSrnG26N97egnHuucUdwaYONTiYwEonThjHkTwswjQqenx5hCQ4lJYlwf+HTLMfFraFwScoMqb42PDu/8JIE57C1hnYcuK77Qd28trWYQ9xxhZuKhLS9DWc8ydVbHp0U6A4WXgzxo9gbpOh2FRpGhWiIf+TSAmyIGlXvOEqc5AsQJLNcMaBpw2phHa1tSKUgLAlFvvGvTjX+BuOpO7odS+ZCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"OpenShift",title:"OpenShift",src:"/dev-guide/static/a25b80e0df63b105bb82931ba91f5301/3cbba/openshiftconsole.png",srcSet:["/dev-guide/static/a25b80e0df63b105bb82931ba91f5301/7fc1e/openshiftconsole.png 288w","/dev-guide/static/a25b80e0df63b105bb82931ba91f5301/a5df1/openshiftconsole.png 576w","/dev-guide/static/a25b80e0df63b105bb82931ba91f5301/3cbba/openshiftconsole.png 1152w","/dev-guide/static/a25b80e0df63b105bb82931ba91f5301/0b124/openshiftconsole.png 1728w","/dev-guide/static/a25b80e0df63b105bb82931ba91f5301/6a339/openshiftconsole.png 2048w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Get the hostname for the application from ingress"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"kubectl get ingress --all-namespace\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"You can use the the ",Object(l.b)("inlineCode",{parentName:"p"},"igc")," command to get the name of the deployed application"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"igc ingress -n {new-namespace}\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Use the application URL to open it your browser for testing"))),Object(l.b)("p",null,"Once you become familiar with deploying code into OpenShift using ",Object(l.b)("strong",{parentName:"p"},"Tekton\n"),", read up about how you can manage code deployment with ",Object(l.b)("inlineCode",{parentName:"p"},"Continuous\n Delivery")," with ",Object(l.b)("inlineCode",{parentName:"p"},"ArgoCD")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Artifactory")),Object(l.b)(u,{mdxType:"AnchorLinks"},Object(l.b)(g,{to:"/getting-started-day-1/artifact-management",mdxType:"AnchorLink"},"Artifact Management with Artifactory"),Object(l.b)(g,{to:"/getting-started-day-2/continuous-delivery",mdxType:"AnchorLink"},"Continuous Delivery with ArgoCD")))}j.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),l=a("NmYn"),o=a.n(l),b=a("Wbzz"),s=a("Xrax"),r=a("k4MR"),p=a("TSYQ"),c=a.n(p),d=a("QH2O"),m=a.n(d),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,l=void 0===i?[]:i;return Object(u.b)("div",{className:c()(m.a.pageHeader,(t={},t[m.a.withTabs]=l.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,l=i.baseUrl,o=i.subDirectory,s=l+"/edit/"+i.branch+o+"/src/pages"+t;return l?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},j=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=o()(e,{lower:!0,strict:!0}),l=i===n,s=new RegExp(n+"/?(#.*)?$"),r=a.replace(s,i);return Object(u.b)("li",{key:e,className:c()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(u.b)(b.Link,{className:f.link,to:""+r},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:f.list},i))))))},t}(i.a.Component),A=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,l=t.frontmatter,p=void 0===l?{}:l,c=t.relativePagePath,d=t.titleType,m=p.tabs,h=p.title,j=p.theme,f=p.description,w=p.keywords,k=Object(v.a)().interiorTheme,y=Object(b.useStaticQuery)("223705900").site.pathPrefix,T=y?n.pathname.replace(y,""):n.pathname,C=m?T.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",x=j||k;return Object(u.b)(r.a,{tabs:m,homepage:!1,theme:x,pageTitle:h,pageDescription:f,pageKeywords:w,titleType:d},Object(u.b)(g,{title:i?Object(u.b)(i,null):h,label:"label",tabs:m,theme:x}),m&&Object(u.b)(N,{slug:T,tabs:m,currentTab:C}),Object(u.b)(A.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:c})),Object(u.b)(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-tools-tekton-index-mdx-aa7d7005b18a9ebb6ab8.js.map