<template>
  <main
    class="speed-layout flex justify-center text-center flex-col bg-gray-800"
  >
    <div v-if="!isCalc" class="mb-10">결과를 계산 중입니다..</div>

    <div v-else>
      당신의 평균 반응속도는 <span class="text-green-400">{{ speed }} ms</span>
      입니다.

      <div class="mb-4">
        <NuxtLink to="/test/speed/play">
          <a-button size="large">다시하기</a-button>
        </NuxtLink>
      </div>
      <Share
        title="반응속도 테스트 - F5 games"
        imageUrl="https://f5game.s3.ap-northeast-2.amazonaws.com/reactspeed.webp"
        url="https://f5game.co.kr/test/speed"
      />
    </div>
  </main>
</template>

<script setup>
const result = ref([]);
const isCalc = ref(false);
const speed = ref(0);

onMounted(() => {
  result.value = JSON.parse(localStorage.getItem("speed-score"));

  let sum = 0;
  for (const value of result.value) {
    sum += value;
  }
  isCalc.value = true;
  speed.value = Math.round(sum / 5, 2);
});
</script>
