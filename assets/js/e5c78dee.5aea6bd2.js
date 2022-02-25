"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[6456],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),g=u(n),c=r,m=g["".concat(l,".").concat(c)]||g[c]||d[c]||i;return n?a.createElement(m,s(s({ref:e},p),{},{components:n})):a.createElement(m,s({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,s=new Array(i);s[0]=g;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7808:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return g},toc:function(){return c},default:function(){return k}});var a,r=n(7462),i=n(3366),s=(n(7294),n(3905)),o=n(5108),l=["components"],u={id:"autopilotstatuspage",title:"Autopilot Status Page",description:"Manage Autopilot status page configuration across your Microsoft 365 tenants.",slug:"/usingcipp/endpointmanagement/autopilotstatuspage"},p=void 0,d={unversionedId:"usingcipp/endpointmanagement/autopilotstatuspage",id:"usingcipp/endpointmanagement/autopilotstatuspage",title:"Autopilot Status Page",description:"Manage Autopilot status page configuration across your Microsoft 365 tenants.",source:"@site/docs/user/usingcipp/endpointmanagement/autopilotstatuspage.mdx",sourceDirName:"usingcipp/endpointmanagement",slug:"/usingcipp/endpointmanagement/autopilotstatuspage",permalink:"/docs/user/usingcipp/endpointmanagement/autopilotstatuspage",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/usingcipp/endpointmanagement/autopilotstatuspage.mdx",tags:[],version:"current",lastUpdatedBy:"Gavin Stone",lastUpdatedAt:1645818836,formattedLastUpdatedAt:"25/02/2022",frontMatter:{id:"autopilotstatuspage",title:"Autopilot Status Page",description:"Manage Autopilot status page configuration across your Microsoft 365 tenants.",slug:"/usingcipp/endpointmanagement/autopilotstatuspage"},sidebar:"userSidebar",previous:{title:"Autopilot Profiles",permalink:"/docs/user/usingcipp/endpointmanagement/autopilotprofiles"},next:{title:"MEM (Intune) Policy Templates",permalink:"/docs/user/usingcipp/endpointmanagement/mempolicytemplates"}},g={},c=[{value:"Add Status Page",id:"add-status-page",level:2},{value:"Details",id:"addstatuspage-details",level:3},{value:"Known Issues / Limitations",id:"addstatuspage-knownissues",level:3},{value:"List Status Pages",id:"list-status-pages",level:2},{value:"Details",id:"liststatuspages-details",level:3},{value:"Known Issues / Limitations",id:"liststatuspages-knownissues",level:3}],m=(a="OtherIssues",function(t){return o.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}),f={toc:c};function k(t){var e=t.components,n=(0,i.Z)(t,l);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The following two pages in CIPP give you the ability to manage Autopilot Status Pages:"),(0,s.kt)("h2",{id:"add-status-page"},"Add Status Page"),(0,s.kt)("p",null,"This page provides the ability for you to edit/override the default Enrollment Status Page. This page applies to all tenants, all users and devices."),(0,s.kt)("h3",{id:"addstatuspage-details"},"Details"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Timeout in minutes"),(0,s.kt)("li",{parentName:"ul"},"Custom error message"),(0,s.kt)("li",{parentName:"ul"},"Show progress to users"),(0,s.kt)("li",{parentName:"ul"},"Turn on log collection"),(0,s.kt)("li",{parentName:"ul"},"Show status page only with OOBE setup"),(0,s.kt)("li",{parentName:"ul"},"Block device usage during setup"),(0,s.kt)("li",{parentName:"ul"},"Retry"),(0,s.kt)("li",{parentName:"ul"},"Reset"),(0,s.kt)("li",{parentName:"ul"},"Let users use Device if Setup Fails")),(0,s.kt)("h3",{id:"addstatuspage-knownissues"},"Known Issues / Limitations"),(0,s.kt)("p",null,"You can only edit the default profile, and not create new ones."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"400")," - You've entered wrong data, check the information and try again."),(0,s.kt)(m,{mdxType:"OtherIssues"}),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"list-status-pages"},"List Status Pages"),(0,s.kt)("p",null,"This page shows the status of the ",(0,s.kt)("strong",{parentName:"p"},"Default")," Status Page and the settings configured for it."),(0,s.kt)("h3",{id:"liststatuspages-details"},"Details"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Field"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Name"),(0,s.kt)("td",{parentName:"tr",align:null},"The name of the status page.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Description"),(0,s.kt)("td",{parentName:"tr",align:null},"The status page description.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Installation Timeout"),(0,s.kt)("td",{parentName:"tr",align:null},"The time in minutes before the installation times out.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Show Installation Progress"),(0,s.kt)("td",{parentName:"tr",align:null},"Whether to display installation progress on the status page.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Block Retries"),(0,s.kt)("td",{parentName:"tr",align:null},"Whether it's possible to retry in the event of autopilot failure.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Reset on failure"),(0,s.kt)("td",{parentName:"tr",align:null},"Whether it's possible to reset in the event of autopilot failure.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Usage on failure"),(0,s.kt)("td",{parentName:"tr",align:null},"Whether the user can continue to use the device in the event of autopilot failure.")))),(0,s.kt)("h3",{id:"liststatuspages-knownissues"},"Known Issues / Limitations"),(0,s.kt)("p",null,"No known issues exist for the List Status Pages page. If you have any issues, ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KelvinTegelaar/CIPP/issues/new?assignees=&labels=&template=bug_report.md&title=BUG%3A+"},"please report a bug"),"."))}k.isMDXComponent=!0}}]);