import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/views/test'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'link',
  routes: [
	{
      path: '/',
      redirect: '/test'
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
