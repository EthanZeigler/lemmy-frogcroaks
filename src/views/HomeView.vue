<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="content">
    <nav class="page-tab">
      <button class="tab active" onclick="openGallery(event, 'character-design')">
        Character Design
      </button>

      <button class="tab" onclick="openGallery(event, 'illustration')">
        Illustration
      </button>
    </nav>

    <div id="character-design" class="gallery-container gallery">
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

    <div id="illustration" class="gallery-container gallery" style="display:none">

      <img src="@/assets/images/eloa-growth2.png" alt="">
      <img src="@/assets/images/eloa-growth1.png" alt="">
      <img src="@/assets/images/seviper-zangoose.png" alt="">
    </div>

  </div>
</template>
