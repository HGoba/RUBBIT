<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
</script>
<template>
  <div class="layout">
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <main class="main">
      <RouterView />
    </main>
    <LayoutFooter />
  </div>
</template>
