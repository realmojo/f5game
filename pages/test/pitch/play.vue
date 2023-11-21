<template>
  <main class="site-layout pitch flex justify-center flex-col">
    <Ready
      v-if="isStart === false"
      :text="isStartText === false ? 'Ready' : 'Start'"
    />

    <div :class="isStart === false ? 'opacity-0' : 'opacity-100'">
      <iframe src="https://pitch.f5game.co.kr/play" class="pitch-iframe" />
    </div>

    <Share
      title="절대음감 테스트 - F5 Games"
      imageUrl="https://f5game.s3.ap-northeast-2.amazonaws.com/pitch.webp"
      url="https://f5game.co.kr/test/pitch"
    />
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
