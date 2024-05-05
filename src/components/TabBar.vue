<template>
  <nav class="page-tab">
    <button
      v-for="tab in props.tabs"
      @click="selected = tab"
      class="tab"
      :class="{ active: isActive(tab) }"
    >
      {{ tab }}
    </button>
</nav>
</template>

<script setup>
  import { ref, computed } from 'vue'

  const props = defineProps({
    tabs: Array,
  })

  const selected = defineModel()

  function isActive(tabName) {
    return tabName == selected.value
  }
</script>

<style scoped>
</style>