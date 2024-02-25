!function(){"use strict";const t=8388608,e=0,n=[e],r=Symbol(),a=new TextEncoder,o=new TextDecoder,i=new Array(256);let s=0;function c(t,e,r,a){if(void 0===a){if(s++,!(i.length-s>=n.length))throw new Error("Reached maximum number of custom types");i[i.length-s]={serialize:t,parse:e,test:r}}else i[a]={serialize:t,parse:e,test:r}}async function l(e,n){const r=function(e,{chunkSize:n=t}={}){let r,a,o,i,s,c;return{[Symbol.asyncIterator]:()=>({next:()=>i?{done:i}:l(),return:()=>({done:!0})})};async function l(){c?c():d().catch((()=>{})),p();return{value:await y()}}async function d(){m(),r=new u(h,n),await f(r,e),await r.flush()}function m(){a=new Promise((t=>o=t))}function p(){s=new Promise((t=>c=t))}async function h(t){o(t),await s}async function y(){const{value:t,done:e}=await a;return i=e,e||m(),t}}(e,n);let a=new Uint8Array([]);for await(const t of r){const e=a;a=new Uint8Array(e.length+t.length),a.set(e,0),a.set(t,e.length)}return a}c((async function(t,e){const n=t.objects.indexOf(e);await f(t,n)}),(async function(t){const e=await v(t);return new w(e,t)}),T,e),c(null,(function(){return{}}),P),c(m,S,D),c(p,I,(function(t){return"string"==typeof t})),c(h,(async function(t){const e=await v(t),n=await t.consume(8*e);return new Float64Array(n.buffer)}),(function(t){return"Float64Array"==t.constructor.name})),c(h,(async function(t){const e=await v(t),n=await t.consume(4*e);return new Float32Array(n.buffer)}),(function(t){return"Float32Array"==t.constructor.name})),c(h,(async function(t){const e=await v(t),n=await t.consume(4*e);return new Uint32Array(n.buffer)}),(function(t){return"Uint32Array"==t.constructor.name})),c(h,(async function(t){const e=await v(t),n=await t.consume(4*e);return new Int32Array(n.buffer)}),(function(t){return"Int32Array"==t.constructor.name})),c(h,(async function(t){const e=await v(t),n=await t.consume(2*e);return new Uint16Array(n.buffer)}),(function(t){return"Uint16Array"==t.constructor.name})),c(h,(async function(t){const e=await v(t),n=await t.consume(2*e);return new Int16Array(n.buffer)}),(function(t){return"Int16Array"==t.constructor.name})),c(h,(async function(t){const e=await v(t),n=await t.consume(e);return new Uint8ClampedArray(n.buffer)}),(function(t){return"Uint8ClampedArray"==t.constructor.name})),c(h,(async function(t){const e=await v(t);return await t.consume(e)}),(function(t){return"Uint8Array"==t.constructor.name})),c(h,(async function(t){const e=await v(t),n=await t.consume(e);return new Int8Array(n.buffer)}),(function(t){return"Int8Array"==t.constructor.name})),c((async function(t,e){await f(t,e.byteLength),await t.append(new Uint8Array(e))}),(async function(t){const e=await v(t);return(await t.consume(e)).buffer}),(function(t){return"ArrayBuffer"==t.constructor.name})),c(y,C,U),c((async function(t,e){const n=new Uint8Array(new Uint32Array([e]).buffer);await t.append(n)}),(async function(t){const e=await t.consume(4);return new Uint32Array(e.buffer)[0]}),(function(t){return k(t)&&t>=0&&t<=4294967295})),c((async function(t,e){const n=new Uint8Array(new Int32Array([e]).buffer);await t.append(n)}),(async function(t){const e=await t.consume(4);return new Int32Array(e.buffer)[0]}),(function(t){return k(t)&&t>=-2147483648&&t<=2147483647})),c((async function(t,e){const n=new Uint8Array(new Uint16Array([e]).buffer);await t.append(n)}),(async function(t){const e=await t.consume(2);return new Uint16Array(e.buffer)[0]}),(function(t){return k(t)&&t>=0&&t<=65535})),c((async function(t,e){const n=new Uint8Array(new Int16Array([e]).buffer);await t.append(n)}),(async function(t){const e=await t.consume(2);return new Int16Array(e.buffer)[0]}),(function(t){return k(t)&&t>=-32768&&t<=32767})),c((async function(t,e){const n=new Uint8Array([e]);await t.append(n)}),(async function(t){const e=await t.consume(1);return new Uint8Array(e.buffer)[0]}),(function(t){return k(t)&&t>=0&&t<=255})),c((async function(t,e){const n=new Uint8Array(new Int8Array([e]).buffer);await t.append(n)}),(async function(t){const e=await t.consume(1);return new Int8Array(e.buffer)[0]}),(function(t){return k(t)&&t>=-128&&t<=127})),c(null,(function(){return}),(function(t){return void 0===t})),c(null,(function(){return null}),(function(t){return null===t})),c(null,(function(){return NaN}),(function(t){return Number.isNaN(t)})),c(g,x,(function(t){return"boolean"==typeof t})),c((async function(t,e){await p(t,e.description)}),(async function(t){const e=await I(t);return Symbol(e)}),O),c(null,(function(){return r}),R),c((async function(t,e){const n=e.entries();await f(t,e.size);for(const[e,r]of n)await f(t,e),await f(t,r)}),(async function(t){const e=await v(t),n=new Map;e&&await async function r(a=0){const o=await v(t),i=await v(t);t.setObject([o,i],((t,e)=>n.set(t,e))),a<e-1&&await r(a+1)}();return n}),(function(t){return t instanceof Map})),c((async function(t,e){await f(t,e.size);for(const n of e)await f(t,n)}),(async function(t){const e=await v(t),n=new Set;e&&await async function r(a=0){const o=await v(t);t.setObject([o],(t=>n.add(t))),a<e-1&&await r(a+1)}();return n}),(function(t){return t instanceof Set})),c((async function(t,e){await y(t,e.getTime())}),(async function(t){const e=await C(t);return new Date(e)}),(function(t){return t instanceof Date})),c((async function(t,e){await p(t,e.message),await p(t,e.stack)}),(async function(t){const e=await I(t),n=await I(t),r=new Error(e);return r.stack=n,r}),(function(t){return t instanceof Error})),c((async function(t,e){await p(t,e.source),await p(t,e.flags)}),(async function(t){const e=await I(t),n=await I(t);return new RegExp(e,n)}),(function(t){return t instanceof RegExp})),c((async function(t,e){await p(t,e.valueOf())}),(async function(t){return new String(await I(t))}),(function(t){return t instanceof String})),c((async function(t,e){await y(t,e.valueOf())}),(async function(t){return new Number(await C(t))}),(function(t){return t instanceof Number})),c((async function(t,e){await g(t,e.valueOf())}),(async function(t){return new Boolean(await x(t))}),(function(t){return t instanceof Boolean}));class u{constructor(t,e){this.stream=new d(t,e),this.objects=[]}append(t){return this.stream.append(t)}flush(){return this.stream.flush()}addObject(t){this.objects.push(B(t)&&!T(t,this)?t:void 0)}}class d{constructor(t,e){this.offset=0,this.appendData=t,this.value=new Uint8Array(e)}async append(t){if(this.offset+t.length>this.value.length){const e=this.value.length-this.offset;await this.append(t.subarray(0,e)),await this.appendData({value:this.value}),this.offset=0,await this.append(t.subarray(e))}else this.value.set(t,this.offset),this.offset+=t.length}async flush(){this.offset&&await this.appendData({value:this.value.subarray(0,this.offset),done:!0})}}async function f(t,n){const r=i.findIndex((({test:e}={})=>e&&e(n,t)));t.addObject(n),await t.append(new Uint8Array([r]));const a=i[r].serialize;a&&await a(t,n),r!=e&&P(n)&&(await async function(t,e){const n=Object.getOwnPropertySymbols(e),r=n.map((t=>[t,e[t]]));await m(t,r)}(t,n),await async function(t,e){if(ArrayBuffer.isView(e))await f(t,0);else{let n=Object.entries(e);D(e)&&(n=n.filter((([t])=>!k(Number(t))))),await f(t,n.length);for(const[e,r]of n)await p(t,e),await f(t,r)}}(t,n))}async function m(t,e){await f(t,e.length);const n=Object.keys(e).filter((t=>k(Number(t)))).map((t=>Number(t)));let a=0,o=n[a];for(const[i,s]of e.entries())o==i?(o=n[++a],await f(t,s)):await f(t,r)}async function p(t,e){const n=a.encode(e);await f(t,n.length),await t.append(n)}async function h(t,e){await f(t,e.length),await t.append("Uint8Array"==e.constructor.name?e:new Uint8Array(e.buffer))}async function y(t,e){const n=new Uint8Array(new Float64Array([e]).buffer);await t.append(n)}async function g(t,e){const n=new Uint8Array([Number(e)]);await t.append(n)}class w{constructor(t,e){this.index=t,this.data=e}getObject(){return this.data.objects[this.index]}}class b{constructor(t){this.stream=new A(t),this.objects=[],this.setters=[]}consume(t){return this.stream.consume(t)}getObjectId(){const t=this.objects.length;return this.objects.push(void 0),t}resolveObject(t,e){B(e)&&!L(e)&&(this.objects[t]=e)}setObject(t,e){this.setters.push({functionArguments:t,setterFunction:e})}executeSetters(){this.setters.forEach((({functionArguments:t,setterFunction:e})=>{e(...t.map((t=>L(t)?t.getObject():t)))}))}}class A{constructor(t){this.offset=0,this.value=new Uint8Array(0),this.consumeData=t}async consume(t){if(this.offset+t>this.value.length){const e=this.value.subarray(this.offset,this.value.length),n=await this.consumeData();return e.length+n.length!=this.value.length&&(this.value=new Uint8Array(e.length+n.length)),this.value.set(e),this.value.set(n,e.length),this.offset=0,this.consume(t)}{const e=this.value.slice(this.offset,this.offset+t);return this.offset+=e.length,e}}}function E(){let t,e,n,r,a,o;return{next:async e=>e?async function(e){a?await a:async function(){let e;r=new Promise((t=>e=t)),t=new b(s),i();const n=await v(t);t.executeSetters(),e(n)}().catch((()=>{}));return function(){a=new Promise((t=>o=t))}(),n(e),{done:!1}}(e):{value:await r,done:!0},return:()=>({done:!0})};function i(){e=new Promise((t=>n=t))}async function s(){const t=await e;return i(),o&&o(),t}}async function v(t){const n=(await t.consume(1))[0],r=i[n].parse,a=t.getObjectId(),o=await r(t);return n!=e&&P(o)&&(await async function(t,e){const n=await S(t);t.setObject([n],(t=>t.forEach((([t,n])=>e[t]=n))))}(t,o),await async function(t,e){const n=await v(t);n&&await r();async function r(a=0){const o=await I(t),i=await v(t);t.setObject([i],(t=>e[o]=t)),a<n-1&&await r(a+1)}}(t,o)),t.resolveObject(a,o),o}async function S(t){const e=await v(t),n=new Array(e);return e&&await async function r(a=0){const o=await v(t);R(o)||t.setObject([o],(t=>n[a]=t));a<e-1&&await r(a+1)}(),n}async function I(t){const e=await v(t),n=await t.consume(e);return o.decode(n)}async function C(t){const e=await t.consume(8);return new Float64Array(e.buffer)[0]}async function x(t){const e=await t.consume(1);return Boolean(e[0])}function T(t,e){return P(t)&&e.objects.includes(t)}function L(t){return t instanceof w}function P(t){return t===Object(t)}function D(t){return"number"==typeof t.length}function R(t){return t===r}function U(t){return"number"==typeof t}function k(t){return U(t)&&Number.isInteger(t)}function O(t){return"symbol"==typeof t}function B(t){return P(t)||O(t)}const N=globalThis.singlefile,M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABhmlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSlUqHewg4hChOogFURFHqWIRLJS2QqsOJpf+CE0akhQXR8G14ODPYtXBxVlXB1dBEPwBcXNzUnSREr9LCi1ivOO4h/e+9+XuO0Col5lqdowDqmYZqXhMzOZWxMAruhGiOYohiZl6Ir2Qgef4uoeP73dRnuVd9+foVfImA3wi8SzTDYt4nXh609I57xOHWUlSiM+Jxwy6IPEj12WX3zgXHRZ4ZtjIpOaIw8RisY3lNmYlQyWeIo4oqkb5QtZlhfMWZ7VcZc178hcG89pymuu0BhHHIhJIQoSMKjZQhoUo7RopJlJ0HvPwDzj+JLlkcm2AkWMeFaiQHD/4H/zurVmYnHCTgjGg88W2P4aBwC7QqNn297FtN04A/zNwpbX8lTow80l6raVFjoDQNnBx3dLkPeByB+h/0iVDciQ/LaFQAN7P6JtyQN8t0LPq9q15jtMHIEO9WroBDg6BkSJlr3m8u6u9b//WNPv3A6mTcr3f/E/sAAAABmJLR0QAigCKAIrj2uckAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5QkPDysvCdPVuwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAELSURBVHja7ZpLFsIwDAPj3v/OsGHDe1BIa8tKO7Mnlkw+dpoxAAAAAGCfx4ur6Yx/B337UUS4mp/VuWUEcjSfOgO+BXCZCWe0hSqQo/npBLglIUNLdAV2MH84Ad1JyIwdLkK6YoabIHWscBWmihHuAqvHtv+XqmdXOK9TxdKy3axUm2vZkXXGgPJksTuz1bVFeeU2Y6ijsLIpXbtKa1kDs2ews69o7+A+ihJ2lvI+/lcS1G21zUVG18XKNm4OS4BNkGOQQohSmGaIdpgLESvzyiRwKepsXjE2H0ZWMF8Zi4+jK5mviM0DiRXNZ2rhkdTK5jO0xermz2o8dCnq+FS2XNNVH0sDAAAA3JYnre9cH8BZmhEAAAAASUVORK5CYII=",_=N.helper.SINGLE_FILE_UI_ELEMENT_CLASS,F="singlefile-error-bar",j="singlefile-open-file-bar",G="singlefile-share-page-bar";let W,H,q,z;const V=new Set(Array.from(getComputedStyle(document.documentElement)));function X(t){({EMBEDDED_IMAGE_BUTTON_MESSAGE:W,SHARE_PAGE_BUTTON_MESSAGE:H,SHARE_SELECTION_BUTTON_MESSAGE:q,ERROR_TITLE_MESSAGE:z}=t)}function Q(t,e){console.error("SingleFile",t,e),Z(F,z+t,{link:e})}function Z(t,e,{link:n,buttonLabel:r,buttonOnclick:a}={}){try{if(!document.querySelector(t)){const o=function(t,e){const n=document.createElement(t);n.className=_,e&&e.appendChild(n);return V.forEach((t=>n.style.setProperty(t,"initial","important"))),n}(t),i=o.attachShadow({mode:"open"}),s=document.createElement("style");s.textContent="\n\t\t\t\t.container {\n\t\t\t\t\tbackground-color: #ff6c00;\n\t\t\t\t\tcolor: white;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0px;\n\t\t\t\t\tleft: 0px;\n\t\t\t\t\tright: 0px;\n\t\t\t\t\theight: auto;\n\t\t\t\t\twidth: auto;\n\t\t\t\t\tmin-height: 24px;\n\t\t\t\t\tmin-width: 24px;\t\t\t\t\t\n\t\t\t\t\tz-index: 2147483647;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tpadding: 2px;\n\t\t\t\t\tfont-family: Arial;\n\t\t\t\t}\n\t\t\t\t.singlefile-open-file-bar.container, .singlefile-share-page-bar.container {\n\t\t\t\t\tbackground-color: gainsboro;\n\t\t\t\t\tborder-block-end: gray 1px solid;\n\t\t\t\t}\n\t\t\t\t.text {\n\t\t\t\t\tflex: 1;\n\t\t\t\t\tpadding-top: 4px;\n\t\t\t\t\tpadding-bottom: 4px;\n\t\t\t\t\tpadding-left: 8px;\t\t\t\t\t\n\t\t\t\t}\n\t\t\t\tbutton {\n\t\t\t\t\tbackground-color: grey;\n\t\t\t\t\tcolor: white;\n\t\t\t\t\tborder: 1px solid darkgrey;\n\t\t\t\t\tpadding: 3px;\n\t\t\t\t\tpadding-left: 8px;\n\t\t\t\t\tpadding-right: 8px;\n\t\t\t\t\tborder-radius: 4px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t}\n\t\t\t\t.close-button {\n\t\t\t\t\topacity: .7;\n\t\t\t\t\tpadding-left: 8px;\n\t\t\t\t\tpadding-right: 8px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\ttransition: opacity 250ms;\n\t\t\t\t\theight: 16px;\n\t\t\t\t\tfont-size: .8rem;\n\t\t\t\t\talign-self: center;\n\t\t\t\t}\n\t\t\t\t.singlefile-open-file-bar button, .singlefile-share-page-bar button{\n\t\t\t\t\tbackground-color: dimgrey;\n\t\t\t\t}\n\t\t\t\t.singlefile-open-file-bar .close-button, .singlefile-share-page-bar .close-button{\n\t\t\t\t\tfilter: invert(1);\n\t\t\t\t}\n\t\t\t\ta {\n\t\t\t\t\tcolor: #303036;\n\t\t\t\t}\n\t\t\t\t.close-button:hover {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t",i.appendChild(s);const c=document.createElement("div");c.classList.add(t),c.classList.add("container");const l=document.createElement("span");l.classList.add("text");const u=e.split("__DOC_LINK__");if(l.textContent=u[0],n&&2==u.length){const t=document.createElement("a");t.textContent=n,t.href=n,t.target="_blank",l.appendChild(t),l.appendChild(document.createTextNode(u[1]))}if(r&&a){const t=document.createElement("button");t.textContent=r,t.onclick=()=>a(),l.appendChild(t)}c.appendChild(l);const d=document.createElement("img");d.classList.add("close-button"),c.appendChild(d),i.appendChild(c),d.src=M,d.onclick=t=>{0===t.button&&(a&&a(!0),o.remove())},document.documentElement.appendChild(o)}}catch(t){}}const J=16777216;let K,Y,$,tt,et;try{K=browser.i18n.getMessage("topPanelEmbeddedImageButton"),Y=browser.i18n.getMessage("topPanelSharePageButton"),$=browser.i18n.getMessage("topPanelShareSelectionButton"),tt=browser.i18n.getMessage("topPanelError")}catch(t){}async function nt(t,e){e.includeBOM&&(t.content="\ufeff"+t.content);const n=e.embeddedImage,r={method:"downloads.download",taskId:e.taskId,insertTextBody:e.insertTextBody,confirmFilename:e.confirmFilename,filenameConflictAction:e.filenameConflictAction,filename:t.filename,mimeType:t.mimeType,saveToClipboard:e.saveToClipboard,saveToGDrive:e.saveToGDrive,saveToDropbox:e.saveToDropbox,saveWithWebDAV:e.saveWithWebDAV,webDAVURL:e.webDAVURL,webDAVUser:e.webDAVUser,webDAVPassword:e.webDAVPassword,saveToGitHub:e.saveToGitHub,githubToken:e.githubToken,githubUser:e.githubUser,githubRepository:e.githubRepository,githubBranch:e.githubBranch,saveWithCompanion:e.saveWithCompanion,forceWebAuthFlow:e.forceWebAuthFlow,filenameReplacementCharacter:e.filenameReplacementCharacter,openEditor:e.openEditor,openSavedPage:e.openSavedPage,compressHTML:e.compressHTML,backgroundSave:e.backgroundSave,bookmarkId:e.bookmarkId,replaceBookmarkURL:e.replaceBookmarkURL,applySystemTheme:e.applySystemTheme,defaultEditorMode:e.defaultEditorMode,includeInfobar:e.includeInfobar,warnUnsavedPage:e.warnUnsavedPage,createRootDirectory:e.createRootDirectory,selfExtractingArchive:e.selfExtractingArchive,embeddedImage:n?Array.from(n):null,preventAppendedData:e.preventAppendedData,extractDataFromPage:e.extractDataFromPage,insertCanonicalLink:e.insertCanonicalLink,insertMetaNoIndex:e.insertMetaNoIndex,insertMetaCSP:e.insertMetaCSP,password:e.password,compressContent:e.compressContent,foregroundSave:e.foregroundSave,sharePage:e.sharePage};if(e.compressContent){const a=new Blob([await l(t)],{type:t.mimeType}),o=URL.createObjectURL(a);r.blobURL=o;const i=await browser.runtime.sendMessage(r);if(URL.revokeObjectURL(o),i.error){r.embeddedImage=n,r.blobURL=null,r.pageData=t;let e,a=0;const o=await l(r);do{e=Array.from(o.slice(a,a+J)),a+=J,await browser.runtime.sendMessage({method:"downloads.download",compressContent:!0,data:e})}while(e.length);await browser.runtime.sendMessage({method:"downloads.download",compressContent:!0,mimeType:t.mimeType})}e.backgroundSave&&await browser.runtime.sendMessage({method:"downloads.end",taskId:e.taskId})}else{if(e.backgroundSave&&!e.sharePage||e.openEditor||e.saveToGDrive||e.saveToGitHub||e.saveWithCompanion||e.saveWithWebDAV||e.saveToDropbox){const e=URL.createObjectURL(new Blob([t.content],{type:t.mimeType}));r.blobURL=e;const n=await browser.runtime.sendMessage(r);if(URL.revokeObjectURL(e),n.error){r.blobURL=null;for(let e=0;e*J<t.content.length;e++)r.truncated=t.content.length>J,r.truncated?(r.finished=(e+1)*J>t.content.length,r.content=t.content.substring(e*J,(e+1)*J)):r.content=t.content,await browser.runtime.sendMessage(r)}}else e.saveToClipboard?function(t){const e="copy";function n(e){e.clipboardData.setData(t.mimeType,t.content),e.clipboardData.setData("text/plain",t.content),e.preventDefault()}document.addEventListener(e,n),document.execCommand(e),document.removeEventListener(e,n)}(t):await rt(t,e),e.openSavedPage&&open(URL.createObjectURL(new Blob([t.content],{type:t.mimeType}))),browser.runtime.sendMessage({method:"ui.processEnd"});await browser.runtime.sendMessage({method:"downloads.end",taskId:e.taskId,hash:t.hash,woleetKey:e.woleetKey})}}async function rt(t,e){if(e.sharePage&&navigator.share)await at(t,e);else if(t.filename&&t.filename.length){const e=document.createElement("a");return e.download=t.filename,e.href=URL.createObjectURL(new Blob([t.content],{type:t.mimeType})),e.dispatchEvent(new MouseEvent("click")),new Promise((t=>setTimeout((()=>{URL.revokeObjectURL(e.href),t()}),1e3)))}}async function at(t,e){et=function(){let t;return{display:async function(e){return new Promise((n=>{t=n,Z(G,"",{buttonLabel:e?q:H,buttonOnclick:n})}))},hide:function(){const t=document.querySelector(G);t&&t.remove()},cancel:function(){this.hide(),t&&t(!0)}}}();if(!await et.display(e.selected)){const n={files:[new File([t.content],t.filename,{type:t.mimeType})]};try{await navigator.share(n),et.hide()}catch(n){if(et.hide(),"AbortError"!==n.name)throw n;await at(t,e)}}}X({EMBEDDED_IMAGE_BUTTON_MESSAGE:K,SHARE_PAGE_BUTTON_MESSAGE:Y,SHARE_SELECTION_BUTTON_MESSAGE:$,ERROR_TITLE_MESSAGE:tt});const ot="single-file-request-fetch",it="single-file-ack-fetch",st="single-file-response-fetch",ct="Host fetch error (SingleFile)",lt=2500,ut=Boolean(window.wrappedJSObject),dt=(t,e)=>window.fetch(t,e);let ft=0,mt=new Map;async function pt(t){const e=await browser.runtime.sendMessage(t);if(!e||e.error)throw new Error(e&&e.error&&e.error.toString());return e}browser.runtime.onMessage.addListener((t=>"singlefile.fetchFrame"==t.method&&window.frameId&&window.frameId==t.frameId?async function(t){try{const e=await dt(t.url,{cache:"force-cache",headers:t.headers});return{status:e.status,headers:[...e.headers],array:Array.from(new Uint8Array(await e.arrayBuffer()))}}catch(t){return{error:t&&t.toString()}}}(t):"singlefile.fetchResponse"==t.method?async function(t){const e=mt.get(t.requestId);e&&(t.error?(e.reject(new Error(t.error)),mt.delete(t.requestId)):(t.truncated&&(e.array?e.array=e.array.concat(t.array):(e.array=t.array,mt.set(t.requestId,e)),t.finished&&(t.array=e.array)),t.truncated&&!t.finished||(e.resolve({status:t.status,headers:{get:e=>t.headers&&t.headers[e]},arrayBuffer:async()=>new Uint8Array(t.array).buffer}),mt.delete(t.requestId))));return{}}(t):void 0));const ht=globalThis.singlefile,yt=ht.helper.SELECTED_CONTENT_ATTRIBUTE_NAME,gt="singlefile-mask",wt="singlefile-mask-content",bt="singlefile-progress-bar",At="singlefile-progress-bar-content",Et="single-file-selection-zone",vt="singlefile-logs-window",St="singlefile-logs",It="singlefile-logs-line",Ct="singlefile-logs-line-text",xt="singlefile-logs-line-icon",Tt=ht.helper.SINGLE_FILE_UI_ELEMENT_CLASS,Lt=8,Pt=browser.i18n.getMessage("logPanelDeferredImages"),Dt=browser.i18n.getMessage("logPanelFrameContents"),Rt=browser.i18n.getMessage("logPanelEmbeddedImage"),Ut=browser.i18n.getMessage("logPanelStep"),kt=browser.i18n.getMessage("logPanelWidth"),Ot=new Set(Array.from(getComputedStyle(document.documentElement)));let Bt,Nt;function Mt(t,e){return prompt(t,e)}function _t(t){if(!document.querySelector(gt)&&(t.logsEnabled&&document.documentElement.appendChild(Nt),t.shadowEnabled)){const e=function(){try{let t=document.querySelector(gt);if(!t){t=Kt(gt,document.documentElement);const e=t.attachShadow({mode:"open"}),n=document.createElement("style");n.textContent=`\n\t\t\t\t@keyframes single-file-progress { \n\t\t\t\t\t0% { \n\t\t\t\t\t\tleft: -50px;\n\t\t\t\t\t} \n\t\t\t\t\t100% { \n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.${bt} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 0;\n\t\t\t\t\theight: 8px;\n\t\t\t\t\tz-index: 2147483646;\n\t\t\t\t\topacity: .5;\n\t\t\t\t\toverflow: hidden;\t\t\t\t\t\n\t\t\t\t\ttransition: width 200ms ease-in-out;\n\t\t\t\t}\n\t\t\t\t.${At} {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\tanimation: single-file-progress 3s linear infinite reverse;\n\t\t\t\t\tbackground: \n\t\t\t\t\t\twhite \n\t\t\t\t\t\tlinear-gradient(-45deg, rgba(0, 0, 0, 0.075) 25%, \n\t\t\t\t\t\t\ttransparent 25%, \n\t\t\t\t\t\t\ttransparent 50%, \n\t\t\t\t\t\t\trgba(0, 0, 0, 0.075) 50%, \n\t\t\t\t\t\t\trgba(0, 0, 0, 0.075) 75%, \n\t\t\t\t\t\t\ttransparent 75%, transparent)\n\t\t\t\t\t\trepeat scroll 0% 0% / 50px 50px padding-box border-box;\n\t\t\t\t\twidth: calc(100% + 50px);\n\t\t\t\t\theight: 100%;\t\t\t\t\t\n\t\t\t\t}\n\t\t\t\t.${wt} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tz-index: 2147483646;\n\t\t\t\t\topacity: 0;\n\t\t\t\t\tbackground-color: black;\n\t\t\t\t\ttransition: opacity 250ms;\n\t\t\t\t}\n\t\t\t`,e.appendChild(n);let r=document.createElement("div");r.classList.add(wt),e.appendChild(r),t.offsetWidth,r.style.setProperty("opacity",.3),t.offsetWidth}return t}catch(t){}}();t.progressBarEnabled&&function(t){try{if(!t.shadowRoot.querySelector("."+bt)){let e=document.createElement("div");e.classList.add(bt),t.shadowRoot.appendChild(e);const n=document.createElement("div");n.classList.add(At),e.appendChild(n)}}catch(t){}}(e)}}function Ft(){const t=document.querySelector(gt);t&&t.remove(),Nt.remove(),Xt()}function jt(t,e,n){n.shadowEnabled&&n.progressBarEnabled&&function(t,e){try{const n=document.querySelector(gt);if(n){const r=n.shadowRoot.querySelector("."+bt);if(r&&e){const n=Math.floor(t/e*100)+"%";r.style.getPropertyValue("width")!=n&&(r.style.setProperty("width",n),r.offsetWidth)}}}catch(t){}}(t,e)}function Gt(){let t;const e=[],n=getSelection();for(let r=0;r<n.rangeCount;r++){let a=n.getRangeAt(r);if(a&&a.commonAncestorContainer){const n=document.createTreeWalker(a.commonAncestorContainer);let r=!1,o=!1;for(;!o;)(r||n.currentNode==a.startContainer||n.currentNode==a.endContainer)&&(r=!0,a.startContainer==a.endContainer&&a.startOffset==a.endOffset||(t=!0,"A"==n.currentNode.tagName&&n.currentNode.href&&e.push(n.currentNode.href))),n.currentNode==a.endContainer?o=!0:n.nextNode();t&&n.currentNode==a.endContainer&&n.currentNode.querySelectorAll&&n.currentNode.querySelectorAll("*").forEach((t=>{"A"==t.tagName&&t.href&&e.push(n.currentNode.href)}))}}return Array.from(new Set(e))}async function Wt(t){let e=Ht();return e||t?e:(e=await new Promise((t=>{let e=[];function n(t){e=[],s(),t.preventDefault()}function r(t){const e=function(t){let e,n=t.target,r=n.getBoundingClientRect();for(e=Jt("floor",n,t.clientX-r.left,Zt(n,"left")),e==n&&(e=Jt("ceil",n,r.left+r.width-t.clientX,Zt(n,"right"))),e==n&&(e=Jt("floor",n,t.clientY-r.top,Zt(n,"top"))),e==n&&(e=Jt("ceil",n,r.top+r.height-t.clientY,Zt(n,"bottom"))),n=e;n&&n.clientWidth<=Lt&&n.clientHeight<=Lt;)n=n.parentElement;return n}(t);var n;e&&(Bt=e,n=e,requestAnimationFrame((()=>{const t=Vt(),e=n.getBoundingClientRect(),r=document.scrollingElement||document.documentElement;t.style.setProperty("top",r.scrollTop+e.top-10+"px"),t.style.setProperty("left",r.scrollLeft+e.left-10+"px"),t.style.setProperty("width",e.width+20+"px"),t.style.setProperty("height",e.height+20+"px")})))}function a(t){t.preventDefault(),t.stopPropagation(),0==t.button?s(Bt,t.ctrlKey):i()}function o(t){"Escape"==t.key&&i()}function i(){e.length&&getSelection().removeAllRanges(),e=[],l()}function s(t,e){if(t){e||u();const n=document.createRange();n.selectNodeContents(t),c(),getSelection().addRange(n),d(),e||l()}else l()}function c(){const t=getSelection();for(let e=t.rangeCount-1;e>=0;e--){const n=t.getRangeAt(e);n.startOffset==n.endOffset&&(t.removeRange(n),e--)}}function l(){Vt().remove(),removeEventListener("mousemove",r,!0),removeEventListener("click",a,!0),removeEventListener("keyup",o,!0),Bt=null,t(Boolean(e.length)),setTimeout((()=>document.removeEventListener("contextmenu",n,!0)),0)}function u(){getSelection().removeAllRanges(),e.forEach((t=>getSelection().addRange(t)))}function d(){e=[];for(let t=0;t<getSelection().rangeCount;t++){const n=getSelection().getRangeAt(t);e.push(n)}}addEventListener("mousemove",r,!0),addEventListener("click",a,!0),addEventListener("keyup",o,!0),document.addEventListener("contextmenu",n,!0),getSelection().removeAllRanges()})),e?Ht():void 0)}function Ht(){const t=getSelection();let e;for(let n=0;n<t.rangeCount;n++){let r=t.getRangeAt(n);if(r&&r.commonAncestorContainer){const t=document.createTreeWalker(r.commonAncestorContainer);let n=!1,a=!1;for(;!a;)(n||t.currentNode==r.startContainer||t.currentNode==r.endContainer)&&(n=!0,r.startContainer==r.endContainer&&r.startOffset==r.endOffset||(e=!0,qt(t.currentNode))),e&&t.currentNode==r.startContainer&&zt(t.currentNode),t.currentNode==r.endContainer?a=!0:t.nextNode();e&&t.currentNode==r.endContainer&&t.currentNode.querySelectorAll&&t.currentNode.querySelectorAll("*").forEach((t=>qt(t)))}}return e}function qt(t){(t.nodeType==Node.ELEMENT_NODE?t:t.parentElement).setAttribute(yt,"")}function zt(t){t.parentElement&&(qt(t),zt(t.parentElement))}function Vt(){let t=document.querySelector(Et);return t||(t=Kt(Et,document.body),t.style.setProperty("box-sizing","border-box","important"),t.style.setProperty("background-color","#3ea9d7","important"),t.style.setProperty("border","10px solid #0b4892","important"),t.style.setProperty("border-radius","2px","important"),t.style.setProperty("opacity",".25","important"),t.style.setProperty("pointer-events","none","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("transition","all 100ms","important"),t.style.setProperty("cursor","pointer","important"),t.style.setProperty("z-index","2147483647","important"),t.style.removeProperty("border-inline-end"),t.style.removeProperty("border-inline-start"),t.style.removeProperty("inline-size"),t.style.removeProperty("block-size"),t.style.removeProperty("inset-block-start"),t.style.removeProperty("inset-inline-end"),t.style.removeProperty("inset-block-end"),t.style.removeProperty("inset-inline-start")),t}function Xt(){try{if(Nt=document.querySelector(vt),!Nt){Nt=Kt(vt);const t=Nt.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`\n\t\t\t\t@keyframes single-file-pulse { \n\t\t\t\t\t0% { \n\t\t\t\t\t\topacity: .25;\n\t\t\t\t\t} \n\t\t\t\t\t100% { \n\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t} \n\t\t\t\t}\n\t\t\t\t.${St} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\tbottom: 24px;\n\t\t\t\t\tleft: 8px;\n\t\t\t\t\tz-index: 2147483647;\n\t\t\t\t\topacity: 0.9;\n\t\t\t\t\tpadding: 4px;\n\t\t\t\t\tbackground-color: white;\n\t\t\t\t\tmin-width: ${kt}px;\n\t\t\t\t\tmin-height: 16px;\n\t\t\t\t\ttransition: height 100ms;\n\t\t\t\t}\n\t\t\t\t.${It} {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tjustify-content: space-between;\n\t\t\t\t\tpadding: 2px;\n\t\t\t\t\tfont-family: arial, sans-serif;\n\t\t\t\t\tcolor: black;\n\t\t\t\t\tbackground-color: white;\n\t\t\t\t}\n\t\t\t\t.${Ct} {\n\t\t\t\t\tfont-size: 13px;\n\t\t\t\t\topacity: 1;\n\t\t\t\t\ttransition: opacity 200ms;\n\t\t\t\t}\n\t\t\t\t.${xt} {\n\t\t\t\t\tfont-size: 11px;\n\t\t\t\t\tmin-width: 15px;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\ttop: 1px;\n\t\t\t\t}\n\t\t\t`,t.appendChild(e);const n=document.createElement("div");n.classList.add(St),t.appendChild(n)}}catch(t){}}function Qt(t,e,n,r){try{if(r.logsEnabled){const r=Nt.shadowRoot.querySelector("."+St);let a=r.querySelector("[data-id='"+t+"']");if(!a){a=document.createElement("div"),a.classList.add(It),r.appendChild(a),a.setAttribute("data-id",t);const n=document.createElement("div");n.classList.add(Ct),a.appendChild(n),n.textContent=e;const o=document.createElement("div");o.classList.add(xt),a.appendChild(o)}!function(t,e,n){const r=t.childNodes[0],a=t.childNodes[1];r.textContent=e,a.style.setProperty("color","✓"==n?"#055000":"black"),"✓"==n?(r.style.setProperty("opacity",".5"),a.style.setProperty("opacity",".5"),a.style.setProperty("animation","none")):a.style.setProperty("animation","1s ease-in-out 0s infinite alternate none running single-file-pulse");a.textContent=n}(a,e,n)}}catch(t){}}function Zt(t,e){let n,r=t,a=[];do{const t=r.getBoundingClientRect();if(r.parentElement){const o=r.parentElement.getBoundingClientRect();n=Math.abs(o[e]-t[e])<=Lt,n&&(r.parentElement.clientWidth>Lt&&r.parentElement.clientHeight>Lt&&(r.parentElement.clientWidth-r.clientWidth>Lt||r.parentElement.clientHeight-r.clientHeight>Lt)&&a.push(r.parentElement),r=r.parentElement)}else n=!1}while(n&&r);return a}function Jt(t,e,n,r){return Math[t](n/Lt)<=r.length&&(e=r[r.length-Math[t](n/Lt)-1]),e}function Kt(t,e){const n=document.createElement(t);return n.className=Tt,e&&e.appendChild(n),Ot.forEach((t=>n.style.setProperty(t,"initial","important"))),n}Xt();const Yt=globalThis.singlefile,$t=globalThis.singlefileBootstrap,te="moz-extension:";let ee,ne,re,ae;X({EMBEDDED_IMAGE_BUTTON_MESSAGE:browser.i18n.getMessage("topPanelEmbeddedImageButton"),SHARE_PAGE_BUTTON_MESSAGE:browser.i18n.getMessage("topPanelSharePageButton"),SHARE_SELECTION_BUTTON_MESSAGE:browser.i18n.getMessage("topPanelShareSelectionButton"),ERROR_TITLE_MESSAGE:browser.i18n.getMessage("topPanelError")}),$t&&$t.initializedSingleFile||(Yt.init({fetch:async function(t,e={}){try{const n={cache:"force-cache",headers:e.headers};return await(e.referrer&&ut?async function(t,e){const n=new Promise(((n,r)=>{document.dispatchEvent(new CustomEvent(ot,{detail:JSON.stringify({url:t,options:e})})),document.addEventListener(it,i,!1),document.addEventListener(st,o,!1);const a=setTimeout((()=>{s(),r(new Error(ct))}),lt);function o(e){e.detail?e.detail.url==t&&(s(),e.detail.response?n({status:e.detail.status,headers:new Map(e.detail.headers),arrayBuffer:async()=>e.detail.response}):r(e.detail.error)):r()}function i(){clearTimeout(a)}function s(){document.removeEventListener(st,o,!1),document.removeEventListener(it,i,!1)}}));try{return await n}catch(n){if(n&&n.message==ct)return dt(t,e);throw n}}(t,n):dt(t,n))}catch(n){ft++;const r=new Promise(((t,e)=>mt.set(ft,{resolve:t,reject:e})));return await pt({method:"singlefile.fetch",url:t,requestId:ft,referrer:e.referrer,headers:e.headers}),r}},frameFetch:async function(t,e){const n=await pt({method:"singlefile.fetchFrame",url:t,frameId:e.frameId,referrer:e.referrer,headers:e.headers});return{status:n.status,headers:new Map(n.headers),arrayBuffer:async()=>new Uint8Array(n.array).buffer}}}),browser.runtime.onMessage.addListener((t=>{if("content.save"==t.method||"content.cancelSave"==t.method||"content.download"==t.method||"content.getSelectedLinks"==t.method||"content.error"==t.method||"content.prompt"==t.method)return async function(t){if(!location.href.startsWith(te)){if("content.save"==t.method)return await async function(t){const e=t.options;let n;(e.selected||e.optionallySelected)&&(n=await Wt(e.optionallySelected));if(!(ne||$t&&$t.pageInfo.processing)){if(e.updatedResources=$t?$t.pageInfo.updatedResources:{},e.visitDate=$t?$t.pageInfo.visitDate:new Date,Object.keys(e.updatedResources).forEach((t=>e.updatedResources[t].retrieved=!1)),e.optionallySelected&&n&&(e.selected=!0),!e.selected||n){$t&&($t.pageInfo.processing=!0),ne=!0;try{const t=await async function(t){const e=Yt.processors.frameTree;let n;t.keepFilename=t.saveToGDrive||t.saveToGitHub||t.saveWithWebDAV||t.saveToDropbox,Yt.helper.initDoc(document),_t(t),ee=new Yt.SingleFile(t);const r=[];t.insertCanonicalLink=!0;let a=0,o=0;t.onprogress=e=>{ee.cancelled||(e.type==e.RESOURCES_INITIALIZED&&(o=e.detail.max,t.loadDeferredImages&&Yt.processors.lazy.resetZoomLevel(t)),e.type==e.RESOURCES_INITIALIZED||e.type==e.RESOURCE_LOADED?(e.type==e.RESOURCE_LOADED&&a++,browser.runtime.sendMessage({method:"ui.processProgress",index:a,maxIndex:o}),jt(a,o,t)):e.detail.frame||e.type==e.PAGE_LOADING||e.type==e.PAGE_LOADED||(e.type==e.STAGE_STARTED?e.detail.step<3&&function(t,e){Qt("step-"+t,`${Ut} ${t+1} / 3`,"…",e)}(e.detail.step,t):e.type==e.STAGE_ENDED?e.detail.step<3&&function(t,e){Qt("step-"+t,`${Ut} ${t+1} / 3`,"✓",e)}(e.detail.step,t):(e.type==e.STAGE_TASK_STARTED||e.type==e.STAGE_TASK_ENDED)&&(e.detail.step,e.detail.task)))};const i=ee.cancel.bind(ee);if(t.insertEmbeddedImage&&t.compressContent){!function(t){Qt("insert-embedded-image",Rt,"…",t)}(t),ae=function(){let t;return{display:async function(){return new Promise((e=>{t=e,Z(j,"",{buttonLabel:W,buttonOnclick:e})}))},hide:function(){const t=document.querySelector(j);t&&t.remove()},cancel:function(){this.hide(),t&&t(!0)}}}();await ae.display()||(t.embeddedImage=await function({accept:t}={accept:"image/*"}){const e=document.createElement("input");return e.type="file",e.accept=t,e.click(),new Promise((t=>{e.addEventListener("change",(async e=>{if(e.target.files.length){const n=e.target.files[0];if("image/png"==n.type){const e=new FileReader;e.addEventListener("load",(async()=>t(new Uint8Array(e.result)))),e.addEventListener("error",(()=>t())),e.readAsArrayBuffer(n)}else{const e=await new Promise((t=>{const e=new FileReader;e.addEventListener("load",(()=>t(e.result))),e.addEventListener("error",(()=>t())),e.readAsDataURL(n)}));if(e){const r=await createImageBitmap(n),a=new Image;a.src=e,a.addEventListener("error",(()=>t())),await new Promise((t=>a.addEventListener("load",t)));const o=new OffscreenCanvas(a.width,a.height);o.getContext("2d").drawImage(r,0,0);const i=await o.convertToBlob({type:"image/png"}),s=new FileReader;s.addEventListener("load",(()=>t(new Uint8Array(s.result)))),s.addEventListener("error",(()=>t())),s.readAsArrayBuffer(i)}else t()}}else t()})),e.addEventListener("cancel",(()=>t()))}))}({accept:"image/*"}),ae.hide()),function(t){Qt("insert-embedded-image",Rt,"✓",t)}(t)}if(!t.saveRawPage&&!ee.cancelled){let n;if(t.loadDeferredImages&&(n=Yt.processors.lazy.process(t),function(t){Qt("load-deferred-images",Pt,"…",t)}(t),n.then((()=>{ee.cancelled||function(t){Qt("load-deferred-images",Pt,"✓",t)}(t)})),t.loadDeferredImagesBeforeFrames&&await n),!t.removeFrames&&e&&globalThis.frames){let n;n=t.loadDeferredImages?new Promise((n=>globalThis.setTimeout((()=>n(e.getAsync(t))),t.loadDeferredImagesBeforeFrames||!t.loadDeferredImages?0:t.loadDeferredImagesMaxIdleTime))):e.getAsync(t),function(t){Qt("load-frames",Dt,"…",t)}(t),n.then((()=>{ee.cancelled||function(t){Qt("load-frames",Dt,"✓",t)}(t)})),t.loadDeferredImagesBeforeFrames?t.frames=await new Promise((t=>{ee.cancel=function(){i(),t([])},n.then(t)})):r.push(n)}t.loadDeferredImages&&!t.loadDeferredImagesBeforeFrames&&r.push(n)}t.loadDeferredImagesBeforeFrames||ee.cancelled||([t.frames]=await new Promise((t=>{const e=Promise.all(r);ee.cancel=function(){i(),t([[]])},e.then((()=>t(e)))})));t.delayBeforeProcessing&&await new Promise((e=>setTimeout(e,1e3*t.delayBeforeProcessing)));n=t.frames&&t.frames.sessionId;const s=t.frames&&t.frames.find((t=>t.requestedFrame));t.win=globalThis,s?(t.content=s.content,t.url=s.baseURI,t.canvases=s.canvases,t.fonts=s.fonts,t.stylesheets=s.stylesheets,t.images=s.images,t.posters=s.posters,t.videos=s.videos,t.usedFonts=s.usedFonts,t.shadowRoots=s.shadowRoots,t.adoptedStyleSheets=s.adoptedStyleSheets):t.doc=document;ee.cancelled||await ee.run();n&&e.cleanup(n);let c;ee.cancelled||(t.confirmInfobarContent&&(t.infobarContent=Mt("Infobar content",t.infobarContent)||""),c=await ee.getPageData(),(t.selected||t.optionallySelected)&&document.querySelectorAll("["+yt+"]").forEach((t=>t.removeAttribute(yt))),Ft(),t.displayStats&&(console.log("SingleFile stats"),console.table(c.stats)));return c}(e);t&&((!e.backgroundSave&&!e.saveToClipboard||e.saveToGDrive||e.saveToGitHub||e.saveWithCompanion||e.saveWithWebDAV||e.saveToDropbox)&&e.confirmFilename&&(t.filename=Mt("Save as",t.filename)||t.filename),await nt(t,e))}catch(t){if(!ee.cancelled){console.error(t);const e=t.toString();browser.runtime.sendMessage({method:"ui.processError",error:e}),Q(e)}}}else browser.runtime.sendMessage({method:"ui.processCancelled"});ne=!1,$t&&($t.pageInfo.processing=!1)}}(t),{};if("content.cancelSave"==t.method)return ee&&(ee.cancel(),Ft(),ae&&(ae.cancel(),ae=null),browser.runtime.sendMessage({method:"ui.processCancelled"})),t.options.loadDeferredImages&&Yt.processors.lazy.resetZoomLevel(t.options),{};if("content.getSelectedLinks"==t.method)return{urls:Gt()};if("content.download"==t.method){re||(re=E());const e=await re.next(t.data);if(e.done){re=null;try{await rt(e.value,{foregroundSave:e.value.foregroundSave,sharePage:e.value.sharePage})}catch(t){return{error:t.toString()}}finally{await browser.runtime.sendMessage({method:"downloads.end",taskId:e.value.taskId})}}return{}}if("content.error"==t.method)return Q(t.error,t.link),{};if("content.prompt"==t.method)return Mt(t.message,t.value)}}(t)})),$t?$t.initializedSingleFile=!0:globalThis.singlefileBootstrap={initializedSingleFile:!0})}();
