<template>
  <main class="site-layout match flex justify-center flex-col">
    <Ready
      v-if="isStart === false"
      :text="isStartText === false ? 'Ready' : 'Start'"
    />

    <div
      :class="isStart === false ? 'opacity-0' : 'opacity-100'"
      style="margin-top: -10px"
    >
      <iframe
        src="http://f5game-match.s3-website.ap-northeast-2.amazonaws.com/#/game"
        class="match-iframe"
      />
    </div>

    <Share
      title="같은그림 찾기 - F5 Games"
      imageUrl="https://f5game.s3.ap-northeast-2.amazonaws.com/match.webp"
      url="https://f5game.co.kr/puzzle/match"
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
