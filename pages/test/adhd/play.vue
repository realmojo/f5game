<template>
  <main class="test-layout flex justify-center flex-col px-2">
    <a-progress :percent="percent" style="margin-top: 10px" />
    <a-carousel
      ref="questionCarousel"
      style="min-height: 300px; max-height: 500px"
      :dots="false"
      ><div
        v-for="(item, index) in questions"
        class="test-item mb-4"
        :key="index"
      >
        <h2 class="text-xl pt-4">{{ index + 1 }}. {{ item.question }}</h2>
        <a-radio-group
          class="mt-2 w-full"
          v-model:value="testAnswer[index]"
          button-style="solid"
          size="large"
        >
          <a-space class="w-full" direction="vertical">
            <a-radio-button
              class="w-full"
              :value="5"
              @click="doQuestionNext(index)"
            >
              매우 그렇다
            </a-radio-button>
            <a-radio-button
              class="w-full"
              :value="4"
              @click="doQuestionNext(index)"
            >
              그렇다
            </a-radio-button>
            <a-radio-button
              class="w-full"
              :value="3"
              @click="doQuestionNext(index)"
            >
              보통이다
            </a-radio-button>
            <a-radio-button
              class="w-full"
              :value="2"
              @click="doQuestionNext(index)"
            >
              아니다
            </a-radio-button>
            <a-radio-button
              class="w-full"
              :value="1"
              @click="doQuestionNext(index)"
            >
              매우 아니다
            </a-radio-button>
          </a-space>
        </a-radio-group>
      </div>
    </a-carousel>
    <Adsense slotId="1290071997" />
    <div v-if="isResultButton" class="my-3">
      <div class="text-center mt-4">
        <NuxtLink to="/test/adhd/result">
          <a-button type="primary" class="btn-result w-full" size="large">
            결과보기
          </a-button>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup>
const percent = ref(0);
const testAnswer = ref([]);
const isResultButton = ref(false);
const currentCount = ref(0);
const questionCarousel = ref(null);
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

const doQuestionNext = (index) => {
  const total = questions.length;
  let p = ((index + 1) / total) * 100;
  if (questions.length - 1 === index) {
    isResultButton.value = true;
    window.scroll(0, 10000);
  } else {
    currentCount.value = index;
    questionCarousel.value.next();
  }
  percent.value = Math.floor(p);
};

watch(testAnswer.value, (newTestAnswer) => {
  localStorage.setItem("f5game-adhd-answer", JSON.stringify(newTestAnswer));
});
</script>

<style>
.ant-radio-button-wrapper {
  display: inline-table;
}
</style>
