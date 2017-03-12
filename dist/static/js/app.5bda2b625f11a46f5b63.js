webpackJsonp([1,2],[,,,,,,,,,,,,,,,function(t,e,n){n(88);var s=n(3)(n(48),n(99),"data-v-3a996196",null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){n(85);var s=n(3)(n(47),n(96),"data-v-02b88d7e",null);t.exports=s.exports},function(t,e,n){"use strict";var s=n(16),i=n(103),a=n(93),o=n.n(a),r=n(95),c=n.n(r),u=n(94),l=n.n(u),d=n(92),p=n.n(d);s.a.use(i.a),e.a=new i.a({routes:[{path:"/discovery",component:o.a,name:"discovery"},{path:"/mymusic",component:c.a,name:"mymusic"},{path:"/friends",component:l.a,name:"friends"},{path:"/account",component:p.a,name:"account"}]})},function(t,e,n){n(91);var s=n(3)(n(42),n(102),null,null);t.exports=s.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(84),i=(n.n(s),n(49)),a=n(39),o=n.n(a);e.default={name:"app",created:function(){var t=localStorage.getItem("oldMusicList");t&&(t=JSON.parse(t),this.$store.commit("loadOldMusic",t))},computed:{playingFlag:function(){return this.$store.state.playingFlag}},store:i.a,components:{NowPlaying:o.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(15),i=n.n(s);e.default={components:{Playing:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(15),i=n.n(s),a=n(39),o=n.n(a);e.default={name:"DiscoverMusic",computed:{musicList:function(){return this.$store.state.musicList},mp3:function(){return this.$store.state.mp3}},updated:function(){},methods:{searchSong:function(){var t="type=search&s="+document.getElementsByName("search_text")[0].value;this.$store.dispatch("search",t)},getSong:function(t){var e=t.id;this.$store.dispatch("get",e);var n=t.al.picUrl,s=t.name,i=t.ar[0].name,a={songId:e,img:n,singer:i,musicName:s};this.$store.commit("addOldMusic",a),this.$store.commit("updateOldMusicList");var o={img:n,musicName:s,singer:i};this.$store.commit("setNowMusic",o)}},components:{Playing:i.a,NowPlaying:o.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(15),i=n.n(s);e.default={components:{Playing:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(15),i=n.n(s);e.default={computed:{oldMusicList:function(){return this.$store.state.oldMusicList}},methods:{getSong:function(t){var e=t.songId;this.$store.dispatch("get",e);var n=t.img,s=t.musicName,i=t.singer;console.log(t);var a={img:n,musicName:s,singer:i};this.$store.commit("setNowMusic",a)}},components:{Playing:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{mp3:function(){return this.$store.state.mp3},nowPlay:function(){return this.$store.state.nowPlay}},updated:function(){var t=this;setTimeout(function(){document.getElementById("play").setAttribute("src",t.$store.state.mp3)},500),document.querySelector("#backImg").style.background="url("+this.$store.state.nowPlay.img+") repeat-x",document.querySelector("#backImg").style.backgroundSize="contain"},methods:{close:function(){this.$store.state.playingFlag=""}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{show:function(){this.$store.state.playingFlag="true"}}}},function(t,e,n){"use strict";var s=n(50),i=n.n(s),a=n(53),o=n.n(a),r=n(16),c=n(105);r.a.use(c.a),e.a=new c.a.Store({state:{musicList:[],mp3:"",oldMusicList:[],playingFlag:"",img:"",nowPlay:{img:"",musicName:"",singer:""}},mutations:{Ajax:function(t,e){var n=e.type,s=e.url,i=e.data,a=e.success,r=e.failed,c=null;c=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");var n=n.toUpperCase(),u=Math.random();if("object"==(void 0===i?"undefined":o()(i))){var l="";for(var d in i)l+=d+"="+i[d]+"&";i=l.replace(/&$/,"")}"GET"==n?(i?c.open("GET",s+"?"+i,!0):c.open("GET",s+"?t="+u,!0),c.send()):"POST"==n&&(c.open("POST",s,!0),c.setRequestHeader("Content-type","application/x-www-form-urlencoded"),c.send(i)),c.onreadystatechange=function(){4==c.readyState&&(200==c.status?a(c.responseText):r&&r(c.status))}},addOldMusic:function(t,e){for(var n in t.oldMusicList)if(t.oldMusicList[n].songId===e.songId)return;t.oldMusicList.push(e)},updateOldMusicList:function(t){localStorage.setItem("oldMusicList",i()(t.oldMusicList))},loadOldMusic:function(t,e){t.oldMusicList=e},setNowMusic:function(t,e){t.nowPlay=e}},actions:{search:function(t,e){var n=t.commit,s=t.state;n("Ajax",{type:"get",url:"https://api.imjad.cn/cloudmusic/",data:e,success:function(t){t=JSON.parse(t),s.musicList=t.result.songs},failed:function(t){alert(t)}})},get:function(t,e){var n=t.commit,s=t.state;n("Ajax",{type:"get",url:"https://api.imjad.cn/cloudmusic/",data:"type=song&id="+e+"&br=128000",success:function(t){t=JSON.parse(t),s.mp3=t.data[0].url,s.playingFlag=s.mp3}})}}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){n(87);var s=n(3)(n(43),n(98),"data-v-27f6f1b4",null);t.exports=s.exports},function(t,e,n){n(86);var s=n(3)(n(44),n(97),"data-v-1ffe881e",null);t.exports=s.exports},function(t,e,n){n(89);var s=n(3)(n(45),n(100),"data-v-4820bd1c",null);t.exports=s.exports},function(t,e,n){n(90);var s=n(3)(n(46),n(101),"data-v-5f204d60",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"NowPlaying"}},[n("div",{attrs:{id:"header"}},[n("div",{on:{click:t.close}},[t._v("<")]),t._v(" "),n("div",[n("div",[t._v(t._s(t.nowPlay.musicName))]),t._v(" "),n("div",[t._v(t._s(t.nowPlay.singer))])]),t._v(" "),n("div")]),t._v(" "),n("div",{attrs:{id:"backImg"}}),t._v(" "),n("audio",{attrs:{id:"play",loop:"",autoplay:"",controls:"controls"}},[n("source",{attrs:{src:t.mp3}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("span"),t._v(" "),n("span",[n("i",{staticClass:"iconfont icon-sousuo_sousuo"}),t._v(" "),n("input",{attrs:{type:"search",placeholder:"搜索音乐",name:"search_text"},on:{keyup:function(e){if(t._k(e.keyCode,"enter",13))return null;t.searchSong(e)}}})]),t._v(" "),n("span",[n("Playing")],1)]),t._v(" "),n("main",[n("ul",t._l(t.musicList,function(e){return n("li",{on:{click:function(n){t.getSong(e)}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("span",[t._v(t._s(e.ar[0].name))])])}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("span"),t._v(" "),n("span",[t._v("\n       账号\n    ")]),t._v(" "),n("span",[n("Playing")],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{on:{click:t.show}},[n("i",{staticClass:"iconfont icon-yinle"})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("span",[n("Playing")],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"iconfont icon-tianjiaguanzhu"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("ul",[n("li",[t._v("关注")]),t._v(" "),n("li",[t._v("附近")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("span"),t._v(" "),n("span",[t._v("\n       最近播放\n    ")]),t._v(" "),n("span",[n("Playing")],1)]),t._v(" "),n("main",[n("ul",t._l(t.oldMusicList,function(e){return n("li",{on:{click:function(n){t.getSong(e)}}},[n("span",[t._v(t._s(e.musicName))]),t._v(" "),n("span",[t._v(t._s(e.singer))])])}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"bounce"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.playingFlag,expression:"playingFlag"}],attrs:{id:"nowPlaying"}},[n("NowPlaying")],1)]),t._v(" "),n("router-view"),t._v(" "),n("footer",[n("ul",[n("li",[n("router-link",{attrs:{to:"/discovery"}},[n("span",[n("i",{staticClass:"iconfont icon-wangyiyunyinlezizhi"})]),t._v(" "),n("span",[t._v("发现音乐")])])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/mymusic"}},[n("span",[n("i",{staticClass:"iconfont icon-iconupload"})]),t._v(" "),n("span",[t._v("最近播放")])])],1)])])],1)},staticRenderFns:[]}},,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(16),i=n(41),a=n.n(i),o=n(40);s.a.config.productionTip=!1,new s.a({el:"#app",router:o.a,template:"<App/>",components:{App:a.a}}),o.a.push("discovery")}],[107]);
//# sourceMappingURL=app.5bda2b625f11a46f5b63.js.map