"use strict";(self["webpackChunkmy_blog"]=self["webpackChunkmy_blog"]||[]).push([[687],{3687:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-form",{ref:"form",staticClass:"login-container",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"100px"}},[s("h3",{staticClass:"login-title"},[e._v("登录")]),s("el-form-item",{staticClass:"username",attrs:{label:"用户名","label-width":"80px",prop:"username"}},[s("el-input",{attrs:{type:"input","auto-complete":"off",placeholder:"请输入账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),s("el-form-item",{attrs:{label:"密码","label-width":"80px",prop:"password"}},[s("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),s("el-form-item",{staticClass:"login_submit"},[s("el-button",{staticClass:"login_submit",attrs:{type:"primary"},on:{click:e.loginSubmit}},[e._v("登录")]),s("router-link",{staticClass:"to_register",attrs:{to:"/register"}},[e._v("没有账号？点击注册")])],1)],1)},o=[],a=s(4315),l={name:"Login",data(){return{form:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{async loginSubmit(){const e=await(0,a.x4)(this.form);200!==e.code?this.$message.error("用户名或密码错误!"):(this.$store.commit("setToken",e.token),this.$store.commit("setAvater",e.avater),this.$store.commit("setId",e.id),this.$store.commit("setUsername",this.form.username),this.$router.push({name:"home"}))}}},i=l,m=s(5471),n=(0,m.Z)(i,r,o,!1,null,"a08c1916",null),u=n.exports}}]);
//# sourceMappingURL=687.6ba3c1e2.js.map