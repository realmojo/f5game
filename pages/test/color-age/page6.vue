<template>
  <main class="test-layout flex justify-center flex-col">
    <div class="pt-8">
      <div class="text-left pl-4">6. 어느색이 가장 먼저 보이시나요?</div>
      <img
        src="https://tistory.s3.ap-northeast-2.amazonaws.com/question6.png"
        class="pt-2 w-full"
        alt="qna1"
      />
      <a-radio-group v-model:value="value" @change="doChange(index)">
        <a-radio :style="radioStyle" :value="1">
          <div style="width: 200px; height: 40px; background: #fdf3eb"></div>
        </a-radio>
        <a-radio :style="radioStyle" :value="4">
          <div style="width: 200px; height: 40px; background: #587eb1"></div>
        </a-radio>
        <a-radio :style="radioStyle" :value="5">
          <div style="width: 200px; height: 40px; background: #3c4974"></div>
        </a-radio>
        <a-radio :style="radioStyle" :value="3">
          <div style="width: 200px; height: 40px; background: #a2cffa"></div>
        </a-radio>
        <a-radio :style="radioStyle" :value="2">
          <div style="width: 200px; height: 40px; background: #445537"></div>
        </a-radio>
      </a-radio-group>
    </div>
    <div class="text-center mt-4 pb-8">
      <NuxtLink to="/test/color-age/page7">
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
  localStorage.setItem("color-age-score6", value.value);
};
</script>
