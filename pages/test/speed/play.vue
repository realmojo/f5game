<template>
  <main class="speed-layout flex text-center flex-col bg-gray-800">
    <div class="mb-10">
      <div v-if="result.length === 5">결과를 기다리는 중입니다...</div>
      <div v-else>초록색이 나오면 터치하세요 ({{ result.length }}/5)</div>
    </div>

    <div
      class="speed-circle pt-8"
      :class="isChange ? 'bg-green-400' : 'bg-red-500'"
      @click="doClick"
    >
      <div v-if="isChange">{{ diff }} ms</div>
    </div>
  </main>
</template>

<script setup>
const isChange = ref(false);
const result = [];
const startTime = ref(0);
const endTime = ref(0);
const diff = ref(0);
const doClick = () => {
  if (isChange.value) {
    endTime.value = new Date().getTime();

    diff.value = endTime.value - startTime.value;
    result.push(diff.value);

    localStorage.setItem("speed-score", JSON.stringify(result));

    if (result.length === 5) {
      setTimeout(() => {
        navigateTo("/test/speed/complete");
      }, 3000);
    } else {
      setTimeout(() => {
        isChange.value = false;
        init();
      }, 2000);
    }
  } else {
    alert("너무 빨라요!");
  }
};
const init = () => {
  setTimeout(() => {
    isChange.value = true;
    diff.value = 0;
    startTime.value = new Date().getTime();
    console.log(startTime.value);
  }, 3000);
};
onMounted(() => {
  init();
});
</script>
