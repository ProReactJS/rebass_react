webpackJsonp([7],{418:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var e=c(1),f=d(e),g=c(16),h=c(12),i=c(64),j=c(448),k=d(j),l=c(538),m=d(l),n=function(a){return f.default.createElement(h.Box,{px:2,mb:4},f.default.createElement(m.default,{code:a.code,style:{height:192,overflow:"hidden"}}),f.default.createElement(h.Divider,{my:1}),f.default.createElement(h.Pre,{fontSize:0},a.name))};b.default=function(){return f.default.createElement("div",null,f.default.createElement(k.default,null,i.components.length," Components"),f.default.createElement(h.Flex,{flexWrap:"wrap",my:4},i.components.map(function(a){return f.default.createElement(h.BlockLink,{is:g.Link,to:"/components/"+a,key:a,width:[0.5,0.5,0.3333333333333333,0.25]},f.default.createElement(n,{name:a,code:i.examples[a]}))})))}},448:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var e=c(7),f=d(e),g=c(1),h=d(g),i=c(12);b.default=function(a){return h.default.createElement(i.Heading,(0,f.default)({},a,{is:"h1",fontSize:[5,6,7,8],my:4}))}},538:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var e=c(7),f=d(e),g=c(8),h=d(g),i=c(1),j=d(i),k=c(5),l=d(k),m=c(111),n=c(12),o=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}(n),p=c(112),q=(0,h.default)({},o,{checked:!0,update:function(){},toggle:function(){},styled:l.default,photo:p.photo});b.default=function(a){return j.default.createElement(m.LiveProvider,(0,f.default)({},a,{scope:q,mountStylesheet:!1}),j.default.createElement(n.Flex,{style:{height:192},alignItems:"center",justifyContent:"center"},j.default.createElement(m.LivePreview,null)))}}});