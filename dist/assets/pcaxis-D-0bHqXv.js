import{g as u}from"./main-GFCnDHyO.js";function c(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(r,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o,i;function d(){if(i)return o;i=1,o=e,e.displayName="pcaxis",e.aliases=["px"];function e(t){t.languages.pcaxis={string:/"[^"]*"/,keyword:{pattern:/((?:^|;)\s*)[-A-Z\d]+(?:\s*\[[-\w]+\])?(?:\s*\("[^"]*"(?:,\s*"[^"]*")*\))?(?=\s*=)/,lookbehind:!0,greedy:!0,inside:{keyword:/^[-A-Z\d]+/,language:{pattern:/^(\s*)\[[-\w]+\]/,lookbehind:!0,inside:{punctuation:/^\[|\]$/,property:/[-\w]+/}},"sub-key":{pattern:/^(\s*)\S[\s\S]*/,lookbehind:!0,inside:{parameter:{pattern:/"[^"]*"/,alias:"property"},punctuation:/^\(|\)$|,/}}}},operator:/=/,tlist:{pattern:/TLIST\s*\(\s*\w+(?:(?:\s*,\s*"[^"]*")+|\s*,\s*"[^"]*"-"[^"]*")?\s*\)/,greedy:!0,inside:{function:/^TLIST/,property:{pattern:/^(\s*\(\s*)\w+/,lookbehind:!0},string:/"[^"]*"/,punctuation:/[(),]/,operator:/-/}},punctuation:/[;,]/,number:{pattern:/(^|\s)\d+(?:\.\d+)?(?!\S)/,lookbehind:!0},boolean:/NO|YES/},t.languages.px=t.languages.pcaxis}return o}var p=d();const l=u(p),f=c({__proto__:null,default:l},[p]);export{f as p};
