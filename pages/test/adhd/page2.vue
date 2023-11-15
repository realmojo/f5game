<template>
  <main class="test-layout flex justify-center flex-col">
    <div class="text-center text-2xl pt-8">
      <h1>질문을 읽고 하나를 선택해주세요</h1>
    </div>
    <div class="pt-8" v-for="(item, index) in questions" :key="index">
      <div class="text-left pl-4">
        {{ index + questions.length + 1 }}. {{ item.question }}
      </div>
      <div class="pl-6 pt-3 pb-5">
        <a-radio-group v-model:value="answer[index]" @change="doChange(index)">
          <a-radio :style="radioStyle" :value="5">매우 그렇다</a-radio>
          <a-radio :style="radioStyle" :value="4">그렇다</a-radio>
          <a-radio :style="radioStyle" :value="3">보통이다</a-radio>
          <a-radio :style="radioStyle" :value="2">아니다</a-radio>
          <a-radio :style="radioStyle" :value="1">매우 아니다</a-radio>
        </a-radio-group>
      </div>
    </div>
    <Adsense slotId="1290071997" />
    <div class="text-center mt-4 pb-8">
      <NuxtLink to="/test/adhd/page3">
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
const answer = ref([]);
const radioStyle = reactive({
  display: "flex",
  height: "30px",
  lineHeight: "30px",
});
const questions = [
  {
    question:
      "집이나 직장에서 물건을 엉뚱한 곳에 두거나 어디에 두었는지 헷갈리나요?",
  },
  {
    question: "주변에서 벌어지는 일이나 소음때문에 주의가 산만해 지나요?",
  },
  {
    question:
      "회의나 다른 사회적 상황에서 계속 앉아 있어야 함에도 잠깐씩 자리를 일어나나요?",
  },
  { question: "안절부절 못하거나 조바심하는 경우가 있나요?" },
  {
    question:
      "혼자 쉬고 있을 때 긴장을 풀거나 마음을 편하게 갖기 어려운 경우가 있나요?",
  },
  {
    question:
      "사회적 상황에서 나 혼자 말을 너무 많이 한다고 느끼는 경우가 있나요?",
  },
  {
    question:
      "대화 도중 상대방이 말을 끝내기 전에 끼어들어 상대방의 말을 끊는 경우가 있나요?",
  },
  {
    question:
      "차례를 지켜야 하는 상황에서 자신의 차례를 기다리는게 어려운가요?",
  },
  {
    question: "다른 사람이 바쁘게 일할 때 방해되는 행동을 하나요?",
  },
];

const doChange = (index) => {
  localStorage.setItem("adhd-score2", JSON.stringify(answer.value));
};
onMounted(() => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
});
</script>
