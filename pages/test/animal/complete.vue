<template>
  <main class="test-layout flex justify-center flex-col">
    <div v-if="!isResult">
      <h1 class="text-3xl text-center pt-16">결과를 기다리고 있습니다.</h1>
      <div v-if="isLoading" class="text-center pt-4 mb-2">
        <a-spin size="large" class="text-gray-400" />
      </div>
      <Adsense slotId="3583038706" />
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
        <h1 class="text-center text-2xl font-bold">당신의 영적동물은?</h1>

        <Adsense slotId="4652524515" />

        <div class="text-center pt-4 text-4xl">{{ name }}</div>
        <div class="text-left px-4 pt-4 pb-4 adhd-result-text">{{ text }}</div>
        <nuxt-img alt="animal-result" :src="imageUrl" loading="lazy" />
      </div>
      <Share
        title="영적동물 테스트 - F5 Games"
        imageUrl="https://f5game.s3.ap-northeast-2.amazonaws.com/animal/animal.webp"
        url="https://f5game.co.kr/test/animal"
      />
    </div>
  </main>
</template>

<script setup>
const isLoading = ref(true);
const isResult = ref(false);
const name = ref("");
const imageUrl = ref("");
const text = ref("");

const confirmResult = () => {
  isResult.value = true;
};

onMounted(() => {
  let sum = 0;
  const scores = JSON.parse(localStorage.getItem(`animal-score`));
  for (let score of scores) {
    if (score) {
      sum += score;
    }
  }

  if (100 <= sum && sum <= 160) {
    name.value = "용";
    text.value =
      "당신은 목표를 달성하고 성공하기 위해 모든 것을 합니다. 부를 얻고 다른 사람들에게 존경 받는 것이 당신에겐 아주 중요합니다. 당신의 목적의식은 정상으로 향하는 길에 나타나는 어려움을 극복하도록 도와줍니다. 용이 보물을 수호하는 것처럼 당신은 친구와 가족을들에게 감사하며 그들을 소중히 여깁니다.";
    imageUrl.value =
      "https://f5game.s3.ap-northeast-2.amazonaws.com/animal/dragon.webp";
  } else if (170 <= sum && sum <= 230) {
    name.value = "유니콘";
    text.value =
      "유니콘은 뿌리 치유 능력을 가진 마법의 동물입니다. 당신의 말은 마치 유니콘 처럼 주변 사람들에게 영향을 끼칠 겁니다. 좋은 충고를 해주지만 절대 다른 사람데게 당신의 의견을 강요하지는 않습니다. 당신의 존재만으로도 불언하거나 긴장한 사람들에게는 진정 효과가 있습니다. 당신은 유니콘처럼 평화와 번영의 상징이니까요.";
    imageUrl.value =
      "https://f5game.s3.ap-northeast-2.amazonaws.com/animal/unicorn.webp";
  } else if (240 <= sum && sum <= 300) {
    name.value = "스핑크스";
    text.value =
      "스핑크스는 사람들의 영혼을 들여다 볼 수 있는데 당신은 사물의 본질을 이해하는 선천적인 능력이 있습니다. 인간의 본성을 이해하고 있지만 무례하다고 여겨질까봐 혼자서 생각을 간직하는 경우가 많을텐데요. 스핑크스처럼 자랑하는 사람은 위협을 받으면 흉포한 생명체로 변해서 가까운 사람을 다치게 한 상대를 파괴할 준비가 되어 있습니다.";
    imageUrl.value =
      "https://f5game.s3.ap-northeast-2.amazonaws.com/animal/sphinx.webp";
  } else if (310 <= sum && sum <= 370) {
    name.value = "페가수스";
    text.value =
      "페가수스는 아름답고 우아한 날개를 가진 멋있는 흰 말입니다. 이 신화속의 동물처럼 당신은 자유를 소중히 여깁니다. 그리고 성실하게 열심히 의무를 다합니다. 당신은 용감하고 자상한 영혼을 가졌습니다. 사람들은 당신의 그러한 충실함과 내면의 힘을 사랑하구요. 계속 자신을 믿으면 멀리 날 수 있을겁니다.";
    imageUrl.value =
      "https://f5game.s3.ap-northeast-2.amazonaws.com/animal/pegasaus.webp";
  } else if (380 <= sum && sum <= 440) {
    name.value = "구미호";
    text.value =
      "꼬리가 여러개 달린 형태로 변하는 이 여우는 사람들에게 장난을 치는 것을 좋아합니다. 물론 재미있게 놀기를 좋아하지만 또한 충실하고 충직한 친구 입니다. 말할 것도 없이 매우 현명하고 구미호는 꼬리가 많을 수록 더 현명하고 강력합니다. 당신의 재치, 예리함 그리고 유머감각은 모든 사람들에게 매력적으로 느껴집니다.";
    imageUrl.value =
      "https://f5game.s3.ap-northeast-2.amazonaws.com/animal/fox.webp";
  } else if (450 <= sum && sum <= 500) {
    name.value = "불사조";
    text.value =
      "밝은 성격을 가졌고 처참한 실패 후에도 곧바로 회복할 수 있는 훌륭한 능력이 있습니다. 하늘에서 세상을 내려다보는 것처럼 전체적인 상황에 집중합니다. 다른 사람들이 볼 수 없는 것들을 이해하도록 도와주죠. 계속 높이 날면서 삶의 어려움이 당신을 추락하게 하지 마세요.";
    imageUrl.value =
      "https://f5game.s3.ap-northeast-2.amazonaws.com/animal/phoenix.webp";
  }

  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});
</script>
