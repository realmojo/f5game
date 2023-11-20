<template>
  <main class="test-layout flex justify-center flex-col">
    <div class="pt-8">
      <div class="text-left pl-4">4. 일몰 사진 하나를 고르세요</div>
      <a-radio-group v-model:value="value" @change="doChange(index)">
        <a-radio :style="radioStyle" :value="3">
          <nuxt-img
            src="https://tistory.s3.ap-northeast-2.amazonaws.com/question4-a.png"
            class="pt-2 w-full"
            alt="qna1"
          />
        </a-radio>
        <a-radio :style="radioStyle" :value="2">
          <nuxt-img
            src="https://tistory.s3.ap-northeast-2.amazonaws.com/question4-b.png"
            class="pt-2 w-full"
            alt="qna1"
          />
        </a-radio>
        <a-radio :style="radioStyle" :value="4">
          <nuxt-img
            src="https://tistory.s3.ap-northeast-2.amazonaws.com/question4-c.png"
            class="pt-2 w-full"
            alt="qna1"
          />
        </a-radio>
        <a-radio :style="radioStyle" :value="1">
          <nuxt-img
            src="https://tistory.s3.ap-northeast-2.amazonaws.com/question4-d.png"
            class="pt-2 w-full"
            alt="qna1"
          />
        </a-radio>
      </a-radio-group>
    </div>
    <div class="text-center mt-4 pb-8">
      <NuxtLink to="/test/color-age/page5">
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
  localStorage.setItem("color-age-score4", value.value);
};
</script>
