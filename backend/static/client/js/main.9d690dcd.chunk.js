(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{131:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),s=(a(69),a(9)),u=a.n(s),o=a(12),i=a(19),m=a(10),E=a(24),d=a.n(E),b=Object({NODE_ENV:"production",PUBLIC_URL:"/static/client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SONG_STASH_API_URL||"http://127.0.0.1:5000/api";function f(e){return function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("".concat(b,"/users/").concat(e));case 2:return n=t.sent,t.abrupt("return",a({type:"FETCH_USER_DATA",data:n.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var O=a(161),p=a(154),h=a(148),S=a(149),v=a(150),g=a(151),j=a(152),y=a(153),_=a(162),T=a(13);a(92);function x(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.user})),a=function(){e({type:"CLEAR_CURRENT_SONG"})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{id:"main-nav-bar",color:"dark",dark:!0},r.a.createElement(S.a,{className:"mx-auto w-100 text-center",href:"/"},"SongStash"),r.a.createElement(v.a,{navbar:!0,pills:!0,justified:!0,className:"h-75 w-100"},r.a.createElement("hr",null),r.a.createElement(g.a,{className:"mx-auto my-auto"},r.a.createElement(j.a,null,"My Stashes  ",r.a.createElement(T.b,{to:"stash/createstash"},r.a.createElement(_.a,null))),t.stashes.map((function(e){return r.a.createElement(T.b,{to:"/stash/".concat(e.id)},r.a.createElement(y.a,null,e.name))}))),r.a.createElement("hr",null),r.a.createElement(g.a,{className:"mx-auto my-auto"},r.a.createElement(T.b,{to:"/mysongs"},r.a.createElement(y.a,null,"My Songs"))),r.a.createElement("hr",null),r.a.createElement(g.a,{className:"mx-auto my-auto"},r.a.createElement(T.b,{to:"/searchsongs"},r.a.createElement(y.a,{onClick:a},"Song Search"))),r.a.createElement("hr",null),r.a.createElement(g.a,{className:"mx-auto my-auto"},r.a.createElement(T.b,{to:"/createsong"},r.a.createElement(y.a,{onClick:a},"Create Song"))),r.a.createElement("hr",null),r.a.createElement(g.a,{className:"d-block mx-auto mt-auto"},r.a.createElement(T.b,{to:"/logout"},r.a.createElement(y.a,null,"Log Out"))))))}var N=a(11),w=a(22),C=a(7),R=Object({NODE_ENV:"production",PUBLIC_URL:"/static/client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SONG_STASH_API_URL||"http://127.0.0.1:5000/api";function L(e,t){return function(){var a=Object(o.a)(u.a.mark((function a(n){var r,c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.post("".concat(R,"/songs"),Object(C.a)(Object(C.a)({},e),{},{user_id:t}));case 2:return r=a.sent,c=r.data.lyrics.replace(/\n/g,"<br />"),a.abrupt("return",n(D(Object(C.a)(Object(C.a)({},r.data),{},{lyrics:c}))));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function A(e){return function(){var t=Object(o.a)(u.a.mark((function t(a){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("".concat(R,"/lyrics/").concat(e.mmId));case 2:return n=t.sent,r=n.data.replace(/\n/g,"<br />"),t.abrupt("return",a(D(Object(C.a)(Object(C.a)({},e),{},{lyrics:r}))));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function D(e){return{type:"SET_CURRENT_SONG",data:e}}var H=a(155),k=a(156),U=a(157),I=a(158),P=a(159),W=a(160);function F(e){var t=e.formData,a=e.formHandler,n=e.lyricsUrl,c=e.submitHandler,l=t.title,s=t.artist,u=t.lyrics;return r.a.createElement(p.a,{md:8,className:"text-center mx-auto"},r.a.createElement(H.a,{onSubmit:c},r.a.createElement(k.a,null,r.a.createElement(U.a,{for:"title"},"Title"),r.a.createElement(I.a,{type:"text",id:"title",name:"title",value:l,onChange:a,required:!0})),r.a.createElement(k.a,null,r.a.createElement(U.a,{for:"artist"},"Artist"),r.a.createElement(I.a,{type:"text",id:"artist",name:"artist",value:s,onChange:a,required:!0})),r.a.createElement(k.a,null,r.a.createElement(U.a,{for:"lyrics"},"Lyrics"),r.a.createElement(I.a,{type:"textarea",id:"lyrics",name:"lyrics",value:u,onChange:a,required:!0}),n&&r.a.createElement(P.a,null,"No guarantees, but you might be able to find the rest of the lyrics at:",r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},n))),r.a.createElement(W.a,null,"Create Song")))}function K(){var e=Object(m.b)(),t=Object(N.g)(),a=Object(m.c)((function(e){return e.user})),c=Object(m.c)((function(e){return e.song})),l=c.lyrics?c.lyrics.replace(/<br\s*\/?>/gm,"\n"):null,s=Object(n.useState)(Object(C.a)(Object(C.a)({},c),{},{lyrics:l})||{id:null,title:"",artist:"",lyrics:""}),E=Object(i.a)(s,2),d=E[0],b=E[1],f=Object(n.useState)(!1),O=Object(i.a)(f,2),h=O[0],S=O[1];Object(n.useEffect)((function(){function n(){return(n=Object(o.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(d.id){n.next=5;break}return n.next=3,e(L(d,a.id));case 3:S(!1),t.push("/song");case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}h&&function(){n.apply(this,arguments)}()}),[e,h,d,a,t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{md:8,className:"text-center mx-auto mb-3"},r.a.createElement("h2",null,"Create Song")),r.a.createElement(F,{formData:d,formHandler:function(e){var t=e.target,a=t.name,n=t.value;b((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(w.a)({},a,n))}))},submitHandler:function(e){e.preventDefault(),S(!0)},lyricsUrl:c.lyricsLocation}))}function q(e){var t=e.song;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t.title),r.a.createElement("h5",null,t.artist),r.a.createElement("span",{id:"lyrics",className:"mt-3",dangerouslySetInnerHTML:{__html:t.lyrics}}),t.lyricsLocation&&r.a.createElement("div",{className:"mt-3"},r.a.createElement("p",null,"Lyrics preview provided by MusixMatch. Right song? Click below to add to your songs. You will be able to edit and add more lyrics on the next screen."),r.a.createElement(T.b,{to:"/createsong"},r.a.createElement(W.a,{className:"mt-2"},"Add to My Songs"))))}function G(){var e=Object(m.c)((function(e){return e.song}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{className:"text-center mx-auto mt-3"},r.a.createElement(q,{song:e})))}var M=a(59),B=a.n(M);function V(e){var t=e.songs,a=e.getLyrics,n=Object(m.c)((function(e){return e.user})),c=Object(N.g)(),l=Object(m.b)(),s={onClick:function(e,n,r){l(t?a(n):D(n)),c.push("/song")}};return r.a.createElement(B.a,{bootstrap4:!0,keyField:t?"mmId":"id",data:t||n.songs,columns:[{dataField:"artist",text:"Artist",sort:!0},{dataField:"title",text:"Song Title",sort:!0}],defaultSorted:[{dataField:"artist",order:"asc"}],rowEvents:s})}var X=Object({NODE_ENV:"production",PUBLIC_URL:"/static/client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SONG_STASH_API_URL||"http://127.0.0.1:5000/api";function J(e){return function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("".concat(X,"/search/").concat(encodeURI(e)));case 2:return n=t.sent,t.abrupt("return",a({type:"SET_SEARCH_RESULTS",data:n.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function Y(){var e=Object(m.b)(),t=Object(N.g)(),a=Object(m.c)((function(e){return e.search})),c=Object(n.useState)({query:""}),l=Object(i.a)(c,2),s=l[0],E=l[1],d=Object(n.useState)(!1),b=Object(i.a)(d,2),f=b[0],O=b[1];Object(n.useEffect)((function(){function t(){return(t=Object(o.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.id){t.next=4;break}return t.next=3,e(J(s.query));case 3:O(!1);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}f&&function(){t.apply(this,arguments)}()}),[e,f,s,t]);return r.a.createElement(p.a,{md:8,className:"text-center mx-auto"},r.a.createElement("div",{className:"my-3"},r.a.createElement("h2",null,"Search Songs"),r.a.createElement("h5",null,"Enter artist, title, or song lyrics to find new songs")),r.a.createElement(H.a,{onSubmit:function(e){e.preventDefault(),O(!0)}},r.a.createElement(k.a,null,r.a.createElement(I.a,{type:"text",id:"query",name:"query",value:s.query,onChange:function(e){var t=e.target,a=t.name,n=t.value;E((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(w.a)({},a,n))}))},required:!0})),r.a.createElement(W.a,{className:"mb-3"},"Search")),a&&r.a.createElement(V,{songs:a.results,getLyrics:A}))}function $(e){var t=e.formData,a=e.formHandler,n=e.submitHandler;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Add a New Stash"),r.a.createElement(H.a,{onSubmit:n},r.a.createElement(k.a,null,r.a.createElement(U.a,{for:"name"},"Stash Name"),r.a.createElement(I.a,{type:"text",id:"name",name:"name",value:t.name,onChange:a,required:!0})),r.a.createElement(W.a,{className:"mb-3"},"Add Stash")))}var z=Object({NODE_ENV:"production",PUBLIC_URL:"/static/client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SONG_STASH_API_URL||"http://127.0.0.1:5000/api";function Q(e,t){return function(){var a=Object(o.a)(u.a.mark((function a(n){var r,c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.post("".concat(z,"/stashes"),{name:e,user_id:t});case 2:return r=a.sent,c={id:r.data.id,name:r.data.name,songs:r.data.song_ids},a.abrupt("return",n({type:"SET_STASHES",data:c}));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function Z(){var e=Object(m.b)(),t=Object(N.h)(),a=Object(N.g)(),c=Object(m.c)((function(e){return e.user})),l=Object(n.useState)({name:""}),s=Object(i.a)(l,2),E=s[0],d=s[1],b=Object(n.useState)(!1),f=Object(i.a)(b,2),O=f[0],h=f[1];Object(n.useEffect)((function(){function t(){return(t=Object(o.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(E.id){t.next=6;break}return t.next=3,e(Q(E.name,c.id));case 3:h(!1),a.go(0),a.push("/");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}O&&function(){t.apply(this,arguments)}()}),[e,O,E,a,c]);return r.a.createElement(p.a,{md:8,className:"text-center mx-auto"},r.a.createElement("div",{className:"my-3"},"/stash/createstash"===t.pathname&&r.a.createElement($,{formData:E,formHandler:function(e){var t=e.target,a=t.name,n=t.value;d((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(w.a)({},a,n))}))},submitHandler:function(e){e.preventDefault(),h(!0)}})))}function ee(){return r.a.createElement(N.d,null,r.a.createElement(N.b,{path:"/mysongs",exact:!0},r.a.createElement(V,null)),r.a.createElement(N.b,{path:"/createsong",exact:!0},r.a.createElement(K,null)),r.a.createElement(N.b,{path:"/searchsongs",exact:!0},r.a.createElement(Y,null)),r.a.createElement(N.b,{path:"/song",exact:!0},r.a.createElement(G,null)),r.a.createElement(N.b,{path:"/stash"},r.a.createElement(Z,null)),r.a.createElement(N.a,{to:"/"}))}a(131);var te=a(60),ae=a.n(te);var ne=function(){var e=Object(m.c)((function(e){return e.user})),t=Object(m.b)(),a=Object(n.useState)(!0),c=Object(i.a)(a,2),l=c[0],s=c[1];return Object(n.useEffect)((function(){function a(){return(a=Object(o.a)(u.a.mark((function a(){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(f(e.id));case 2:s(!1);case 3:case"end":return a.stop()}}),a)})))).apply(this,arguments)}l&&function(){a.apply(this,arguments)}()}),[t,l,e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,null,r.a.createElement(p.a,{id:"nav-col",md:2},r.a.createElement(x,null)),r.a.createElement(p.a,{md:10},l&&r.a.createElement("img",{className:"d-block m-auto",src:ae.a,alt:"Music loader"}),r.a.createElement(ee,null))))},re=a(26),ce=a(61),le={};var se={};var ue=a(31),oe={};var ie={id:parseInt(window.token),songs:[],stashes:[]};function me(e){return e.map((function(e){return Object(C.a)(Object(C.a)({},e),{},{lyrics:e.lyrics.replace(/\n/g,"<br />")})}))}var Ee=Object(re.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH_RESULTS":var a=t.data;return Object(C.a)(Object(C.a)({},e),{},{results:a});case"CLEAR_SEARCH_RESULTS":return le;default:return e}},song:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_SONG":var a=t.data;return Object(C.a)(Object(C.a)({},e),{},{id:a.id?a.id:null,title:a.title,artist:a.artist,lyrics:a.lyrics,lyricsLocation:a.lyricsLocation?a.lyricsLocation:null});case"CLEAR_CURRENT_SONG":return se;default:return e}},stash:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STASHES":var a=t.data;return Object(C.a)(Object(C.a)({},e),{},Object(w.a)({},a.id,{name:a.name,songs:Object(ue.a)(a.songs)}));default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_DATA":var a=me(t.data.songs);return Object(C.a)(Object(C.a)({},e),{},{songs:Object(ue.a)(a),stashes:Object(ue.a)(t.data.stashes)});default:return e}}}),de=Object(re.e)(Ee,Object(re.d)(Object(re.a)(ce.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(132),a(133);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:de},r.a.createElement(T.a,null,r.a.createElement(N.b,{path:"/",component:ne})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},60:function(e,t,a){e.exports=a.p+"media/music-loader.5dc251b2.gif"},64:function(e,t,a){e.exports=a(134)},69:function(e,t,a){},92:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.9d690dcd.chunk.js.map