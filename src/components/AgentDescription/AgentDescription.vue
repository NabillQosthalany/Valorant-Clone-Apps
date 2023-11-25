<script setup>
defineProps({
  selectedAgent: {
    type: String,
  },
});
</script>
<template>
  <div class="hidden md:block">
    <div
      class="mt-5 w-56 overflow-hidden absolute top-1/3 right-0 transform mr-[200px]"
    >
      <h1 v-if="selectedAgent" class="text-white uppercase">//Role</h1>
      <Transition name="slide-fade" mode="out-in">
        <div v-if="selectedAgent" :key="selectedAgent">
          <h1
            data-aos="fade-up"
            v-if="selectedAgent"
            class="text-white text-4xl font-semibold flex items-center"
          >
            {{ selectedAgent.role.displayName }}
            <img
              class="w-6 ml-2 mb-5"
              :src="selectedAgent.role.displayIcon"
              alt=""
            />
          </h1>
        </div>
      </Transition>
    </div>
    <div class="absolute top-1/2 w-90 right-0 transform mr-[200px]">
      <h1 v-if="selectedAgent" class="text-white uppercase">//Biography</h1>
      <Transition name="slide-fade" mode="out-in">
        <div v-if="selectedAgent" :key="selectedAgent">
          <p
            data-aos="fade-up"
            v-if="selectedAgent"
            class="text-white text-sm font-semibold w-56"
          >
            {{ selectedAgent.description }}
          </p>
        </div>
      </Transition>
    </div>
  </div>
</template>