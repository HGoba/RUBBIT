// createRouter 创建路由实例
// createWebHistory 创建基于history模式的路由

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

  ],
})

export default router
