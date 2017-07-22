import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/views/TodoList'
import TodoAdd from '@/views/TodoAdd'

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
      component: TodoAdd
    }

  ]
})
