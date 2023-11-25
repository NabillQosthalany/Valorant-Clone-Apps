<script setup>
defineProps({
  items: {
    type: Array,
  },
  isOpen: {
    type: Boolean,
  },
  selectedCategory: {
    type: String,
  },
});

const emit = defineEmits();

const toggleDropdown = () => {
  emit("toggleDropdown");
};
const selectCategory = (item) => {
  emit("selectCategory", item);
};
</script>

<template >
  <div class="h-10 flex justify-center">
    <button
      @click="toggleDropdown"
      id="dropdownDefaultButton"
      data-dropdown-toggle="dropdown"
      class="h-full relative mt-4 flex btn-custom text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dropdown-btn"
      type="button"
    >
      <svg
        class="w-4 h-4 ms-3 absolute right-4 top-1/3 transform transition-transform duration-300"
        :class="{ '-rotate-90': isOpen, 'rotate-90': !isOpen }"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="m6.3 3 3.6 3.5m4.5 3.5-8.2 7"
          fill="none"
          stroke="black"
          pathLength="1"
        ></path>
      </svg>
      <span class="underlay">
        <span class="label text-black text-start mt-1">{{
          selectedCategory
        }}</span>
      </span>
    </button>
    <div
      id="dropdown"
      class="w-[195px] z-10 h-36 hidden bg-[#EEEEEE] divide-y divide-gray-100 border-r border-b border-l border-[#bdbcb7] overflow-y-auto"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li v-for="(item, index) in items" :key="index">
          <a
            @click="selectCategory(item)"
            href="#"
            class="text-black block px-4 py-2 hover:bg-gray-900 hover:text-white"
            >{{ item.text }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.dropdown-btn {
  text-transform: uppercase;
  text-decoration: none;
  border: 0;
  display: inline-block;
  padding: 0;
  position: relative;
  color: #fff;
  font-weight: 600;
  background: none;
}
.dropdown-btn:before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  padding: 5px;

  box-sizing: content-box;
  border: 1px solid rgb(107 114 128 / var(--tw-border-opacity));
  border-bottom: none;
  height: 20%;
  transform: translateY(-10px) translateX(-50%);
  transition: all 0.4s;
  display: block;
}
.dropdown-btn:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  padding: 5px;
  box-sizing: content-box;
  border: 1px solid rgb(107 114 128 / var(--tw-border-opacity));
  border-top: none;
  height: 20%;
  transform: translateY(10px) translateX(-50%);
  transition: all 0.4s;
  display: block;
}

.dropdown-btn .label {
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px 60px 10px 10px;
  box-sizing: border-box;
  position: relative;
  z-index: 20;
  line-height: 1;
}
</style>