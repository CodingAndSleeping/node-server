"use strict";(self["webpackChunkmy_blog"]=self["webpackChunkmy_blog"]||[]).push([[813],{8813:function(e,t,l){l.r(t),l.d(t,{default:function(){return m}});var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"blog"},[l("h1",[e._v("添加博客")]),l("div",{staticClass:"title"},[l("label",[e._v("博客标题")]),l("input",{directives:[{name:"model",rawName:"v-model",value:e.blog.title,expression:"blog.title"}],attrs:{type:"text"},domProps:{value:e.blog.title},on:{input:function(t){t.target.composing||e.$set(e.blog,"title",t.target.value)}}})]),l("div",{staticClass:"content"},[l("label",[e._v("博客内容")]),l("div",{staticClass:"editor"},[l("mavon-editor",{attrs:{scrollStyle:!0,ishljs:!0},on:{change:e.change,imgAdd:e.imgAdd,imgDel:e.imgDel},model:{value:e.mavonValue,callback:function(t){e.mavonValue=t},expression:"mavonValue"}})],1)]),l("div",{staticClass:"label"},[l("label",[e._v("添加标签:")]),l("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.blog.labels,callback:function(t){e.$set(e.blog,"labels",t)},expression:"blog.labels"}},e._l(e.options,(function(e){return l("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})})),1)],1),l("el-button",{attrs:{type:"primary"},on:{click:e.submitBlog}},[e._v("提交")])],1)},a=[],o=l(4315);const i=e=>{let t=e.getFullYear(),l=e.getMonth()+1,s=e.getDate(),a=e.getHours(),o=e.getMinutes(),i=e.getSeconds();return l>=1&&l<=9&&(l="0"+l),s>=0&&s<=9&&(s="0"+s),a>=0&&a<=9&&(a="0"+a),o>=0&&o<=9&&(o="0"+o),i>=0&&i<=9&&(i="0"+i),t+"-"+l+"-"+s+" "+a+":"+o+":"+i};var n={name:"Blog",data(){return{mavonValue:"",blog:{title:"",content:"",labels:[],username:this.$store.state.user.username||localStorage.getItem("username"),createTime:"",pictures:[]},options:[]}},methods:{change(e){this.blog.content=e},imgAdd(e,t){const l=(new Date).getTime();this.blog.pictures.push({index:e,name:t.name,url:t.miniurl,timeStamp:l})},imgDel(e){this.blog.pictures=this.blog.pictures.filter((t=>t.name!=e[0]))},async submitBlog(){const e=new Date;this.blog.createTime=i(e);const t=await(0,o.bl)(this.blog);200===t.code?(this.$message({message:t.msg,type:"success",duration:1e3}),this.$router.push({name:"home"}),this.$destroy()):this.$message({message:t.msg,type:"error",duration:1e3})}},async created(){const e=await(0,o.g7)();this.options=e.labels}},r=n,u=l(5471),c=(0,u.Z)(r,s,a,!1,null,"00dc5e7a",null),m=c.exports}}]);
//# sourceMappingURL=813.7c3868ec.js.map