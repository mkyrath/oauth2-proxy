"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5971],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,h=c["".concat(l,".").concat(f)]||c[f]||m[f]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9637:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={id:"installation",title:"Installation",slug:"/"},l=void 0,u={unversionedId:"installation",id:"version-7.5.x/installation",title:"Installation",description:"1.  Choose how to deploy:",source:"@site/versioned_docs/version-7.5.x/installation.md",sourceDirName:".",slug:"/",permalink:"/oauth2-proxy/docs/",draft:!1,editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/versioned_docs/version-7.5.x/installation.md",tags:[],version:"7.5.x",frontMatter:{id:"installation",title:"Installation",slug:"/"},sidebar:"docs",next:{title:"Behaviour",permalink:"/oauth2-proxy/docs/behaviour"}},s={},c=[],m={toc:c},f="wrapper";function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose how to deploy:"),(0,o.kt)("p",{parentName:"li"},"a. Using a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oauth2-proxy/oauth2-proxy/releases"},"Prebuilt Binary")," (current release is ",(0,o.kt)("inlineCode",{parentName:"p"},"v7.5.1"),")"),(0,o.kt)("p",{parentName:"li"},"b. Using Go to install the latest release"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ go install github.com/oauth2-proxy/oauth2-proxy/v7@latest\n# which will put the binary in `$GOROOT/bin`\n")),(0,o.kt)("p",{parentName:"li"},"c. Using a ",(0,o.kt)("a",{parentName:"p",href:"https://quay.io/oauth2-proxy/oauth2-proxy"},"Prebuilt Docker Image")," (AMD64, PPC64LE, ARMv6, ARMv7, and ARM64 available)"),(0,o.kt)("p",{parentName:"li"},"d. Using a ",(0,o.kt)("a",{parentName:"p",href:"https://quay.io/oauth2-proxy/oauth2-proxy-nightly"},"Pre-Release Nightly Docker Image")," (AMD64, PPC64LE, ARMv6, ARMv7, and ARM64 available)"),(0,o.kt)("p",{parentName:"li"},"e. Using the official ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oauth2-proxy/manifests"},"Kubernetes manifest")," (Helm)"),(0,o.kt)("p",{parentName:"li"},"Prebuilt binaries can be validated by extracting the file and verifying it against the ",(0,o.kt)("inlineCode",{parentName:"p"},"sha256sum.txt")," checksum file provided for each release starting with version ",(0,o.kt)("inlineCode",{parentName:"p"},"v3.0.0"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"sha256sum -c sha256sum.txt 2>&1 | grep OK\noauth2-proxy-x.y.z.linux-amd64: OK\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/oauth2-proxy/docs/configuration/oauth_provider"},"Select a Provider and Register an OAuth Application with a Provider"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/oauth2-proxy/docs/configuration/overview"},"Configure OAuth2 Proxy using config file, command line options, or environment variables"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/oauth2-proxy/docs/configuration/tls"},"Configure SSL or Deploy behind a SSL endpoint")," (example provided for Nginx)"))))}h.isMDXComponent=!0}}]);