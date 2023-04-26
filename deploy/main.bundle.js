(()=>{"use strict";var e={705:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},738:e=>{e.exports=function(e){return e[1]}},426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(738),a=n.n(r),o=n(705),i=n.n(o)()(a());i.push([e.id,"body{\n    margin: 0;\n    padding: 0;\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\n    font-weight: bold;\n    font-size: 16px;\n\n}\nh1{\n    color:rgb(255, 139, 118);\n    text-align: center;\n}\n.keyoutput{\n    margin: auto;\n    display: block;\n    width:64% ;\n    height: 150px;\n    margin-bottom: 70px;\n}\n.wrapper{\n    min-width: 100%;\n    min-height: 100%;\n}\n\n.keyboard{\n    margin:0 auto;\n    width: 64%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    background:#5c5c5c;\n    padding: 1% 0;\n    box-shadow: 5px 5px 2px rgb(165, 165, 165);\n}\n.rows{\n    position: relative;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: row;\n    min-width: 60vw;\n}\n\n.key{\n    display: flex;\n    width: 4vw;\n    height: 50px;\n    border: 3px solid #f3f3f3;\n    align-items: center;\n    justify-content: center;\n    background: #000000d3;\n    border-radius: 15px;\n    color: #fff;\n    margin: 1px;\n    text-transform: lowercase;\n}\n.Backspace{\n    width: 8vw;\n}\n.Tab,.Backslash,.AltLeft,.AltRight{\n    width: 6vw;\n}\n.CapsLock, .Enter{\n    width: 8vw;\n}\n.ShiftLeft,.ShiftRight{\n    width: 8vw;\n}\n.Space{\n    width: 24.5vw;\n}\n.lowercase{\n    text-transform: lowercase;\n}\n.upper{\n    text-transform: uppercase;\n}\n.key:hover{\n    cursor: pointer;\n}\n.key:active{\n    background: greenyellow;\n}\n.active{\n    background: greenyellow;\n}",""]);const c=i},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=a(f,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),c=n(565),s=n.n(c),d=n(216),l=n.n(d),p=n(589),u=n.n(p),f=n(426),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=n.p+"0e8ecb8db9ba4016d812.png",y=document.createElement("img");y.src=m,document.body.appendChild(y);const v={Escape:"ESC",F1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12","PRT SC":"PRT SC",Del:"Del","`":"~","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",Backspace:"BACKSPACE",Tab:"TAB",KeyQ:"q",KeyW:"w",KeyE:"e",KeyR:"r",KeyT:"t",KeyY:"y",KeyU:"u",KeyI:"i",KeyO:"o",KeyP:"p","[":"{","]":"}","|":"\\",CapsLock:"CapsLock",KeyA:"a",KeyS:"s",KeyD:"d",KeyF:"f",KeyG:"g",KeyH:"h",KeyJ:"j",KeyK:"k",KeyL:"l",":":";","'":'"',Enter:"Enter",ShiftLeft:"SHIFT",KeyZ:"z",KeyX:"x",KeyC:"c",KeyV:"v",KeyB:"b",KeyN:"n",KeyM:"m",Comma:",",Period:".",Slash:"/",ArrowUp:"▲",ShiftRight:"SHIFT",ControlLeft:"CTRL",MetaLeft:"WIN",AltLeft:"ALT",Space:"SPACE",AltRight:"ALT",ArrowLeft:"◀",ArrowDown:"▼",ArrowRight:"▶",ControlRight:"CTRL"};let g=document.createElement("link");g.rel="icon",g.href="./keyboard-1425.png";let w=document.createElement("div");w.classList.add("wrapper");let L=document.createElement("h1");L.textContent="My first Webpack project";let b=document.createElement("textarea");b.classList.add("keyoutput"),b.size=55;let x=document.createElement("div");x.classList.add("keyboard");let E=document.createElement("div");E.classList.add("rows");let T=document.createElement("div");T.classList.add("rows");let k=document.createElement("div");k.classList.add("rows");let K=document.createElement("div");K.classList.add("rows");let S=document.createElement("div");S.classList.add("rows");let C=document.createElement("div");C.classList.add("rows");let A=[];for(let[e,t]of Object.entries(v))A.push(`<button class="key ${e}"> ${t}</button>`);for(let e=0;e<A.length;e++)e<15?(E.innerHTML+=A[e],x.append(E)):e>=15&&e<29?(T.innerHTML+=A[e],x.append(T)):e>=29&&e<43?(k.innerHTML+=A[e],x.append(k)):e>=43&&e<56?(K.innerHTML+=A[e],x.append(K)):e>=56&&e<69?(S.innerHTML+=A[e],x.append(S)):e>=69&&e<A.length&&(C.innerHTML+=A[e],x.append(C));document.head.appendChild(g),w.append(L),w.append(b),w.append(x),document.body.appendChild(w);let F=document.querySelectorAll("button");function M(e){let t,n;return"click"===e.type?(t=e.target.innerText,t):("keydown"===e.type?(n=e.key,F.forEach((e=>{e.innerText===n&&e.classList.add("active")})),"AltLeft"===e.code&&e.shiftKey&&F.forEach((e=>{(e.classList.contains("ShiftLeft")||e.classList.contains("AltLeft"))&&e.classList.add("active")})),e.shiftKey&&F.forEach((e=>{e.classList.add("upper")}))):"keyup"===e.type&&(F.forEach((e=>{e.classList.contains("active")&&e.classList.remove("active")})),"AltLeft"===e.code&&e.shiftKey&&F.forEach((e=>{(e.classList.contains("ShiftLeft")||e.classList.contains("AltLeft"))&&e.classList.remove("active")})),F.forEach((e=>{e.classList.contains("upper")&&e.classList.remove("upper")}))),n)}document.addEventListener("click",M),document.addEventListener("keydown",M),document.addEventListener("keyup",M)})()})();