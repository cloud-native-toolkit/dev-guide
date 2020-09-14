(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"Yj/f":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a("k1TG"),i=a("8o2o"),r=(a("q1tI"),a("7ljp")),o=a("013z"),l=a("T0C+"),c=(a("qKvR"),{}),b={_frontmatter:c},s=o.a;function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(s,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In IBM Garage Method, one of the Develop practices is to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/code/practice_automated_testing/"}),"automate tests for continuous delivery"),", in part by using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/code/practice_automated_testing/tool_lint"}),"static source code analysis tools"),". ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.sonarqube.org/"}),"SonarQube")," automates performing static code analysis and enables it to be added to a continuous integration pipeline. The ",Object(r.b)(l.a,{name:"env",mdxType:"Globals"}),"’s CI pipeline (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/tools/continuous-integration"}),"Jenkins"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-guide/tools/continuous-integration-tekton"}),"Tekton"),", etc.) includes a SonarQube stage. Simply by building your app using the pipeline, your code gets analyzed, just open the SonarQube UI to browse the findings."),Object(r.b)("h2",null,"What is code analysis"),Object(r.b)("p",null,"Static code analysis (a.k.a. code analysis) is a method of debugging by performing automated evaluation of code\nwithout executing the program. The analysis is structured as a set of coding rules that evaluate the code’s quality.\nAnalysis can be performed on source code or compiled code. The analyzer must support the programming language\nthe code is written in so that it can parse the code like a compiler or simulate its execution."),Object(r.b)("p",null,"Static code analysis differs from dynamic analysis, which observes and evaluates a running program. Dynamic analysis\nrequires test inputs and can meansure user functionality as well as runtime qualities like execution time and resource consumption.\nA code review is static code analysis performed by a human."),Object(r.b)("p",null,"Static code analysis can evaluate several different aspects of code quality, such as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Reliability"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Bug"),": Programming error that breaks functionality"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Security"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Vulnerability"),": A point in a program that can be attacked"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Hotspot"),": Code that uses a security-sensitive API"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Maintainability"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Coding standards"),": Practices that increase the human readability and undestandability of code"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Code smell"),": Code that is confusing and difficult to maintain"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Technical debt"),": Estimated time required to fix all maintainability issues"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Complexity"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Code complexity"),": Code’s control flow and number of paths through the code"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Duplications"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Duplicated code"),": The same code sequence appearing more than once in the same program"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Manageability"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Testability"),": How easily tests can be developed and used to show the program meets requirements"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Portability"),": How easily the program can be reused in different environments"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Reusability"),": The program’s modularity, loose coupling, and limited interdependencies")))),Object(r.b)("p",null,"Static code analysis collects several metrics that measure code quality:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Issues"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Type"),": Bug, Vunerability, Code Smell"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Sevarity"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Blocker"),": Bug with a high probability to impact the behavior of the application in production"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Critical"),": Bug with a low probability to impact the behavior of the application in production, or a security vulnerability"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Major"),": Code smell with high impact to developer productivity"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Minor"),": Code smell with slight impact to developer productivity"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Info"),": Neither a bug nor a code smell, just a finding"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Size"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Classes"),": Number of class definitions (concrete, abstract, nested, interfaces, enums, annotations)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Lines of code"),": Linespace seperated text that is not whitespace or comments"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Comment lines"),": Linespace seperated text containing significant commentary or commented-out code"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Coverage"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Test coverage"),": Code that was executed by a test suite")))),Object(r.b)("p",null,"A ",Object(r.b)("strong",{parentName:"p"},"Quality gate")," defines a policy that assesses pass/fail whether or not the number of issues and their severity is acceptable."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-1-code-analysis-index-mdx-af965485c1f5ec809d3b.js.map