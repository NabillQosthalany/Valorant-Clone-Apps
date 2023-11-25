<script setup>
import Dropdown from "./Dropdown.vue";
import { computed, defineProps } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();

const showLink = computed(() => {
  return router.path != "/";
});

defineProps({
  items: {
    type: Array,
  },
  dropdowns: {
    type: Array,
  },
  ourSocials: {
    type: Array,
  },
  isActived: {
    type: Boolean,
  },
});
</script>
<template>
  <div>
    <ul
      v-if="!showLink"
      class="bg-[#111111] flex flex-col lg:items-center p-4 md:p-0 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
    >
      <Dropdown
        v-for="(dropdown, index) in dropdowns"
        :key="index"
        :buttonLabel="dropdown.buttonLabel"
        :items="dropdown.items"
      />
      <li v-for="(item, index) in items" :key="index">
        <a
          href="#"
          class="block py-2 px-3 text-white rounded md:bg-transparent border-b-4 md:hover:border-[#ff4655] border-transparent"
          aria-current="page"
          >{{ item.title }}</a
        >
      </li>
      <Dropdown
        v-for="(dropdown, index) in ourSocials"
        :key="index"
        :buttonLabel="dropdown.buttonLabel"
        :items="dropdown.items"
      />
    </ul>
    <li
      v-if="showLink"
      class="flex flex-col p-4 md:p-0 mt-4 mr-28 font-semibold border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
    >
      <router-link
        to="/"
        class="text-white border-b-4 md:hover:border-[#ff4655] border-transparent"
      >
        HOME
      </router-link>
      <router-link
        to="/Agent"
        :class="{
          'text-red-500': router.path === '/Agent',
          'text-white': router.path !== '/Agent',
        }"
        class="border-b-4 md:hover:border-[#ff4655] border-transparent"
      >
        AGENTS
      </router-link>
      <router-link
        to="/Weapons"
        class="border-b-4 md:hover:border-[#ff4655] border-transparent"
        :class="{
          'text-red-500': router.path === '/Weapons',
          'text-white': router.path !== '/Weapons',
        }"
      >
        WEAPONS
      </router-link>
    </li>
  </div>
</template>
