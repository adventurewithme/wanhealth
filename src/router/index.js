import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import indexs from '@/components/main/index';
import Brand from '@/components/main/brand'
// import { resolve } from 'dns';


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[{
        path:'/',
        name:'Indexs',
        component: indexs
      },{
          path: '/brand',
          name: 'brand',
          component: Brand
      }]
    }
  ]
})
