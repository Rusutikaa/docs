(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["highlight-js-custom-markdown","highlight-js-markdown"],{"023e":function(n,e,a){"use strict";a.r(e);a("ddb0");var i=a("04b0"),s=a.n(i);const t={begin:"<doc:",end:">",returnBegin:!0,contains:[{className:"link",begin:"doc:",end:">",excludeEnd:!0}]},c={className:"link",begin:/`{2}(?!`)/,end:/`{2}(?!`)/,excludeBegin:!0,excludeEnd:!0},d={begin:"^>\\s+[Note:|Tip:|Important:|Experiment:|Warning:]",end:"$",returnBegin:!0,contains:[{className:"quote",begin:"^>",end:"\\s+"},{className:"type",begin:"Note|Tip|Important|Experiment|Warning",end:":"},{className:"quote",begin:".*",end:"$",endsParent:!0}]},l={begin:"@",end:"[{\\)\\s]",returnBegin:!0,contains:[{className:"title",begin:"@",end:"[\\s+(]",excludeEnd:!0},{begin:":",end:"[,\\)\n\t]",excludeBegin:!0,keywords:{literal:"true false null undefined"},contains:[{className:"number",begin:"\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",endsWithParent:!0,excludeEnd:!0},{className:"string",variants:[{begin:/"""/,end:/"""/},{begin:/"/,end:/"/}],endsParent:!0},{className:"link",begin:"http|https",endsWithParent:!0,excludeEnd:!0}]}]};e["default"]=function(n){const e=s()(n),a=e.contains.find(({className:n})=>"code"===n);a.variants=a.variants.filter(({begin:n})=>!n.includes("( {4}|\\t)"));const i=[...e.contains.filter(({className:n})=>"code"!==n),a];return{...e,contains:[c,t,d,l,...i]}}},"04b0":function(n,e){function a(n){return n?"string"===typeof n?n:n.source:null}function i(...n){const e=n.map(n=>a(n)).join("");return e}function s(n){const e={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},a={begin:"^[-\\*]{3,}",end:"$"},s={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},t={className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},c={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},d=/[A-Za-z][A-Za-z0-9+.-]*/,l={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:i(/\[.+?\]\(/,d,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},o={className:"strong",contains:[],variants:[{begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},g={className:"emphasis",contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{begin:/_(?!_)/,end:/_/,relevance:0}]};o.contains.push(g),g.contains.push(o);let r=[e,l];o.contains=o.contains.concat(r),g.contains=g.contains.concat(r),r=r.concat(o,g);const b={className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:r},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:r}]}]},u={className:"quote",begin:"^>\\s+",contains:r,end:"$"};return{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[b,e,t,o,g,u,s,a,l,c]}}n.exports=s}}]);