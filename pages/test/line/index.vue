<template>
  <!-- <div>
    <a-button
      type="primary"
      class="bg-blue-500 mt-4 text-center w-full"
      size="large"
      >만들기</a-button
    >
  </div> -->
  <div class="line-title">
    <div class="float-right">
      <NuxtLink to="/test/line/make">
        <a-button>만들기</a-button>
      </NuxtLink>
    </div>
    <p>나의 테스트는?</p>
  </div>
  <div class="float-right text-sm pr-2 pt-1 text-gray-400">작성자: 우와웅</div>
  <div class="clear-both"></div>
  <div class="mt-4 text-2xl font-bold text-center">설명을 적어주세요</div>
  <div class="mt-4 text-center text-sm text-gray-600">
    총 N개의 결과가 있어요!
  </div>
  <div class="px-4 pt-2">
    <a-input
      v-model:value="name"
      addon-before="이름"
      placeholder="이름을 적어주세요"
      size="large"
    />
  </div>
  <div class="px-4">
    <a-row>
      <a-col :span="12" class="pr-1">
        <a-button
          type="primary"
          class="bg-blue-500 mt-4 text-center w-full"
          size="large"
          @click="doClick()"
        >
          트위터로 확인
        </a-button>
      </a-col>
      <a-col :span="12" class="pl-1">
        <a-button
          type="ghost"
          class="bg-yellow-500 mt-4 text-center w-full"
          size="large"
        >
          카카오스토리 확인
        </a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
const name = ref("");

const doClick = () => {
  alert(1);
};
</script>
