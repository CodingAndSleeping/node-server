"use strict";(self["webpackChunkmy_blog"]=self["webpackChunkmy_blog"]||[]).push([[163],{8163:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"userCenter"},[s("div",{staticClass:"userDetail"},[s("img",{attrs:{src:t.avater},on:{click:function(e){t.dialogFormVisible=!t.dialogFormVisible}}}),s("div",[s("span",{staticClass:"name"},[t._v(t._s(t.username))]),s("div",[s("span",[t._v(t._s(null==t.viewsTotal?0:t.viewsTotal)+"被访问")]),s("span",[t._v(t._s(t.total)+"原创")]),s("span",[t._v(t._s(null==t.likesTotal?0:t.likesTotal)+"点赞")])])])]),s("div",{staticClass:"blog_list"},[s("ul",t._l(t.blogs,(function(e){return s("li",{key:e.id},[s("h3",{directives:[{name:"titleRainbow",rawName:"v-titleRainbow"}],staticClass:"title",on:{click:function(a){return t.toBlogDetail(e.id)}}},[t._v(" "+t._s(e.title)+" ")]),s("div",{staticClass:"body"},[s("span",{staticClass:"time"},[t._v(t._s(e.createTime))]),t.isAuthor?s("div",[s("el-button",{attrs:{type:"text"},on:{click:function(a){return t.updateBlog(e.id)}}},[s("span",{staticClass:"modify"},[t._v("修改")])]),s("el-button",{attrs:{type:"text"},on:{click:function(a){return t.deleteBlog(e.id)}}},[s("span",{staticClass:"delete"},[t._v("删除")])])],1):t._e()]),s("div",{staticClass:"content",on:{click:function(a){return t.toBlogDetail(e.id)}}},[t._v(" "+t._s(e.content)+" ")]),s("div",{staticClass:"bottom"},[s("div",{staticClass:"label"},t._l(e.labels,(function(e,a){return s("span",{key:a},[t._v(t._s(e))])})),0),s("div",{staticClass:"record"},[s("div",[s("img",{attrs:{src:a(9662)}}),s("span",[t._v(t._s(e.likes))])]),s("div",[s("img",{attrs:{src:a(4987)}}),s("span",[t._v(t._s(e.views))])])])])])})),0)]),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.currentPage,"page-size":5},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}}),s("el-dialog",{attrs:{visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[s("el-form",[s("el-form-item",{attrs:{"label-width":"120px"}},[t._v(" 上传头像： "),s("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.url,"list-type":"picture-card",name:"img",headers:t.headers,data:t.data,"show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.avater?s("img",{staticClass:"avatar",attrs:{src:t.avater}}):s("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)],1)],1)},i=[],r=a(4315),l={name:"UserCenter",data(){return{currentPage:1,total:0,username:this.$route.params.username,isAuthor:this.$store.state.user.username==this.$route.params.username||localStorage.getItem("username")==this.$route.params.username,blogs:[],viewsTotal:0,likesTotal:0,avater:"",dialogFormVisible:!1,url:"http://localhost:3000/upLoadAvater",headers:{token:this.$store.state.user.token||localStorage.getItem("token")},data:{username:this.$route.params.username}}},methods:{async handleCurrentChange(t){const e=await(0,r.yp)({username:this.username,page:t});this.blogs=e.blogs,this.total=e.total,this.viewsTotal=e.viewsTotal,this.likesTotal=e.likesTotal},handleAvatarSuccess(t){this.avater=t.imgUrl,this.$store.commit("setAvater",t.imgUrl),this.dialogFormVisible=!this.dialogFormVisible,this.$router.go(0)},beforeAvatarUpload(t){const e="image/jpeg"===t.type,a="image/png"===t.type,s=t.size/1024/1024/1024<3;return e||a||this.$message.error`在这里插入代码片`("上传头像图片只能是 JPG 格式或 png 格式!"),s||this.$message.error("上传头像图片大小不能超过 3MB!"),e&&s},toBlogDetail(t){this.$router.push({name:"blogDetail",params:{id:t}})},deleteBlog(t){this.$confirm("此操作将永久删除该博客, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{const e=await(0,r.X4)({id:t});this.$message({type:"success",message:e.msg}),this.$router.go(0)})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},updateBlog(t){this.$router.push({name:"updateBlog",params:{id:t}})}},async mounted(){const t=await(0,r.yp)({username:this.username});this.blogs=t.blogs,this.total=t.total,this.viewsTotal=t.viewsTotal,this.likesTotal=t.likesTotal;const e=await(0,r.o0)({username:this.username});this.avater=e.avater}},o=l,n=a(5471),u=(0,n.Z)(o,s,i,!1,null,"5328749e",null),c=u.exports},9662:function(t,e,a){t.exports=a.p+"img/notLike.c13a33fb.svg"},4987:function(t,e,a){t.exports=a.p+"img/view.16850d8e.svg"}}]);
//# sourceMappingURL=163.dd2f5410.js.map