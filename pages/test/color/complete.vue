<template>
  <main class="test-layout flex justify-center flex-col">
    <div v-if="!isResult">
      <h1 class="text-3xl text-center pt-4">결과를 기다리고 있습니다.</h1>
      <div v-if="isLoading" class="text-center pt-4 mb-2">
        <a-spin size="large" class="text-gray-400" />
      </div>
      <Adsense slotId="4274617542" />
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
        <h1 class="text-center text-2xl font-bold">상위 {{ r.percent }}</h1>
        <div class="text-center pt-4 text-xl">
          <strong>{{ level }}단계</strong>까지 오셨네요. <br />
          {{ r.message }}
        </div>

        <Adsense slotId="5172271409" />

        <div class="text-left px-4 pt-4 pb-4 adhd-result-text">{{ text }}</div>
      </div>
      <Share
        title="색맹 사색자 테스트 - F5 Games"
        imageUrl="https://f5game.s3.ap-northeast-2.amazonaws.com/color.webp"
        url="https://f5game.co.kr/test/color"
      />
    </div>
  </main>
</template>

<script setup>
const isLoading = ref(true);
const isResult = ref(false);
const text = ref("");
const level = ref(0);
const r = ref({ status: "", message: "", percent: "" });

const confirmResult = () => {
  isResult.value = true;
};

const resultInfo = [
  {
    status: "초보적인 미적감각",
    message: "혹시 색맹은 아니시죠?",
    percent: "100%",
  },
  {
    status: "일반수준의 미적감각",
    message: "그래도 기본은 하시네요!",
    percent: "60%",
  },
  {
    status: "훌륭한 미적감각",
    message: "훌륭한 색상을 구분할 수 있네요!",
    percent: "40%",
  },
  {
    status: "미대전공생",
    message: "미대전공생 정도의 수준이시군요!",
    percent: "20%",
  },
  {
    status: "빈센트 반고흐",
    message: "미술과 관련된 직업을 갖고 계신계 분명합니다!",
    percent: "5%",
  },
  {
    status: "신의 경지",
    message: "여기까지 색상을 구분하는 것만해도 상위 1%입니다!",
    percent: "1%",
  },
  {
    status: "사색자",
    message:
      "당신은 보통사람의 100배이상 색상을 구분할 수 있는 시력을 가지고 있습니다.",
    percent: "0.1%",
  },
];

onMounted(() => {
  level.value = Number(localStorage.getItem(`f5game-color-level`)) || 1;
  r.value = resultInfo[Math.floor(level.value / 10)];

  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});
</script>
