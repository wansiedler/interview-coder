import{g as i}from"./main-GFCnDHyO.js";function u(e,n){for(var r=0;r<n.length;r++){const t=n[r];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(t,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var s,l;function c(){if(l)return s;l=1,s=e,e.displayName="$false",e.aliases=[];function e(n){(function(r){r.languages.false={comment:{pattern:/\{[^}]*\}/},string:{pattern:/"[^"]*"/,greedy:!0},"character-code":{pattern:/'(?:[^\r]|\r\n?)/,alias:"number"},"assembler-code":{pattern:/\d+`/,alias:"important"},number:/\d+/,operator:/[-!#$%&'*+,./:;=>?@\\^_`|~ßø]/,punctuation:/\[|\]/,variable:/[a-z]/,"non-standard":{pattern:/[()<BDO®]/,alias:"bold"}}})(n)}return s}var f=c();const p=i(f),g=u({__proto__:null,default:p},[f]);export{g as _};
