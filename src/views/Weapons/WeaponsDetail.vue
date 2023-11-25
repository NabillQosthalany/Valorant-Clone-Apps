<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import WeaponsBar from "../../components/WeaponsBar/WeaponsBar.vue";
import Navbar from "../../components/Navbar/Navbar.vue";
import Loading from "../../components/Loading/Loading.vue";

const route = useRoute();

const WeaponsData = ref(null);
const indexFirst = ref(null);
const showLoading = ref(true);
const uuid = route.params.id;

const WeaponsDetails = async (uuid) => {
  try {
    const result = await axios.get(
      `https://valorant-api.com/v1/weapons/${uuid}`
    );
    WeaponsData.value = result.data.data;
    indexFirst.value = result.data.data.weaponStats.damageRanges[0];
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  setTimeout(() => {
    showLoading.value = false;
  }, 4000);
  WeaponsDetails(uuid);
});
</script>

<template>
  <section>
    <Loading v-if="showLoading" text="Weapons Comparation.... " />
    <div v-if="!showLoading">
      <Navbar />
      <video class="h-screen object-cover fixed" autoplay muted loop>
        <source src="/Video/Valorant-Vid-2.mp4" type="video/mp4" />
      </video>
      <div
        class="flex flex-col absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <router-link to="/Weapons">
          <button
            type="button"
            class="absolute hidden md:block text-white bg-red-700 hover:bg-red-800 font-medium rounded-full text-sm p-2.5 text-center items-center me-2"
          >
            <svg
              class="w-4 h-4 rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span class="sr-only">Icon description</span>
          </button>
        </router-link>
        <div class="md:w-[550px] flex flex-col w-52">
          <h1 class="text-center mb-5 text-white font-bold text-5xl">
            {{ WeaponsData?.displayName }}
          </h1>
          <img
            class="mt-5 w-64 mx-auto"
            :src="WeaponsData?.displayIcon"
            alt=""
          />
          <h1 class="text-white my-10">STATS</h1>
          <WeaponsBar
            label="Fire Rate"
            :WeaponsData="WeaponsData?.weaponStats.fireRate"
            :maxValue="100"
          />
          <WeaponsBar
            label="Magazine Size"
            :WeaponsData="WeaponsData?.weaponStats.magazineSize"
            :maxValue="100"
          />
          <WeaponsBar
            label="Reload Time"
            :WeaponsData="WeaponsData?.weaponStats.reloadTimeSeconds"
            :maxValue="100"
          />
          <WeaponsBar
            label="Head Damage"
            :WeaponsData="indexFirst?.headDamage"
            :maxValue="100"
          />
          <WeaponsBar
            label="Body Damage"
            :WeaponsData="indexFirst?.bodyDamage"
            :maxValue="100"
          />
        </div>
      </div>
    </div>
  </section>
</template>
