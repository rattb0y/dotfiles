"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5ac722e9-cab9-51e2-aa83-62c6f5a5d3a9")}catch(e){}}();
(self.webpackChunk_loomhq_chrome_extension=self.webpackChunk_loomhq_chrome_extension||[]).push([[835],{52835:function(e,i,c){c.r(i),c.d(i,{getDevices:function(){return s}});const o=["ZoomAudioDevice","LoomAudioDevice (Virtual)","Microsoft Teams Audio Device (Virtual)"],s=()=>new Promise((e=>{navigator.mediaDevices.enumerateDevices().then((i=>{const c=[],s=[];i.forEach((e=>{if(e.label&&e.deviceId&&!o.some((i=>e.label.includes(i)))){const i={label:e.label,deviceId:e.deviceId,id:e.deviceId};"videoinput"===e.kind?s.push(i):"audioinput"===e.kind&&c.push(i)}})),e({mics:c,cameras:s})})).catch((()=>{e({mics:[],cameras:[]})}))}))}}]);
//# sourceMappingURL=835.js.map
//# debugId=5ac722e9-cab9-51e2-aa83-62c6f5a5d3a9
