<template>
    <div>
        <div class="app-detail-nav">
        <ul>
            <li class="l-btn" @click="goback"></li>
        </ul>
        </div>
        <div class="app-detail-content">
        <div class="app-detail-header clear"><h2><img :src="detail.author_face?detail.author_face:'/images/head.png'" alt=""/></h2><p>作者名字</p></div>
        <div class="app-detail-cont">
            <h3>{{detail.title}}</h3>
            <div class="time"><p>{{detail.time | date}}<span><img src="../assets/img/zan.png" alt=""/></span></p></div>
            <div class="text-box" v-html="detail.content"></div>
        </div>
        </div>
        <div class="app-detail-foot-btn">
        <ul>
            <li class="say"><a href="javascript:;">
            <i></i><span>0</span>
            </a></li>
            <li class="zan"><a href="javascript:;">
            <i></i><span>0</span>
            </a></li>
            <li class="xing"><a href="javascript:;">
            <i><img src="../assets/img/xing.png" alt=""/></i>
            </a></li>
            <li class="fx"><a href="javascript:;">
            <i><img src="../assets/img/fx.png" alt=""/></i>
            </a></li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            detail:{}
        }
    },
    methods:{
        goback(){
            this.$router.go(-1)
        }
    },
    mounted(){
        let id = this.$route.params.id - 0;
        let dataName = this.$route.query.dataName;
        this.$http({
            url:'/data/article_'+dataName +'.data'
        }).then(
            res => this.detail = res.data[id-1]
        )
    }
}
</script>


<style>
html,body{ overflow-x: hidden; }
.app-detail-nav{width:100%; position:fixed;top:0;left:0; background:#fff; border-bottom:1px solid #e8eaec; z-index:99;}
.app-detail-nav ul{width:6.4rem;height:0.45rem; padding-top:0.15rem; margin:0 auto;}
.app-detail-nav ul li{width:0.29rem;height:0.31rem; background:url(../assets/img/history.png) no-repeat 0 0; background-size:100%; margin:0 0 0 0.38rem;}

.app-detail-content{max-width:6.4rem; margin:0 auto; margin-top:0.6rem; background:#f2f4f5; padding-bottom:0.85rem;}
.app-detail-content .app-detail-header{ padding:0.39rem 0.28rem 0.15rem 0.28rem; height:auto; background: none}
.app-detail-header h2{ float:left; margin-right:0.18rem;}
.app-detail-header p{ float:left; margin-top:0.18rem; font-size:0.3rem;}

.app-detail-content .app-detail-cont{ padding:0 0.38rem; color:#494d4d;}
.app-detail-cont h3{ font-size:0.4rem; line-height:0.6rem; padding-bottom:0.25rem; border-bottom:1px solid #494d4d;}
.app-detail-cont .time{height:0.24rem; line-height:0.24rem; margin:0.26rem 0; }
.time p{ float:left;position:relative;}
.time span{width:0.33rem;height:0.32rem; position:absolute; top:-0.02rem;right:-0.35rem;}
.time span img{width:100%;height:100%;}

.app-detail-cont .text-box{ font-size:0.25rem;}
.text-box p{ line-height:0.45rem; margin-bottom:0.1rem;}
.app-detail-foot-btn{width:100%;height:0.8rem; background:#fff; border-top:1px solid #e8eaec; position:fixed; left:0;bottom:0;}
.app-detail-foot-btn ul{width:6.4rem; margin:0 auto;height:0.52rem; margin-top:0.16rem;}
.app-detail-foot-btn ul li{ float:left;}
.app-detail-foot-btn ul li a{width:100%;height:100%; display:block;}
.app-detail-foot-btn ul .say{width:2.03rem;height:0.52rem; border-right:1px solid #e8eaec;}
.say i{width:0.36rem;height:0.26rem; background:url(../assets/img/say.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.7rem; margin-top:0.13rem;}
.say span{height:0.26rem; float:left; line-height:0.26rem; margin-left:0.16rem; margin-top:0.13rem;}
.app-detail-foot-btn ul .zan{width:1.86rem;height:0.52rem; border-right:1px solid #e8eaec;}
.zan i{width:0.36rem;height:0.28rem; background:url(../assets/img/zan1.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.54rem; margin-top:0.13rem;}
.zan span{height:0.26rem; float:left; line-height:0.26rem; margin-left:0.16rem; margin-top:0.13rem;}
.app-detail-foot-btn ul .xing{width:1.2rem;height:0.52rem; border-right:1px solid #e8eaec;}
.xing i{width:0.34rem;height:0.24rem; margin:0 auto; display:block; padding-top:0.1rem;}
.xing i img{width:100%;}
.app-detail-foot-btn ul .fx{width:1.25rem;height:0.52rem;}
.fx i{width:0.33rem;height:0.08rem;display:block; margin:0 auto; padding-top:0.15rem;}
.fx i img{width:100%;}
</style>

