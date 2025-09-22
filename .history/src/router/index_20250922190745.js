// createRouter 创建路由实例
// createWebHistory 创建基于history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/Login/index.vue'
import layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component的对应关系的位置
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: '/home',
          component: Home,
        },
        {
          path: '/category',
          component: Category,
        }
      ]
    },
    {
      path: '/login',
      component: login,
    }

  ],
})

export default router
