(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[4,6,7,8],{216:function(e,t,c){"use strict";c.r(t);var n=c(4),a=c(2),r=c(0),s=(c(72),c(73),c(53)),i=c(28),o=c(8),l=c(52),u=c(1);t.default=function(e){var t=e.Component,c=e.dataType,j=Object(a.g)().id,d=Object(r.useState)(null),b=Object(n.a)(d,2),h=b[0],m=b[1],O=Object(i.a)(),f=O.loading,x=O.error,v=O.getComic,p=O.getCharacter,_=O.clearError;Object(r.useEffect)((function(){g()}),[j]);var g=function(){switch(_(),c){case"comic":v(j).then(N);break;case"character":p(j).then(N)}},N=function(e){m(e)},w=x?Object(u.jsx)(s.default,{}):null,y=f?Object(u.jsx)(o.a,{}):null,k=f||x||!h?null:Object(u.jsx)(t,{data:h});return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.a,{}),w,y,k]})}},25:function(e,t,c){"use strict";c(35);var n=c(1);t.a=function(e){var t=e.err,c=void 0===t?"Something went wrong but Groot soon will be repair all.":t;return Object(n.jsx)("div",{className:"errorMessage",children:Object(n.jsx)("h3",{children:c})})}},28:function(e,t,c){"use strict";var n=c(37),a=c.n(n),r=c(38),s=c(4),i=c(0),o=function(){var e=Object(i.useState)(null),t=Object(s.a)(e,2),c=t[0],n=t[1],o=Object(i.useState)(!1),l=Object(s.a)(o,2),u=l[0],j=l[1];return{loading:u,request:Object(i.useCallback)(function(){var e=Object(r.a)(a.a.mark((function e(t){var c,r,s,i,o,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},j(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:r,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,j(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),j(!1),n(!0),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:c,clearError:Object(i.useCallback)((function(){return n(null)}),[])}};t.a=function(){var e=o(),t=e.loading,c=e.request,n=e.error,s=e.clearError,i="https://gateway.marvel.com:443/v1/public/",l="apikey=e1cacf97d0c71a777e3cb47285f8bcfb",u=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:210,e.next=3,c("".concat(i,"characters?limit=9&offset=").concat(t,"&").concat(l));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(b));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(i,"characters/").concat(t,"?").concat(l));case 2:return n=e.sent,e.abrupt("return",b(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(i,"characters?name=").concat(t,"&").concat(l));case 2:return n=e.sent,e.abrupt("return",n.data.results.length>0?[b(n.data.results[0])]:[]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){return{id:e.id,name:e.name,description:""===e.description?"Unfortunately, information about this character was destroyed by Thanos...":e.description.length>220?e.description.slice(0,220)+"...":e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},h=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,c("".concat(i,"comics?issueNumber=1&limit=8&offset=").concat(t,"&").concat(l));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(i,"comics/").concat(t,"?").concat(l));case 2:return n=e.sent,e.abrupt("return",O(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return{id:e.id,name:e.title,description:e.description||"There is no description.",pageCount:e.pageCount?"".concat(e.pageCount," pages"):"No information about the number of pages.",language:e.textObjects.language||"en-us",price:e.prices[0].price?"$".concat(e.prices[0].price):"Not available",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension}};return{loading:t,error:n,getAllCharacters:u,getCharacter:j,getCharacterByName:d,clearError:s,getAllComics:h,getComic:m}}},35:function(e,t,c){},39:function(e,t,c){"use strict";var n=c(26),a=c(27),r=c(29),s=c(31),i=c(0),o=c(25),l=(c(41),c(1)),u=function(e){Object(r.a)(c,e);var t=Object(s.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(a.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)("div",{className:"error",children:Object(l.jsx)(o.a,{})}):this.props.children}}]),c}(i.Component);t.a=u},41:function(e,t,c){},52:function(e,t,c){"use strict";c(71);var n=c.p+"static/media/Avengers.4065c8f9.png",a=c.p+"static/media/Avengers_logo.9eaf2193.png",r=c(1);t.a=function(){return Object(r.jsxs)("div",{className:"app__banner",children:[Object(r.jsx)("img",{src:n,alt:"Avengers"}),Object(r.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(r.jsx)("br",{}),"Stay tuned!"]}),Object(r.jsx)("img",{src:a,alt:"Avengers logo"})]})}},53:function(e,t,c){"use strict";c.r(t);var n=c(25),a=c(5),r=c(1);t.default=function(){return Object(r.jsxs)("div",{style:{height:"400px",width:"800px",margin:"0 auto"},children:[Object(r.jsx)(n.a,{err:"Page doesn`t exist"}),Object(r.jsxs)(a.b,{className:"button button__main",style:{margin:"0 auto",display:"block",fontWeight:"bold",fontSize:"24px",marginTop:"15px",width:"500px"},to:"/marvel-db",children:[" ",Object(r.jsx)("div",{className:"inner",children:"Back to main page"})]})]})}},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(4),a=c(0),r=c(8),s=c(25),i=c(28),o=(c(54),c.p+"static/media/mjolnir.61f31e18.png"),l=c(1),u=function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i={};return a&&(i=a.indexOf("not_available")>-1?{objectFit:"contain"}:{objectFit:"cover"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img",style:i}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:n}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(){var e=Object(i.a)(),t=e.loading,c=e.error,j=e.getCharacter,d=e.clearError,b=Object(a.useState)({}),h=Object(n.a)(b,2),m=h[0],O=h[1];Object(a.useEffect)((function(){x()}),[]);var f=function(e){O(e)},x=function(){d();var e=Math.floor(400*Math.random()+1011e3);j(e).then(f)},v=c?Object(l.jsx)(s.a,{}):null,p=t?Object(l.jsx)(r.a,{}):null,_=t||c?null:Object(l.jsx)(u,{char:m});return Object(l.jsxs)("div",{className:"randomchar",children:[v,p,_,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{onClick:x,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},d=c(34),b=(c(55),function(e){var t=Object(a.useState)([]),c=Object(n.a)(t,2),o=c[0],u=c[1],j=Object(a.useState)(!1),b=Object(n.a)(j,2),h=b[0],m=b[1],O=Object(a.useState)(220),f=Object(n.a)(O,2),x=f[0],v=f[1],p=Object(a.useState)(!1),_=Object(n.a)(p,2),g=_[0],N=_[1],w=Object(i.a)(),y=w.loading,k=w.error,C=w.getAllCharacters;Object(a.useEffect)((function(){S(x,!0)}),[]),Object(a.useEffect)((function(){return o.length>1&&window.addEventListener("scroll",E),function(){window.removeEventListener("scroll",E)}}),[x]);var E=function(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&!y&&!k&&!h&&S(x)},S=function(e,t){m(!t),C(e).then(T)},T=function(e){var t=!1;e.length<9&&(t=!0),u((function(t){return[].concat(Object(d.a)(t),Object(d.a)(e))})),m((function(e){return!1})),v((function(e){return e+9})),N((function(e){return t}))},F=Object(a.useRef)([]),A=function(e){F.current.forEach((function(e){return e.classList.remove("char__item_selected")})),F.current[e].classList.add("char__item_selected"),F.current[e].focus()};var L=function(t){var c=t.map((function(t,c){var n=t.thumbnail.indexOf("not_available")>-1||t.thumbnail.indexOf("4c002e0305708.gif")>-1?{objectFit:"unset"}:{objectFit:"cover"};return Object(l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return F.current[c]=e},onClick:function(){e.onCharSelected(t.id),A(c)},onKeyPress:function(n){""!==n.key&&"Enter"!==n.key||(e.onCharSelected(t.id),A(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:n}),Object(l.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:c})}(o),q=k?Object(l.jsx)("li",{className:"char__item",style:{width:"100%"},children:Object(l.jsx)(s.a,{})}):null,H=y&&!h?Object(l.jsx)(r.a,{}):null;return Object(l.jsxs)("div",{className:"char__list",children:[Object(l.jsxs)("ul",{className:"char__grid",children:[q,H,L]}),Object(l.jsx)("button",{className:"button button__main button__long",disabled:h,style:{display:g?"none":"block"},onClick:function(){return S(x)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),h=(c(56),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),m=(c(57),function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,o=a.indexOf("not_available")>-1?{objectFit:"contain"}:{objectFit:"cover"};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:a,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:n}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is not comics with this character",i.map((function(e,t){if(!(t>9))return Object(l.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),O=function(e){var t=Object(i.a)(),c=t.loading,o=t.error,u=t.getCharacter,j=t.clearError,d=Object(a.useState)(null),b=Object(n.a)(d,2),O=b[0],f=b[1];Object(a.useEffect)((function(){x()}),[e.charId]);var x=function(){var t=e.charId;t&&(j(),u(t).then(v))},v=function(e){f(e),window.scrollTo({top:400,behavior:"smooth"})},p=O||c||o?null:Object(l.jsx)(h,{}),_=o?Object(l.jsx)(s.a,{}):null,g=c?Object(l.jsx)(r.a,{}):null,N=c||o||!O?null:Object(l.jsx)(m,{char:O}),w=o?{padding:"5px",height:"200px"}:null;return Object(l.jsxs)("div",{className:"char__info",style:w,children:[p,_,g,N]})},f=c(39),x=c.p+"static/media/vision.067d4ae1.png",v=c(101),p=c(102),_=c(5),g=(c(69),function(){var e=Object(a.useState)(""),t=Object(n.a)(e,2),c=t[0],r=t[1],o=Object(i.a)(),u=o.loading,j=o.error,d=o.getCharacterByName,b=o.clearError,h=function(e){r(e)},m=j?Object(l.jsx)("div",{className:".char__search-critical-error",children:s.a}):null,O=c?c.length>0?Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c[0].name," page?"]}),Object(l.jsx)(_.b,{to:"/marvel-db/characters/".concat(c[0].id),className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"To page"})})]}):Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again."})}):null;return Object(l.jsxs)("div",{className:"char__search-form",children:[Object(l.jsx)(v.d,{initialValues:{charName:""},validationSchema:p.a({charName:p.b().required("This field is required")}),onSubmit:function(e){var t,c=e.charName;t=c,b(),d(t).then(h)},children:Object(l.jsxs)(v.c,{children:[Object(l.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsx)(v.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(l.jsx)("button",{type:"submit",className:"button button__main",disabled:u,children:Object(l.jsx)("div",{className:"inner",children:"find"})})]}),Object(l.jsx)(v.a,{component:"div",className:"char__search-error",name:"charName"})]})}),O,m]})});t.default=function(){var e=Object(a.useState)(null),t=Object(n.a)(e,2),c=t[0],r=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(f.a,{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(f.a,{children:Object(l.jsx)(b,{onCharSelected:function(e){r(e)}})}),Object(l.jsx)("div",{children:Object(l.jsxs)(f.a,{children:[Object(l.jsx)(O,{charId:c}),Object(l.jsx)(g,{})]})})]}),Object(l.jsx)("img",{className:"bg-decoration",src:x,alt:"vision"})]})}},73:function(e,t,c){"use strict";c.r(t);var n=c(34),a=c(4),r=c(0),s=c(5),i=c(28),o=c(8),l=c(25),u=(c(70),c(1)),j=function(){var e=Object(i.a)(),t=e.loading,c=e.error,j=e.getAllComics,d=Object(r.useState)([]),b=Object(a.a)(d,2),h=b[0],m=b[1],O=Object(r.useState)(!1),f=Object(a.a)(O,2),x=f[0],v=f[1],p=Object(r.useState)(!1),_=Object(a.a)(p,2),g=_[0],N=_[1],w=Object(r.useState)(200),y=Object(a.a)(w,2),k=y[0],C=y[1];Object(r.useEffect)((function(){S(k,!0)}),[]),Object(r.useEffect)((function(){return window.addEventListener("scroll",E),function(){window.removeEventListener("scroll",E)}}));var E=function(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&!t&&!c&&!x&&S(k)},S=function(e,t){v(!t),j(e).then(T)},T=function(e){var t=!1;e.length<8&&(t=!0),m((function(t){return[].concat(Object(n.a)(t),Object(n.a)(e))})),v(!1),C((function(e){return e+8})),N(t)};var F=function(e){var t=e.map((function(e,t){return Object(u.jsx)("li",{className:"comics__item",children:Object(u.jsxs)(s.b,{to:"/marvel-db/comics/".concat(e.id),children:[Object(u.jsx)("img",{src:e.thumbnail,alt:e.name,className:"comics__item-img"}),Object(u.jsx)("div",{className:"comics__item-name",children:e.name}),Object(u.jsx)("div",{className:"comics__item-price",children:e.price})]})},t)}));return Object(u.jsx)("ul",{className:"comics__grid",children:t})}(h),A=c?Object(u.jsx)("li",{className:"comics__item",style:{width:"100%"},children:Object(u.jsx)(l.a,{})}):null,L=t&&!x?Object(u.jsx)(o.a,{}):null;return Object(u.jsxs)("div",{className:"comics__list",children:[Object(u.jsxs)("ul",{className:"comics__grid",children:[L,A,F]}),Object(u.jsx)("button",{className:"button button__main button__long",disabled:x,style:{display:g?"none":"block"},onClick:function(){return S(k)},children:Object(u.jsx)("div",{className:"inner",children:"load more"})})]})},d=c(52),b=c(39);t.default=function(){return Object(u.jsxs)(b.a,{children:[Object(u.jsx)(d.a,{}),Object(u.jsx)(j,{})]})}}}]);
//# sourceMappingURL=4.4cfe47f7.chunk.js.map