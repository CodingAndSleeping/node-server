"use strict";(self["webpackChunkmy_blog"]=self["webpackChunkmy_blog"]||[]).push([[687],{83687:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",staticClass:"login-container",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"100px"}},[r("h3",{staticClass:"login-title"},[e._v("登录")]),r("el-form-item",{staticClass:"username",attrs:{label:"用户名","label-width":"80px",prop:"username"}},[r("el-input",{attrs:{type:"input","auto-complete":"off",placeholder:"请输入账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"密码","label-width":"80px",prop:"password"}},[r("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",{staticClass:"login_submit"},[r("el-button",{staticClass:"login_submit",attrs:{type:"primary"},on:{click:e.loginSubmit}},[e._v("登录")]),r("router-link",{staticClass:"to_register",attrs:{to:"/register"}},[e._v("没有账号？点击注册")])],1)],1)},o=[],a=r(76737),n=r(71939),l=r(14797),i={name:"Login",data:function(){return{form:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{loginSubmit:function(){var e=this;return(0,n.Z)((0,a.Z)().mark((function t(){var r;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,l.x4)(e.form);case 2:r=t.sent,200!==r.code?e.$message.error("用户名或密码错误!"):(e.$store.commit("setToken",r.token),e.$store.commit("setAvater",r.avater),e.$store.commit("setId",r.id),e.$store.commit("setUsername",e.form.username),e.$router.push({name:"home"}));case 4:case"end":return t.stop()}}),t)})))()}}},m=i,u=r(35471),c=(0,u.Z)(m,s,o,!1,null,"a08c1916",null),p=c.exports}}]);
//# sourceMappingURL=687-legacy.3ba2dc2b.js.map