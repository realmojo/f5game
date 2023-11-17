<template>
  <main class="test-layout flex justify-center flex-col">
    <h1 class="text-3xl text-center">MBTI 검사 성격 이상형 테스트</h1>
    <p class="text-center mb-2">
      내가 좋아하는 상대방의 MBTI는 무엇일까? <br />본인의 MBTI 유형을 선택하여
      주세요.
    </p>
    <a-select
      class="w-full mb-2 px-2"
      ref="select"
      v-model:value="value"
      :options="options"
      @change="handleChange"
    />
    <Adsense slotId="7740004665" />
    <div class="w-full px-2">
      <NuxtLink to="/test/mbti/page1">
        <a-button
          class="bg-blue-500 mt-4 text-center w-full"
          type="primary"
          size="large"
        >
          START
        </a-button>
      </NuxtLink>
    </div>
    <article class="mt-4">
      <div class="post">
        <h2>MBTI 란</h2>
        <p>
          MBTI는 Myers-Briggs Type Indicator의 약자로, 성격 유형을 분류하는
          심리학 도구이다. 사람들을 16가지 성격 유형으로 나누는데, 각 유형은
          4가지 차원(성격 요인)을 기반으로 한다. 이 요인은 Extraversion vs.
          Introversion, Sensing vs. Intuition, Thinking vs. Feeling, Judging vs.
          Perceiving이다. MBTI는 성격을 이해하고 조직 내 소통을 향상시키는 데
          활용되며, 직업 선택이나 대인관계에도 도움을 줄 수 있다. 그러나 비판도
          받고 있으며, 과학적 타당성에 대한 의문이 제기되고 있다.
        </p>
      </div>
      <div class="post">
        <h2>MBTI 검사에 대해서</h2>
        <p>
          MBTI(Myers-Briggs Type Indicator) 검사는 성격을 16가지 유형으로
          분류하는 도구로, 참가자는 각각의 4가지 차원에 대한 선호도를 나타내는
          4글자 코드를 얻는다. Extraversion vs. Introversion, Sensing vs.
          Intuition, Thinking vs. Feeling, Judging vs. Perceiving의 차원에서
          참가자의 성향을 측정한다. 이 유형은 각각 고유한 특징과 행동양식을
          가지며, 직업 선택, 대인관계, 팀 활동에서의 역할에 대한 통찰을
          제공한다. 그러나 MBTI는 과학적 타당성 부족과 고정된 성격 유형으로
          개인을 제한하는 한계가 있어, 비판의 대상이 되기도 한다.
        </p>
      </div>
      <div class="post">
        <h2>관련검사</h2>
        <p>
          MBTI와 유사한 성격 검사로는 Big Five Personality Traits(혹은 다섯 요인
          성격 모형)가 있다. 이는 성격을 다음 다섯 요인으로 나눈다:
          개방성(Openness), 성실성(Conscientiousness), 외향성(Extraversion),
          친화성(Agreeableness), 감정 안정성(Emotional Stability). Big Five는 더
          다양하고 열린 방식으로 성격을 평가하는 것으로 알려져 있으며, 심리학
          연구에서 널리 사용된다. 다른 관련 도구로는 StrengthsFinder,
          Enneagram이 있으며, 각각 강점과 성격 유형을 중심으로 평가한다. 이러한
          도구들은 각자의 방식으로 성격, 장점, 약점을 이해하고 개발할 수 있는
          통찰을 제공한다. 그러나 어떤 도구도 완벽하지 않으며, 개인적인 경험과
          상황에 따라 적절한 도구를 선택하는 것이 중요하다.
        </p>
      </div>
    </article>
  </main>
</template>

<script setup>
const value = ref("ESTJ");

const options = ref([
  {
    value: "ESTJ",
    label: "ESTJ",
  },
  {
    value: "ESTP",
    label: "ESTP",
  },
  {
    value: "ESFJ",
    label: "ESFJ",
  },
  {
    value: "ESFP",
    label: "ESFP",
  },
  {
    value: "ENTJ",
    label: "ENTJ",
  },
  {
    value: "ENTP",
    label: "ENTP",
  },
  {
    value: "ENFJ",
    label: "ENFJ",
  },
  {
    value: "ENFP",
    label: "ENFP",
  },
  {
    value: "ISTJ",
    label: "ISTJ",
  },
  {
    value: "ISTP",
    label: "ISTP",
  },
  {
    value: "ISFJ",
    label: "ISFJ",
  },
  {
    value: "ISFP",
    label: "ISFP",
  },
  {
    value: "INTJ",
    label: "INTJ",
  },
  {
    value: "INTP",
    label: "INTP",
  },
  {
    value: "INFJ",
    label: "INFJ",
  },
  {
    value: "INFP",
    label: "INFP",
  },
]);

const handleChange = (value) => {
  localStorage.setItem("f5game-my-mbti", value);
};

onMounted(() => {
  setTimeout(() => {
    localStorage.setItem("f5game-my-mbti", "ESTJ");
  }, 100);
});
</script>
