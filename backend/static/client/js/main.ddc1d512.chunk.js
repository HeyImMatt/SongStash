(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{131:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),s=(a(69),a(8)),u=a.n(s),o=a(11),i=a(18),m=a(12),E=a(22),f=a.n(E),b=Object({NODE_ENV:"production",PUBLIC_URL:"/static/client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SONG_STASH_API_URL||"http://127.0.0.1:5000/api";function d(){return function(){var e=Object(o.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(b,"/stashes"));case 2:return a=e.sent,e.abrupt("return",t({type:"SET_STASHES",data:a.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function p(e){return function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.post("".concat(b,"/stashes"),{name:e});case 2:return n=t.sent,t.abrupt("return",a({type:"SET_NEW_STASH",data:n.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var O=a(6),h=Object({NODE_ENV:"production",PUBLIC_URL:"/static/client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SONG_STASH_API_URL||"http://127.0.0.1:5000/api";function S(){return function(){var e=Object(o.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(h,"/songs"));case 2:return a=e.sent,n=g(a.data.songs),e.abrupt("return",t({type:"FETCH_USER_SONGS",data:n}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function v(e,t){return function(){var a=Object(o.a)(u.a.mark((function a(n){var r,c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.post("".concat(h,"/songs"),Object(O.a)(Object(O.a)({},e),{},{user_id:t}));case 2:return r=a.sent,c=r.data.lyrics.replace(/\n/g,"<br />"),a.abrupt("return",n(_(Object(O.a)(Object(O.a)({},r.data),{},{lyrics:c}))));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function j(e){return function(){var t=Object(o.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.delete("".concat(h,"/songs/").concat(e));case 2:if("200"!==t.sent.status){t.next=5;break}return t.abrupt("return",a({type:"DELETE_SONG"}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function y(e){return function(){var t=Object(o.a)(u.a.mark((function t(a){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("".concat(h,"/lyrics/").concat(e.mmId));case 2:return n=t.sent,r=n.data.replace(/\n/g,"<br />"),t.abrupt("return",a(_(Object(O.a)(Object(O.a)({},e),{},{lyrics:r}))));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function g(e){return e.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{lyrics:e.lyrics.replace(/\n/g,"<br />")})}))}function _(e){return{type:"SET_CURRENT_SONG",data:e}}var x=a(161),N=a(154),T=a(148),w=a(149),k=a(150),C=a(151),R=a(152),L=a(153),H=a(162),D=a(13);a(92);function A(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.stash.stashes})),a=function(){e({type:"CLEAR_CURRENT_SONG"})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{id:"main-nav-bar",color:"dark",dark:!0},r.a.createElement(w.a,{className:"mx-auto w-100 text-center",href:"/"},"SongStash"),r.a.createElement(k.a,{navbar:!0,pills:!0,justified:!0,className:"h-75 w-100"},r.a.createElement("hr",null),r.a.createElement(C.a,{className:"mx-auto my-auto"},r.a.createElement(R.a,null,"My Stashes  ",r.a.createElement(D.b,{to:"/stash/createstash"},r.a.createElement(H.a,null))),t.map((function(e){return r.a.createElement(D.b,{to:"/stash/".concat(e.id)},r.a.createElement(L.a,null,e.name))}))),r.a.createElement("hr",null),r.a.createElement(C.a,{className:"mx-auto my-auto"},r.a.createElement(D.b,{to:"/mysongs"},r.a.createElement(L.a,null,"My Songs"))),r.a.createElement("hr",null),r.a.createElement(C.a,{className:"mx-auto my-auto"},r.a.createElement(D.b,{to:"/searchsongs"},r.a.createElement(L.a,{onClick:a},"Song Search"))),r.a.createElement("hr",null),r.a.createElement(C.a,{className:"mx-auto my-auto"},r.a.createElement(D.b,{to:"/createsong"},r.a.createElement(L.a,{onClick:a},"Create Song"))),r.a.createElement("hr",null),r.a.createElement(C.a,{className:"d-block mx-auto mt-auto"},r.a.createElement(D.b,{to:"/logout"},r.a.createElement(L.a,null,"Log Out"))))))}var U=a(10),F=a(25),I=a(155),W=a(156),P=a(157),G=a(158),q=a(159),K=a(160);function B(e){var t=e.formData,a=e.formHandler,n=e.lyricsUrl,c=e.submitHandler,l=t.title,s=t.artist,u=t.lyrics;return r.a.createElement(N.a,{md:8,className:"text-center mx-auto"},r.a.createElement(I.a,{onSubmit:c},r.a.createElement(W.a,null,r.a.createElement(P.a,{for:"title"},"Title"),r.a.createElement(G.a,{type:"text",id:"title",name:"title",value:l,onChange:a,required:!0})),r.a.createElement(W.a,null,r.a.createElement(P.a,{for:"artist"},"Artist"),r.a.createElement(G.a,{type:"text",id:"artist",name:"artist",value:s,onChange:a,required:!0})),r.a.createElement(W.a,null,r.a.createElement(P.a,{for:"lyrics"},"Lyrics"),r.a.createElement(G.a,{type:"textarea",id:"lyrics",name:"lyrics",value:u,onChange:a,required:!0}),n&&r.a.createElement(q.a,null,"No guarantees, but you might be able to find the rest of the lyrics at:",r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},n))),r.a.createElement(K.a,null,"Create Song")))}function M(){var e=Object(m.b)(),t=Object(U.g)(),a=Object(m.c)((function(e){return e.song})),c=a.lyrics?a.lyrics.replace(/<br\s*\/?>/gm,"\n"):null,l=Object(n.useState)(Object(O.a)(Object(O.a)({},a),{},{lyrics:c})||{id:null,title:"",artist:"",lyrics:""}),s=Object(i.a)(l,2),E=s[0],f=s[1],b=Object(n.useState)(!1),d=Object(i.a)(b,2),p=d[0],h=d[1];Object(n.useEffect)((function(){function a(){return(a=Object(o.a)(u.a.mark((function a(){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(E.id){a.next=5;break}return a.next=3,e(v(E));case 3:h(!1),t.push("/song");case 5:case"end":return a.stop()}}),a)})))).apply(this,arguments)}p&&function(){a.apply(this,arguments)}()}),[e,p,E,t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{md:8,className:"text-center mx-auto mb-3"},r.a.createElement("h2",null,"Create Song")),r.a.createElement(B,{formData:E,formHandler:function(e){var t=e.target,a=t.name,n=t.value;f((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(F.a)({},a,n))}))},submitHandler:function(e){e.preventDefault(),h(!0)},lyricsUrl:a.lyricsLocation}))}function V(e){var t=e.classes,a=e.clickHandler;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{color:"danger",className:t,onClick:a},"Delete"))}function X(e){var t=e.song;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t.title),r.a.createElement("h5",null,t.artist),r.a.createElement("span",{id:"lyrics",className:"mt-3",dangerouslySetInnerHTML:{__html:t.lyrics}}),t.lyricsLocation&&r.a.createElement("div",{className:"mt-3"},r.a.createElement("p",null,"Lyrics preview provided by MusixMatch. Right song? Click below to add to your songs. You will be able to edit and add more lyrics on the next screen."),r.a.createElement(D.b,{to:"/createsong"},r.a.createElement(K.a,{className:"mt-2"},"Add to My Songs"))))}function J(){var e=Object(U.g)(),t=Object(m.b)(),a=Object(m.c)((function(e){return e.song}));function n(){return(n=Object(o.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t(j(a.id));case 2:e.goBack();case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{md:10,className:"mt-3"},r.a.createElement(K.a,{onClick:function(){return e.goBack()}},"Back"),r.a.createElement(V,{classes:"ml-2",clickHandler:function(){return n.apply(this,arguments)}})),r.a.createElement(N.a,{md:10,className:"text-center mx-auto mt-3"},r.a.createElement(X,{song:a})))}var Y=a(59),$=a.n(Y);function z(e){var t=e.songs,a=e.getLyrics,n=Object(m.c)((function(e){return e.song.songs})),c=Object(U.g)(),l=Object(m.b)(),s={onClick:function(e,n,r){l(t?a(n):_(n)),c.push("/song")}};return r.a.createElement($.a,{bootstrap4:!0,keyField:t?"mmId":"id",data:t||n,columns:[{dataField:"artist",text:"Artist",sort:!0},{dataField:"title",text:"Song Title",sort:!0}],defaultSorted:[{dataField:"artist",order:"asc"}],rowEvents:s})}var Q=Object({NODE_ENV:"production",PUBLIC_URL:"/static/client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SONG_STASH_API_URL||"http://127.0.0.1:5000/api";function Z(e){return function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("".concat(Q,"/search/").concat(encodeURI(e)));case 2:return n=t.sent,t.abrupt("return",a({type:"SET_SEARCH_RESULTS",data:n.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function ee(){var e=Object(m.b)(),t=Object(U.g)(),a=Object(m.c)((function(e){return e.search})),c=Object(n.useState)({query:""}),l=Object(i.a)(c,2),s=l[0],E=l[1],f=Object(n.useState)(!1),b=Object(i.a)(f,2),d=b[0],p=b[1];Object(n.useEffect)((function(){function t(){return(t=Object(o.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.id){t.next=4;break}return t.next=3,e(Z(s.query));case 3:p(!1);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}d&&function(){t.apply(this,arguments)}()}),[e,d,s,t]);return r.a.createElement(N.a,{md:8,className:"text-center mx-auto"},r.a.createElement("div",{className:"my-3"},r.a.createElement("h2",null,"Search Songs"),r.a.createElement("h5",null,"Enter artist, title, or song lyrics to find new songs")),r.a.createElement(I.a,{onSubmit:function(e){e.preventDefault(),p(!0)}},r.a.createElement(W.a,null,r.a.createElement(G.a,{type:"text",id:"query",name:"query",value:s.query,onChange:function(e){var t=e.target,a=t.name,n=t.value;E((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(F.a)({},a,n))}))},required:!0})),r.a.createElement(K.a,{className:"mb-3"},"Search")),a.results&&r.a.createElement(z,{songs:a.results,getLyrics:y}))}function te(e){var t=e.formData,a=e.formHandler,n=e.submitHandler;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Add a New Stash"),r.a.createElement(I.a,{onSubmit:n},r.a.createElement(W.a,null,r.a.createElement(P.a,{for:"name"},"Stash Name"),r.a.createElement(G.a,{type:"text",id:"name",name:"name",value:t.name,onChange:a,required:!0})),r.a.createElement(K.a,{className:"mb-3"},"Add Stash")))}function ae(){var e=Object(m.b)(),t=Object(U.h)(),a=Object(U.g)(),c=Object(n.useState)({name:""}),l=Object(i.a)(c,2),s=l[0],E=l[1],f=Object(n.useState)(!1),b=Object(i.a)(f,2),d=b[0],h=b[1];Object(n.useEffect)((function(){function t(){return(t=Object(o.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.id){t.next=5;break}return t.next=3,e(p(s.name));case 3:h(!1),a.push("/");case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}d&&function(){t.apply(this,arguments)}()}),[e,d,s,a]);return r.a.createElement(N.a,{md:8,className:"text-center mx-auto"},r.a.createElement("div",{className:"my-3"},"/stash/createstash"===t.pathname&&r.a.createElement(te,{formData:s,formHandler:function(e){var t=e.target,a=t.name,n=t.value;E((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(F.a)({},a,n))}))},submitHandler:function(e){e.preventDefault(),h(!0)}})))}function ne(){return r.a.createElement(U.d,null,r.a.createElement(U.b,{path:"/mysongs",exact:!0},r.a.createElement(z,null)),r.a.createElement(U.b,{path:"/createsong",exact:!0},r.a.createElement(M,null)),r.a.createElement(U.b,{path:"/searchsongs",exact:!0},r.a.createElement(ee,null)),r.a.createElement(U.b,{path:"/song",exact:!0},r.a.createElement(J,null)),r.a.createElement(U.b,{path:"/stash"},r.a.createElement(ae,null)),r.a.createElement(U.a,{to:"/"}))}a(131);var re=a(60),ce=a.n(re);var le=function(){var e=Object(m.b)(),t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(!0),E=Object(i.a)(s,2),f=E[0],b=E[1];return Object(n.useEffect)((function(){function t(){return(t=Object(o.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(d());case 2:l(!1);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c&&function(){t.apply(this,arguments)}()}),[e,c]),Object(n.useEffect)((function(){function t(){return(t=Object(o.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(S());case 2:b(!1);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}f&&function(){t.apply(this,arguments)}()}),[e,f]),r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement(N.a,{id:"nav-col",md:2},!c&&r.a.createElement(A,null)),r.a.createElement(N.a,{md:10},c&&f&&r.a.createElement("img",{className:"d-block m-auto",src:ce.a,alt:"Music loader"}),!c&&!f&&r.a.createElement(ne,null))))},se=a(26),ue=a(61),oe={};var ie=a(34),me={};var Ee={};var fe=Object(se.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH_RESULTS":var a=t.data;return Object(O.a)(Object(O.a)({},e),{},{results:a});case"CLEAR_SEARCH_RESULTS":return oe;default:return e}},song:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_SONGS":return Object(O.a)(Object(O.a)({},e),{},{songs:Object(ie.a)(t.data)});case"SET_CURRENT_SONG":var a=t.data;return Object(O.a)(Object(O.a)({},e),{},{id:a.id?a.id:null,title:a.title,artist:a.artist,lyrics:a.lyrics,lyricsLocation:a.lyricsLocation?a.lyricsLocation:null});case"CLEAR_CURRENT_SONG":return Object(O.a)(Object(O.a)({},e),{},{id:"",title:"",artist:"",lyrics:"",lyricsLocation:""});case"DELETE_SONG":return me;default:return e}},stash:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STASHES":return Object(O.a)(Object(O.a)({},e),t.data);case"SET_NEW_STASH":return Object(O.a)(Object(O.a)({},e),{},{stashes:[].concat(Object(ie.a)(e.stashes),[t.data])});default:return e}}}),be=Object(se.e)(fe,Object(se.d)(Object(se.a)(ue.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(132),a(133);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:be},r.a.createElement(D.a,null,r.a.createElement(U.b,{path:"/",component:le})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},60:function(e,t,a){e.exports=a.p+"media/music-loader.5dc251b2.gif"},64:function(e,t,a){e.exports=a(134)},69:function(e,t,a){},92:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.ddc1d512.chunk.js.map