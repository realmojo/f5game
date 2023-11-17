<template>
  <main class="test-layout flex justify-center flex-col">
    <div class="pt-8">
      <div class="text-left pl-4">2. 어느색이 가장 마음에 드시나요?</div>
      <a-radio-group v-model:value="value" @change="doChange(index)">
        <a-radio :style="radioStyle" :value="3">
          <div style="width: 200px; height: 40px; background: #d829a9"></div>
        </a-radio>
        <a-radio :style="radioStyle" :value="2">
          <div style="width: 200px; height: 40px; background: #df548e"></div>
        </a-radio>
        <a-radio :style="radioStyle" :value="1">
          <div style="width: 200px; height: 40px; background: #d732b0"></div>
        </a-radio>
        <a-radio :style="radioStyle" :value="5">
          <div style="width: 200px; height: 40px; background: #aa2a9a"></div>
        </a-radio>
        <a-radio :style="radioStyle" :value="4">
          <div style="width: 200px; height: 40px; background: #e590d3"></div>
        </a-radio>
      </a-radio-group>
    </div>
    <div class="text-center mt-4 pb-8">
      <NuxtLink to="/test/color-age/page3">
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
  localStorage.setItem("color-age-score2", value.value);
};
</script>
