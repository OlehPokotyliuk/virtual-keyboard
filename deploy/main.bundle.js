(()=>{"use strict";var e={705:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<e.length;p++){var u=[].concat(e[p]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},738:e=>{e.exports=function(e){return e[1]}},426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(738),o=t.n(r),a=t(705),i=t.n(a)()(o());i.push([e.id,"body{\n    margin: 0;\n    padding: 0;\n    font-size: 26px;\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    box-sizing: border-box;\n}\n\n.wrapper{\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 600px;\n}\n.keys{\n    background-color: #ffffff;\n    padding: 20px;\n    margin: 1px;\n    font-size: 14px;\n    \n}\n.keys:hover{\n    background :rgb(153, 255, 0); \n    cursor: pointer;\n}\n.keys:active{\n    background : rgb(95, 247, 75);\n    cursor: pointer;\n\n}\n.upper{\n    display: block;\n    padding: 17px;\n}\n.upper::first-letter{\n    font-size: 20px;\n}\n\n.lower{\n    text-transform: lowercase !important;\n}",""]);const c=i},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],p=r.base?s[0]+r.base:s[0],u=a[p]||0,l="".concat(p," ").concat(u);a[p]=u+1;var d=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var v=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),p=0;p<a.length;p++){var u=t(a[p]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),p=t(216),u=t.n(p),l=t(589),d=t.n(l),f=t(426),v={};v.styleTagTransform=d(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),n()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const y=[["ё","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],["Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\"],["Caps Lock","ф","ы","в","а","п","р","о","л","д","ж","э","Enter"],["Shift","я","ч","с","м","и","т","ь","б","ю",".","Shift"],["Ctrl","Win","Alt","Space","Alt","Ctrl"]],m=[["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],["Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\"],["Caps Lock","a","s","d","f","g","h","j","k","l",";","'","Enter"],["Shift","z","x","c","v","b","n","m",",",".","/","Shift"],["Ctrl","Win","Alt","Space","Alt","Ctrl"]];let h=0;function g(e){!function(e){let n;n=h%2==0?m:y,function(e,n){let t=e;document.querySelectorAll(".wrapper").forEach((e=>e.remove()));let r=!1;"keydown"===n.type&&"Shift"===n.key?r=!0:"keyup"===n.type&&"Shift"===n.key&&(r=!1);let o=!1;"keydown"===n.type&&"CapsLock"===n.key?(o=!o,console.log(o)):"keyup"===n.type&&"CapsLock"===n.key&&(o=!1,console.log(o)),n.shiftKey&&n.altKey&&(h+=1);for(let e=0;e<t.length;e++){let n=document.createElement("div");n.classList.add("wrapper"),document.body.append(n);for(let o=0;o<t[e].length;o++){let a=document.createElement("button");a.classList.add("keys"),a.append(t[e][o]),r&&a.classList.add("upper"),n.append(a)}}}(n,e)}(e)}document.addEventListener("DOMContentLoaded",(()=>{document.addEventListener("click",g),document.addEventListener("keyup",g),document.addEventListener("keydown",g)}))})()})();