<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="relative">
    <video
      class="h-screen object-cover"
      ref="videoPlayer"
      width="5040"
      autoplay
      muted
      loop
    >
      >
      <source src="/Video/Valorant-Vid-1.mp4" type="video/mp4" />
    </video>
    <div
      class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3"
    >
      <h1 class="text-white text-center md:mb-14 mb-5 text-xs md:text-lg mt-10">
        A 5v5 character-based tactical shooter
      </h1>
      <img class="md:mb-16" src="/images/Valorant-text-logo.png" alt="" />
      <div class="flex justify-center mt-5">
        <RouterLink to="/Agent" class="valorant-btn">
          <span class="underlay">
            <h1 class="label whitespace-nowrap">Get Started</h1>
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>


