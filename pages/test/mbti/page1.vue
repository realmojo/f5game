<template>
  <main class="test-layout flex justify-center flex-col">
    <div class="text-center text-2xl pt-8">
      <h1>질문을 읽고 하나를 선택해주세요</h1>
    </div>
    <div class="pt-8" v-for="(item, index) in questions" :key="index">
      <div class="text-left pl-4">{{ index + 1 }}. {{ item.question }}</div>
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
      <NuxtLink to="/test/mbti/page2">
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
  { question: "내성적이고 조용한 성격이다.", type: "I" },
  { question: "활동적인 편입니다.", type: "E" },
  { question: "현실적인 사람입니다.", type: "S" },
  { question: "잡생각이 많으며 아이디어가 많습니다.", type: "N" },
  { question: "결정을 내릴 때는 가슴보다 논리적으로 선택합니다.", type: "T" },
  { question: "감정에 대해 이야기 하는 것을 좋아한다.", type: "F" },
  { question: "일정을 잘 지킨다.", type: "J" },
  { question: "짜여진 틀보다 즉흥적인 것을 좋아합니다.", type: "P" },
];
const doChange = (type) => {
  localStorage.setItem("mbti-score1", JSON.stringify(answer.value));
};

onMounted(() => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
});
</script>
