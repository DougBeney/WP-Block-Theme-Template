(()=>{"use strict";var e,t={668:()=>{const e=window.wp.element,t=(window.wp.i18n,window.wp.blocks),r=window.wp.blockEditor;function o(t){return(0,e.createElement)("div",{class:"youtube-wrapper"},(0,e.createElement)("div",{class:"youtube","data-embed":t.video_id},(0,e.createElement)("div",{class:"play-button"})))}window.wp.components,(0,t.registerBlockType)("mtma/youtube-lazyload",{attributes:{video_id:{type:"string"},thumbnail:{type:"string"},backgroundColor:{type:"string"}},edit:function(t){let{attributes:n,setAttributes:i}=t;return(0,r.useBlockProps)(),(0,e.createElement)("div",(0,r.useBlockProps)(),(0,e.createElement)(r.InspectorControls,null,(0,e.createElement)("div",{style:{margin:"10px"}},(0,e.createElement)("p",null,"YouTube Video ID:"),(0,e.createElement)("input",{type:"text",placeholder:"Enter video ID...",value:n.video_id,onChange:e=>i({video_id:e.target.value})}))),o(n))},save:function(t){let{attributes:n}=t;const i=r.useBlockProps.save();return(0,e.createElement)("div",i,o(n))}})}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,r,n,i)=>{if(!r){var l=1/0;for(c=0;c<e.length;c++){for(var[r,n,i]=e[c],a=!0,s=0;s<r.length;s++)(!1&i||l>=i)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(a=!1,i<l&&(l=i));if(a){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,n,i]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={705:0,521:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[l,a,s]=r,u=0;if(l.some((t=>0!==e[t]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(s)var c=s(o)}for(t&&t(r);u<l.length;u++)i=l[u],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},r=globalThis.webpackChunkmtma_custom_blocks=globalThis.webpackChunkmtma_custom_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[521],(()=>o(668)));n=o.O(n)})();