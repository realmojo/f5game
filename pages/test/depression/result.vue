<template>
  <main class="test-layout flex justify-center flex-col pt-4">
    <div>
      <h1 class="text-center text-2xl font-bold">당신의 우울증 상태는?</h1>

      <div class="text-center pt-4 pb-4 text-4xl">{{ name }}</div>
      <Adsense slotId="2827537373" />
      <div class="text-left px-4 pt-4 pb-4 depression-result-text">
        {{ text }}
      </div>
    </div>
    <Share
      title="우울증 테스트 자가진단 검사 - F5 Games"
      imageUrl="https://f5game.s3.ap-northeast-2.amazonaws.com/depression.webp"
      url="https://f5game.co.kr/test/depression"
    />
  </main>
</template>

<script setup>
const isResult = ref(false);
const name = ref("");
const text = ref("");

onMounted(() => {
  let sum = 0;
  const result = JSON.parse(localStorage.getItem("f5game-depression-answer"));
  for (let i = 1; i < result.length; i += 1) {
    sum += result[i];
  }
  if (0 <= sum && sum <= 21) {
    name.value = "매우 양호";
    text.value =
      "1단계는 가벼운 우울감으로, 이것이 가끔씩 나타나지만 일상 생활에 큰 영향을 주지 않습니다. 평소와 다르게 우울함을 느낄 수 있지만, 이는 일상적인 변동으로 여겨집니다. 즐겨하는 일들에 대한 흥미가 줄어들 수 있지만, 여전히 그런 감정이 일상생활을 크게 방해하지는 않습니다.";
  } else if (22 <= sum && sum <= 42) {
    name.value = "양호 단계";
    text.value =
      "2단계에서는 우울한 감정이 더 자주 드러나며, 일상생활에 영향을 주기 시작합니다. 일상적인 활동에 대한 흥미가 줄어들고, 우울함을 자주 느낄 수 있어요. 하지만 이것이 일상 생활을 크게 방해하지는 않습니다. 감정이 가끔 변화하는 것으로 여겨집니다.";
  } else if (43 <= sum && sum <= 63) {
    name.value = "정상 단계";
    text.value =
      "3단계에서는 우울한 기분이 심해져서 일상 생활에 큰 영향을 미칩니다. 에너지가 없는 느낌을 자주 경험하며, 집중력이 떨어지고 사람들과의 소통이 줄어듭니다. 이로 인해 성과와 관계에 영향을 줄 수 있습니다.";
  } else if (64 <= sum && sum <= 84) {
    name.value = "경고 단계";
    text.value =
      "4단계에서는 우울증이 매우 심해져 일상 생활이 거의 불가능할 정도로 영향을 받을 수 있습니다. 심한 스트레스, 무기력함, 더 심각한 정신적 고통을 경험할 수 있고, 일상 생활이 크게 어려워집니다. 사회적 관계나 직장에서의 업무에 큰 어려움을 겪을 수 있어요.";
  } else if (85 <= sum && sum <= 105) {
    name.value = "위험 단계";
    text.value =
      "5단계에서는 심각한 우울감이 계속되어 생활에 심각한 위험을 초래할 수 있는 수준입니다. 자살 생각이나 행동이 나타날 수 있으며, 일상 생활을 유지하는 것이 거의 불가능할 정도로 심각한 우울증의 증상이 나타날 수 있습니다. 전문가의 지원이 매우 필요한 단계입니다.";
  }
});
</script>
