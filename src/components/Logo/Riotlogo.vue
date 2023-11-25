<script setup>
import { ref } from "vue";

const currentImage = ref("/images/Logo-Riot.png");
const handleHover = (value) => {
  currentImage.value = value
    ? "/images/Logo-Riot-red.png"
    : "/images/Logo-Riot.png";
};
</script>
<template>
  <div class="flex justify-center md:ml-7 cursor-pointer">
    <img
      @mouseenter="handleHover(true)"
      @mouseleave="handleHover(false)"
      class="h-10 flex align-middle"
      :src="currentImage"
      alt=""
    />
    <img
      class="ml-3 h-10 flex align-middle"
      src="/images/valorant-logo.png"
      alt=""
    />
  </div>
</template>


