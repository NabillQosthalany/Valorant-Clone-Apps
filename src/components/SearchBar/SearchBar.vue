<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  value: String,
});
const emit = defineEmits();
const inputValue = ref(props.value);

watch(inputValue, (newValue) => {
  emit("update:modelValue", newValue);
});
</script>
<template >
  <div class="a-14 w-50% flex justify-center mt-10">
    <form>
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          placeholder="Search Weapons"
          required
          v-model="inputValue"
        />
      </div>
    </form>
  </div>
</template>

