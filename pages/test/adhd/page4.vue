<template>
  <main class="test-layout flex justify-center flex-col">
    <div class="text-center text-2xl pt-8">
      <h1>질문을 읽고 하나를 선택해주세요</h1>
    </div>
    <div class="pt-8" v-for="(item, index) in questions" :key="index">
      <div class="text-left pl-4">
        {{ index + questions.length * 3 + 1 }}. {{ item.question }}
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
      <NuxtLink to="/test/adhd/complete">
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
    question: "손발을 가만히 있지 못한다.",
  },
  {
    question: "수업 중 혹은 회의 중 자리에 있기 힘들다.",
  },
  {
    question: "상황에 맞지 않게 돌아다니거나 지나치게 기어오르는 일이 있다.",
  },
  { question: "차분하게 노는 것이 힘들다." },
  {
    question: "끊임없이 움직이거나 마치 모터 달린 것처럼 행동하는 경우가 있다.",
  },
  {
    question: "지나치게 말을 많이 하는 것을 좋아한다.",
  },
  {
    question: "질문이 끝나기도 전에 답변을 한다.",
  },
  {
    question: "자기차례를 기다리기 힘들다.",
  },
  {
    question: "다른 사람을 참견하는 일이 종종 있다.",
  },
];

const doChange = (index) => {
  localStorage.setItem("adhd-score4", JSON.stringify(answer.value));
};
onMounted(() => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
});
</script>
