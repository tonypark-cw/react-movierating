(this.webpackJsonpmovierating=this.webpackJsonpmovierating||[]).push([[0],{36:function(e,t,s){},59:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),i=s(28),c=s.n(i),r=(s(36),s(0));function o(e){return console.log(e),Object(r.jsx)("div",{children:Object(r.jsxs)("p",{className:"about__container",children:["\uc774 \uc0ac\uc774\ud2b8\ub294 \uac1c\ubc1c\uc6a9 \uc785\ub2c8\ub2e4.",Object(r.jsx)("br",{}),"Nomad Coder Nicolas\uc758 Movie Rating Web ",Object(r.jsx)("br",{}),"\uac15\uc758\ub97c \ud1b5\ud55c \ud074\ub860 \ucf54\ub529 \uacb0\uacfc\uc785\ub2c8\ub2e4.",Object(r.jsxs)("span",{children:[Object(r.jsx)("span",{children:"\uac1c\ubc1c\uc790 :  TonyPark"}),Object(r.jsx)("span",{children:Object(r.jsx)("a",{href:"http://github.com/tonypark-cw",children:" \uae43\ud5c8\ube0c"})}),Object(r.jsxs)("span",{children:["\ub2e4\ub978 \ud398\uc774\uc9c0 1 : ",Object(r.jsx)("a",{href:"https://tonypark-cw.github.io/todochrome/",children:"VanillaJS\ub85c \ub9cc\ub4e0 TODO\uc571"})]})]})]})})}var j=s(17),l=s.n(j),m=s(29),d=s(11),u=s(12),b=s(14),h=s(13),v=s(30),p=s.n(v),O=s(5),x=s.n(O),g=s(9);s(59);function y(e){var t=e.id,s=e.year,a=e.title,n=e.summary,i=e.poster,c=e.genres;return Object(r.jsx)(g.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:a,summary:n,poster:i,genres:c}},children:Object(r.jsxs)("div",{className:"movie",children:[Object(r.jsx)("img",{src:i,alt:a,title:a}),Object(r.jsxs)("div",{className:"movie__data",children:[Object(r.jsx)("h3",{className:"movie__title",children:a}),Object(r.jsx)("h5",{className:"movie__year",children:s}),Object(r.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(r.jsxs)("li",{className:"genres_genre",children:[" ",e," "]},t)}))}),Object(r.jsxs)("p",{className:"movie__summary",children:[n.slice(0,180),"..."]})]})]})})}y.prototype={id:x.a.number.isRequired,title:x.a.string.isRequired,year:x.a.number.isRequired,summary:x.a.string.isRequired,poster:x.a.string.isRequired,genres:x.a.arrayOf(x.a.string).isRequired};s(66);var f=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(l.a.mark((function t(){var s,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1}),console.log(a);case 6:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(r.jsx)("section",{className:"container",children:t?Object(r.jsx)("div",{className:"loader",children:Object(r.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(r.jsx)("div",{className:"movies",children:s.map((function(e){return Object(r.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component);s(67);function _(){return Object(r.jsxs)("div",{className:"nav",children:[Object(r.jsx)(g.b,{to:"/",className:"btn--stripe",children:"Home"}),Object(r.jsx)(g.b,{to:"/about",className:"btn--stripe",children:"About"})]})}s(68);var N=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;console.log(t),void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"moive_container",children:[Object(r.jsx)("div",{className:"img_container",children:Object(r.jsx)("img",{className:"movie_image",src:e.state.poster})}),Object(r.jsxs)("div",{className:"movie_head",children:[Object(r.jsx)("span",{className:"movie_title",children:e.state.title}),Object(r.jsxs)("span",{className:"movie_year",children:["(",e.state.year,")"]})]}),Object(r.jsx)("div",{className:"movie_summary",children:e.state.summary})]})}):null}}]),s}(a.Component),k=s(2);s(69);var w=function(){return Object(r.jsxs)(g.a,{children:[Object(r.jsx)(_,{}),Object(r.jsx)(k.a,{path:"/",exact:!0,component:f}),Object(r.jsx)(k.a,{path:"/about",component:o}),Object(r.jsx)(k.a,{path:"/movie/",exact:!0,component:N}),Object(r.jsx)(k.a,{path:"/movie/:id",component:N})]})};c.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.7aee4f05.chunk.js.map