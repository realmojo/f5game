<template>
  <main class="test-layout flex justify-center flex-col">
    <div class="pt-8">
      <div class="text-left pl-4">8. 어느색이 가장 밝은가요?</div>
      <nuxt-img
        src="https://tistory.s3.ap-northeast-2.amazonaws.com/question8.png"
        class="pt-2 w-full"
        alt="qna1"
      />
      <a-radio-group v-model:value="value" @change="doChange(index)">
        <a-radio :style="radioStyle" :value="4">
          <div style="width: 200px; height: 40px; background: #305fee"></div>
        </a-radio>
        <a-radio :style="radioStyle" :value="2">
          <div style="width: 200px; height: 40px; background: #f98f49"></div>
        </a-radio>
        <a-radio :style="radioStyle" :value="1">
          <div style="width: 200px; height: 40px; background: #f61f2b"></div>
        </a-radio>
        <a-radio :style="radioStyle" :value="5">
          <div style="width: 200px; height: 40px; background: #ffd435"></div>
        </a-radio>
        <a-radio :style="radioStyle" :value="3">
          <div style="width: 200px; height: 40px; background: #a042bb"></div>
        </a-radio>
      </a-radio-group>
    </div>
    <Adsense slotId="7384922037" />
    <div class="text-center mt-4 pb-8">
      <NuxtLink to="/test/color-age/complete">
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
const value = ref(0);
const radioStyle = reactive({
  display: "flex",
  marginTop: "10px",
});

const doChange = (index) => {
  localStorage.setItem("color-age-score8", value.value);
};
</script>
