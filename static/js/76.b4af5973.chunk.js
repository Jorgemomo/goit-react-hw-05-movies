"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{0:function(n,t,e){e.d(t,{Df:function(){return a},TP:function(){return o},V0:function(){return i},jW:function(){return u},z0:function(){return s}});var r="https://api.themoviedb.org/3/",c="ea073995e4db72262db9a5039068ed8d";function a(){return fetch("".concat(r,"trending/all/day?api_key=").concat(c)).then((function(n){return n.json()})).then((function(n){return n.results}))}function i(n){return fetch("".concat(r,"search/movie?api_key=").concat(c,"&query=").concat(n)).then((function(n){return n.json()})).then((function(n){return n.results}))}function o(n){return fetch("".concat(r,"/movie/").concat(n,"?api_key=").concat(c)).then((function(n){return n.json()}))}function s(n){return fetch("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(c)).then((function(n){return n.json()})).then((function(n){return n.cast}))}function u(n){return fetch("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(c)).then((function(n){return n.json()}))}},76:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r=e(861),c=e(439),a=e(757),i=e.n(a),o={castList:"Cast_castList__ARoWn",castImg:"Cast_castImg__T4WbF"},s=e(791),u=e(689),f=e(0),h=e(875),l=e(184),d=function(){var n=(0,u.UO)().movieId,t=(0,s.useState)([]),e=(0,c.Z)(t,2),a=e[0],d=e[1],m=(0,s.useState)(null),p=(0,c.Z)(m,2),v=p[0],g=p[1],_=(0,s.useState)(!1),j=(0,c.Z)(_,2),k=j[0],x=j[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,x(!0),t.next=4,(0,f.z0)(n);case 4:e=t.sent,d(e),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Smth wrong with fetch cast on movie page",t.t0),g(t.t0.message);case 12:return t.prev=12,x(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,l.jsxs)("div",{children:[k&&"Loading...",a.length>0?(0,l.jsx)("ul",{className:o.castList,children:a.map((function(n){var t=n.id,e=n.name,r=n.character,c=n.profile_path,a="https://image.tmdb.org/t/p/w500".concat(c);return c||(a="https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg"),(0,l.jsxs)("li",{className:o.castItem,children:[(0,l.jsx)("img",{src:a,alt:e,className:o.castImg}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{children:["Name: ",e]}),(0,l.jsxs)("p",{children:["Character: ",r]})]})]},t)}))}):(0,l.jsx)("p",{children:"There is no information about actors for this movie."}),v&&(0,l.jsx)(h.Z,{children:(0,l.jsx)("h2",{children:"The service is temporarily unavailable. Please try again later."})})]})}},875:function(n,t,e){e.d(t,{Z:function(){return i}});var r="Message_message__fh13J",c=e(184),a=function(n){var t=n.children;return(0,c.jsx)("div",{className:r,children:t})};a.defaultProps={children:[]};var i=a},861:function(n,t,e){function r(n,t,e,r,c,a,i){try{var o=n[a](i),s=o.value}catch(u){return void e(u)}o.done?t(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var i=n.apply(t,e);function o(n){r(i,c,a,o,s,"next",n)}function s(n){r(i,c,a,o,s,"throw",n)}o(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=76.b4af5973.chunk.js.map