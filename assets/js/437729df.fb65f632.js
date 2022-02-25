"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[117],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9343:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"roles",title:"Roles",description:"How to grant users access to the CIPP App",slug:"/gettingstarted/roles"},l=void 0,c={unversionedId:"gettingstarted/roles/roles",id:"gettingstarted/roles/roles",title:"Roles",description:"How to grant users access to the CIPP App",source:"@site/docs/user/gettingstarted/roles/index.md",sourceDirName:"gettingstarted/roles",slug:"/gettingstarted/roles",permalink:"/docs/user/gettingstarted/roles",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/gettingstarted/roles/index.md",tags:[],version:"current",lastUpdatedBy:"Gavin Stone",lastUpdatedAt:1645818836,formattedLastUpdatedAt:"25/02/2022",frontMatter:{id:"roles",title:"Roles",description:"How to grant users access to the CIPP App",slug:"/gettingstarted/roles"},sidebar:"userSidebar",previous:{title:"Post-Install Configuration",permalink:"/docs/user/gettingstarted/postinstall"},next:{title:"Using CIPP",permalink:"/docs/user/usingcipp"}},p={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"CIPP features a role management system which utilises the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?tabs=invitations#roles"},"Roles feature of Azure Static Web Apps"),". The roles available in CIPP are as follows:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Role Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"readonly"),(0,o.kt)("td",{parentName:"tr",align:null},"Only allowed to read and list items and send push messages to users")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"editor"),(0,o.kt)("td",{parentName:"tr",align:null},"Allowed to perform everything, except editing tenant exclusions and standards")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"admin"),(0,o.kt)("td",{parentName:"tr",align:null},"Allowed to perform everything")))),(0,o.kt)("p",null,"You can assign these roles to users using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?tabs=invitations#role-management"},"Role Management system of Azure Static Web Apps")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"User Acceptance")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"After invite link is sent to the user, they must click on it to accept the invite and gain access to the app."))),(0,o.kt)("p",null,"To assign a role to a user you would follow these steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to the Azure Portal."),(0,o.kt)("li",{parentName:"ul"},"Go to your CIPP Resource Group."),(0,o.kt)("li",{parentName:"ul"},"Select your CIPP Static Web App ",(0,o.kt)("inlineCode",{parentName:"li"},"CIPP-SWA-XXXX"),"."),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Role Management")," (Not IAM Role Management)."),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"invite user"),"."),(0,o.kt)("li",{parentName:"ul"},"Add the roles for the user.")))}m.isMDXComponent=!0}}]);