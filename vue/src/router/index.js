import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import listDetail from '@/components/listDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/listDetail',
      name: 'Detail',
      component: listDetail
    }
  ]
})
