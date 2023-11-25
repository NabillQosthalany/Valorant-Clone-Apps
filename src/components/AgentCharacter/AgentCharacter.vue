<script setup>
import AgentDescription from "../AgentDescription/AgentDescription.vue";

defineProps({
  selectedAgent: {
    type: Array,
  },
});
</script>

<template>
  <div
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10 md:w-96 w-80"
  >
    <Transition mode="out-in">
      <div v-if="selectedAgent" :key="selectedAgent">
        <h1
          class="hidden md:block text-white text-5xl font-semibold text-center"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          {{ selectedAgent.displayName }}
        </h1>
        <img
          class="md:h-[380px] h-60 mt-40 mx-auto md:mx-0 md:mt-0"
          :src="selectedAgent.fullPortrait"
          alt=""
          data-aos="fade-left"
        />
        <p class="md:hidden text-white text-5xl font-semibold text-center">
          {{ selectedAgent.displayName }}
        </p>
      </div>
    </Transition>
  </div>
</template>
