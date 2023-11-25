<script setup>
import { ref, defineProps } from "vue";

const isOpen = ref(false);
let timeoutId;
defineProps(["buttonLabel", "items"]);

const toggleDropdown = () => {
  clearTimeout(timeoutId);
  isOpen.value = true;
};

const closeDropdown = () => {
  timeoutId = setTimeout(() => {
    isOpen.value = false;
  }, 50);
};
</script>
<template>
  <li>
    <div
      @mouseenter="toggleDropdown"
      @mouseleave="closeDropdown"
      class="relative md:p-2 rounded-lg hover:bg-[#505050]"
    >
      <button
        class="flex items-center justify-between w-full py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white"
      >
        {{ buttonLabel }}
        <svg
          class="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        v-show="isOpen"
        @mouseenter="toggleDropdown"
        @mouseleave="closeDropdown"
        class="border-t-4 border-[#ff4655] absolute right-0 mt-5 w-44 bg-[#505050] shadow-lg"
      >
        <ul>
          <li
            v-for="(item, index) in items"
            :key="index"
            class="block p-5 text-sm text-gray-300 hover:text-white cursor-pointer"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>


