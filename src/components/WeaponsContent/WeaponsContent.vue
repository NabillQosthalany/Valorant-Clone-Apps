<script setup>
defineProps(["Weapons", "showDescriptionIndex", "searchDataItem"]);

const emit = defineEmits();

const showDescription = (index) => {
  emit("showDescription", index);
};

const navigateToDetails = (uuid) => {
  emit("navigateToDetails", uuid);
};

const hideDescription = () => {
  emit("hideDescription");
};
</script>
<template>
  <div class="border border-[#bdbcb7] mt-10 mx-5">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div
        data-aos="fade-up"
        v-for="(weapon, index) in Weapons"
        :key="index"
        class="mx-auto border border-[#bdbcb7] my-5 h-auto relative overflow-hidden transition-transform transform duration-300"
        @mouseover="showDescription(index)"
        @mouseleave="hideDescription(index)"
      >
        <h1 class="z-50 text-5xl font-bold p-2">{{ weapon.displayName }}.</h1>
        <div>
          <img
            class="w-[500px] h-48 object-contain"
            :src="weapon.displayIcon"
            alt=""
          />
        </div>
        <div
          v-if="showDescriptionIndex === index"
          class="absolute inset-0 weapons-card"
        >
          <div class="underlay">
            <div class="z-40 relative">
              <h1 class="text-5xl font-bold p-1 text-white">
                {{ weapon.displayName }}.
              </h1>
              <h1 class="text-3xl font-medium pt-2 pl-2 text-white">
                category :
                {{ weapon.shopData?.category ? weapon.shopData.category : "-" }}
              </h1>
              <h1 class="text-3xl font-medium pl-2 text-white">
                Cost : {{ weapon.shopData?.cost ? weapon.shopData.cost : "-" }}
              </h1>

              <router-link class="w-full" :to="`/Weapons/${weapon.uuid}`">
                <button
                  @click="() => navigateToDetails(weapon.uuid)"
                  class="text-white border border-white bg-transparent hover:bg-white hover:text-black font-medium text-sm px-5 py-2.5 ml-2 mt-10"
                >
                  See Details
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
h1 {
  font-family: "Tungsten-Bold";
}
.weapons-card {
  font-size: 10px;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  transition: color 0.3s ease-out, border-color 0.3s ease-out;
  cursor: pointer;
}
.weapons-card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  padding: 10px;
  box-sizing: content-box;
  border-bottom: none;
  height: 20%;
  transform: translateY(-10px) translateX(-50%);
  transition: all 0.4s;
  display: block;
}
.weapons-card:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  padding: 10px;
  box-sizing: content-box;
  border: 1px solid #222;
  border-top: none;
  height: 20%;
  transform: translateY(10px) translateX(-50%);
  transition: all 0.4s;
  display: block;
}
.weapons-card .underlay {
  display: block;
  width: 100%;
  height: 100%;
  padding: 3px;
  box-sizing: border-box;
  position: relative;
  top: 0;
  left: 0;
  z-index: 5;
  overflow: hidden;
}
.weapons-card .underlay:before {
  content: "";
  display: block;
  width: 150%;
  height: 400%;
  background: #ff4654;
  padding: 0;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  transition: all 0.4s linear;
  transform: translateX(-110%) translateY(-50%) rotate(15deg);
  z-index: 10;
}
.weapons-card .underlay:after {
  content: "";
  z-index: 5;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(3px, 3px);
}
.weapons-card:hover {
  cursor: pointer;
}
.weapons-card:hover .underlay:before {
  transform: translateX(-10%) translateY(-50%) rotate(15deg);
}

.weapons-card:active:before {
  transform: translateY(-5px) translateX(-50%);
  padding: 10px 5px;
}
.weapons-card:active:after {
  transform: translateY(5px) translateX(-50%);
  padding: 10px 5px;
}
</style>

