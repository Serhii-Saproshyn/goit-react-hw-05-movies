"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[566],{179:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(861),a=t(439),c=t(757),o=t.n(c),i=t(791),s=t(87),u="TrendingToday_trends__kp0Vu",d="TrendingToday_movie__E1dAU",f="TrendingToday_link__L6FvT",l=t(842),m=t(184),p=function(e){var n=e.movies;return(0,m.jsx)("ul",{className:u,children:n.map((function(e){return(0,m.jsx)("li",{className:d,children:(0,m.jsxs)(s.rU,{to:"/movies/".concat(e.id),className:f,children:[(0,m.jsx)("img",{src:e.poster_path?"".concat("https://image.tmdb.org/t/p/w300/").concat(e.poster_path):l,alt:e.title}),e.title]})},e.id)}))})},h="Home_container__w+u63",v="Home_trend-header__kn0GJ",_=function(){var e=(0,i.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3/trending/movie/day","?api_key=").concat("7962a1912dc39a09e22d58ae0351b8bc"));case 2:return n=e.sent,e.next=5,n.json();case 5:n=e.sent,c(n.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch(console.error)}),[]),(0,m.jsxs)("div",{className:h,children:[(0,m.jsx)("h2",{className:v,children:"Trending Today"}),(0,m.jsx)(p,{movies:t})]})}},842:function(e,n,t){e.exports=t.p+"static/media/noimage.09ea9f6b1352b3452d9d.jpeg"},861:function(e,n,t){function r(e,n,t,r,a,c,o){try{var i=e[c](o),s=i.value}catch(u){return void t(u)}i.done?n(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,c){var o=e.apply(n,t);function i(e){r(o,a,c,i,s,"next",e)}function s(e){r(o,a,c,i,s,"throw",e)}i(void 0)}))}}t.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=566.abc0b9c5.chunk.js.map