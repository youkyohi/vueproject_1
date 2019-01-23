<template>
<div class="app-login-content">
  <p class="fhbtn"><a href="#" onclick="window.history.go(-1)"></a></p>
  <h1></h1>
  <div class="login-box">
    <p class="lsolid"></p>
    <div class="login">
      <router-link to="/login">登录</router-link>
      <span></span>
      <router-link to="/reg">注册</router-link>
    </div>
    <p class="rsolid"></p>
  </div>
  <ul>
    <li class="lifirst">
      <input type="text" value="" v-model="username"/>
      <span>帐号</span>
    </li>
    <li>
      <input type="text" value="" v-model="password"/>
      <span>密码</span>
    </li>
  </ul>
  <div class="footbox">
    <input type="button" value="登 录" class="login-btn" @click="checkLogin"/>
    <a href="javascript:;" class="tishi">忘记密码？</a>
  </div>
</div>
</template>

<script>
import * as types from '../store/types'
export default {
  data(){
    return{
      username:'alex',
      password:'alex123'
    }
  },
  methods:{
    checkLogin(){
      //this.$store.dispatch({type:类型,负载key:value}) ->actions:payload.key
      this.$store.dispatch({
        type:types.CHECK_USER,
        username:this.username,
        password:this.password
      }).then(
        (auth)=>{//actions返回的res结果
          if(auth){
            //可通过res.data.time判断自动登陆是否过期
            this.$router.push('/user')
          }else{
          //路由编程跳转
           this.$router.push('/error')
          }
        }
      )
    }
  }
}
</script>


<style>
    body{ background:#f2f4f5;}
    .app-login-content{max-width:6.4rem; margin:0 auto;}
    .app-login-content .fhbtn{ padding-top:0.27rem;}
    .app-login-content .fhbtn a{ display:block;width:0.23rem;height:0.25rem; background:url(../assets/img/history1.png) no-repeat 0 0; background-size:100%; margin-left:0.3rem;}
    .app-login-content h1{width:2.18rem;height:1.35rem; background:url(../assets/img/say.png) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:1.22rem;}
    .app-login-content .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.85rem;}
    .login a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
    .login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
    .app-login-content .login-box{ position:relative;}
    .app-login-content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
    .app-login-content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
    .app-login-content ul{width:5.78rem;height:1.92rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
    .app-login-content ul li{height:0.95rem; position:relative;}
    .app-login-content ul li.lifirst{border-bottom:1px solid #e5e7e8;}
    .app-login-content ul li input{ padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem;}
    .app-login-content ul li span{width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;}
    .app-login-content .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
    .app-login-content .login-btn{width:4.65rem;height:0.65rem; background:#4c4f50; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
    .app-login-content .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
  </style>
