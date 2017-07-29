import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/views/TodoList'
import TodoContent from '@/views/TodoContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/add',
      name: 'TodoAdd',
      component: TodoContent
    },
    {
      path: '/edit/:id',
      name: 'TodoEdit',
      component: TodoContent
    }

  ]
})
