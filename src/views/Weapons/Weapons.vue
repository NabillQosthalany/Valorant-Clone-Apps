<script setup>
import Navbar from "../../components/Navbar/Navbar.vue";
import ButtonDropdown from "../../components/DropdownButton/DropdownButton.vue";
import { computed, onMounted, ref, watchEffect } from "vue";
import { initFlowbite } from "flowbite";
import axios from "axios";
import WeaponsContent from "../../components/WeaponsContent/WeaponsContent.vue";
import { useRouter } from "vue-router";
import Loading from "../../components/Loading/Loading.vue";
import SearchBar from "../../components/SearchBar/SearchBar.vue";

const isOpen = ref(false);
const Weapons = ref([]);
const showDescriptionIndex = ref(false);
const showLoading = ref(true);
const searchData = ref("");
const router = useRouter();

const items = [
  { text: "ALL WEAPONS" },
  { text: "HEAVY" },
  { text: "SIDEARM" },
  { text: "SNIPER" },
  { text: "SMG" },
  { text: "RIFLE" },
  { text: "MELEE" },
];
const selectedCategory = ref("ALL WEAPONS");

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const searchDataItem = computed(() => {
  return Weapons.value.filter((item) => {
    return item.displayName
      .toLowerCase()
      .includes(searchData.value.toLowerCase());
  });
});

const showDescription = (index) => {
  showDescriptionIndex.value = index;
};
const hideDescription = () => {
  showDescriptionIndex.value = false;
};

const navigateToDetails = (uuid) => {
  router.push({ to: "/Weapons/", params: { uuid } });
};

const fetchWeapons = async () => {
  try {
    const result = await axios.get("https://valorant-api.com/v1/weapons");
    Weapons.value = result.data.data;
  } catch (error) {
    console.log(error);
  }
};

const selectCategory = (item) => {
  selectedCategory.value = item.text;
  isOpen.value = false;
};

onMounted(() => {
  setTimeout(() => {
    showLoading.value = false;
  }, 4000);
  initFlowbite();
  fetchWeapons();
});
</script>
<template>
  <section>
    <Loading v-if="showLoading" text="Loading Valorant Weapons..." />
    <div v-if="!showLoading">
      <Navbar :is-actived="true" />
      <div class="mt-32 flex justify-center content-center">
        <div
          class="border border-[#bdbcb7] flex flex-col md:flex-row justify-center p-10"
        >
          <h1 class="md:mr-72 text-[#0f1923] text-6xl font-bold font-body">
            Choose your weapons
          </h1>
          <ButtonDropdown
            :items="items"
            @toggle-dropdown="toggleDropdown"
            :is-open="isOpen"
            :selected-category="selectedCategory"
            @select-category="selectCategory"
          />
        </div>
      </div>
      <SearchBar v-model="searchData" />
      <WeaponsContent
        v-if="searchDataItem.length > 0"
        :Weapons="searchDataItem"
        @show-description="showDescription"
        @hide-description="hideDescription"
        :showDescriptionIndex="showDescriptionIndex"
        @navigate-to-details="navigateToDetails(uuid)"
      />
      <h1 v-else class="text-red-500 text-center font-bold text-2xl mt-10">
        Data Not Found
      </h1>
    </div>
  </section>
</template>
 
<style scoped>
h1 {
  font-family: "Tungsten-Bold";
}
</style>