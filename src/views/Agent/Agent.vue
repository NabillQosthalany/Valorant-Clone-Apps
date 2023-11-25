<script setup>
import { onMounted, ref } from "vue";
import Navbar from "../../components/Navbar/Navbar.vue";
import CardAgentIcon from "../../components/CardAgentIcon/CardAgentIcon.vue";
import axios from "axios";
import AgentDescription from "../../components/AgentDescription/AgentDescription.vue";
import AbilityList from "../../components/AgentAbility/AbilityList.vue";
import AgentCharacter from "../../components/AgentCharacter/AgentCharacter.vue";
import Loading from "../../components/Loading/Loading.vue";

const showLoading = ref(true);
const agentData = ref([]);
const selectedAgent = ref(null);
const selectedAbility = ref(null);
const showImage = ref(true);
const videoShow = ref(false);

const toggleContent = async (uuid) => {
  if (!videoShow.value) {
    showImage.value = !showImage.value;
    videoShow.value = true;
  }
  try {
    const result = await axios.get(
      `https://valorant-api.com/v1/agents/${uuid}`
    );
    selectedAgent.value = result.data.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchAgents = async () => {
  try {
    const result = await axios.get("https://valorant-api.com/v1/agents");
    agentData.value = result.data.data;
  } catch (error) {
    console.log(error);
  }
};

const showDescription = (ability) => {
  selectedAbility.value = ability;
};

onMounted(() => {
  setTimeout(() => {
    showLoading.value = false;
  }, 4000);
  fetchAgents();
});
</script>

<template>
  <section>
    <Loading v-if="showLoading" text="Loading Valorant Agents..." />
    <div v-if="!showLoading">
      <Navbar :is-actived="true" />
      <Transition>
        <img
          v-if="showImage && !videoShow"
          class="w-full h-screen object-cover transition-opacity ease-in-out duration-500"
          src="/images/valorant-background-img.jpg"
          alt=""
        />
      </Transition>
      <Transition mode="out-in">
        <video
          v-if="!showImage && videoShow"
          class="h-screen object-cover transition-opacity ease-in-out duration-500"
          autoplay
          muted
          loop
          @click="toggleContent"
        >
          <source src="/Video/Valorant-Vid-2.mp4" type="video/mp4" />
        </video>
      </Transition>
      <CardAgentIcon
        :button-agent="agentData"
        @toggle-content="toggleContent"
        :disabled="!videoShow"
      />
      <AgentCharacter :selected-agent="selectedAgent" />
      <AgentDescription :selected-agent="selectedAgent" />
    </div>
    <AbilityList
      :selected-agent="selectedAgent"
      @show-description="showDescription"
      :selected-ability="selectedAbility"
    />
  </section>
</template>
