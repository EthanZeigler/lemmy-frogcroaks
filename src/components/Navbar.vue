<script setup>
import { RouterLink } from 'vue-router'
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
</script>

<template>
  <div id="sidebar">
    <nav>
      <img src="@/assets/images/logo.png" alt="">
      <RouterLink to="/" class="sidebar-button" role="button">
        Home
      </Routerlink>

      <RouterLink to="/commission" class="sidebar-button" role="button">
        Commission
      </RouterLink>

      <RouterLink to="/about" class="sidebar-button" role="button">
        About & Contact
      </RouterLink>
    </nav>
  </div>
</template>

<!-- <style scoped lang="scss">
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style> -->
