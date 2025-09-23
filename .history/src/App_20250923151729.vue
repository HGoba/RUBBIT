
<script setup>
</script>

<template>
  <!-- 一级路由出口组件 -->
  <RouterView />
  <div class="test">test css</div>
</template>

<style scoped lang="scss">
/* 这里写组件内的样式 */
</style>

<!-- 添加一个全局样式块 -->
<style lang="scss">
/* 全局样式 */
.app-header {
  overflow: hidden; /* 清除内部浮动 */
  width: 100%;
}

/* 或者 */
.app-header::after {
  content: "";
  display: table;
  clear: both;
}
</style>
