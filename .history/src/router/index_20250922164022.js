// createRouter 创建路由实例
// createWebHistory 创建基于history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login/index.vue'
import layout from '@/views/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component的对应关系的位置
  routes: [
    {
      path: '/',
      component: layout,
    },
    {
      path: '/',
      component: login,
    }

  ],
})

export default router
