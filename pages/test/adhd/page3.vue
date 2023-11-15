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
      <NuxtLink to="/test/adhd/page4">
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
      "과제나 업무를 수행하는 데 있어서 집중을 잘 못하고 부주의로 인한 실수가 있다.",
  },
  {
    question: "수업이나 놀이에서 집중을 유지하는 데 어려움을 겪는다.",
  },
  {
    question: "이야기를 할 때 잘 듣지 않는 경우가 있다.",
  },
  { question: "지시를 잘 따르지 않아서 과제나 임무를 잘 완수하지 못한다." },
  {
    question: "과제나 활동을 체계적으로 하는데 종종 어려움을 겪는다.",
  },
  {
    question:
      "지속적으로 정신력이 필요한 과제에 몰두하는 것을 피하거나 싫어한다.",
  },
  {
    question: "활동에 필요한 물건들을 자주 잃어버린다.",
  },
  {
    question: "외부 자극에 의해 종종 산만해진다.",
  },
  {
    question: "일상적인 일들을 자주 잊어버린다.",
  },
];

const doChange = (index) => {
  localStorage.setItem("adhd-score3", JSON.stringify(answer.value));
};
onMounted(() => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
});
</script>
