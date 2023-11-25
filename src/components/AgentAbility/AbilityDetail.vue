<template>
  <div
    data-aos="fade-left"
    data-aos-delay="150"
    class="mx-auto md:w-1/3 mt-6 p-2 md:p-0"
  >
    <h1 class="text-[#A8A7A7] text-2xl text-left font-semibold">
      {{ ability.slot }}
    </h1>
    <h1 class="text-[#383e3a] text-3xl text-left font-semibold my-3">
      {{ ability.displayName }}
    </h1>
    <p class="font-light text-[#A8A7A7] mb-5">
      {{ ability.description }}
    </p>
  </div>
</template>

<script setup>
defineProps(["ability"]);
</script>
