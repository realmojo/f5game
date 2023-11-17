<template>
  <main class="test-layout flex justify-center flex-col">
    <div class="text-center text-2xl pt-8">
      <h1>질문을 읽고 하나를 선택해주세요</h1>
    </div>
    <div class="pt-8">
      <div class="text-left pl-4">1. 어느색이 가장 눈에 보이나요?</div>
      <nuxt-img
        src="https://tistory.s3.ap-northeast-2.amazonaws.com/question1.png"
        class="pt-2 w-full"
        alt="qna1"
      />
      <a-radio-group v-model:value="value" @change="doChange(index)">
        <a-radio :style="radioStyle" :value="4">
          <div style="width: 200px; height: 40px; background: #0d000c"></div>
        </a-radio>
        <a-radio :style="radioStyle" :value="5">
          <div style="width: 200px; height: 40px; background: #604164"></div>
        </a-radio>
        <a-radio :style="radioStyle" :value="1">
          <div style="width: 200px; height: 40px; background: #ad775d"></div>
        </a-radio>
        <a-radio :style="radioStyle" :value="2">
          <div style="width: 200px; height: 40px; background: #c0a77e"></div>
        </a-radio>
        <a-radio :style="radioStyle" :value="3">
          <div style="width: 200px; height: 40px; background: #423265"></div>
        </a-radio>
      </a-radio-group>
    </div>
    <div class="text-center mt-4 pb-8">
      <NuxtLink to="/test/color-age/page2">
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
const value = ref(0);
const radioStyle = reactive({
  display: "flex",
  marginTop: "10px",
});

const doChange = (index) => {
  localStorage.setItem("color-age-score1", value.value);
};
</script>
