(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{379:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(n(1)),l=r(n(425)),a=r(n(387)),d=r(n(385));t.default=function(){return u.default.createElement("div",null,u.default.createElement(a.default,{children:l.default}),u.default.createElement(d.default,{previous:{href:"/theming",name:"Theming"},next:{href:"/server-side-rendering",name:"Server Side Rendering"}}))}},384:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(n(8)),l=r(n(1)),a=n(12);t.default=function(e){return l.default.createElement(a.Heading,(0,u.default)({},e,{is:"h1",fontSize:[5,6,7,8],my:4}))}},385:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),u=n(17),l=n(389),a=n(12);t.default=function(e){return r.default.createElement(a.Flex,{my:[3,5]},e.previous&&r.default.createElement(a.NavLink,{is:u.Link,to:e.previous.href},r.default.createElement(l.Chevron,{left:!0,size:16}),r.default.createElement(a.Text,{fontWeight:"bold",ml:2},e.previous.name)),e.next&&r.default.createElement(a.NavLink,{is:u.Link,ml:"auto",to:e.next.href},r.default.createElement(a.Text,{bold:!0,mr:2},e.next.name),r.default.createElement(l.Chevron,{right:!0,size:16})))}},387:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(n(8)),l=r(n(18)),a=r(n(24)),d=r(n(23)),o=r(n(22)),f=r(n(21)),i=r(n(1)),c=(r(n(7)),r(n(107))),s=r(n(391)),m=n(12),p=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(m),r(n(384))),h=function(e){function t(){return(0,a.default)(this,t),(0,o.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return i.default.createElement(s.default,{source:this.props.children,renderers:v})}}]),t}(i.default.Component),v={code:function(e){var t=e.language,n=e.value;if(!/\./.test(t))return i.default.createElement(m.Pre,{fontSize:13,px:3,py:3,my:3,color:"blue",bg:"#fcfcff"},n);var r=!!/\.\./.test(t);return i.default.createElement(m.Box,{mb:3},i.default.createElement(c.default,{code:n,noInline:r}))},heading:function(e){return 1===e.level?i.default.createElement(p.default,e):i.default.createElement(m.BlockLink,{href:"#"+e.children},i.default.createElement(m.Heading,(0,u.default)({},e,{id:e.children,mt:5,mb:2})))},inlineCode:function(e){return i.default.createElement(m.Code,{color:"blue",children:e.value})},link:m.Link,paragraph:function(e){return i.default.createElement(m.Measure,(0,u.default)({},e,{maxWidth:"40em",mb:3}))}};t.default=h},425:function(e){e.exports="\n# Extending\n\nRebass components can be completely customized using styled-components' `.extend` method.\n\n```..jsx\nconst CustomButton = Button.extend`\n  border: 1px solid rgba(0, 0, 0, .25);\n  background-image: linear-gradient(transparent, rgba(0, 0, 0, .125));\n  box-shadow: 0 0 4px rgba(0, 0, 0, .25)\n`\n\nrender(\n  <CustomButton>\n    Hello\n  </CustomButton>\n)\n```\n"}}]);