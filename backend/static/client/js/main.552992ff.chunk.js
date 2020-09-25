(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),u=a.n(c),s=(a(76),a(3)),l=a.n(s),o=a(6),i=a(14),m=a(10),p=a(7),f=a(62),b=a(63),d=a(19),h=a.n(d),E=Object({NODE_ENV:"production",PUBLIC_URL:"/static/client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SONG_STASH_API_URL||"http://127.0.0.1:5000/api",v=function(){function e(){Object(f.a)(this,e)}return Object(b.a)(e,null,[{key:"fetchStashes",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(E,"/stashes"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"postStash",value:function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat(E,"/stashes"),{name:t});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"addSongToStash",value:function(){var e=Object(o.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat(E,"/stashes/songs"),{songId:t,stashId:a});case 3:return e.abrupt("return",{songId:t,stashId:a});case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"deleteSongFromStash",value:function(){var e=Object(o.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("".concat(E,"/stashes/songs/").concat(a,"/").concat(t));case 3:return e.abrupt("return",{songId:t,stashId:a});case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"deleteStash",value:function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("".concat(E,"/stashes/").concat(t));case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"editStash",value:function(){var e=Object(o.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.patch("".concat(E,"/stashes/").concat(t),{name:a});case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"fetchSongs",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(E,"/songs"));case 3:return t=e.sent,e.abrupt("return",t.data.songs);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"postSong",value:function(){var e=Object(o.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat(E,"/songs"),Object(p.a)(Object(p.a)({},t),{},{user_id:a}));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"editSong",value:function(){var e=Object(o.a)(l.a.mark((function e(t,a){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.title,r=a.artist,c=a.lyrics,e.prev=1,e.next=4,h.a.patch("".concat(E,"/songs/").concat(t),{title:n,artist:r,lyrics:c});case 4:return e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"deleteSong",value:function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("".concat(E,"/songs/").concat(t));case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getSongLyrics",value:function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(E,"/lyrics/").concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"searchSongs",value:function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(E,"/search/").concat(encodeURI(t)));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}();function g(){return function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.fetchStashes();case 2:return a=e.sent,e.abrupt("return",t(y(a)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function O(e){return function(){var t=Object(o.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.postStash(e);case 2:return n=t.sent,t.abrupt("return",a(S(n)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function y(e){return{type:"SET_STASHES",data:e}}function S(e){return{type:"SET_NEW_STASH",data:e}}function j(){return function(){var e=Object(o.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.fetchSongs();case 2:return a=e.sent,n=N(a),e.abrupt("return",t(_(n)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function x(e,t){return function(){var a=Object(o.a)(l.a.mark((function a(n){var r,c;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.postSong(e,t);case 2:return r=a.sent,c=r.lyrics.replace(/\n/g,"<br />"),a.abrupt("return",n(C(Object(p.a)(Object(p.a)({},r),{},{lyrics:c}))));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function w(e){return function(){var t=Object(o.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.deleteSong(e);case 2:if(!t.sent){t.next=5;break}return t.abrupt("return",a({type:"DELETE_SONG"}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function k(e){return function(){var t=Object(o.a)(l.a.mark((function t(a){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.getSongLyrics(e.mmId);case 2:return n=t.sent,r=n.replace(/\n/g,"<br />"),t.abrupt("return",a(C(Object(p.a)(Object(p.a)({},e),{},{lyrics:r}))));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function N(e){return e.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{lyrics:e.lyrics.replace(/\n/g,"<br />")})}))}function _(e){return{type:"FETCH_USER_SONGS",data:e}}function C(e){return{type:"SET_CURRENT_SONG",data:e}}var T=a(168),H=a(161),L=a(155),R=a(156),A=a(157),U=a(158),D=a(159),F=a(160),I=a(169),B=a(12),q=a(13);a(99);function M(){var e=Object(B.h)(),t=Object(m.b)(),a=Object(m.c)((function(e){return e.stash.stashes})),n=function(){t({type:"CLEAR_CURRENT_SONG"})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{id:"main-nav-bar",color:"dark",dark:!0},r.a.createElement(R.a,{className:"mx-auto mt-0 mb-0 w-100 text-center",href:"/mysongs"},"SongStash"),r.a.createElement("hr",{className:"mt-0 mb-2"}),r.a.createElement(A.a,{navbar:!0,pills:!0,justified:!0,className:"mt-0 h-75 w-100"},r.a.createElement(U.a,{className:"mx-auto mt-0 mb-auto"},r.a.createElement(D.a,null,r.a.createElement("u",null,"My Stashes"),"  ",r.a.createElement(q.b,{to:"/createstash","data-testid":"addStashBtn"},r.a.createElement(I.a,null))),a&&a.map((function(t){return r.a.createElement(q.b,{to:"/stash/".concat(t.id)},r.a.createElement(F.a,{active:e.pathname==="/stash/".concat(t.id)},t.name))}))),r.a.createElement("hr",null),r.a.createElement(U.a,{className:"mx-auto my-auto"},r.a.createElement(q.b,{to:"/mysongs"},r.a.createElement(F.a,{active:"/mysongs"===e.pathname},"My Songs"))),r.a.createElement("hr",null),r.a.createElement(U.a,{className:"mx-auto my-auto"},r.a.createElement(q.b,{to:"/searchsongs"},r.a.createElement(F.a,{active:"/searchsongs"===e.pathname,onClick:n},"Song Search"))),r.a.createElement("hr",null),r.a.createElement(U.a,{className:"mx-auto my-auto"},r.a.createElement(q.b,{to:"/createsong"},r.a.createElement(F.a,{active:"/createsong"===e.pathname,onClick:n},"Create Song"))),r.a.createElement("hr",null),r.a.createElement(U.a,{className:"d-block mx-auto mt-auto"},r.a.createElement("a",{href:"/logout"},r.a.createElement(F.a,null,"Log Out"))))))}var G=a(24),W=a(162),P=a(163),K=a(164),J=a(165),V=a(166),X=a(167);function Y(e){var t=e.toggleEdit,a=e.formData,n=e.formHandler,c=e.lyricsUrl,u=e.submitHandler,s=e.text,l=a.title,o=a.artist,i=a.lyrics,m=Object(B.g)();return r.a.createElement(H.a,{md:8,className:"text-center mx-auto"},r.a.createElement(W.a,{onSubmit:u},r.a.createElement(P.a,null,r.a.createElement(K.a,{for:"title"},"Title"),r.a.createElement(J.a,{type:"text",id:"title",name:"title",value:l,onChange:n,required:!0})),r.a.createElement(P.a,null,r.a.createElement(K.a,{for:"artist"},"Artist"),r.a.createElement(J.a,{type:"text",id:"artist",name:"artist",value:o,onChange:n,required:!0})),r.a.createElement(P.a,null,r.a.createElement(K.a,{for:"lyrics"},"Lyrics"),r.a.createElement(J.a,{type:"textarea",id:"lyrics",name:"lyrics",rows:"15",value:i,onChange:n,required:!0}),c&&r.a.createElement(V.a,null,"No guarantees, but you might be able to find the rest of the lyrics at:",r.a.createElement("br",null),r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},c))),r.a.createElement(X.a,{type:"submit",color:"warning",className:"mr-2"},s),r.a.createElement(X.a,{type:"button",color:"secondary",onClick:t||function(){return m.goBack()}},"Cancel")))}function z(e){var t=e.editSong,a=e.toggleEdit,c=Object(m.b)(),u=Object(B.g)(),s=Object(m.c)((function(e){return e.song})),f=s.lyrics?s.lyrics.replace(/<br\s*\/?>/gm,"\n"):null,b=Object(n.useState)(Object(p.a)(Object(p.a)({},s),{},{lyrics:f})||{id:null,title:"",artist:"",lyrics:""}),d=Object(i.a)(b,2),h=d[0],E=d[1],g=function(){var e=Object(o.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!t){e.next=10;break}return e.next=4,v.editSong(s.id,h);case 4:return a(),e.next=7,c(j());case 7:u.replace("/song/".concat(s.id)),e.next=13;break;case 10:return e.next=12,c(x(h));case 12:u.replace("/mysongs");case 13:case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,!t&&r.a.createElement(H.a,{md:8,className:"text-center mx-auto mb-3"},r.a.createElement("h2",null,"Create Song")),r.a.createElement(Y,{toggleEdit:a,formData:h,formHandler:function(e){var t=e.target,a=t.name,n=t.value;E((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(G.a)({},a,n))}))},submitHandler:g,lyricsUrl:s.lyricsLocation,text:t?"Update Song":"Create Song"}))}var $=a(68);function Q(e){var t=e.classes,a=e.text,n=e.clickHandler;return r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{color:"danger",className:t,onClick:n},a))}function Z(e){var t=e.song;return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("h3",null,t.title),r.a.createElement("h5",null,t.artist),r.a.createElement("hr",null),r.a.createElement("span",{id:"lyrics",className:"mt-3",dangerouslySetInnerHTML:{__html:t.lyrics}}),t.lyricsLocation&&r.a.createElement("div",{className:"mt-3"},r.a.createElement("p",null,"Lyrics preview provided by MusixMatch. Right song? Click below to add to your songs. You will be able to edit and add more lyrics on the next screen."),r.a.createElement(q.b,{to:"/createsong"},r.a.createElement(X.a,{className:"mt-2",color:"warning"},"Add to My Songs"))))}function ee(){var e=Object(B.g)(),t=Object(m.b)(),a=Object(B.i)().id,c=parseInt(a),u=Object(m.c)((function(e){return e.song.songs})),s=Object(m.c)((function(e){return e.stash.stashes})),p=Object(m.c)((function(e){return e.song})),f=Object(n.useState)(!1),b=Object(i.a)(f,2),d=b[0],h=b[1],E=function(){return h(!d)};Object(n.useEffect)((function(){if(c&&u){var a=u.filter((function(e){return e.id===c}))[0];a?t(C(a)):e.push("/mysongs")}}),[t,e,c,u]);var O=s.reduce((function(e,t){return t.song_ids.includes(c)?(e.push({label:t.name,value:t.id}),e):e}),[]),y=Object(n.useState)(O),S=Object(i.a)(y,2),x=S[0],k=S[1],N=s.map((function(e){return{label:e.name,value:e.id}}));function _(){return(_=Object(o.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(w(p.id));case 2:return a.next=4,t(j());case 4:e.goBack();case 5:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function T(){return(T=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x.forEach(function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O.includes(t)){e.next=3;break}return e.next=3,v.addSongToStash(p.id,t.value);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O.forEach(function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.includes(t)){e.next=3;break}return e.next=3,v.deleteSongFromStash(p.id,t.value);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.t0=t,e.next=5,g();case 5:return e.t1=e.sent,e.next=8,(0,e.t0)(e.t1);case 8:window.location.reload();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{md:12,className:"d-flex mt-3 justify-content-between"},r.a.createElement(X.a,{className:"mr-auto",onClick:function(){return e.goBack()}},"Back"),p.id&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",{className:"d-inline-block ml-2 my-auto"},"Stashes:"),r.a.createElement($.a,{hasSelectAll:!1,options:N,value:x,onChange:k,labelledBy:"Select Stashes",className:"d-inline-block ml-2 w-25"}),r.a.createElement(X.a,{color:"warning",className:"ml-2",onClick:function(){return T.apply(this,arguments)}},"Update Stashes"),r.a.createElement(X.a,{color:"info",className:"ml-auto",onClick:E},"Edit Song"),r.a.createElement(Q,{text:"Delete Song",classes:"ml-2",clickHandler:function(){return _.apply(this,arguments)}}))),r.a.createElement(H.a,{md:10,className:"text-center mx-auto mt-5"},!d&&r.a.createElement(Z,{song:p}),d&&r.a.createElement(z,{toggleEdit:E,editSong:!0})))}var te=a(64),ae=a.n(te);function ne(e){var t=e.songs,a=e.getLyrics,n=Object(B.g)(),c=Object(m.b)(),u={onClick:function(e,t,r){a?(c(a(t)),n.push("/song/searchresult")):n.push("/song/".concat(t.id))}};return r.a.createElement(r.a.Fragment,null,0!==t.length&&r.a.createElement(ae.a,{bootstrap4:!0,keyField:a?"mmId":"id",data:t,columns:[{dataField:"artist",text:"Artist",sort:!0},{dataField:"title",text:"Song Title",sort:!0}],defaultSorted:[{dataField:"artist",order:"asc"}],rowEvents:u,rowStyle:{cursor:"pointer"},hover:!0}),0===t.length&&r.a.createElement("h6",null,"No Songs"))}function re(e){return function(){var t=Object(o.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.searchSongs(e);case 2:return n=t.sent,t.abrupt("return",a(ce(n)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function ce(e){return{type:"SET_SEARCH_RESULTS",data:e}}function ue(){var e=Object(m.b)(),t=Object(B.g)(),a=Object(m.c)((function(e){return e.search})),c=Object(n.useState)({query:""}),u=Object(i.a)(c,2),s=u[0],f=u[1],b=Object(n.useState)(!1),d=Object(i.a)(b,2),h=d[0],E=d[1];Object(n.useEffect)((function(){function t(){return(t=Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.id){t.next=4;break}return t.next=3,e(re(s.query));case 3:E(!1);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}h&&function(){t.apply(this,arguments)}()}),[e,h,s,t]);return r.a.createElement(H.a,{md:8,className:"text-center mx-auto"},r.a.createElement("div",{className:"my-3"},r.a.createElement("h2",null,"Search Songs"),r.a.createElement("h5",null,"Enter artist, title, or song lyrics to find new songs")),r.a.createElement(W.a,{onSubmit:function(e){e.preventDefault(),E(!0)}},r.a.createElement(P.a,null,r.a.createElement(J.a,{className:"text-center",type:"text",id:"query",name:"query",value:s.query,onChange:function(e){var t=e.target,a=t.name,n=t.value;f((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(G.a)({},a,n))}))},required:!0})),r.a.createElement(X.a,{className:"mb-3"},"Search")),a.results&&r.a.createElement(ne,{songs:a.results,getLyrics:k}))}function se(){var e=Object(m.c)((function(e){return e.song.songs})),t=Object(m.c)((function(e){return e.stash.stashes})),a=[];return r.a.createElement(H.a,{md:8,className:"text-center mx-auto"},r.a.createElement("div",{className:"my-3"},r.a.createElement("h2",null,"My Songs"),0===e.length&&r.a.createElement("h5",{className:"text-info"},"You don't have any songs yet.",r.a.createElement("br",null),"Click Song Search or Create Song to add some new ones!")),t.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("h5",null,t.name),r.a.createElement(ne,{songs:(n=t.song_ids,n.forEach((function(e){a.includes(e)||a.push(e)})),e.filter((function(e){return n.includes(e.id)})))}));var n})),r.a.createElement("hr",null),r.a.createElement("h5",null,"Unstashed Songs"),r.a.createElement(ne,{songs:e.filter((function(e){return!a.includes(e.id)}))}))}function le(e){var t=e.cancelAction,a=e.text,n=e.formData,c=e.formHandler,u=e.submitHandler;return r.a.createElement(W.a,{onSubmit:u},r.a.createElement(P.a,null,r.a.createElement(K.a,{for:"name"},"Stash Name"),r.a.createElement(J.a,{className:"text-center",type:"text",id:"name",name:"name",value:n.name,onChange:c,required:!0})),r.a.createElement(X.a,{type:"submit",color:"warning",className:"mb-3 mr-2"},a),r.a.createElement(X.a,{type:"button",color:"secondary",className:"mb-3",onClick:t},"Cancel"))}var oe=a(65),ie=a.n(oe);function me(){var e=Object(m.b)(),t=Object(B.g)(),a=Object(B.i)().id,c=parseInt(a),u=Object(m.c)((function(e){return e.stash.stashes})).filter((function(e){return e.id===c}))[0],s=Object(m.c)((function(e){return e.song.songs})).filter((function(e){return u.song_ids.includes(e.id)})),f=Object(n.useState)(),b=Object(i.a)(f,2),d=b[0],h=b[1],E=Object(n.useState)(!1),O=Object(i.a)(E,2),y=O[0],S=O[1],j=function(){return S(!y)};Object(n.useEffect)((function(){c&&u?h({name:u.name}):t.goBack()}),[h,u,c,t]);var x=function(){var t=Object(o.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,v.editStash(a,d.name);case 3:S(!1),e(g());case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function w(){return(w=Object(o.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.deleteStash(a);case 2:e(g()),t.goBack();case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{md:12,className:"d-flex mt-3 justify-content-between"},r.a.createElement(X.a,{className:"mr-auto",onClick:function(){return t.goBack()}},"Back"),r.a.createElement(Q,{text:"Delete Stash",classes:"ml-auto",clickHandler:function(){return w.apply(this,arguments)}})),r.a.createElement(H.a,{md:10,className:"text-center mx-auto my-3"},!y&&u&&r.a.createElement("h5",{className:"d-inline-block mr-2"},u.name),y&&r.a.createElement(le,{cancelAction:j,formData:d,formHandler:function(e){var t=e.target,a=t.name,n=t.value;h((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(G.a)({},a,n))}))},submitHandler:x,text:"Update"}),!y&&r.a.createElement(ie.a,{className:"mb-2",fontSize:"small",onClick:j,style:{cursor:"pointer"}}),r.a.createElement(ne,{songs:s})))}function pe(){var e=Object(m.b)(),t=Object(B.g)(),a=Object(n.useState)({name:""}),c=Object(i.a)(a,2),u=c[0],s=c[1],f=Object(n.useState)(!1),b=Object(i.a)(f,2),d=b[0],h=b[1];Object(n.useEffect)((function(){function a(){return(a=Object(o.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(u.id){a.next=5;break}return a.next=3,e(O(u.name));case 3:h(!1),t.push("/");case 5:case"end":return a.stop()}}),a)})))).apply(this,arguments)}d&&function(){a.apply(this,arguments)}()}),[e,d,u,t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{md:10,className:"text-center mx-auto my-3"},r.a.createElement("h4",null,"Create Stash"),r.a.createElement(le,{cancelAction:function(){return t.goBack()},formData:u,formHandler:function(e){var t=e.target,a=t.name,n=t.value;s((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(G.a)({},a,n))}))},submitHandler:function(e){e.preventDefault(),h(!0)},text:"Create Stash"})))}function fe(){return r.a.createElement(B.d,null,r.a.createElement(B.b,{path:"/mysongs",exact:!0},r.a.createElement(se,null)),r.a.createElement(B.b,{path:"/createsong",exact:!0},r.a.createElement(z,null)),r.a.createElement(B.b,{path:"/createstash",exact:!0},r.a.createElement(pe,null)),r.a.createElement(B.b,{path:"/searchsongs",exact:!0},r.a.createElement(ue,null)),r.a.createElement(B.b,{path:"/song/:id"},r.a.createElement(ee,null)),r.a.createElement(B.b,{path:"/stash/:id"},r.a.createElement(me,null)),r.a.createElement(B.a,{to:"/mysongs"}))}var be=a(66),de=a.n(be);var he=function(){var e=Object(m.b)(),t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],u=a[1],s=Object(n.useState)(!0),p=Object(i.a)(s,2),f=p[0],b=p[1];return Object(n.useEffect)((function(){function t(){return(t=Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(g());case 2:u(!1);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c&&function(){t.apply(this,arguments)}()}),[e,c]),Object(n.useEffect)((function(){function t(){return(t=Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(j());case 2:b(!1);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}f&&function(){t.apply(this,arguments)}()}),[e,f]),r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{className:"vh-100"},r.a.createElement(H.a,{md:2},!c&&r.a.createElement(M,null)),r.a.createElement(H.a,{md:10},c&&f&&r.a.createElement("img",{className:"d-block m-auto",src:de.a,alt:"Music loader"}),!c&&!f&&r.a.createElement(fe,null))))},Ee=a(26),ve=a(67),ge={};var Oe=a(34),ye={};var Se={};var je=Object(Ee.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH_RESULTS":var a=t.data;return Object(p.a)(Object(p.a)({},e),{},{results:a});case"CLEAR_SEARCH_RESULTS":return ge;default:return e}},song:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_SONGS":return Object(p.a)(Object(p.a)({},e),{},{songs:Object(Oe.a)(t.data)});case"SET_CURRENT_SONG":var a=t.data;return Object(p.a)(Object(p.a)({},e),{},{id:a.id?a.id:null,title:a.title,artist:a.artist,lyrics:a.lyrics,lyricsLocation:a.lyricsLocation?a.lyricsLocation:null});case"CLEAR_CURRENT_SONG":return Object(p.a)(Object(p.a)({},e),{},{id:"",title:"",artist:"",lyrics:"",lyricsLocation:""});case"DELETE_SONG":return ye;default:return e}},stash:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STASHES":return Object(p.a)(Object(p.a)({},e),t.data);case"SET_NEW_STASH":return Object(p.a)(Object(p.a)({},e),{},{stashes:[].concat(Object(Oe.a)(e.stashes),[t.data])});default:return e}}}),xe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ee.d,we=Object(Ee.e)(je,xe(Object(Ee.a)(ve.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(140),a(141);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:we},r.a.createElement(q.a,null,r.a.createElement(B.b,{path:"/",component:he})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},66:function(e,t,a){e.exports=a.p+"media/music-loader.5dc251b2.gif"},71:function(e,t,a){e.exports=a(142)},76:function(e,t,a){},99:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.552992ff.chunk.js.map