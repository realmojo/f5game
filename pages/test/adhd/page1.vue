<template>
  <main class="test-layout flex justify-center flex-col">
    <div class="text-center text-2xl pt-8">
      <h1>질문을 읽고 하나를 선택해주세요</h1>
    </div>
    <div class="pt-8" v-for="(item, index) in questions" :key="index">
      <div class="text-left pl-4">{{ index + 1 }}. {{ item.question }}</div>
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
      <NuxtLink to="/test/adhd/page2">
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
      "어떤 일의 어려운 부분은 끝내 놓고, 그 일을 마무리를 짓지 못해 곤란을 겪은 적이 있나요?",
  },
  {
    question: "체계가 필요한 일을 해야 할 때 순서대로 진행하기 어려운가요?",
  },
  { question: "약속이나 해야 할 일을 잊어버려 곤란을 겪으시나요?" },
  { question: "골치 아픈 일은 피하거나 미루시나요?" },
  {
    question: "오래 앉아 있을 때 손을 만지작거리거나 발을 꼼지락 거리나요?",
  },
  {
    question:
      "모터가 달린 것처럼 과도하게 혹은 멈출 수 없이 활동하는 경우가 있나요?",
  },
  {
    question:
      "지루하고 어려운 일을 할 때 부주의해서 실수를 하는 경우가 있나요?",
  },
  {
    question: "지루하고 반복적인 일을 할 때 주의 집중이 힘든 경우가 있나요?",
  },
  {
    question:
      "대화 중 특시 상대방이 당신에게 직접적으로 말하고 있을 때에는 집중하기 힘든 경우가 있나요?",
  },
];

const doChange = (index) => {
  localStorage.setItem("adhd-score1", JSON.stringify(answer.value));
};
onMounted(() => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
});
</script>
