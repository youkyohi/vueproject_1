import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from './components/home';
const follow = () => import('./components/follow')
const column = () => import('./components/column')
const user = () => import('./components/user')
const login = () => import('./components/login')
const reg = () => import('./components/reg')
const detail = () => import('./components/detail')
import error from './components/error';

const routes = [
  {path:'/home',component:home},
  {path:'/follow',component:follow},
  {path:'/column',component:column},
  {path:'/user',component:user},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/detail/:id',component:detail,name:'detail'},
  {path:'/',redirect:'/home'},
  {path:'*',component:error},
]

export default new Router({
  routes,
  // scrollBehavior(to,from,savedPosition){
  //   return {x:0,y:0}
  // }
})
