"use strict";(self["webpackChunkmy_blog"]=self["webpackChunkmy_blog"]||[]).push([[150],{6150:function(t,i,e){e.r(i),e.d(i,{default:function(){return u}});var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"blogDetail"},[s("h2",{staticClass:"title"},[t._v(t._s(t.blogDetail.title))]),s("div",{staticClass:"author"},[s("img",{staticClass:"avater",attrs:{src:""+t.blogDetail.avater}}),s("span",{staticClass:"name",on:{click:function(i){return t.toUserCenter(t.blogDetail.username)}}},[t._v(t._s(t.blogDetail.username))]),s("span",{staticClass:"time"},[t._v("于"+t._s(t.blogDetail.create_time)+"发布")]),s("img",{staticClass:"view",attrs:{src:e(4987)}}),s("span",{staticClass:"viewNum"},[t._v(t._s(t.blogDetail.views))])]),s("mavon-editor",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content",attrs:{ishljs:!0},domProps:{innerHTML:t._s(t.blogDetail.content)}}),s("div",{staticClass:"like"},[t.currentLike?s("img",{attrs:{src:e(458)},on:{click:t.toLike}}):t._e(),t.currentLike?t._e():s("img",{attrs:{src:e(9662)},on:{click:t.toLike}}),s("span",{staticClass:"likeNum"},[t._v(t._s(t.blogDetail.likes))])])],1)},a=[],l=e(4315),r={name:"BlogDetail",data(){return{isLike:!1,id:this.$route.params.id,blogDetail:{},currentLike:!1}},methods:{toLike(){this.currentLike=!this.currentLike,!0===this.currentLike?this.blogDetail.likes+=1:this.blogDetail.likes-=1},toUserCenter(t){this.$router.push({name:"userCenter",params:{username:t}})}},async mounted(){const t=await(0,l.lK)({id:this.id});this.blogDetail=t.blogDetail;const i=await(0,l.fT)({username:this.blogDetail.username,blogId:this.blogDetail.id});this.isLike=i.isLike,this.currentLike=this.isLike},beforeDestroy(){this.currentLike!==this.isLike&&(0,l.V7)({isLike:this.currentLike,username:this.blogDetail.username,blogId:this.blogDetail.id}),(0,l.q4)({blogId:this.blogDetail.id})}},n=r,o=e(5471),c=(0,o.Z)(n,s,a,!1,null,null,null),u=c.exports},458:function(t,i,e){t.exports=e.p+"img/like.cab24965.svg"},9662:function(t,i,e){t.exports=e.p+"img/notLike.c13a33fb.svg"},4987:function(t,i,e){t.exports=e.p+"img/view.16850d8e.svg"}}]);
//# sourceMappingURL=150.dd3d3e0c.js.map