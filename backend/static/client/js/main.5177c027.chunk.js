(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,a){e.exports=a(76)},49:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),o=(a(49),a(12)),u=a.n(o),i=a(15),s=a(20),m=a(10),E=a(25),f=a.n(E),d=Object({NODE_ENV:"production",PUBLIC_URL:"/static/client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SONG_STASH_API_URL||"http://127.0.0.1:5000/api";function b(e){return function(){var t=Object(i.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("".concat(d,"/users/").concat(e));case 2:return n=t.sent,t.abrupt("return",a({type:"FETCH_USER_DATA",data:n.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var O=a(89),p=a(82),h=a(77),v=a(78),_=a(79),g=a(80),S=a(81),j=a(17);a(72);function y(){var e=Object(m.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{id:"main-nav-bar",color:"dark",dark:!0},r.a.createElement(v.a,{className:"mb-auto mx-auto w-100 text-center",href:"/"},"SongStash"),r.a.createElement(_.a,{navbar:!0,pills:!0,justified:!0,className:"h-75 w-100"},r.a.createElement(g.a,{className:"mx-auto my-auto"},r.a.createElement(S.a,null,"My Stashes")),r.a.createElement(g.a,{className:"mx-auto my-auto"},r.a.createElement(S.a,null,"My Songs")),r.a.createElement(g.a,{className:"mx-auto my-auto"},r.a.createElement(S.a,null,"Song Search")),r.a.createElement(g.a,{className:"mx-auto my-auto"},r.a.createElement(j.b,{to:"/createsong",activeClassName:"active"},r.a.createElement(S.a,{onClick:function(){e({type:"CLEAR_CURRENT_SONG"})}},"Create Song")))),r.a.createElement(S.a,{className:"d-block mx-auto mt-auto",href:"/logout"},"Log Out")))}var N=a(6),x=a(26),T=a(8),w=Object({NODE_ENV:"production",PUBLIC_URL:"/static/client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SONG_STASH_API_URL||"http://127.0.0.1:5000/api";function C(e,t){return function(){var a=Object(i.a)(u.a.mark((function a(n){var r;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.post("".concat(w,"/songs"),Object(T.a)(Object(T.a)({},e),{},{user_id:t}));case 2:return r=a.sent,a.abrupt("return",n({type:"CREATE_NEW_SONG",data:r.data}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}var R=a(83),D=a(84),k=a(85),A=a(86),L=a(87),U=a(88);function H(e){var t=e.formData,a=e.formHandler,n=e.lyricsUrl,c=e.submitHandler,l=t.title,o=t.artist,u=t.lyrics;return r.a.createElement(p.a,{md:8,className:"text-center mx-auto"},r.a.createElement(R.a,{onSubmit:c},r.a.createElement(D.a,null,r.a.createElement(k.a,{for:"title"},"Title"),r.a.createElement(A.a,{type:"text",id:"title",name:"title",value:l,onChange:a,required:!0})),r.a.createElement(D.a,null,r.a.createElement(k.a,{for:"artist"},"Artist"),r.a.createElement(A.a,{type:"text",id:"artist",name:"artist",value:o,onChange:a,required:!0})),r.a.createElement(D.a,null,r.a.createElement(k.a,{for:"lyrics"},"Lyrics"),r.a.createElement(A.a,{type:"textarea",id:"lyrics",name:"lyrics",value:u,onChange:a,required:!0}),n&&r.a.createElement(L.a,null,"No guarantees, but you might be able to find the rest of the lyrics at:",r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},n))),r.a.createElement(U.a,null,"Create Song")))}function W(){var e=Object(m.b)(),t=Object(N.g)(),a=Object(m.c)((function(e){return e.user})),c=Object(m.c)((function(e){return e.song})),l=Object(n.useState)(c||{id:null,title:"",artist:"",lyrics:""}),o=Object(s.a)(l,2),E=o[0],f=o[1],d=Object(n.useState)(!1),b=Object(s.a)(d,2),O=b[0],h=b[1];Object(n.useEffect)((function(){function n(){return(n=Object(i.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(E.id){n.next=5;break}return n.next=3,e(C(E,a.id));case 3:h(!1),t.push("/song");case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}O&&function(){n.apply(this,arguments)}()}),[e,O,E,a,t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{md:8,className:"text-center mx-auto mb-3"},r.a.createElement("h2",null,"Create Song")),r.a.createElement(H,{formData:E,formHandler:function(e){var t=e.target,a=t.name,n=t.value;f((function(e){return Object(T.a)(Object(T.a)({},e),{},Object(x.a)({},a,n))}))},submitHandler:function(e){e.preventDefault(),h(!0)}}))}function I(e){var t=e.song;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t.title),r.a.createElement("h5",null,t.artist),r.a.createElement("span",{id:"lyrics",className:"mt-3"},t.lyrics))}function P(){var e=Object(m.c)((function(e){return e.song}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{className:"text-center mx-auto mt-3"},r.a.createElement(I,{song:e})))}function F(){return r.a.createElement(N.d,null,r.a.createElement(N.b,{path:"/createsong",exact:!0},r.a.createElement(W,null)),r.a.createElement(N.b,{path:"/song",exact:!0},r.a.createElement(P,null)),r.a.createElement(N.a,{to:"/"}))}a(74);var G=function(){var e=Object(m.c)((function(e){return e.user})),t=Object(m.b)(),a=Object(n.useState)(!0),c=Object(s.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){function a(){return(a=Object(i.a)(u.a.mark((function a(){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(b(e.id));case 2:o(!1);case 3:case"end":return a.stop()}}),a)})))).apply(this,arguments)}l&&function(){a.apply(this,arguments)}()}),[t,l,e]),l?r.a.createElement("h3",null,"Loading"):r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,null,r.a.createElement(p.a,{id:"nav-col",md:2},r.a.createElement(y,null)),r.a.createElement(p.a,{md:10},r.a.createElement(F,null))))},K=a(16),B=a(43),V=a(31),X={id:parseInt(window.token),songs:[],stashes:[]};function q(e){return e.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{lyrics:e.lyrics.replace(/\n/g,"<br />")})}))}var M={};var J=Object(K.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_DATA":var a=q(t.data.songs);return Object(T.a)(Object(T.a)({},e),{},{songs:Object(V.a)(a),stashes:Object(V.a)(t.data.stashes)});default:return e}},song:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_NEW_SONG":var a=t.data;return Object(T.a)(Object(T.a)({},e),{},{id:a.id,title:a.title,artist:a.artist,lyrics:a.lyrics});case"CLEAR_CURRENT_SONG":return M;default:return e}}}),$=Object(K.e)(J,Object(K.d)(Object(K.a)(B.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(75);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:$},r.a.createElement(j.a,null,r.a.createElement(N.b,{path:"/",component:G})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.5177c027.chunk.js.map