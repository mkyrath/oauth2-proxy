"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[91],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),l=p(r),d=o,m=l["".concat(u,".").concat(d)]||l[d]||s[d]||a;return r?n.createElement(m,i(i({ref:t},f),{},{components:r})):n.createElement(m,i({ref:t},f))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},559:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={id:"facebook",title:"Facebook"},u=void 0,p={unversionedId:"configuration/providers/facebook",id:"configuration/providers/facebook",title:"Facebook",description:"1.  Create a new FB App from",source:"@site/docs/configuration/providers/facebook.md",sourceDirName:"configuration/providers",slug:"/configuration/providers/facebook",permalink:"/oauth2-proxy/docs/next/configuration/providers/facebook",draft:!1,editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/docs/configuration/providers/facebook.md",tags:[],version:"current",frontMatter:{id:"facebook",title:"Facebook"},sidebar:"docs",previous:{title:"ADFS",permalink:"/oauth2-proxy/docs/next/configuration/providers/adfs"},next:{title:"GitHub",permalink:"/oauth2-proxy/docs/next/configuration/providers/github"}},f={},l=[],s={toc:l},d="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new FB App from ",(0,a.kt)("a",{parentName:"li",href:"https://developers.facebook.com/"},"https://developers.facebook.com/")),(0,a.kt)("li",{parentName:"ol"},"Under FB Login, set your Valid OAuth redirect URIs to ",(0,a.kt)("inlineCode",{parentName:"li"},"https://internal.yourcompany.com/oauth2/callback"))))}m.isMDXComponent=!0}}]);