"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[873],{873:function(e,s,n){n.r(s);var t=n(3433),r=n(9439),a=n(4554),i=n(3044),l=n(890),o=n(4721),u=n(5421),c=n(6151),x=n(2791),d=n(1087),f=n(184),h=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),m=function(e){var s=e.message;return(0,f.jsxs)(a.Z,{children:[(0,f.jsxs)(a.Z,{sx:{m:1,mt:2,display:"flex",alignItems:"start"},children:[(0,f.jsx)(i.Z,{alt:s.userName,src:s.photo,variant:"square",component:d.rU,to:"/profile/"+s.userId,sx:{width:{xs:80,sm:100},height:{xs:80,sm:100},mr:2}},s.userId),(0,f.jsx)(l.Z,{children:s.message})]}),(0,f.jsx)(o.Z,{})]})};s.default=function(){var e=(0,x.useState)([]),s=(0,r.Z)(e,2),n=s[0],i=s[1],l=(0,x.useState)(""),o=(0,r.Z)(l,2),d=o[0],j=o[1],Z=(0,x.useRef)(null);(0,x.useEffect)((function(){h.addEventListener("message",(function(e){var s=JSON.parse(e.data);i((function(e){return[].concat((0,t.Z)(e),(0,t.Z)(s))}))})),Z.current&&Z.current.scrollIntoView({behaviour:"smooth"})}),[n]);return(0,f.jsxs)(a.Z,{sx:{m:2,display:"flex",flexDirection:"column",flexGrow:"1"},children:[(0,f.jsxs)(a.Z,{sx:{height:"400px",overflowY:"auto",flexGrow:1},children:[n.map((function(e){return(0,f.jsx)(m,{message:e})})),(0,f.jsx)(a.Z,{ref:Z})]}),(0,f.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,f.jsx)(u.Z,{id:"outlined-basic",label:"Message",variant:"outlined",value:d,onChange:function(e){return j(e.target.value)}}),(0,f.jsx)(c.Z,{sx:{m:1},onClick:function(){d&&(h.send(d),j(""))},variant:"outlined",children:"Send message"})]})]})}}}]);
//# sourceMappingURL=873.4af82376.chunk.js.map