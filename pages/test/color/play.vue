<template>
  <main class="test-layout flex justify-center flex-col">
    <Ready
      v-if="isStart === false"
      :text="isStartText === false ? 'Ready' : 'Start'"
    />
    <div :class="isStart === false ? 'opacity-0' : 'opacity-100'">
      <h1 class="text-3xl text-center pt-4">Level {{ stage.level }}</h1>
      <div class="text-2xl text-center text-orange-300">{{ timerTime }}</div>
      <div
        v-if="boardWidth > 0"
        class="board-wrap text-center pt-4 text-center"
        :style="`min-width: ${boardWidth}px; max-width: ${boardWidth}px; min-height: ${boardWidth}px; max-height: ${boardWidth}px; margin: 0 auto`"
      >
        <a-row :gutter="gutter">
          <a-col
            ref="innerTile"
            :span="totalSpan / stage.tileNumber"
            v-for="(item, index) in new Array(
              stage.tileNumber * stage.tileNumber
            )"
            :key="index"
            @click="doClick(index)"
          >
            <div
              class="tile-inner"
              :style="`height: ${tileHeight}px; margin-top: ${tileMarginTop}px; background-color: ${
                stage.answerKey === index
                  ? tileColor.answerColor
                  : tileColor.normalColor
              } `"
            ></div>
          </a-col>
        </a-row>
      </div>
    </div>
  </main>
</template>
<script setup>
import "~/assets/css/ready.scss";
import {
  stages,
  totalSpan,
  getRandomNumber,
  easyColor,
  mediumColor,
  hardColor,
  crazyColor,
} from "~/assets/js/stage.js";

const isStart = ref(false);
const isStartText = ref(false);
const boardWidth = ref(0);
const tileHeight = ref(0);
const tileMarginTop = ref(0);
const innerTile = ref(null);
const level = ref(1);
const stage = ref({});
const tileColor = ref([]);
const tileColorRandomNumber = ref(getRandomNumber(9));
const gutter = ref(8);
const timerTime = ref(15);

const doClick = (i) => {
  if (timerTime.value <= 0) {
    localStorage.setItem("f5game-color-level", stage.value.level);
    navigateTo("/test/color/complete");
  } else if (stage.value.answerKey === i) {
    doNextStage();
  } else {
    timerTime.value -= 2;
  }
};

const initHeight = (st) => {
  const a = document.getElementsByClassName("tile-inner");
  tileHeight.value = a[0].offsetWidth - gutter.value;

  const t = boardWidth.value - tileHeight.value * st.tileNumber;
  tileMarginTop.value = t / (st.tileNumber + 1);
};

const initStageTile = (st) => {
  initHeight(st);
  if (st.name === "easy") {
    tileColor.value = easyColor[tileColorRandomNumber.value];
  } else if (st.name === "medium") {
    tileColor.value = mediumColor[tileColorRandomNumber.value];
  } else if (st.name === "hard") {
    tileColor.value = hardColor[tileColorRandomNumber.value];
  } else if (st.name === "crazy") {
    tileColor.value = crazyColor[tileColorRandomNumber.value];
  }
};

const doNextStage = () => {
  if (stage.value.level === 60) {
    localStorage.setItem("f5game-color-level", stage.value.level);
  } else {
    timerTime.value = 15;
    stage.value = stages[stage.value.level];
    tileColorRandomNumber.value = getRandomNumber(9);
    initStageTile(stage.value);
  }
};

const intervalTimerInit = () => {
  const intervalTimer = setInterval(() => {
    timerTime.value -= 1;
    if (timerTime.value <= 0) {
      localStorage.setItem("f5game-color-level", stage.value.level);
      navigateTo("/test/color/complete");
      clearInterval(intervalTimer);
    }
  }, 1000);
};

onMounted(() => {
  setTimeout(() => {
    isStart.value = true;
    intervalTimerInit();
  }, 3800);
  setTimeout(() => {
    isStartText.value = true;
  }, 2000);

  const initStage = stages[level.value - 1];
  stage.value = initStage;
  boardWidth.value =
    window.innerWidth - 20 > 500 ? 500 : window.innerWidth - 20;
  setTimeout(() => {
    initStageTile(initStage);
  }, 10);
});

onUpdated(() => {
  initHeight(stage.value);
});
</script>
