(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{377:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=l(n(1)),r=n(17),a=n(12),o=n(62),d=l(n(384)),f=l(n(423)),c=function(e){return u.default.createElement(a.Box,{px:2,mb:4},u.default.createElement(f.default,{code:e.code,style:{height:192,overflow:"hidden"}}),u.default.createElement(a.Divider,{my:1}),u.default.createElement(a.Pre,{fontSize:0},e.name))};t.default=function(){return u.default.createElement("div",null,u.default.createElement(d.default,null,o.components.length," Components"),u.default.createElement(a.Flex,{flexWrap:"wrap",my:4},o.components.map(function(e){return u.default.createElement(a.BlockLink,{is:r.Link,to:"/components/"+e,key:e,width:[.5,.5,.3333333333333333,.25]},u.default.createElement(c,{name:e,code:o.examples[e]}))})))}},384:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=l(n(8)),r=l(n(1)),a=n(12);t.default=function(e){return r.default.createElement(a.Heading,(0,u.default)({},e,{is:"h1",fontSize:[5,6,7,8],my:4}))}},423:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=l(n(8)),r=l(n(9)),a=l(n(1)),o=l(n(7)),d=n(109),f=n(12),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(f),i=n(108),s=(0,r.default)({},c,{checked:!0,update:function(){},toggle:function(){},styled:o.default,photo:i.photo});t.default=function(e){return a.default.createElement(d.LiveProvider,(0,u.default)({},e,{scope:s,mountStylesheet:!1}),a.default.createElement(f.Flex,{style:{height:192},alignItems:"center",justifyContent:"center"},a.default.createElement(d.LivePreview,null)))}}}]);