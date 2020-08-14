import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sayHi from '@/components/sayHi'
import hello from '@/components/hello'
import ciao from '@/components/ciao'
import multiPage from '@/components/multiPage'
import urlParams from '@/components/urlParams'
import error from '@/components/error'

Vue.use(Router)

export default new Router({
  mode: "history",  //消除url中的#号
  routes: [
    {
      path: '*',
      component: error
    },
    {
      path: '/',
      name: 'HelloWorld',   //模板参数传递, 通过name选项, 少用
      components: {
        default: HelloWorld,
        left: hello,
        right: ciao
      },
      alias: '/home'
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goParams/:param1/:param2',
      redirect: '/urlParams/:param1/:param2'
    },
    {
      path: '/urlParams/:param1/:param2',
      name: 'urlParams',
      component: urlParams
    },
    {
      path: '/multiPage',
      name: 'multiPage',   //单页面多路由
      components: {
        default: multiPage,
        left: ciao,
        right: ciao
      }
    },
    {
      path: '/sayHi',
      component: sayHi,
      children: [
        {path: '/',name:'hi',component: sayHi},   //sayHi can be called itself
        {path: 'hello', name: '/sayHi/hello',component: hello},  //it's nest page don't use '/'
        {path: 'ciao', name:'/sayHi/ciao',component: ciao}
      ]
    }
  ]
})
