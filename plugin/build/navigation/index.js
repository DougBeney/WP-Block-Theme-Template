(()=>{"use strict";var e,t={386:()=>{const e=window.wp.element,t=(window.wp.i18n,window.wp.blocks),r=window.wp.blockEditor,n=window.wp.components;function a(t,r){return(0,e.createElement)("nav",{className:"main-nav",id:"main-nav"},(0,e.createElement)("div",{className:"logo"},(0,e.createElement)("a",{href:"/","aria-label":"Go to the homepage"},(0,e.createElement)("img",{alt:"",src:t.logo}))),(0,e.createElement)("button",{id:"main-nav-hamburger",class:"hamburger",name:"Show/hide main menu","aria-label":"Show/hide main menu"},(0,e.createElement)("svg",{viewBox:"0 0 100 60",width:"40",height:"40"},(0,e.createElement)("rect",{width:"100",height:"5"}),(0,e.createElement)("rect",{y:"30",width:"100",height:"5"}),(0,e.createElement)("rect",{y:"60",width:"100",height:"5"}))),(0,e.createElement)("div",{class:"menu-items"},r))}(0,t.registerBlockType)("mtma/nav",{attributes:{logo:{type:"string"}},edit:function(t){let{attributes:o,setAttributes:l}=t;return(0,r.useBlockProps)(),(0,e.createElement)("header",(0,r.useBlockProps)(),(0,e.createElement)(r.InspectorControls,null,(0,e.createElement)("div",{style:{margin:"10px"}},(0,e.createElement)("h2",null,"Logo:"),(0,e.createElement)(r.MediaUpload,{onSelect:e=>l({logo:e.url}),allowedTypes:["image"],value:o.logo,render:t=>{let{open:r}=t;return(0,e.createElement)(n.Button,{onClick:r},"Select Logo")}}))),a(o,(0,e.createElement)(r.InnerBlocks,null)))},save:function(t){let{attributes:n}=t;const o=r.useBlockProps.save();return(0,e.createElement)("header",o,a(n,(0,e.createElement)(r.InnerBlocks.Content,null)))}})}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var l=1/0;for(m=0;m<e.length;m++){for(var[r,a,o]=e[m],i=!0,c=0;c<r.length;c++)(!1&o||l>=o)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(i=!1,o<l&&(l=o));if(i){e.splice(m--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[r,a,o]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={922:0,306:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[l,i,c]=r,s=0;if(l.some((t=>0!==e[t]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var m=c(n)}for(t&&t(r);s<l.length;s++)o=l[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(m)},r=globalThis.webpackChunkmtma_custom_blocks=globalThis.webpackChunkmtma_custom_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[306],(()=>n(386)));a=n.O(a)})();