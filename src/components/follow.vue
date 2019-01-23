<template>
    <div class="newsList">
        <list :list='list' :dataName="'follow'"></list>
    </div>
</template>

<script>
import list from './list.vue'
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
    components:{list},
    mounted(){
        this.$http({
            url:'/data/follow.data'
        }).then(
            res => this.list = res.data
        )
    }
}
</script>


<style>
.newsList{clear: both;margin-bottom:1rem;margin-top:.7rem;}
</style>
