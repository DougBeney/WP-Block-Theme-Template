(()=>{"use strict";var e,t={277:()=>{const e=window.wp.element,t=window.wp.blocks,r=window.wp.blockEditor;(0,t.registerBlockType)("mtma/demoblock",{attributes:{message:{type:"string",default:""}},edit:function(t){let{attributes:o,setAttributes:n}=t;const s=(0,r.useBlockProps)();return(0,e.createElement)("div",s,(0,e.createElement)("p",null,"Your contnet"),(0,e.createElement)(r.InnerBlocks,null))},save:function(e){let{attributes:t}=e;r.useBlockProps.save()}})}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,r,n,s)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,n,s]=e[u],a=!0,i=0;i<r.length;i++)(!1&s||l>=s)&&Object.keys(o.O).every((e=>o.O[e](r[i])))?r.splice(i--,1):(a=!1,s<l&&(l=s));if(a){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,n,s]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={362:0,623:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,s,[l,a,i]=r,c=0;if(l.some((t=>0!==e[t]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(i)var u=i(o)}for(t&&t(r);c<l.length;c++)s=l[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},r=globalThis.webpackChunkmtma_custom_blocks=globalThis.webpackChunkmtma_custom_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[623],(()=>o(277)));n=o.O(n)})();