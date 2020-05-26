(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{63:function(n,e,t){n.exports=t(97)},97:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(57),o=t(19),c=t(45),u=t.n(c),l=t(23),s=t(5),d=t(6),m=t(16),f=t(18),p=t.n(f),g=t(46),b=t.n(g),v=function(n){return n.slice(0,4)};function h(){var n=Object(s.a)(["\n  list-style: none;\n"]);return h=function(){return n},n}function y(){var n=Object(s.a)(["\n  -webkit-padding-start: 0;\n  padding-inline-start: 0;\n  display: grid;\n  grid-row-gap: 15px;\n"]);return y=function(){return n},n}function x(){var n=Object(s.a)(["\n  display: grid;\n  grid-column-gap: 15px;\n  grid-row-gap: 7.5px;\n  padding: 15px;\n  background-color: white;\n  border-top: 1px solid #e6e6e6;\n  border-bottom: 1px solid #e6e6e6;\n\n  @media (min-width: 721px) {\n    border-left: 1px solid #e6e6e6;\n    border-right: 1px solid #e6e6e6;\n    border-radius: 4px;\n  }\n"]);return x=function(){return n},n}var E=d.a.div(x()),w=d.a.ol(y()),j=d.a.li(h());function O(){var n=Object(s.a)(["\n  text-decoration: none;\n  color: initial;\n"]);return O=function(){return n},n}function k(){var n=Object(s.a)(["\n  margin-top: 7.5px;\n"]);return k=function(){return n},n}function D(){var n=Object(s.a)(["\n  font-size: 15px;\n  color: gray;\n"]);return D=function(){return n},n}function F(){var n=Object(s.a)(["\n  font-size: 15px;\n  color: gray;\n"]);return F=function(){return n},n}function z(){var n=Object(s.a)(["\n  font-size: 20px;\n  font-weight: bold;\n"]);return z=function(){return n},n}function q(){var n=Object(s.a)([""]);return q=function(){return n},n}function I(){var n=Object(s.a)(["\n  width: 100%;\n"]);return I=function(){return n},n}function S(){var n=Object(s.a)(["\n  grid-template-columns: 100px auto;\n"]);return S=function(){return n},n}var C=Object(d.a)(E)(S()),U=d.a.img(I()),R=d.a.div(q()),$=d.a.span(z()),A=d.a.span(F()),B=d.a.div(D()),G=d.a.div(k()),J=Object(d.a)(l.b)(O()),L=function(n){var e,t,r,i=n.slug,o=n.encryptedUrlId,c=n.title,u=n.releaseDate,l=n.directors,s=n.description;return a.a.createElement(J,{to:"/films/".concat(i)},a.a.createElement(C,null,a.a.createElement(U,{src:(r=o,"https://res.cloudinary.com/dh3qpkhir/image/upload/c_thumb,w_300/".concat(r,".jpg"))}),a.a.createElement(R,null,a.a.createElement($,null,c),a.a.createElement(A,null," (".concat(v(u),")")),a.a.createElement(B,null,l),a.a.createElement(G,null,(e=s,t=200,b()(e,{length:t,separator:/,? +/,omission:"\u2026"}))))))},W=w,_=j,H=function(n){var e=n.films;return a.a.createElement(W,null,e.map(function(n){return a.a.createElement(_,{key:n.slug},a.a.createElement(L,{slug:n.slug,encryptedUrlId:n.encryptedUrlId,title:n.title,scRating:n.scRating,releaseDate:n.releaseDate,directors:n.directors,description:n.description}))}))};function K(){var n=Object(s.a)(["\n  query GetFilmsCurrentlyShowing {\n    filmsCurrentlyShowing(offset: 0, limit: 15) {\n      slug\n      encryptedUrlId\n      title\n      scRating\n      releaseDate\n      directors\n      description\n    }\n  }\n"]);return K=function(){return n},n}var M=p()(K()),N=function(){return a.a.createElement(o.b,{query:M},function(n){var e=n.loading,t=n.error,r=n.data;return e?"Loading...":t||!r?"Error! ".concat(t&&t.message):a.a.createElement(H,{films:r.filmsCurrentlyShowing})})},P=t(54),Q=t(55),T=t(58),V=t(56),X=t(61);function Y(){var n=Object(s.a)(["\n  display: inline;\n  padding: 2px 4px 3px;\n  font-size: 15px;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n"]);return Y=function(){return n},n}function Z(){var n=Object(s.a)(["\n  display: block;\n  line-height: 30px;\n"]);return Z=function(){return n},n}function nn(){var n=Object(s.a)(["\n  font-size: 20px;\n  font-weight: bold;\n"]);return nn=function(){return n},n}function en(){var n=Object(s.a)(["\n  display: grid;\n  padding-top: 15px;\n  grid-row-gap: 11.25px;\n  border-top: 1px solid #e6e6e6;\n"]);return en=function(){return n},n}function tn(){var n=Object(s.a)(["\n  margin-bottom: 0;\n"]);return tn=function(){return n},n}function rn(){var n=Object(s.a)(["\n  color: ",";\n  padding: 4px 7px;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 12px;\n  font-weight: bold;\n  font-size: 12.5px;\n  text-transform: uppercase;\n  display: inline;\n"]);return rn=function(){return n},n}function an(){var n=Object(s.a)(["\n  line-height: 32px;\n"]);return an=function(){return n},n}function on(){var n=Object(s.a)(["\n  margin: 0;\n  font-size: 24px;\n"]);return on=function(){return n},n}function cn(){var n=Object(s.a)(["\n  background-color: white;\n\n  @media (min-width: 721px) {\n    margin-bottom: 15px;\n  }\n"]);return cn=function(){return n},n}function un(){var n=Object(s.a)(["\n  font-size: 20px;\n  color: gray;\n"]);return un=function(){return n},n}function ln(){var n=Object(s.a)(["\n  font-size: 20px;\n  color: gray;\n"]);return ln=function(){return n},n}function sn(){var n=Object(s.a)(["\n  font-size: 30px;\n  display: inline;\n  font-weight: bold;\n  margin: 0;\n"]);return sn=function(){return n},n}function dn(){var n=Object(s.a)([""]);return dn=function(){return n},n}function mn(){var n=Object(s.a)(["\n  display: grid;\n  row-gap: 15px;\n  margin: 0 auto;\n  padding: 15px;\n"]);return mn=function(){return n},n}var fn=d.a.div(mn()),pn=d.a.div(dn()),gn=d.a.h1(sn()),bn=d.a.span(ln()),vn=d.a.div(un()),hn=Object(d.a)(E)(cn()),yn=d.a.h2(on()),xn=d.a.div(an()),En=d.a.button(rn(),function(n){return n.selected?"white":"#f30a49"},function(n){return n.selected?"#f30a49":"white"},"#f30a49"),wn=Object(d.a)(w)(tn()),jn=Object(d.a)(j)(en()),On=d.a.div(nn()),kn=Object(d.a)(w)(Z()),Dn=Object(d.a)(j)(Y()),Fn=function(n){function e(){var n,t;Object(P.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(T.a)(this,(n=Object(V.a)(e)).call.apply(n,[this].concat(a)))).state={selectedDay:t.props.showtimeDays.length&&t.props.showtimeDays[0]},t.selectDay=function(n){t.setState({selectedDay:n})},t}return Object(X.a)(e,n),Object(Q.a)(e,[{key:"render",value:function(){var n=this,e=this.props,t=e.title,i=e.releaseDate,o=e.directors,c=e.showtimeDays,u=void 0===c?[]:c,l=this.state.selectedDay;return a.a.createElement(r.Fragment,null,a.a.createElement(fn,null,a.a.createElement(pn,null,a.a.createElement(gn,null,t),a.a.createElement(bn,null," (".concat(v(i),")")),a.a.createElement(vn,null,o))),a.a.createElement(hn,null,a.a.createElement(yn,null,"S\xe9ances"),l&&a.a.createElement(r.Fragment,null,a.a.createElement(xn,null,u.map(function(e){return a.a.createElement(r.Fragment,{key:e.dayFormatted},a.a.createElement(En,{selected:e.dayFormatted===l.dayFormatted,onClick:function(){return n.selectDay(e)}},e.dayFormatted)," ")})),a.a.createElement(wn,null,l.cinemas.map(function(n){return a.a.createElement(jn,{key:n.slug},a.a.createElement(On,null,n.name),a.a.createElement(kn,null,n.showtimes.map(function(n){return a.a.createElement(r.Fragment,{key:n.hourFormatted},a.a.createElement(Dn,null,n.hourFormatted)," ")})))})))))}}]),e}(r.Component);function zn(){var n=Object(s.a)(["\n  query GetFilmAndShowtimes($slug: ID!) {\n    film(slug: $slug) {\n      slug\n      title\n      releaseDate\n      directors\n      showtimeDays {\n        dayFormatted\n        cinemas {\n          slug\n          name\n          showtimes {\n            hourFormatted\n          }\n        }\n      }\n    }\n  }\n"]);return zn=function(){return n},n}var qn=p()(zn()),In=function(n){var e=n.slug;return a.a.createElement(o.b,{query:qn,variables:{slug:e}},function(n){var e=n.loading,t=n.error,r=n.data;return e?"Loading...":t||!r?"Error! ".concat(t&&t.message):a.a.createElement(Fn,r.film)})};function Sn(){var n=Object(s.a)(["\n  max-width: 720px;\n  margin: 0 auto;\n"]);return Sn=function(){return n},n}var Cn=d.a.main(Sn()),Un=function(){return a.a.createElement(Cn,null,a.a.createElement(m.c,null,a.a.createElement(m.a,{exact:!0,path:"/",component:N}),a.a.createElement(m.a,{path:"/films/:slug",render:function(n){var e=n.match;return a.a.createElement(In,{slug:e.params.slug})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Rn=new i.a({uri:"http://localhost:4000/graphql"});u.a.render(a.a.createElement(l.a,null,a.a.createElement(o.a,{client:Rn},a.a.createElement(Un,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[63,1,2]]]);
//# sourceMappingURL=main.821c14e8.chunk.js.map