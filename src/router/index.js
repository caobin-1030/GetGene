import Vue from 'vue'
import VueRouter from 'vue-router'
const Monogenic = ()=>import("../views/Monogenic.vue")
const Gene = ()=>import("../views/Gene.vue")
const Header = ()=>import("../components/Header.vue")

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {path:'/',component:Gene},
  {path:'/Monogenic',name:'Monogenic',meta:{keepAlive : true},component:Monogenic},
  {path:'/Gene',name:'Gene',meta:{keepAlive : true},component:Gene},
  {path:'/Header',name:'Header',meta:{keepAlive : true},component:Header},
]
const router = new VueRouter({
  mode: 'history',
  // base: '/sangerbox/',
  routes,scrollBehavior(to, from,savedPosition) {
    return {
      x: 0,
      y: 0,
    }
  }
})


export default router
