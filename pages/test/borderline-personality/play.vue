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
    <Adsense slotId="4776861523" />
    <div v-if="isResultButton" class="my-3">
      <div class="text-center mt-4">
        <NuxtLink to="/test/borderline-personality/result">
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
    question: "나는 자주 나 자신을 외로움 속에서 느낀다.",
  },
  {
    question: "다른 사람들이 나를 실망시키면 나는 금방 분노한다.",
  },
  { question: "새로운 사람들과의 대면 상황에서 불안을 느낀다." },
  {
    question: "강한 감정이 나를 휘어잡을 때, 자주 과거에 대한 회상이 나타난다.",
  },
  { question: "다른 사람들의 의견에 크게 영향을 받는 편이다." },
  { question: "나는 자주 목표나 계획을 변경하는데 어려움을 겪는다." },
  {
    question:
      "나는 자주 나 자신을 비난하거나 혹은 자신을 과도하게 낮게 평가한다.",
  },
  {
    question:
      "나는 대부분의 시간 동안 나의 정체성에 대해 명확한 감각을 가지고 있지 않다.",
  },
  {
    question:
      "대인관계에서 나는 상대방이 나를 버릴 것이라고 예상하는 경향이 있다.",
  },
  { question: "나는 대부분의 상황에서 금방 적응하는데 어려움을 겪는다." },
  { question: "나는 종종 나의 감정이 쉽게 변하는 것을 감지한다." },
  {
    question:
      "나는 자주 다른 사람들에게 나의 감정을 표현하는데 어려움을 겪는다.",
  },
  { question: "나는 일상 생활에서 자주 급한 감정 변동을 경험한다." },
  { question: "나는 다른 사람들이 나에게 무관심하다고 느낄 때가 종종 있다." },
  { question: "나는 대부분의 사람들이 나에게 실망한다고 느낄 때가 있다." },
  {
    question: "강한 감정이 나를 휘어잡을 때, 제어를 잃는 것 같은 느낌이 든다.",
  },
  { question: "나는 자주 급한 감정의 변화를 경험한다." },
  { question: "나는 대부분의 사람들이 나를 이해하지 못한다고 느낄 때가 있다." },
  { question: "나는 자주 나 자신에 대해 부정적인 생각을 갖는다." },
  { question: "나는 가끔 내 자신을 사랑하는 느낌이 든다." },
  { question: "나는 혼자 있을 때 나 자신을 깊이 고요한 느낌으로 느낀다." },
  {
    question:
      "가족 또는 친구와의 관계에서 나는 때때로 과도한 접근 또는 회피를 보인다.",
  },
  { question: "나는 고립되었다고 느낄 때 나 자신을 자주 마음속에서 폐쇄한다." },
  {
    question: "다른 사람들의 기대에 부응하는 것이 나에게 부담스럽게 느껴진다.",
  },
  { question: "자주 다른 사람들에게 나에 대한 기대를 과도하게 높이는 편이다." },
  { question: "나는 다른 사람들과의 관계에서 나 자신을 희생하는 경향이 있다." },
  { question: "나는 종종 내 자신이 다른 사람들과 다르다고 느낀다." },
  { question: "나는 가끔 나 자신이 혼란스럽게 느껴질 때가 있다." },
  { question: "나는 종종 나 자신에 대해 모순된 감정을 느낀다." },
  {
    question:
      "나는 다른 사람들에게 나의 감정을 적절하게 전달하는 것에 어려움을 겪는다.",
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
  localStorage.setItem(
    "f5game-borderline-answer",
    JSON.stringify(newTestAnswer)
  );
});
</script>

<style>
.ant-radio-button-wrapper {
  display: inline-table;
}
</style>
