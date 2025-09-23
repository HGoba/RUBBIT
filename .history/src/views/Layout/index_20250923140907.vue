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
<style scoped>
</style>
<!--.main {
  padding-top: 100px;
}-->