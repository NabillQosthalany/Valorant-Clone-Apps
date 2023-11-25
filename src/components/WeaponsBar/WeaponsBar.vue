<script setup>
import { computed } from "vue";

const props = defineProps([
  "WeaponsData",
  "indexFirst",
  "maxValue",
  "label",
  "maxHeadDamage",
  "maxBodyDamage",
]);
const valuePercentage = computed(() => {
  return (props.WeaponsData / props.maxValue) * 45;
});
</script>

<template>
  <div>
    <div v-if="WeaponsData" class="text-white">
      <div class="mb-1 text-base font-medium dark:text-white">
        {{ label }} : {{ WeaponsData }}
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div
          class="bg-red-600 h-2.5 rounded-full"
          :style="{ width: valuePercentage + '%' }"
        ></div>
      </div>
    </div>
    <div v-if="indexFirst" class="text-white">
      <div class="mb-1 text-base font-medium">
        {{ label }} : {{ indexFirst }}
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div
          class="bg-red-600 h-2.5 rounded-full overflow-hidden"
          :class="{ 'max-w-3xl': valuePercentage >= 100 }"
          :style="{ width: valuePercentage + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>

