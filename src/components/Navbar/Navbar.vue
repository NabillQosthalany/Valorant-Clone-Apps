<script setup>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";
import Navlink from "./Navlink.vue";
import RiotLogo from "../Logo/Riotlogo.vue";

onMounted(() => {
  initFlowbite();
});

const fruits = [
  { title: "MEDIA", url: "#" },
  { title: "NEWS", url: "#" },
  { title: "LEADERBOARDS", url: "#" },
];

const dropdownItems = [
  { buttonLabel: "GAME INFO", items: ["AGENTS", "MAPS", "ARSENAL", "PREMIER"] },
  { buttonLabel: "SUPPORT", items: ["SPECS", "SUPPORT", "COMMUNITY CODE"] },
];
const ourSocials = [
  {
    buttonLabel: "OUR SOCIALS",
    items: ["Twitter", "Youtube", "Instagram", "Tiktok", "Facebook", "Discord"],
  },
];

defineProps({
  isActived: {
    type: Boolean,
  },
});
</script>
<template >
  <nav class="bg-[#111111] dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6"
    >
      <RiotLogo />
      <div
        class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse z-50"
      >
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <Navlink
          :is-actived="isActived"
          :items="fruits"
          :dropdowns="dropdownItems"
          :ourSocials="ourSocials"
        />
      </div>
    </div>
  </nav>
</template>
