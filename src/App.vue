<template>
  <div>
    <loading v-show="bLoading"></loading>
    <navbar v-show="bNav"></navbar>
    <transition
      enter-active-class="animated fadeIn"
    >
      <router-view></router-view>
    </transition>
    <footbar v-show="bFoot"></footbar>
  </div>
</template>

<script>
import navbar from './components/navbar'
import footbar from './components/footbar'
import {mapGetters} from 'vuex';
import * as types from './store/types'

export default {
  name:'app',
  components:{navbar,footbar},
  computed:mapGetters([
    'bNav','bFoot','bLoading'
  ]),
  watch:{
    $route:{
      handler:function(to){
        let path = to.path;
        if(/home|follow|column/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,true);
          this.$store.dispatch(types.VIEW_FOOT,true);
        }
        if(/detail|login|reg|error/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false);
          this.$store.dispatch(types.VIEW_FOOT,false);
        }
        if(/user/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false);
          this.$store.dispatch(types.VIEW_FOOT,true)
        }
      }
    }
  },
  mounted(){
    //同步cookie到store，解决强刷影响。
  }
}
</script>

