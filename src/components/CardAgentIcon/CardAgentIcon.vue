<script setup>
import { defineProps, defineEmits, ref } from "vue";
defineProps({
  buttonAgent: {
    type: Array,
  },
});
const activeButton = ref(null);
const emit = defineEmits();
const toggleContent = (uuid) => {
  activeButton.value = uuid;
  emit("toggleContent", uuid);
};
</script>
<template>
  <div
    class="z-10 absolute inset-2 md:inset-28 grid grid-cols-6 md:grid-cols-4 gap-6 md:w-2/12 w-2/13 h-2/6 md:ml-10 my-24 md:my-0 overflow-scroll md:overflow-visible"
  >
    <button
      v-for="(button, index) in buttonAgent"
      :key="index"
      :class="{
        'border-2 border-red-500': activeButton === button.uuid,
        '': activeButton !== button.uuid,
      }"
      @click="toggleContent(button.uuid)"
      class="mx-4 md:mx-0 w-14 h-14 text-white bg-[#D9D9D9] hover:rounded-md font-medium rounded-xl text-sm p-2.5 text-center inline-flex items-center mr-0 col-span-1"
    >
      <img :src="button.displayIcon" alt="" />
    </button>
  </div>
</template>
