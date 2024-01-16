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
            <template
              v-for="(question, _qIndex) in item.list"
              :key="`${index}-${_qIndex}`"
            >
              <a-radio-button
                class="w-full"
                :value="_qIndex"
                @click="doQuestionNext(this, index)"
              >
                {{ question }}
              </a-radio-button>
            </template>
          </a-space>
        </a-radio-group>
      </div>
    </a-carousel>
    <Adsense slotId="1388093507" />
    <div v-if="isResultButton" class="my-3">
      <div class="text-center mt-4">
        <NuxtLink to="/test/depression/result">
          <a-button
            type="primary"
            class="btn-result w-full"
            size="large"
            @click="doNext"
          >
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
    question: "최근들어 슬픈일이 있나요?",
    list: [
      "나는 슬프지 않다.",
      "나는 슬프다.",
      "나는 항상 슬프고 기운을 낼 수 없다.",
      "나는 너무나 슬프고 불행해서 도저히 견딜 수 없다.",
    ],
  },
  {
    question: "식욕이 왕성한가요?",
    list: [
      "내 식욕은 평소와 다름없다.",
      "나는 요즈음 전보다 식욕이 좋지 않다.",
      "나는 요즈음 식욕이 많이 떨어졌다.",
      "요즈음에는 전혀 식욕이 없다.",
    ],
  },
  {
    question: "평소에 피로는 어떤가요?",
    list: [
      "나는 평소보다 더 피곤하지는 않다.",
      "나는 전보다 더 쉽게 피곤해 진다.",
      "나는 무엇을 해도 피곤해 진다.",
      "나는 너무나 피곤해서 아무 일도 할 수 없다.",
    ],
  },
  {
    question: "최근 일상생활에 만족하고 계신가요?",
    list: [
      "나는 전과 같이 일상생활에 만족하고 있다.",
      "나의 일상생활은 예전처럼 즐겁지 않다.",
      "나는 요즘에는 어떤 것에서도 별로 만족을 얻지 못한다.",
      "나는 모든 것이 다 불만스럽고 싫증난다.",
    ],
  },

  {
    question: "밤에 잠을 잘 주무시나요?",
    list: [
      "나는 평소처럼 잠을 잘 수 있다.",
      "나는 전에 만큼 잠을 자지는 못한다.",
      "나는 전보다 한 두 시간 일찍 깨고 다시 잠들기 어렵다.",
      "나는 평소보다 몇 시간이나 일찍 깨고, 한번 깨면 다시 잠들 수 없다.",
    ],
  },
  {
    question: "요즘 느끼고 있는 기분은 어떤가요?",
    list: [
      "나는 벌을 받고 있다고 느끼지 않는다.",
      "나는 어쩌면 벌을 받을지도 모른다고 느낌이 든다.",
      "나는 벌을 받을 것 같다.",
      "나는 지금 벌을 받고 있다고 느낀다.",
    ],
  },
  {
    question: "자신에게 실망한적이 있나요?",
    list: [
      "나는 나 자신에게 실망하지 않는다.",
      "나는 나 자신에게 실망하고 있다.",
      "나는 나 자신에게 화가 난다.",
      "나는 나 자신을 증오한다.",
    ],
  },
  {
    question: "본인에 대해서 어떻게 생각하나요?",
    list: [
      "내가 다른 사람보다 못한 것 같지는 않다.",
      "나는 나의 약점이나 실수에 대해서 나 자신을 탓하는 편이다.",
      "내가 한 일이 잘못되었을 때는 언제나 나를 탓한다.",
      "일어나는 모든 나쁜 일들은 다 내 탓이다.",
    ],
  },
  {
    question: "자살에 대한 생각이 있으신가요?",
    list: [
      "나는 자살 같은 것은 생각하지 않는다.",
      "나는 자살할 생각을 가끔 하지만, 실제로 하지는 않을 것이다.",
      "자살하고 싶은 생각이 자주 든다.",
      "나는 기회만 있으면 자살하겠다.",
    ],
  },
  {
    question: "요즘 눈물이 많으신가요?",
    list: [
      "나는 평소보다 더 울지는 않는다.",
      "나는 전보다 더 많이 운다.",
      "나는 요즈음 항상 운다.",
      "나는 전에는 울고 싶을 때 울 수 있었지만, 요즈음은 울래야 울 기력조차 없다.",
    ],
  },
  {
    question: "짜증내시는 편인가요?",
    list: [
      "나는 요즈음 평소보다 더 짜증을 내는 편은 아니다.",
      "나는 전보다 더 쉽게 짜증이 나고 귀찮아 진다.",
      "나는 요즈음 항상 짜증을 내고 있다.",
      "전에는 짜증스럽던 일에 요즘은 너무 지쳐서 짜증조차 나지 않는다.",
    ],
  },
  {
    question: "사람에 대해 관심이 있으신가요?",
    list: [
      "나는 다른 사람들에 대한 관심을 잃지 않고 있다.",
      "나는 전보다 다른 사람들에 대한 관심이 줄었다.",
      "나는 다른 사람들에 대한 관심이 거의 없어졌다.",
      "나는 다른 사람들에 대한 관심이 완전히 없어졌다.",
    ],
  },
  {
    question: "우유부단한 편이신가요?",
    list: [
      "나는 평소처럼 결정을 잘 내린다.",
      "나는 결정을 미루는 때가 전보다 더 많다.",
      "나는 전에 비해 결정 내리는 데에 더 큰 어려움을 느낀다.",
      "나는 더 이상 아무 결정도 내릴 수가 없다.",
    ],
  },
  {
    question: "거울을 보면 어떤 느낌이 드시나요?",
    list: [
      "나는 전보다 내 모습이 나빠졌다고 느끼지 않는다.",
      "나는 나이 들어 보이거나 매력 없이 보일까봐 걱정한다.",
      "나는 내 모습이 매력 없게 변해 버린 것 같은 느낌이 든다.",
      "나는 내가 추하게 보인다고 믿는다.",
    ],
  },
  {
    question: "일 하는 것에 대해 어떻게 생각하시나요?",
    list: [
      "나는 전처럼 일을 할 수 있다.",
      "어떤 일을 시작하는데 전보다 더 많은 노력이 든다.",
      "무슨 일이든 하려면 나 자신을 매우 심하게 채찍질해야만 한다.",
      "나는 전혀 아무 일도 할 수가 없다.",
    ],
  },
  {
    question: "잘못을 저지르면 어떤 기분이 드시나요?",
    list: [
      "나는 특별히 죄책감을 느끼지 않는다.",
      "나는 죄책감을 느낄 때가 많다.",
      "나는 죄책감을 느낄 때가 아주 많다.",
      "나는 항상 죄책감에 시달리고 있다.",
    ],
  },
  {
    question: "실패자라고 느끼시나요?",
    list: [
      "나는 실패자라고 느끼지 않는다.",
      "나는 보통 사람들보다 더 많이 실패한 것 같다.",
      "내가 살아온 과거를 뒤돌아보면, 실패투성이인 것 같다.",
      "나는 인간으로서 완전한 실패자라고 느낀다.",
    ],
  },
  {
    question: "미래에 대해 어떻게 생각하시나요?",
    list: [
      "나는 미래에 대해서 별로 낙심하지 않는다.",
      "나는 미래에 대해서 용기가 나지 않는다.",
      "나는 미래에 대해 기대할 것이 아무 것도 없다고 느낀다.",
      "나는 미래는 아주 절망적이고 나아질 가망이 없다고 느낀다.",
    ],
  },
  {
    question: "최근 체중 변화가 있나요?",
    list: [
      "요즈음 체중이 별로 줄지 않았다.",
      "전보다 몸무게가 2kg 가량 줄었다.",
      "전보다 몸무게가 5kg 가량 줄었다.",
      "나는 현재 음식조절로 체중을 줄이고 있는 중이다.",
    ],
  },
  {
    question: "건강에 대한 변화가 있나요?",
    list: [
      "나는 건강에 대해 전보다 더 염려하고 있지는 않다.",
      "나는 여러 가지 통증, 소화불량, 변비 등과 같은 신체적인 문제로 걱정하고 있다.",
      "나는 건강이 염려되어 다른 일은 생각하기 힘들다.",
      "나는 건강이 너무 염려되어 다른 일은 아무 것도 생각할 수 없다.",
    ],
  },
  {
    question: "섹스를 하고싶은 생각이 드시나요?",
    list: [
      "나는 요즈음 성에 대한 관심에 별다른 변화가 있는 것 같지는 않다.",
      "나는 전보다 성에 대한 관심이 줄었다.",
      "나는 전보다 성에 대한 관심이 상당히 줄었다.",
      "나는 성에 대한 관심을 완전히 잃었다.",
    ],
  },
];

const doQuestionNext = (obj, index) => {
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
    "f5game-depression-answer",
    JSON.stringify(newTestAnswer)
  );
});
</script>

<style>
.ant-radio-button-wrapper {
  display: inline-table;
}
</style>
