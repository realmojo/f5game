<template>
  <main class="test-layout flex justify-center flex-col">
    <div class="text-center text-2xl pt-8">
      <h1>질문을 읽고 하나를 선택해주세요</h1>
    </div>
    <div class="pt-8" v-for="(item, index) in questions" :key="index">
      <div class="text-left pl-4">
        {{ index + questions.length * 2 + 1 }}. {{ item.question }}
      </div>
      <div class="pl-6 pt-3 pb-5">
        <a-radio-group
          v-model:value="answer[item.type].score"
          @change="doChange(item.type)"
        >
          <a-radio :style="radioStyle" :value="5">매우 그렇다</a-radio>
          <a-radio :style="radioStyle" :value="4">그렇다</a-radio>
          <a-radio :style="radioStyle" :value="3">보통이다</a-radio>
          <a-radio :style="radioStyle" :value="2">아니다</a-radio>
          <a-radio :style="radioStyle" :value="1">매우 아니다</a-radio>
        </a-radio-group>
      </div>
    </div>
    <Adsense slotId="5576875750" />
    <div class="text-center mt-4 pb-8">
      <NuxtLink to="/test/mbti/page4">
        <a-button
          class="bg-blue-500 mt-4 text-center w-full"
          type="primary"
          size="large"
        >
          NEXT
        </a-button>
      </NuxtLink>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref } from "vue";
const answer = ref({
  I: { score: 0 },
  E: { score: 0 },
  S: { score: 0 },
  N: { score: 0 },
  T: { score: 0 },
  F: { score: 0 },
  J: { score: 0 },
  P: { score: 0 },
});
const radioStyle = reactive({
  display: "flex",
  height: "30px",
  lineHeight: "30px",
});
const questions = [
  { question: "주목을 받던 말던 신경 안쓴다.", type: "I" },
  { question: "새로운 곳에서 금방 잘 적응 합니다.", type: "E" },
  { question: "호기심 때문에 행동을 옮기지 않습니다.", type: "S" },
  { question: "사람은 태어난 이유에 대해 궁금해 합니다.", type: "N" },
  { question: "사람으로 인하여 화나는 일이 크게 없습니다.", type: "T" },
  {
    question: "상대방이 싫어할수도 있어서 말못하는 경우가 있습니다.",
    type: "F",
  },
  { question: "여행갈 때 계획을 꼼꼼히 세웁니다.", type: "J" },
  { question: "시간이 부족할 때 까지 일을 미룹니다.", type: "P" },
];
const doChange = (type) => {
  localStorage.setItem("mbti-score3", JSON.stringify(answer.value));
};

onMounted(() => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
});
</script>
