"use strict";(self["webpackChunkmy_blog"]=self["webpackChunkmy_blog"]||[]).push([[613],{83613:function(e,t,i){i.r(t),i.d(t,{default:function(){return m}});var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"blogDetail"},[s("h2",{staticClass:"title"},[e._v(e._s(e.blogDetail.title))]),s("div",{staticClass:"author"},[s("img",{staticClass:"avater",attrs:{src:""+e.blogDetail.avater}}),s("span",{staticClass:"name",on:{click:function(t){return e.toUserCenter(e.blogDetail.username)}}},[e._v(e._s(e.blogDetail.username))]),s("span",{staticClass:"time"},[e._v("于"+e._s(e.blogDetail.create_time)+"发布")]),s("img",{staticClass:"view",attrs:{src:i(4987)}}),s("span",{staticClass:"viewNum"},[e._v(e._s(e.blogDetail.views))])]),s("mavon-editor",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content",attrs:{ishljs:!0},domProps:{innerHTML:e._s(e.blogDetail.content)}}),s("div",{staticClass:"like"},[e.currentLike?s("img",{attrs:{src:i(90458)},on:{click:e.toLike}}):e._e(),e.currentLike?e._e():s("img",{attrs:{src:i(49662)},on:{click:e.toLike}}),s("span",{staticClass:"likeNum"},[e._v(e._s(e.blogDetail.likes))])])],1)},a=[],r=i(76737),n=i(71939),l=i(14797),o={name:"BlogDetail",data:function(){return{isLike:!1,id:this.$route.params.id,blogDetail:{},currentLike:!1}},methods:{toLike:function(){this.currentLike=!this.currentLike,!0===this.currentLike?this.blogDetail.likes+=1:this.blogDetail.likes-=1},toUserCenter:function(e){this.$router.push({name:"userCenter",params:{username:e}})}},mounted:function(){var e=this;return(0,n.Z)((0,r.Z)().mark((function t(){var i,s;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,l.lK)({id:e.id});case 2:return i=t.sent,e.blogDetail=i.blogDetail,t.next=6,(0,l.fT)({username:e.$store.state.user.username||localStorage.getItem("username"),blogId:e.blogDetail.id});case 6:s=t.sent,e.isLike=s.isLike,e.currentLike=e.isLike;case 9:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){this.currentLike!==this.isLike&&(0,l.V7)({isLike:this.currentLike,username:this.$store.state.user.username||localStorage.getItem("username"),blogId:this.blogDetail.id}),(0,l.q4)({blogId:this.blogDetail.id})}},c=o,u=i(35471),g=(0,u.Z)(c,s,a,!1,null,null,null),m=g.exports},90458:function(e,t,i){e.exports=i.p+"img/like.cab24965.svg"},49662:function(e,t,i){e.exports=i.p+"img/notLike.c13a33fb.svg"},4987:function(e,t,i){e.exports=i.p+"img/view.16850d8e.svg"}}]);
//# sourceMappingURL=613-legacy.f5cd4fef.js.map