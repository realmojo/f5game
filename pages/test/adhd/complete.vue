<template>
  <main class="test-layout flex justify-center flex-col">
    <div v-if="!isResult">
      <h1 class="text-3xl text-center pt-4">결과를 기다리고 있습니다.</h1>
      <div v-if="isLoading" class="text-center pt-4 mb-2">
        <a-spin size="large" class="text-gray-400" />
      </div>
      <Adsense slotId="8976990327" />
      <a-button
        v-if="!isLoading"
        class="bg-blue-500 mt-4 text-center w-full"
        type="primary"
        size="large"
        @click="confirmResult"
        >확인</a-button
      >
    </div>
    <div v-else class="pt-4">
      <div>
        <h1 class="text-center text-2xl font-bold">당신의 성인 ADHD 상태는?</h1>

        <Adsense slotId="3313260799" />

        <div class="text-center pt-4 text-4xl">{{ name }}</div>
        <div class="text-left px-4 pt-4 pb-4 adhd-result-text">{{ text }}</div>
      </div>
      <Share
        title="성인 ADHD 테스트 자가진단 - F5 Games"
        imageUrl="https://f5game.s3.ap-northeast-2.amazonaws.com/adhd.png"
        url="https://f5game.co.kr/test/adhd"
      />
    </div>
  </main>
</template>

<script setup>
const isLoading = ref(true);
const isResult = ref(false);
const name = ref("");
const text = ref("");

const confirmResult = () => {
  isResult.value = true;
};

onMounted(() => {
  let sum = 0;
  for (let i = 1; i <= 4; i += 1) {
    const scores = JSON.parse(localStorage.getItem(`adhd-score${i}`));
    for (const score of scores) {
      if (score) {
        sum += Number(score);
      }
    }
  }
  if (0 <= sum && sum <= 36) {
    name.value = "매우 양호";
    text.value =
      "당신은 삶을 살아가는데 있어서 주의력 및 산만함이 거의 없는 상태 입니다. 마음이 평온한 상태이며 이타적인 행동을 하는 사람입니다. 당신과 같은 사람이 많을수록 세상은 더 행복해질 것입니다. 현재의 마음가짐으로 앞으로도 계속 삶을 이어나가시길 바라겠습니다.";
  } else if (37 <= sum && sum <= 72) {
    name.value = "양호 단계";
    text.value =
      "현대 사회인들은 누구나 한 가지씩 사소한 실수를 할 때도 있습니다. 하지만 이는 보편적으로 누구에게나 나타나는 증상이며 당신은 성인 ADHD가 아닙니다. 다만 심신을 안정시키는 스트레칭이나 가벼운 산책을 하면서 삶을 유지하면 더 좋은 감정상태를 만드실 수 있습니다.";
  } else if (73 <= sum && sum <= 108) {
    name.value = "정상 단계";
    text.value =
      "당신은 다소 집중력이 부족할 수 있고 충동적인 행동을 간혹 할 수도 있으나 본인의 의지로 충분히 잘 해나갈 수 있습니다. 아직까지는 성인 ADHD라고 보기에는 어렵습니다. 하지만 조심해야 할 단계 입니다. 따듯한 차를 마시면서 심신을 가라앉히는 행동을 추천드립니다.";
  } else if (109 <= sum && sum <= 144) {
    name.value = "경고 단계";
    text.value =
      "성인 ADHD로 가기 마지막 단계이며 음주가무에 빠져서 건강과 사회생활 및 전반적인 삶을 살아가기 어려울 수 있습니다. 주변을 조금씩 돌아보고 충동적이나 감정훈련 조절 및 취미새활 같은 것을 즐기면서 삶을 살다보면 자연스레 좋아지는 경우가 많습니다.";
  } else if (145 <= sum && sum <= 180) {
    name.value = "성인 ADHD 매우 높음";
    text.value =
      "당신은 성인 ADHD일 확률이 매우 높습니다. 이 질환을 오래가지고 계시면 기분장애나 충동억제등을 조절하기가 매우 어렵습니다. 더 나아가 우울장애를 일으켜 내 주변의 사람들까지 괴로울 수 있습니다. 가까운 정신과 병원에 들려서 자세한 상담을 받아보시기를 추천드립니다.";
  }

  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});
</script>
