"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(861),c=t(439),u=t(757),i=t.n(u),a=t(689),o=t(791),s="Reviews_item__DJKij",f=t(184),h=function(){var e=(0,a.UO)().movieId,n=(0,o.useState)(null),t=(0,c.Z)(n,2),u=t[0],h=t[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(e,"/reviews?api_key=").concat("db09f9e57e28be6797f7d8ba986a8c6d","&language=en-US&page=1"));case 2:return t=n.sent,n.next=5,t.json();case 5:t=n.sent,h(t.results);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[e]),u&&u.length>0?(0,f.jsx)("ul",{children:u.map((function(e){return(0,f.jsxs)("li",{className:s,children:[(0,f.jsxs)("h3",{children:[e.author,":"]}),(0,f.jsx)("p",{children:e.content})]},e.id)}))}):(0,f.jsx)("p",{children:"No Reviews."})}},861:function(e,n,t){function r(e,n,t,r,c,u,i){try{var a=e[u](i),o=a.value}catch(s){return void t(s)}a.done?n(o):Promise.resolve(o).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,u){var i=e.apply(n,t);function a(e){r(i,c,u,a,o,"next",e)}function o(e){r(i,c,u,a,o,"throw",e)}a(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=168.04590eec.chunk.js.map