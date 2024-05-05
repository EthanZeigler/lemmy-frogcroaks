<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue"

</script>

<template>
  <main class="page">
    <Navbar />
    <RouterView />
  </main>
</template>

<style scoped>
</style>
