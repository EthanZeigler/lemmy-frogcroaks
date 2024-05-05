<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import TabBar from '@/components/TabBar.vue'
import { ref } from 'vue'

const selectedTab = ref("Character Design")
const tabs = ["Character Design", "Illustration"]
</script>

<template>
    <TabBar v-model="selectedTab" :tabs="tabs"></TabBar>

    <div v-if="selectedTab == 'Character Design'" id="character-design" class="gallery-container gallery">
      <a href="images/poufdesign1.png" data-lightbox="gallery">
        <img src="@/assets/images/poufdesign1.png" alt="">
      </a>

      <a href="images/poufdesign2.png" data-lightbox="gallery">
        <img src="@/assets/images/poufdesign2.png" alt="">
      </a>

      <a href="images/poufdesign3.png" data-lightbox="gallery">
        <img src="@/assets/images/poufdesign3.png" alt="">
      </a>

      <a href="images/fairy-ring.png" data-lightbox="gallery">
        <img src="@/assets/images/fairy-ring.png" alt="">
      </a>

      <a href="images/luminae.png" data-lightbox="gallery">
        <img src="@/assets/images/luminae.png" alt="">
      </a>

      <a href="images/griffoy.png" data-lightbox="gallery">
        <img src="@/assets/images/griffoy.png" alt="">
      </a>

      <a href="images/pokemon.png" data-lightbox="gallery">
        <img src="@/assets/images/pokemon.png" alt="">
      </a>

    </div>

    <div v-if="selectedTab == 'Illustration'" id="illustration" class="gallery-container gallery">
      <img src="@/assets/images/eloa-growth2.png" alt="">
      <img src="@/assets/images/eloa-growth1.png" alt="">
      <img src="@/assets/images/seviper-zangoose.png" alt="">
    </div>

</template>
