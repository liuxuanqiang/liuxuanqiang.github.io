webpackJsonp([1],{"0HV8":function(t,e){},"1/IE":function(t,e){},"5Pkp":function(t,e){},"62aI":function(t,e){},"753z":function(t,e){},ADS1:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},r,!1,function(t){s("RTBL")},null,null).exports,i=s("/ocq"),o={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var l=s("VU/8")({mounted:function(){this.$router.push({name:"topics"})}},o,!1,function(t){s("zf5d")},null,null).exports,c=s("Dd8w"),u=s.n(c),_=s("9rMa"),v={replace:!0,computed:u()({},Object(_.b)({userInfo:"getUserInfo"})),methods:{goUser:function(){this.$router.push({name:"user",params:{id:this.userInfo.loginname}})}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar navbar-fixed-top"},[s("div",{staticClass:"navbar-inner"},[s("div",{staticClass:"container"},[s("router-link",{staticClass:"brand",attrs:{to:{name:"index"}}},[s("img",{attrs:{src:"//o4j806krb.qnssl.com/public/images/cnodejs_light.svg"}})]),t._v(" "),t.userInfo.loginname?t._e():s("ul",{staticClass:"nav pull-right"},[s("li",[s("router-link",{attrs:{to:{name:"index"}}},[t._v("首页")])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),s("li",[s("router-link",{attrs:{to:{name:"about"}}},[t._v("关于")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:{name:"login"}}},[t._v("登录")])],1)]),t._v(" "),t.userInfo.loginname?s("ul",{staticClass:"nav pull-right"},[s("li",[s("router-link",{attrs:{to:{name:"index"}}},[t._v("首页")])],1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("li",[s("router-link",{attrs:{to:{name:"about"}}},[t._v("关于")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:{name:"login"}}},[t._v("退出")])],1),t._v(" "),s("li",[s("a",{staticClass:"avatar",attrs:{href:"javascript:;"}},[s("img",{attrs:{src:t.userInfo.avatar_url},on:{click:t.goUser}})])])]):t._e()],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://cnodejs.org/getstart",target:"_blank"}},[this._v("新手入门")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://cnodejs.org/api",target:"_blank"}},[this._v("API")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://cnodejs.org/getstart",target:"_blank"}},[this._v("新手入门")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://cnodejs.org/api",target:"_blank"}},[this._v("API")])])}]};var h=s("VU/8")(v,p,!1,function(t){s("QKsE")},null,null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"copyright"},[this._v("\n  Copyright © "),e("a",{attrs:{href:"https://liuxuanqiang.github.io/"}},[this._v("liuxuanqiang")])])}]};var m=s("VU/8")(null,d,!1,function(t){s("ADS1")},null,null).exports,f={components:{Header:h,Footer:m},data:function(){return{topicList:[],tab:"all"}},filters:{toZhCN:function(t){switch(t){case"share":return"分享";case"ask":return"问答";case"job":return"招聘";case"good":return"精华";default:return"测试"}}},created:function(){this.getTopics()},watch:{$route:function(t,e){t.query&&t.query.tab&&(this.tab=t.query.tab,this.topicList=[]),this.getTopics()}},methods:{getTopics:function(){var t=this;this.$axios.get("https://cnodejs.org/api/v1/topics?tab="+this.tab).then(function(e){e.data.success&&(t.topicList=e.data.data)})}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header"),t._v(" "),s("main",{staticClass:"page container"},[s("div",{staticClass:"panel"},[s("div",{staticClass:"header"},[s("router-link",{staticClass:"topic-tab",attrs:{to:{name:"topics",query:{tab:"all"}}}},[t._v("全部")]),t._v(" "),s("router-link",{staticClass:"topic-tab",attrs:{to:{name:"topics",query:{tab:"good"}}}},[t._v("精华")]),t._v(" "),s("router-link",{staticClass:"topic-tab",attrs:{to:{name:"topics",query:{tab:"share"}}}},[t._v("分享")]),t._v(" "),s("router-link",{staticClass:"topic-tab",attrs:{to:{name:"topics",query:{tab:"ask"}}}},[t._v("问答")]),t._v(" "),s("router-link",{staticClass:"topic-tab",attrs:{to:{name:"topics",query:{tab:"job"}}}},[t._v("招聘")]),t._v(" "),s("router-link",{staticClass:"topic-tab",attrs:{to:{name:"topics",query:{tab:"dev"}}}},[t._v("客户端测试")])],1),t._v(" "),s("div",{staticClass:"topic-list"},[s("ul",t._l(t.topicList,function(e){return s("li",{key:e.id},[s("router-link",{staticClass:"user-avatar",attrs:{to:"/user/"+e.author.loginname}},[s("img",{attrs:{src:e.author.avatar_url,alt:""}})]),t._v(" "),s("span",{staticClass:"reply-count"},[s("span",{attrs:{title:"回复数"}},[t._v(t._s(e.reply_count))]),t._v(" "),s("span",[t._v("/")]),t._v(" "),s("span",{attrs:{title:"点击数"}},[t._v(t._s(e.visit_count))])]),t._v(" "),s("span",[e.top?s("span",{staticClass:"put-top"},[t._v("置顶")]):s("span",{staticClass:"topic-tab"},[t._v(t._s(t._f("toZhCN")(e.tab)))])]),t._v(" "),s("router-link",{staticClass:"topic-title",attrs:{to:"/topic/"+e.id}},[t._v(t._s(e.title))]),t._v(" "),s("time",{staticClass:"last-active-time pull-right"},[t._v(t._s(t.$utils.timeFormat(e.create_at)))])],1)}))])])]),t._v(" "),s("Footer")],1)},staticRenderFns:[]};var C=s("VU/8")(f,g,!1,function(t){s("0HV8")},null,null).exports,b={components:{Header:h,Footer:m},data:function(){return{id:this.$route.params.id,result:{}}},filters:{toZhCN:function(t){switch(t){case"share":return"分享";case"ask":return"问答";case"job":return"招聘";case"good":return"精华";default:return"其它"}}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.$axios.get("https://cnodejs.org/api/v1/topic/"+this.id).then(function(e){t.result=e.data.data})}}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header"),t._v(" "),s("main",{staticClass:"container page"},[s("div",{staticClass:"panel"},[s("div",{staticClass:"header"},[t.result.top?s("span",{staticClass:"put-top"},[t._v("置顶")]):t._e(),t._v(" "),s("h3",{domProps:{textContent:t._s(t.result.title)}}),t._v(" "),s("p",{staticClass:"infos"},[s("span",[t._v("作者："+t._s(t.result.author.loginname))]),t._v(" "),s("span",[t._v("发布于："+t._s(t.$utils.timeFormat(t.result.create_at)))]),t._v(" "),s("span",[t._v("浏览次数："+t._s(t.result.visit_count))]),t._v(" "),s("span",[t._v("最后一次编辑："+t._s(t.$utils.timeFormat(t.result.last_reply_at)))]),t._v(" "),s("span",[t._v("来自："+t._s(t._f("toZhCN")(t.result.tab)))])])]),t._v(" "),s("article",{staticClass:"topic-content",domProps:{innerHTML:t._s(t.result.content)}})]),t._v(" "),s("div",{staticClass:"panel"},[s("div",{staticClass:"header"},[s("h4",[t._v("共"+t._s(t.result.replies.length)+"条回复：")])]),t._v(" "),s("div",{staticClass:"reply-list"},[t.result.replies.length>0?s("ul",t._l(t.result.replies,function(e){return s("li",{key:e.id},[s("img",{attrs:{src:e.author.avatar_url,alt:""}}),t._v(" "),s("span",{staticClass:"author"},[t._v(t._s(e.author.loginname))]),t._v(" "),s("span",{staticClass:"times"},[t._v(t._s(t.$utils.timeFormat(e.create_at)))]),t._v(" "),s("div",{staticClass:"reply-content",domProps:{innerHTML:t._s(e.content)}})])})):s("p",[t._v("暂无回复~")])])])]),t._v(" "),s("Footer")],1)},staticRenderFns:[]};var $=s("VU/8")(b,k,!1,function(t){s("1/IE")},null,null).exports,x={components:{Header:h,Footer:m},data:function(){return{id:this.$route.params.id,result:{}}},created:function(){this.getUser()},methods:{getUser:function(){var t=this;this.$axios.get("https://cnodejs.org/api/v1/user/"+this.id).then(function(e){t.result=e.data.data})}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header"),t._v(" "),s("main",{staticClass:"container page"},[s("div",{staticClass:"panel"},[s("div",{staticClass:"header"},[s("ol",{staticClass:"breadcrumb"},[t._m(0),t._v(" "),s("li",[t._v(t._s(t.result.loginname))])])]),t._v(" "),s("div",{staticClass:"user-info"},[s("p",[s("img",{staticClass:"avatar",attrs:{src:t.result.avatar_url,alt:""}}),t._v(" "),s("span",{staticClass:"name"},[t._v(t._s(t.result.loginname))])]),t._v(" "),s("p",[t._v("GitHub主页："),s("a",{attrs:{href:"https://github.com/"+t.result.githubUsername,target:"_blank"}},[t._v("https://github.com/"+t._s(t.result.githubUsername))])]),t._v(" "),s("p",[t._v("积分："+t._s(t.result.score))]),t._v(" "),s("p",[t._v("注册时间："+t._s(t.$utils.timeFormat(t.result.create_at)))])])]),t._v(" "),s("div",{staticClass:"panel"},[t._m(1),t._v(" "),s("div",{staticClass:"topic-list"},[t.result.recent_topics.length>0?s("ul",t._l(t.result.recent_topics,function(e){return s("li",{key:e.id},[s("router-link",{staticClass:"user-avatar",attrs:{to:"/user/"+e.author.loginname}},[s("img",{attrs:{src:e.author.avatar_url,alt:""}})]),t._v(" "),s("router-link",{staticClass:"reply-content",attrs:{to:"/topic/"+e.id}},[t._v(t._s(e.title))]),t._v(" "),s("time",{staticClass:"times pull-right"},[t._v(t._s(t.$utils.timeFormat(e.last_reply_at)))])],1)})):s("p",[t._v("暂无~")])])]),t._v(" "),s("div",{staticClass:"panel"},[t._m(2),t._v(" "),s("div",{staticClass:"topic-list"},[t.result.recent_replies.length>0?s("ul",t._l(t.result.recent_replies,function(e){return s("li",{key:e.id},[s("router-link",{staticClass:"user-avatar",attrs:{to:"/user/"+e.author.loginname}},[s("img",{attrs:{src:e.author.avatar_url,alt:""}})]),t._v(" "),s("span",{staticClass:"author"},[t._v(t._s(e.author.loginname))]),t._v(" "),s("router-link",{staticClass:"reply-content",attrs:{to:"/topic/"+e.id}},[t._v(t._s(e.title))]),t._v(" "),s("span",{staticClass:"times pull-right"},[t._v(t._s(t.$utils.timeFormat(e.last_reply_at)))])],1)})):s("p",[t._v("暂无~")])])])]),t._v(" "),s("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/"}},[this._v("主页")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h4",[this._v("最近创建的话题：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h4",[this._v("最近参与的回复：")])])}]};var F=s("VU/8")(x,y,!1,function(t){s("753z")},null,null).exports,j={components:{Header:h,Footer:m}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header"),this._v(" "),this._m(0),this._v(" "),e("Footer")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"container page"},[s("div",{staticClass:"panel"},[s("div",{staticClass:"header"},[s("ol",{staticClass:"breadcrumb"},[s("li",[s("a",{attrs:{href:"/"}},[t._v("主页")])]),t._v(" "),s("li",[t._v("关于")])])]),t._v(" "),s("div",{staticClass:"about-content"},[s("section",[s("h3",[t._v("关于CNode")]),t._v(" "),s("p",[t._v("CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。")]),t._v(" "),s("p",[t._v("CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。")]),t._v(" "),s("p",[t._v("CNode 的 SLA 保证是，一个9，即 90.000000%。")]),t._v(" "),s("p",[t._v("社区目前由 "),s("a",{attrs:{href:"http://cnodejs.org/user/alsotang",target:"_blank"}},[t._v("@alsotang")]),t._v(" 在维护，有问题请联系："),s("a",{attrs:{href:"https://github.com/alsotang",target:"_blank"}},[t._v("https://github.com/alsotang")])]),t._v(" "),s("p",[t._v("请关注我们的官方微博："),s("a",{attrs:{href:"http://weibo.com/cnodejs",target:"_blank"}},[t._v("http://weibo.com/cnodejs")])])]),t._v(" "),s("section",[s("h3",[t._v("关于本项目")]),t._v(" "),s("p",[t._v("本项目借助CNode社区公开的API，使用Vue2 + Vue-router + Vuex + Axios + webpack 重新构建的Webapp，旨在让自己更深入全面地学习Vue全家桶相关知识，同时也希望看到此项目并且想深入学习Vue的同学作为学习参考。")]),t._v(" "),s("p",[t._v("项目地址："),s("a",{attrs:{href:"https://github.com/liuxuanqiang/vue-cnode",target:"_blank"}},[t._v("https://github.com/liuxuanqiang/vue-cnode")])])])])])])}]};var U=s("VU/8")(j,I,!1,function(t){s("5Pkp")},null,null).exports,E={data:function(){return{token:""}},methods:{login:function(){var t=this;if(""===this.token)return alert("令牌格式错误，应为36位UUID字符串"),!1;this.$axios.post("https://cnodejs.org/api/v1/accesstoken",{accesstoken:this.token}).then(function(e){if(e.data.success){var s={loginname:e.data.loginname,avatar_url:e.data.avatar_url,userId:e.data.id,token:t.token};t.$store.dispatch("setUserInfo",s);var a=decodeURIComponent(t.$route.query.redirect||"/");t.$router.push({path:a})}else alert("登录失败，请稍后再试！")}).catch(function(t){alert("登录失败，请稍后再试！\n错误原因："+t)})}},components:{Header:h,Footer:m}},H={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-page"},[s("Header"),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"page-body"},[s("div",{staticClass:"label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.token,expression:"token"}],staticClass:"txt",attrs:{type:"text",placeholder:"Access Token",maxlength:"36"},domProps:{value:t.token},on:{input:function(e){e.target.composing||(t.token=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"label"},[s("a",{staticClass:"button",attrs:{href:"javascript:;"},on:{click:t.login}},[t._v("登录")])])])]),t._v(" "),s("Footer")],1)},staticRenderFns:[]};var q=s("VU/8")(E,H,!1,function(t){s("62aI")},null,null).exports;a.a.use(i.a);var N=new i.a({routes:[{path:"/",name:"index",component:l},{path:"/topics",name:"topics",component:C},{path:"/topic/:id",name:"topic",component:$},{path:"/user/:id",name:"user",component:F},{path:"/about",name:"about",component:U},{path:"/login",name:"login",component:q}]});a.a.use(_.a);var V=new _.a.Store({state:{userInfo:{}},getters:{getUserInfo:function(t){return t.userInfo}},mutations:{setUserInfo:function(t,e){t.userInfo=e}},actions:{setUserInfo:function(t,e){(0,t.commit)("setUserInfo",e)}}}),w=s("aozt"),R=s.n(w),A={timeFormat:function(t){var e=(new Date).getTime()-new Date(t).getTime(),s=e/31104e6,a=e/2592e6,r=e/6048e5,n=e/864e5,i=e/36e5,o=e/6e4;return s>=1?~~s+" 年前":a>=1?~~a+" 个月前":r>=1?~~r+" 周前":n>=1?~~n+" 天前":i>=1?~~i+" 小时前":o>=1?~~o+" 分钟前":"刚刚"}};a.a.config.productionTip=!1,a.a.prototype.$axios=R.a,a.a.prototype.$utils=A,new a.a({el:"#app",router:N,store:V,components:{App:n},template:"<App/>"})},QKsE:function(t,e){},RTBL:function(t,e){},zf5d:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.527c2add38dd07c976cf.js.map