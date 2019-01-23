<template>
    <div>
        <slider></slider>
        <list :list='list' :dataName="'home'"></list>
    </div>
</template>

<script>
import slider from './slider'
import list from './list'
let top = 0;
export default {
    destroyed(){
        top=document.documentElement.scrollTop
    },
    updated(){
        setTimeout(()=>{//animation-duration: 1s;
            document.documentElement.scrollTop=top;
        },1000)
    },
    data(){
        return{
            list:[],
        }
    },
    mounted(){
        this.$http({
            url:'/data/index.data'
        }).then(
            res=>this.list = res.data
        )
    },
    components:{slider,list}
}
</script>
