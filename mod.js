// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Math.fround?Math.fround:null;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol:void 0,e="function"==typeof a?a.toStringTag:"";var u=r&&"symbol"==typeof Symbol.toStringTag?function(t){var r,a,u,f,l;if(null==t)return n.call(t);a=t[e],l=e,r=null!=(f=t)&&o.call(f,l);try{t[e]=void 0}catch(r){return n.call(t)}return u=n.call(t),r?t[e]=a:delete t[e],u}:function(t){return n.call(t)},f="function"==typeof Float32Array;var l=Number.POSITIVE_INFINITY,c="function"==typeof Float32Array?Float32Array:null;var i="function"==typeof Float32Array?Float32Array:void 0;var y=new(function(){var t,r,n;if("function"!=typeof c)return!1;try{r=new c([1,3.14,-3.14,5e40]),n=r,t=(f&&n instanceof Float32Array||"[object Float32Array]"===u(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===l}catch(r){t=!1}return t}()?i:function(){throw new Error("not implemented")})(1);var p="function"==typeof t?t:function(t){return y[0]=t,y[0]},v=p(57.29577951308232);var b=Math.sqrt;var m=p(1.5707963267948966);function S(t){var r,n,o,a;return function(t){return t!=t}(t)?NaN:((t=p(t))>0?(n=1,o=t):(n=-1,o=-t),o>1?NaN:o<1e-4?t:(o>.5?(o=function(t){return p(b(p(t)))}(a=p(.5*p(1-o))),r=1):(a=p(o*o),r=0),a=p(p(p(function(t){return 0===t?.16666752099990845:p(.16666752099990845+p(t*p(.07495300471782684+p(t*p(.04547002539038658+p(t*p(.024181311950087547+p(.04216320067644119*t))))))))}(a)*a)*o)+o),0!==r&&(a=p(a+a),a=p(m-a)),n<0&&(a=-a),a))}function d(t){return function(t){return p(p(t)*v)}(function(t){return S(p(1/p(t)))}(p(t)))}export{d as default};
//# sourceMappingURL=mod.js.map
