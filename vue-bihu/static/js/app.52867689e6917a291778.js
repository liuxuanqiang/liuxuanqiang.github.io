webpackJsonp([1],{"3Ytx":function(t,s){},AAsr:function(t,s){},GbN1:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("IvJb"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var n=e("vSla")({name:"App"},i,!1,function(t){e("osmz")},null,null).exports,r=e("zO6J"),o={props:{hide:Boolean,data:Array}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{class:["category-menu",t.hide?"":"hide"]},[e("ul",t._l(t.data,function(s){return e("li",{key:s.id},[e("router-link",{attrs:{to:{path:"/",query:{code:s.code}}}},[t._v("\n                "+t._s(s.code)+"\n            ")])],1)}))])},staticRenderFns:[]};var u={components:{CategoryMenu:e("vSla")(o,c,!1,function(t){e("3Ytx")},null,null).exports},data:function(){return{hide:!1,categoryList:[]}},created:function(){this.queryBoardList()},methods:{queryBoardList:function(){var t=this;this.$axios.post("https://be02.bihu.com/bihube-pc/api/content/queryBoardList").then(function(s){"success"===s.data.resMsg&&(t.categoryList=s.data.data.noSubList)})},showCategoryMenu:function(){this.hide=!0},hideCategoryMenu:function(){this.hide=!1}}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"navbar navbar-fixed-top"},[e("div",{staticClass:"navbar-inner"},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-header"},[e("router-link",{staticClass:"brand",attrs:{to:{name:"index"}}},[e("img",{attrs:{src:"https://bihu.com/static/media/logo.81b9b93e.png"}})])],1),t._v(" "),e("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbar"}},[e("ul",{staticClass:"nav navbar-nav"},[e("li",[e("router-link",{attrs:{to:{name:"index"}}},[t._v("推荐")])],1),t._v(" "),e("li",{on:{mouseover:t.showCategoryMenu,mouseout:t.hideCategoryMenu}},[e("a",{class:t.$route.query.code?"active":"",attrs:{href:"javascript:;"}},[t._v("更多")]),t._v(" "),e("category-menu",{attrs:{hide:t.hide,data:t.categoryList}})],1)]),t._v(" "),t._m(0)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("ul",{staticClass:"nav navbar-nav navbar-right"},[s("li",[s("a",{attrs:{href:""}},[this._v("登录")])]),this._v(" "),s("li",[s("a",{attrs:{href:""}},[this._v("注册")])])])}]};var h=e("vSla")(u,l,!1,function(t){e("pC7u")},null,null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"copyright"},[this._v("\n  Copyright © "),s("a",{attrs:{href:"https://liuxuanqiang.github.io/"}},[this._v("liuxuanqiang")])])}]};var d=e("vSla")(null,p,!1,function(t){e("gj9P")},null,null).exports,v={data:function(){return{current:this.currentPage}},props:{total:{type:Number,default:0},display:{type:Number,default:20},currentPage:{type:Number,default:1},pagegroup:{type:Number,default:5,coerce:function(t){return(t=t>0?t:5)%2==1?t:t+1}}},computed:{page:function(){return Math.ceil(this.total/this.display)},grouplist:function(){var t=this.page,s=[],e=[],a=Math.floor(this.pagegroup/2),i=this.current;if(t<=this.pagegroup){for(;t--;)s.push({text:this.page-t,val:this.page-t});return s}for(;t--;)s.push(this.page-t);var n=s.indexOf(i);n<a&&(i=i+a-n),this.current>this.page-a&&(i=this.page-a),s=s.splice(i-a-1,this.pagegroup);do{var r=s.shift();e.push({text:r,val:r})}while(s.length);return this.page>this.pagegroup&&(this.current>a+1&&e.unshift({text:"...",val:e[0].val-1}),this.current<this.page-a&&e.push({text:"...",val:e[e.length-1].val+1})),e}},methods:{setCurrent:function(t){this.current!=t&&t>0&&t<this.page+1&&(this.current=t,this.$emit("pagechange",this.current))}}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",[e("ul",{staticClass:"pagination"},[e("li",{class:{disabled:1==t.current}},[e("a",{attrs:{href:"javascript:;"},on:{click:function(s){t.setCurrent(t.current-1)}}},[t._v(" « ")])]),t._v(" "),e("li",{class:{disabled:1==t.current}},[e("a",{attrs:{href:"javascript:;"},on:{click:function(s){t.setCurrent(1)}}},[t._v(" 首页 ")])]),t._v(" "),t._l(t.grouplist,function(s){return e("li",{key:s.id,class:{active:t.current==s.val}},[e("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.setCurrent(s.val)}}},[t._v(" "+t._s(s.text)+" ")])])}),t._v(" "),e("li",{class:{disabled:t.current==t.page}},[e("a",{attrs:{href:"javascript:;"},on:{click:function(s){t.setCurrent(t.page)}}},[t._v(" 尾页 ")])]),t._v(" "),e("li",{class:{disabled:t.current==t.page}},[e("a",{attrs:{href:"javascript:;"},on:{click:function(s){t.setCurrent(t.current+1)}}},[t._v(" »")])])],2)])},staticRenderFns:[]};var m=e("vSla")(v,g,!1,function(t){e("NcHr")},null,null).exports,_={components:{Header:h,Footer:d,Pagination:m},data:function(){return{articleList:[],tabIndex:1,total:0,isRender:!1}},filters:{formatImgUrl:function(t){return t.split(",")[0]}},created:function(){this.getHotArtList()},watch:{$route:function(t,s){this.isRender=!1,this.getHotArtList()}},methods:{getHotArtList:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$axios.post("https://be02.bihu.com/bihube-pc/api/content/show/hotArtList",{category:"recommend",code:this.$route.query.code||"",pageNum:s}).then(function(s){"success"===s.data.resMsg&&(t.articleList=s.data.data.list,t.total=s.data.data.total,t.isRender=!0)})},getNewestArtList:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$axios.post("https://be02.bihu.com/bihube-pc/api/content/show/newestArtList",{category:"news",code:this.$route.query.code||"",pageNum:s}).then(function(s){"success"===s.data.resMsg&&(t.articleList=s.data.data.list,t.total=s.data.data.total,t.isRender=!0)})},changeTabs:function(t){switch(this.isRender=!1,t){case 1:this.getHotArtList(),this.tabIndex=1;break;case 2:this.getNewestArtList(),this.tabIndex=2}},pagechange:function(t){1==this.tabIndex?this.getHotArtList(t):this.getNewestArtList(t)}}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Header"),t._v(" "),e("main",{staticClass:"page container"},[e("div",{staticClass:"list"},[e("ul",{staticClass:"head-list"},[e("li",[e("a",{class:1==t.tabIndex?"active":"",attrs:{href:"javascript:;"},on:{click:function(s){t.changeTabs(1)}}},[t._v("热门")])]),t._v(" "),t.$route.query.code?e("li",[e("a",{class:2==t.tabIndex?"active":"",attrs:{href:"javascript:;"},on:{click:function(s){t.changeTabs(2)}}},[t._v("最新")])]):t._e()]),t._v(" "),e("ul",{staticClass:"article-list"},t._l(t.articleList,function(s){return e("li",{key:s.id},[e("div",{staticClass:"avatar"},[e("router-link",{attrs:{to:"/user/"+s.userId}},[e("img",{attrs:{src:"https://oss02.bihu.com/"+s.userIcon,alt:""}}),t._v(" "),e("h5",{staticClass:"nick"},[t._v(t._s(s.userName))])]),t._v(" "),e("time",{staticClass:"time"},[t._v(t._s(t.$utils.timeFormat(s.createTime)))])],1),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"img-outer"},[e("img",{attrs:{src:t._f("formatImgUrl")("https://oss02.bihu.com/"+s.snapimage),alt:""}})]),t._v(" "),e("router-link",{staticClass:"title",attrs:{to:"/article/"+s.id}},[e("h3",[t._v(t._s(s.title))]),t._v(" "),e("p",{staticClass:"summary"},[t._v(t._s(s.snapcontent)+" ...")])]),t._v(" "),e("p",{staticClass:"thumbs"},[e("span",[e("i",{staticClass:"glyphicon glyphicon-yen"}),t._v(t._s(s.money))]),t._v(" "),e("span",[e("i",{staticClass:"glyphicon glyphicon-thumbs-up"}),t._v(t._s(s.ups))]),t._v(" "),e("span",[e("i",{staticClass:"glyphicon glyphicon-thumbs-down"}),t._v(t._s(s.downs))]),t._v(" "),e("span",[e("i",{staticClass:"glyphicon glyphicon-comment"}),t._v(t._s(s.cmts))])])],1)])})),t._v(" "),t.isRender?e("Pagination",{attrs:{total:t.total},on:{pagechange:t.pagechange}}):t._e()],1)]),t._v(" "),e("Footer")],1)},staticRenderFns:[]};var b=e("vSla")(_,f,!1,function(t){e("AAsr")},null,null).exports,C={components:{Header:h,Footer:d,Pagination:m},data:function(){return{id:this.$route.params.id,article:{},articleContent:"",comment:{}}},created:function(){this.getHotArtList()},methods:{getHotArtList:function(){var t=this;this.$axios.post("https://be02.bihu.com/bihube-pc/api/content/show/getArticle2",{artId:this.id}).then(function(s){"success"===s.data.resMsg&&(t.article=s.data.data,t.$axios.get("https://oss02.bihu.com/"+s.data.data.content).then(function(s){t.articleContent=decodeURIComponent(s.data)}),t.$axios.post("https://be02.bihu.com/bihube-pc/bihu/comment/listrootcomment",{articleId:s.data.data.id}).then(function(s){t.comment=s.data.data}))})},getComment:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$axios.post("https://be02.bihu.com/bihube-pc/bihu/comment/listrootcomment",{articleId:this.id,pageNum:s}).then(function(s){t.comment=s.data.data})},pagechange:function(t){this.getComment(t)}}},y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Header"),t._v(" "),e("main",{staticClass:"page container"},[e("div",{staticClass:"article"},[e("h3",{staticClass:"title"},[t._v(t._s(t.article.title))]),t._v(" "),e("div",{staticClass:"user"},[e("img",{attrs:{src:"https://oss02.bihu.com/"+t.article.userIcon,alt:""}}),t._v(" "),e("span",{staticClass:"user-name"},[t._v(t._s(t.article.userName))]),t._v(" "),e("time",{staticClass:"time"},[t._v(t._s(t.$utils.timeFormat(t.article.creatime)))])]),t._v(" "),e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.articleContent)}}),t._v(" "),e("div",{staticClass:"comment"},[e("h3",[t._v("共"+t._s(t.comment.total)+"条评论")]),t._v(" "),e("ul",{staticClass:"list"},t._l(t.comment.list,function(s){return e("li",{key:s.commentId},[e("router-link",{attrs:{to:"/user/"+s.user.userId}},[e("img",{staticClass:"user-icon",attrs:{src:"https://oss02.bihu.com/"+s.user.userIcon,alt:""}}),t._v(" "),e("span",{staticClass:"user-name"},[t._v(t._s(s.user.userName))])]),t._v(" "),e("time",{staticClass:"time"},[t._v(t._s(t.$utils.timeFormat(s.createTime)))]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.content))])],1)})),t._v(" "),t.comment.pageSize<t.comment.total?e("Pagination",{attrs:{total:t.comment.total},on:{pagechange:t.pagechange}}):t._e()],1)])]),t._v(" "),e("Footer")],1)},staticRenderFns:[]};var I=e("vSla")(C,y,!1,function(t){e("GbN1")},null,null).exports,x={components:{Header:h,Footer:d,Pagination:m},data:function(){return{userInfo:{},userArticle:{},userFollow:{},userFans:{},tabIndex:1,isRender:!1}},created:function(){this.getUserInfo(),this.getUserArticleList()},filters:{formatImgUrl:function(t){return t.split(",")[0]}},watch:{$route:function(t,s){this.getUserInfo(),this.changeTabs(1)}},methods:{getUserInfo:function(){var t=this,s=this.$route.params.userId;this.$axios.post("https://be02.bihu.com/bihube-pc/api/content/show/userHomePage",{queryUserId:s}).then(function(s){"success"===s.data.resMsg&&(t.userInfo=s.data.data)})},getUserArticleList:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.$route.params.userId;this.$axios.post("https://be02.bihu.com/bihube-pc/api/content/show/getUserArtList",{challenge:"",crash:1,pageNum:s,queryUserId:e}).then(function(s){"success"===s.data.resMsg&&(t.userArticle=s.data.data,t.isRender=!0)})},getUserFollowList:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.$route.params.userId;this.$axios.post("https://be02.bihu.com/bihube-pc/api/content/show/getUserFollowList",{pageNum:s,queryUserId:e}).then(function(s){"success"===s.data.resMsg&&(t.userFollow=s.data.data,t.isRender=!0)})},getUserFansList:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.$route.params.userId;this.$axios.post("https://be02.bihu.com/bihube-pc/api/content/show/getUserFansList",{pageNum:s,queryUserId:e}).then(function(s){"success"===s.data.resMsg&&(t.userFans=s.data.data,t.isRender=!0)})},changeTabs:function(t){switch(this.isRender=!1,t){case 1:this.getUserArticleList(),this.tabIndex=1;break;case 2:this.getUserFollowList(),this.tabIndex=2;break;case 3:this.getUserFansList(),this.tabIndex=3}},pagechange:function(t){1==this.tabIndex?this.getUserArticleList(t):2==this.tabIndex?this.getUserFollowList(t):this.getUserFansList(t)}}},w={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Header"),t._v(" "),e("main",{staticClass:"page container"},[e("div",{staticClass:"home-page"},[e("div",{staticClass:"user"},[e("img",{attrs:{src:"https://oss02.bihu.com/"+t.userInfo.userIcon,alt:""}}),t._v(" "),e("h4",[t._v(t._s(t.userInfo.userName))]),t._v(" "),e("p",[t._v(t._s(t.userInfo.info))])]),t._v(" "),e("div",[e("ul",{staticClass:"head-list"},[e("li",[e("a",{class:1==t.tabIndex?"active":"",attrs:{href:"javascript:;"},on:{click:function(s){t.changeTabs(1)}}},[t._v("文章("+t._s(t.userInfo.artNum)+")")])]),t._v(" "),e("li",[e("a",{class:2==t.tabIndex?"active":"",attrs:{href:"javascript:;"},on:{click:function(s){t.changeTabs(2)}}},[t._v("关注("+t._s(t.userInfo.follows)+")")])]),t._v(" "),e("li",[e("a",{class:3==t.tabIndex?"active":"",attrs:{href:"javascript:;"},on:{click:function(s){t.changeTabs(3)}}},[t._v("粉丝("+t._s(t.userInfo.fans)+")")])])]),t._v(" "),e("div",[e("section",{class:["article-list",1==t.tabIndex?"":"hide"]},[e("ul",t._l(t.userArticle.list,function(s){return e("li",{key:s.id},[e("div",{staticClass:"img-outer"},[e("img",{attrs:{src:t._f("formatImgUrl")("https://oss02.bihu.com/"+s.snapimage),alt:""}})]),t._v(" "),e("router-link",{staticClass:"title",attrs:{to:"/article/"+s.id}},[e("h3",[t._v(t._s(s.title))]),t._v(" "),e("p",{staticClass:"summary",domProps:{innerHTML:t._s(s.snapcontent+"...")}})]),t._v(" "),e("p",{staticClass:"thumbs"},[e("span",[e("i",{staticClass:"glyphicon glyphicon-yen"}),t._v(t._s(s.money))]),t._v(" "),e("span",[e("i",{staticClass:"glyphicon glyphicon-thumbs-up"}),t._v(t._s(s.ups))]),t._v(" "),e("span",[e("i",{staticClass:"glyphicon glyphicon-thumbs-down"}),t._v(t._s(s.downs))]),t._v(" "),e("span",[e("i",{staticClass:"glyphicon glyphicon-comment"}),t._v(t._s(s.cmts))])])],1)})),t._v(" "),t.isRender&&t.userArticle.pageSize<t.userArticle.total?e("Pagination",{attrs:{total:t.userArticle.total},on:{pagechange:t.pagechange}}):t._e()],1),t._v(" "),e("section",{class:["follow-list",2==t.tabIndex?"":"hide"]},[e("ul",t._l(t.userFollow.list,function(s){return e("li",{key:s.userId},[e("router-link",{staticClass:"title",attrs:{to:"/user/"+s.userId}},[e("img",{attrs:{src:"https://oss02.bihu.com/"+s.userIcon,alt:""}}),t._v(" "),e("span",{staticClass:"user-name"},[t._v(t._s(s.userName))])]),t._v(" "),e("span",{staticClass:"fans-num"},[t._v("粉丝："+t._s(s.fans))])],1)})),t._v(" "),t.isRender&&t.userFollow.pageSize<t.userFollow.total?e("Pagination",{attrs:{total:t.userFollow.total},on:{pagechange:t.pagechange}}):t._e()],1),t._v(" "),e("section",{class:["follow-list",3==t.tabIndex?"":"hide"]},[e("ul",t._l(t.userFans.list,function(s){return e("li",{key:s.userId},[e("router-link",{staticClass:"title",attrs:{to:"/user/"+s.userId}},[e("img",{attrs:{src:"https://oss02.bihu.com/"+s.userIcon,alt:""}}),t._v(" "),e("span",{staticClass:"user-name"},[t._v(t._s(s.userName))])]),t._v(" "),e("span",{staticClass:"fans-num"},[t._v("粉丝："+t._s(s.fans))])],1)})),t._v(" "),t.isRender&&t.userFans.pageSize<t.userFans.total?e("Pagination",{attrs:{total:t.userFans.total},on:{pagechange:t.pagechange}}):t._e()],1)])])])]),t._v(" "),e("Footer")],1)},staticRenderFns:[]};var F=e("vSla")(x,w,!1,function(t){e("QpR0")},null,null).exports;a.a.use(r.a);var L=new r.a({routes:[{path:"/",name:"index",component:b},{path:"/article/:id",name:"article",component:I},{path:"/user/:userId",name:"user",component:F}]}),$=e("aozt"),A=e.n($),k={timeFormat:function(t){var s=(new Date).getTime()-new Date(t).getTime(),e=s/31104e6,a=s/2592e6,i=s/6048e5,n=s/864e5,r=s/36e5,o=s/6e4;return e>=1?~~e+" 年前":a>=1?~~a+" 个月前":i>=1?~~i+" 周前":n>=1?~~n+" 天前":r>=1?~~r+" 小时前":o>=1?~~o+" 分钟前":"刚刚"}};a.a.config.productionTip=!1,a.a.prototype.$axios=A.a,a.a.prototype.$utils=k,new a.a({el:"#app",router:L,components:{App:n},template:"<App/>"})},NcHr:function(t,s){},QpR0:function(t,s){},gj9P:function(t,s){},osmz:function(t,s){},pC7u:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.52867689e6917a291778.js.map