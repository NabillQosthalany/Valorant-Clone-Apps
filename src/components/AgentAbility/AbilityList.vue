<script setup>
import AbilityDetail from "./AbilityDetail.vue";

defineProps({
  selectedAgent: {
    type: Array,
  },
  selectedAbility: {
    type: null,
  },
});
const emit = defineEmits();
const showDescription = (ability) => {
  emit("showDescription", ability);
};
</script>

<template>
  <div>
    <div v-if="selectedAgent" class="flex justify-center">
      <div
        v-if="selectedAgent && selectedAgent.abilities"
        class="flex flex-row"
      >
        <div
          v-for="(ability, index) in selectedAgent.abilities"
          :key="index"
          class="my-10 px-5"
        >
          <button
            @click="showDescription(ability)"
            class="md:w-16 md:h-16 w-12 h-12 border border-[#bdbcb7] text-white bg-[#DADADA] focus:ring-1 focus:ring-black font-medium rounded-xl text-sm text-center inline-flex items-center mr-0 ability-btn overflow-hidden"
          >
            <span class="underlay">
              <img :src="ability.displayIcon" alt="" class="relative z-10" />
            </span>
          </button>
        </div>
      </div>
    </div>
    <AbilityDetail
      v-if="selectedAbility"
      :key="selectedAbility.id"
      :ability="selectedAbility"
    />
  </div>
</template>

<style  scoped>
.ability-btn {
  font-size: 10px;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  overflow: hidden;
  position: relative;
  transition: color 0.3s ease-out, border-color 0.3s ease-out;
  cursor: pointer;
}
.ability-btn:before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  padding: 10px;
  box-sizing: content-box;
  border: 1px solid #222;
  border-bottom: none;
  height: 20%;
  transform: translateY(-10px) translateX(-50%);
  transition: all 0.4s;
  display: block;
}
.ability-btn:after {
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
.ability-btn .underlay {
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
.ability-btn .underlay:before {
  content: "";
  display: block;
  width: 150%;
  height: 400%;
  background: #ff4654;
  padding: 0;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 20;
  transition: all 0.4s linear;
  transform: translateX(-110%) translateY(-50%) rotate(15deg);
  z-index: 10;
}
.ability-btn .underlay:after {
  content: "";
  z-index: 5;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(3px, 3px);
}
.ability-btn:hover {
  cursor: pointer;
}
.ability-btn:hover .underlay:before {
  transform: translateX(-10%) translateY(-50%) rotate(15deg);
}

.ability-btn:active:before {
  transform: translateY(-5px) translateX(-50%);
  padding: 10px 5px;
}
.ability-btn:active:after {
  transform: translateY(5px) translateX(-50%);
  padding: 10px 5px;
}
</style>
