(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(10),u=n(8),o=n(0),j=function(t){var e=t.setCategories,n=Object(u.useState)(""),a=Object(i.a)(n,2),c=a[0],r=a[1];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(s.a)(t))})),r(""))},children:Object(o.jsx)("input",{type:"text",value:c,onChange:function(t){r(t.target.value)}})})},d=n(11),l=n(6),f=n.n(l),b=n(9),p=function(){var t=Object(b.a)(f.a.mark((function t(e){var n,a,c,r,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=hOmAaays0WNNFOI08op0lAqXQnaf7n49"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.title,n=t.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(o.jsx)("img",{src:n,alt:e}),Object(o.jsx)("p",{children:e})]})},h=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){p(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,r=n.loading;return console.log(r),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:e}),r&&Object(o.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(o.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(o.jsx)(O,Object(d.a)({},t),t.id)}))})]})},m=function(){var t=Object(a.useState)(["One Punch"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(j,{setCategories:c}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(t){return Object(o.jsx)(h,{category:t},t)}))})]})};n(18),n(19);r.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.ab129d41.chunk.js.map