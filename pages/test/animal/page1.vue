<template>
  <main class="test-layout flex justify-center flex-col">
    <div class="text-center text-2xl pt-8">
      <h1>질문을 읽고 하나를 선택해주세요</h1>
    </div>
    <div class="pt-8" v-for="(item, index) in questions" :key="index">
      <div class="text-left pl-4">{{ index + 1 }}. {{ item.question }}</div>
      <div class="pl-6 pt-3 pb-5">
        <a-radio-group v-model:value="answer[index]" @change="doChange(index)">
          <a-radio
            v-for="(radio, _index) in item.radio"
            :key="_index"
            :style="radioStyle"
            :value="radio.score"
            >{{ radio.text }}</a-radio
          >
        </a-radio-group>
      </div>
    </div>
    <Adsense slotId="2010102587" />
    <div class="text-center mt-4 pb-8">
      <NuxtLink to="/test/animal/complete">
        <a-button
          class="bg-blue-500 mt-4 text-center w-full"
          type="primary"
          size="large"
        >
          결과보기
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
      "일 년에 두 계절만 있다고 상상해 보세요. 어느 계절을 고를 건가요?",
    radio: [
      {
        score: 50,
        text: "봄, 가을",
      },
      {
        score: 30,
        text: "여름, 겨울",
      },
      {
        score: 40,
        text: "봄, 여름",
      },
      {
        score: 20,
        text: "가을, 겨울",
      },
      {
        score: 10,
        text: "여름, 가을",
      },
    ],
  },
  {
    question: "어디가 가장 편한가요?",
    radio: [
      {
        score: 20,
        text: "형형색색의 가을 숲",
      },
      {
        score: 50,
        text: "정신없이 바쁜 도시",
      },
      {
        score: 40,
        text: "호수, 강, 바다처럼 큰 물가",
      },
      {
        score: 30,
        text: "여름철 집 근처의 공원",
      },
      {
        score: 10,
        text: "산 속",
      },
    ],
  },
  {
    question: "가장 좋아하는 슈퍼히어로는 무엇인가요?",
    radio: [
      {
        score: 30,
        text: "닥터 스트레인지를 존경합니다.",
      },
      {
        score: 40,
        text: "플래시의 놀라운 속도에 감탄하죠!",
      },
      {
        score: 10,
        text: "헐크만큼 강했으면 좋겠어요!",
      },
      {
        score: 20,
        text: "나는 울버린이 더 좋아요.",
      },
      {
        score: 50,
        text: "스파이더맨이 최고 아닌가요?",
      },
    ],
  },
  {
    question: "어떤 사람과 대화하고 싶나요?",
    radio: [
      {
        score: 10,
        text: "똑똑하면서도 냉소적인 사람",
      },
      {
        score: 20,
        text: "귀엽고 재미있는 사람",
      },
      {
        score: 40,
        text: "지적이면서 내성적인 사람",
      },
      {
        score: 50,
        text: "활기차고 재치있는 사람",
      },
      {
        score: 30,
        text: "착하고 현명한 사람",
      },
    ],
  },
  {
    question:
      "전 세계 어디에든 완벽한 집을 지을 수 있다면 어떤곳을 선택하시겠습니까?",
    radio: [
      {
        score: 10,
        text: "문명에서 멀리 떨어진 높은 산 위",
      },
      {
        score: 20,
        text: "모두가 서로를 아는 작은 마을",
      },
      {
        score: 30,
        text: "25명 정도밖에 살지 않는 섬",
      },
      {
        score: 50,
        text: "인기 있고 비싼 해변 휴양지",
      },
      {
        score: 40,
        text: "거대한 정원으로 둘러싸인 시골",
      },
    ],
  },
  {
    question: "만약 당신이 사물이라면 무엇일까요?",
    radio: [
      {
        score: 20,
        text: "식물원의 아름답고 희귀한 꽃",
      },
      {
        score: 50,
        text: "모두가 갖고 싶어 하는 새로운 기계 장치",
      },
      {
        score: 10,
        text: "초고속 경주용 자동차",
      },
      {
        score: 40,
        text: "다람쥐 가족이 사는 오래 된 나무",
      },
      {
        score: 30,
        text: "보물들과 함정들로 가득 찬 신비한 동굴",
      },
    ],
  },
  {
    question: "가장 좋아하는 단어를 고르세요.",
    radio: [
      {
        score: 50,
        text: "행복한",
      },
      {
        score: 20,
        text: "강력한",
      },
      {
        score: 30,
        text: "신비로운",
      },
      {
        score: 40,
        text: "친절한",
      },
      {
        score: 10,
        text: "부유한",
      },
    ],
  },
  {
    question: "문제를 어떻게 해결하시나요?",
    radio: [
      {
        score: 40,
        text: "먼저 계획을 세웁니다. 그러고 나서, 그것을 실행하기 위해 일하죠.",
      },
      {
        score: 50,
        text: "문제를 연구하고 온라인에서 해결책을 찾습니다.",
      },
      {
        score: 10,
        text: "문제가 사라지거나 더 이상 간과할 수 없을 때까지 기다립니다.",
      },
      {
        score: 30,
        text: "문제요? 문제가 하나도 없는데요!",
      },
      {
        score: 20,
        text: "상황에 따라 즉흥적으로 대처합니다. 대부분의 경우 효과가 있어요.",
      },
    ],
  },
  {
    question: "'재충전'을 위한 최고의 방법은 무엇인가요?",
    radio: [
      {
        score: 40,
        text: "오랫동안 해변 걷기",
      },
      {
        score: 10,
        text: "좋은 식당에서 친구들과 함께 맛있는 식사하기",
      },
      {
        score: 20,
        text: "가장 좋아하는 컴퓨터 게임하기",
      },
      {
        score: 30,
        text: "하루종일 자기",
      },
      {
        score: 50,
        text: "외출, 영화, 술집, 클럽",
      },
    ],
  },
  {
    question: "좋아하는 영화 장르는 무엇인가요?",
    radio: [
      {
        score: 10,
        text: "액션 영화",
      },
      {
        score: 20,
        text: "코미디 드라마",
      },
      {
        score: 50,
        text: "호러 영화",
      },
      {
        score: 30,
        text: "서사적인 영화",
      },
      {
        score: 40,
        text: "범죄 스릴러 & 미스테리",
      },
    ],
  },
];

const doChange = (index) => {
  console.log(answer.value);
  localStorage.setItem("animal-score", JSON.stringify(answer.value));
};
</script>
