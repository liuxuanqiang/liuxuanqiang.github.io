webpackJsonp([1],{"53mr":function(t,s){},Kda0:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var n=e("VU/8")({name:"App"},i,!1,function(t){e("RMyz")},null,null).exports,r=e("/ocq"),c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"navbar navbar-fixed-top"},[e("div",{staticClass:"navbar-inner"},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-header"},[e("router-link",{staticClass:"brand",attrs:{to:{name:"index"}}},[e("img",{attrs:{src:"https://bihu.com/static/media/logo.81b9b93e.png"}})])],1),t._v(" "),e("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbar"}},[e("ul",{staticClass:"nav navbar-nav"},[e("li",[e("router-link",{attrs:{to:{name:"index"}}},[t._v("首页")])],1),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("a",{attrs:{href:""}},[this._v("推荐")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("a",{attrs:{href:""}},[this._v("更多")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",{staticClass:"nav navbar-nav navbar-right"},[s("li",[s("a",{attrs:{href:""}},[this._v("登录")])]),this._v(" "),s("li",[s("a",{attrs:{href:""}},[this._v("注册")])])])}]};var o=e("VU/8")(null,c,!1,function(t){e("if3V")},null,null).exports,l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"copyright"},[this._v("\n  Copyright © "),s("a",{attrs:{href:"https://liuxuanqiang.github.io/"}},[this._v("liuxuanqiang")])])}]};var u=e("VU/8")(null,l,!1,function(t){e("k9rS")},null,null).exports,h={components:{Header:o,Footer:u},data:function(){return{hotArtList:[]}},created:function(){this.getHotArtList()},watch:{},methods:{getHotArtList:function(){var t=this;this.$axios.post("https://be02.bihu.com/bihube-pc/api/content/show/hotArtList",{category:"recommend",code:""}).then(function(s){"success"===s.data.resMsg&&(t.hotArtList=s.data.data.list)})}}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Header"),t._v(" "),e("main",{staticClass:"page container"},[e("div",{staticClass:"list"},[e("ul",t._l(t.hotArtList,function(s){return e("li",{key:s.id},[e("div",{staticClass:"avatar"},[e("router-link",{attrs:{to:"/user/"+s.userId}},[e("img",{attrs:{src:"https://oss02.bihu.com/"+s.userIcon,alt:""}}),t._v(" "),e("h5",{staticClass:"nick"},[t._v(t._s(s.userName))])]),t._v(" "),e("time",{staticClass:"time"},[t._v(t._s(t.$utils.timeFormat(s.createTime)))])],1),t._v(" "),e("div",{staticClass:"info"},[e("img",{attrs:{src:"https://oss02.bihu.com/"+s.snapimage,alt:""}}),t._v(" "),e("router-link",{staticClass:"title",attrs:{to:"/article/"+s.id}},[e("h3",[t._v(t._s(s.title))])]),t._v(" "),e("p",{staticClass:"summary"},[t._v(t._s(s.snapcontent)+" ...")]),t._v(" "),e("p",{staticClass:"thumbs"},[e("span",[e("i",{staticClass:"glyphicon glyphicon-yen"}),t._v(t._s(s.money))]),t._v(" "),e("span",[e("i",{staticClass:"glyphicon glyphicon-thumbs-up"}),t._v(t._s(s.ups))]),t._v(" "),e("span",[e("i",{staticClass:"glyphicon glyphicon-thumbs-down"}),t._v(t._s(s.downs))]),t._v(" "),e("span",[e("i",{staticClass:"glyphicon glyphicon-comment"}),t._v(t._s(s.cmts))])])],1)])}))])]),t._v(" "),e("Footer")],1)},staticRenderFns:[]};var v=e("VU/8")(h,m,!1,function(t){e("Kda0")},null,null).exports,_={components:{Header:o,Footer:u},data:function(){return{id:this.$route.params.id,article:{},articleContent:"",commentList:[]}},created:function(){this.getHotArtList()},watch:{},methods:{getHotArtList:function(){var t=this;this.$axios.post("https://be02.bihu.com/bihube-pc/api/content/show/getArticle2",{artId:this.id}).then(function(s){"success"===s.data.resMsg&&(t.article=s.data.data,t.$axios.get("https://oss02.bihu.com/"+s.data.data.content).then(function(s){t.articleContent=decodeURIComponent(s.data)}),t.$axios.post("https://be02.bihu.com/bihube-pc/bihu/comment/listrootcomment",{articleId:s.data.data.id}).then(function(s){t.commentList=s.data.data.list}))})}}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Header"),t._v(" "),e("main",{staticClass:"page container"},[e("div",{staticClass:"article"},[e("h3",{staticClass:"title"},[t._v(t._s(t.article.title))]),t._v(" "),e("div",{staticClass:"user"},[e("img",{attrs:{src:"https://oss02.bihu.com/"+t.article.userIcon,alt:""}}),t._v(" "),e("span",{staticClass:"user-name"},[t._v(t._s(t.article.userName))]),t._v(" "),e("time",{staticClass:"time"},[t._v(t._s(t.$utils.timeFormat(t.article.creatime)))])]),t._v(" "),e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.articleContent)}}),t._v(" "),e("div",{staticClass:"comment"},[e("h3",[t._v("共"+t._s(t.commentList.length)+"条评论")]),t._v(" "),e("ul",t._l(t.commentList,function(s){return e("li",{key:s.commentId},[e("router-link",{attrs:{to:"/user/"+s.user.userId}},[e("img",{staticClass:"user-icon",attrs:{src:"https://oss02.bihu.com/"+s.user.userIcon,alt:""}}),t._v(" "),e("span",{staticClass:"user-name"},[t._v(t._s(s.user.userName))])]),t._v(" "),e("time",{staticClass:"time"},[t._v(t._s(t.$utils.timeFormat(s.createTime)))]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.content))])],1)}))])])]),t._v(" "),e("Footer")],1)},staticRenderFns:[]};var d=e("VU/8")(_,p,!1,function(t){e("53mr")},null,null).exports,f={components:{Header:o,Footer:u},data:function(){return{userInfo:{},userArticleList:[],userFollowList:[],userFansList:[],tabIndex:1}},created:function(){this.getUserInfo(),this.getUserArticleList()},filters:{formatImgUrl:function(t){return t.split(",")[0]}},watch:{$route:function(t,s){this.getUserInfo(),this.changeTabs(1)}},methods:{getUserInfo:function(){var t=this,s=this.$route.params.userId;this.$axios.post("https://be02.bihu.com/bihube-pc/api/content/show/userHomePage",{queryUserId:s}).then(function(s){"success"===s.data.resMsg&&(t.userInfo=s.data.data)})},getUserArticleList:function(){var t=this,s=this.$route.params.userId;this.$axios.post("https://be02.bihu.com/bihube-pc/api/content/show/getUserArtList",{challenge:"",crash:1,pageNum:1,queryUserId:s}).then(function(s){"success"===s.data.resMsg&&(t.userArticleList=s.data.data.list)})},getUserFollowList:function(){var t=this,s=this.$route.params.userId;this.$axios.post("https://be02.bihu.com/bihube-pc/api/content/show/getUserFollowList",{pageNum:1,queryUserId:s}).then(function(s){"success"===s.data.resMsg&&(t.userFollowList=s.data.data.list)})},getUserFansList:function(){var t=this,s=this.$route.params.userId;this.$axios.post("https://be02.bihu.com/bihube-pc/api/content/show/getUserFansList",{pageNum:1,queryUserId:s}).then(function(s){"success"===s.data.resMsg&&(t.userFansList=s.data.data.list)})},changeTabs:function(t){switch(t){case 1:this.getUserArticleList(),this.tabIndex=1;break;case 2:this.getUserFollowList(),this.tabIndex=2;break;case 3:this.getUserFansList(),this.tabIndex=3}}}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Header"),t._v(" "),e("main",{staticClass:"page container"},[e("div",{staticClass:"home-page"},[e("div",{staticClass:"user"},[e("img",{attrs:{src:"https://oss02.bihu.com/"+t.userInfo.userIcon,alt:""}}),t._v(" "),e("h4",[t._v(t._s(t.userInfo.userName))]),t._v(" "),e("p",[t._v(t._s(t.userInfo.info))])]),t._v(" "),e("div",[e("ul",{staticClass:"head-list"},[e("li",[e("a",{class:1==t.tabIndex?"active":"",attrs:{href:"javascript:;"},on:{click:function(s){t.changeTabs(1)}}},[t._v("文章("+t._s(t.userInfo.artNum)+")")])]),t._v(" "),e("li",[e("a",{class:2==t.tabIndex?"active":"",attrs:{href:"javascript:;"},on:{click:function(s){t.changeTabs(2)}}},[t._v("关注("+t._s(t.userInfo.follows)+")")])]),t._v(" "),e("li",[e("a",{class:3==t.tabIndex?"active":"",attrs:{href:"javascript:;"},on:{click:function(s){t.changeTabs(3)}}},[t._v("粉丝("+t._s(t.userInfo.fans)+")")])])]),t._v(" "),e("div",[e("ul",{class:["article-list",1==t.tabIndex?"":"hide"]},t._l(t.userArticleList,function(s){return e("li",{key:s.id},[e("div",{staticClass:"img-outer"},[e("img",{attrs:{src:t._f("formatImgUrl")("https://oss02.bihu.com/"+s.snapimage),alt:""}})]),t._v(" "),e("router-link",{staticClass:"title",attrs:{to:"/article/"+s.id}},[e("h3",[t._v(t._s(s.title))])]),t._v(" "),e("p",{staticClass:"summary",domProps:{innerHTML:t._s(s.snapcontent+"...")}}),t._v(" "),e("p",{staticClass:"thumbs"},[e("span",[e("i",{staticClass:"glyphicon glyphicon-yen"}),t._v(t._s(s.money))]),t._v(" "),e("span",[e("i",{staticClass:"glyphicon glyphicon-thumbs-up"}),t._v(t._s(s.ups))]),t._v(" "),e("span",[e("i",{staticClass:"glyphicon glyphicon-thumbs-down"}),t._v(t._s(s.downs))]),t._v(" "),e("span",[e("i",{staticClass:"glyphicon glyphicon-comment"}),t._v(t._s(s.cmts))])])],1)})),t._v(" "),e("ul",{class:["follow-list",2==t.tabIndex?"":"hide"]},t._l(t.userFollowList,function(s){return e("li",{key:s.userId},[e("router-link",{staticClass:"title",attrs:{to:"/user/"+s.userId}},[e("img",{attrs:{src:"https://oss02.bihu.com/"+s.userIcon,alt:""}}),t._v(" "),e("span",{staticClass:"user-name"},[t._v(t._s(s.userName))])]),t._v(" "),e("span",{staticClass:"fans-num"},[t._v("粉丝："+t._s(s.fans))])],1)})),t._v(" "),e("ul",{class:["follow-list",3==t.tabIndex?"":"hide"]},t._l(t.userFansList,function(s){return e("li",{key:s.userId},[e("router-link",{staticClass:"title",attrs:{to:"/user/"+s.userId}},[e("img",{attrs:{src:"https://oss02.bihu.com/"+s.userIcon,alt:""}}),t._v(" "),e("span",{staticClass:"user-name"},[t._v(t._s(s.userName))])]),t._v(" "),e("span",{staticClass:"fans-num"},[t._v("粉丝："+t._s(s.fans))])],1)}))])])])]),t._v(" "),e("Footer")],1)},staticRenderFns:[]};var b=e("VU/8")(f,g,!1,function(t){e("qZ0D")},null,null).exports;a.a.use(r.a);var C=new r.a({routes:[{path:"/",name:"index",component:v},{path:"/article/:id",name:"article",component:d},{path:"/user/:userId",name:"user",component:b}]}),I=e("aozt"),y=e.n(I),L={timeFormat:function(t){var s=(new Date).getTime()-new Date(t).getTime(),e=s/31104e6,a=s/2592e6,i=s/6048e5,n=s/864e5,r=s/36e5,c=s/6e4;return e>=1?~~e+" 年前":a>=1?~~a+" 个月前":i>=1?~~i+" 周前":n>=1?~~n+" 天前":r>=1?~~r+" 小时前":c>=1?~~c+" 分钟前":"刚刚"}};a.a.config.productionTip=!1,a.a.prototype.$axios=y.a,a.a.prototype.$utils=L,new a.a({el:"#app",router:C,components:{App:n},template:"<App/>"})},RMyz:function(t,s){},if3V:function(t,s){},k9rS:function(t,s){},qZ0D:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.dba215a003473492830e.js.map