"use strict";function l(r){let n={};for(let[e,t]of Object.entries(r??{}))if(e!=="__CSS_VALUES__")if(typeof t=="object"&&t!==null)for(let[s,i]of Object.entries(l(t)))n[`${e}${s==="DEFAULT"?"":`-${s}`}`]=i;else n[e]=t;if("__CSS_VALUES__"in r)for(let[e,t]of Object.entries(r.__CSS_VALUES__))(Number(t)&4)===0&&(n[e]=r[e]);return n}module.exports=l;
