<script setup>
import LayoutFixed from "./components/LayoutFixed.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
</script>
<template>
  <div class="layout">
    <LayoutFixed />
    <LayoutNav />
    {{ 1 }}
    <LayoutHeader />
    <main class="main">
      <RouterView />
    </main>
    <LayoutFooter />
  </div>
</template>
<style>
.main {
  padding-top: 80px; // 给 header 留出高度
}
</style>
