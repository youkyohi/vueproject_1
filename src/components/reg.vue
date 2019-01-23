<template>
<div class="app-reg-content">
  <p class="fhbtn"><a href="javascript:window.history.go(-1);"></a></p>
  <h1></h1>
  <div class="login-box">
    <p class="lsolid"></p>
    <div class="app-reg-login">
      <router-link to="/login">登录</router-link>
      <span></span>
      <router-link to="/reg">注册</router-link>
    </div>
    <p class="rsolid"></p>
  </div>
  <ul>
    <li class="lifirst">
      <input type="text" value=""/>
      <span>帐号</span>
    </li>
    <li>
      <input type="text" value=""/>
      <span>密码</span>
    </li>
  </ul>
  <div class="footbox">
    <input type="button" value="注 册" class="login-btn"/>
    <a href="javascript:;" class="tishi">忘记密码？</a>
  </div>
</div>
</template>

<style>
body{ background:#f2f4f5;}
.app-reg-content{max-width:6.4rem; margin:0 auto;}
.app-reg-content .fhbtn{ padding-top:0.27rem;}
.app-reg-content .fhbtn a{ display:block;width:0.23rem;height:0.25rem; background:url(../assets/img/history1.png) no-repeat 0 0; background-size:100%; margin-left:0.3rem;}
.app-reg-content h1{width:2.18rem;height:1.35rem; background:url(../assets/img/my_cz.png) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:1.22rem;}
.app-reg-content .app-reg-login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.85rem;}
.app-reg-login a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
.app-reg-login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
.app-reg-content .login-box{ position:relative;}
.app-reg-content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
.app-reg-content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
.app-reg-content ul{width:5.78rem;height:1.92rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
.app-reg-content ul li{height:0.95rem; position:relative;}
.app-reg-content ul li.lifirst{border-bottom:1px solid #e5e7e8;}
.app-reg-content ul li input{ padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem;}
.app-reg-content ul li span{width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;}
.app-reg-content .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
.app-reg-content .login-btn{width:4.65rem;height:0.65rem; background:#4c4f50; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
.app-reg-content .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
</style>
