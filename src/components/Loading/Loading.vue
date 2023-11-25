<script setup>
import { onMounted, ref, defineProps } from "vue";

const props = defineProps(["text"]);
const loadingText = ref("");
let animationText;

const animatedText = () => {
  let text = props.text;
  let index = 0;

  animationText = setInterval(() => {
    loadingText.value = text.substring(0, index);
    index++;

    if (index > text.length) {
      clearInterval(animationText);
    }
  }, 100);
};

onMounted(() => {
  animatedText();
});
</script>
<template >
  <section>
    <video class="h-screen object-cover fixed" autoplay muted loop>
      <source src="/Video/Valorant-Vid-2.mp4" type="video/mp4" />
    </video>
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <h1
        class="text-white font-semibold md:text-3xl text-2xl whitespace-nowrap italic"
      >
        {{ loadingText }}
      </h1>
    </div>
  </section>
</template>


