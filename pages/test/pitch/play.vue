<template>
  <main class="site-layout pitch flex justify-center flex-col">
    <Ready
      v-if="isStart === false"
      :text="isStartText === false ? 'Ready' : 'Start'"
    />

    <div :class="isStart === false ? 'opacity-0' : 'opacity-100'">
      <iframe src="https://pitch.f5game.co.kr/play" class="pitch-iframe" />
    </div>
  </main>
</template>

<script setup>
import "~/pages/test/color/index.scss";
const isStart = ref(false);
const isStartText = ref(false);

onMounted(() => {
  setTimeout(() => {
    isStart.value = true;
  }, 3800);
  setTimeout(() => {
    isStartText.value = true;
  }, 2000);
});
</script>
