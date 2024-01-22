<template>
  <main class="test-layout flex justify-center flex-col">
    <h1 class="text-3xl text-center">우울증 테스트 자가진단 검사</h1>
    <p class="text-center mb-2">
      본인이 우울증이라고 생각이 드신다면<br />
      문항을 읽고 답해보세요.
    </p>
    <Adsense slotId="4168539206" />
    <div class="w-full px-2">
      <NuxtLink to="/test/depression/play">
        <a-button
          class="bg-blue-500 mt-4 text-center w-full"
          type="primary"
          size="large"
        >
          테스트 시작하기
        </a-button>
      </NuxtLink>
    </div>
    <article class="mt-4">
      <div class="post">
        <h2>관련검사</h2>
        <Testshare />
      </div>
      <div class="post">
        <h2>우울증이란</h2>
        <p>
          우울증은 정신 건강 장애 중 하나로, 지속적인 우울감과 희망 없는 감정,
          흥미와 즐거움을 잃는 것 등을 특징으로 합니다. 일상 생활에 심각한
          영향을 주며, 에너지 부족, 무기력 생각 등의 증상을 동반할 수 있습니다.
          유전적 요인, 신체적인 문제, 환경적 스트레스, 심리적 충격 등이 우울증의
          원인이 될 수 있습니다. 정확한 진단과 개인에 맞는 치료 방법이 중요한데,
          정신과 의사, 심리상담가와의 상담, 치료제 및 심리치료 등이
          효과적입니다. 운동, 건강한 식습관, 충분한 휴식도 도움이 될 수
          있습니다. 우울증은 치료 가능하며, 조기 발견과 치료로 삶의 질을
          향상시킬 수 있습니다.
        </p>
      </div>
      <div class="post">
        <h2>우울증 검사</h2>
        <p>
          우울증 테스트는 우울증의 증상과 정도를 평가하는데 사용됩니다. 주로
          자기평가 또는 의사에게 의뢰하여 진행됩니다. 대표적인 테스트로는 Beck
          우울증 척도, Hamilton 우울증 평가척도, PHQ-9 등이 있습니다. 이러한
          테스트들은 우울증 증상의 정도, 빈도 및 일상 생활에 미치는 영향을
          평가하여 우울증의 심각성을 확인하고, 적절한 치료 방안을 결정하는 데
          도움을 줍니다. 테스트는 보통 증상 유무, 그 정도, 일상 생활에 미치는
          영향 등을 점수화하여 평가하며, 이를 통해 우울증의 치료나 관리 방안을
          찾을 수 있습니다. 그러나 테스트 결과는 전문가의 진단과 함께 고려되어야
          하며, 정확한 진단과 적절한 치료를 위해서는 의사나 정신건강 전문가와의
          상담이 필요합니다.
        </p>
      </div>
    </article>
  </main>
</template>

<script setup>
const route = useRoute();
const metaUrl = `https://f5game.co.kr${route.path}`;
const title = `우울증 테스트 자가진단 검사 - F5 games`;
const description =
  "우울증은 정신 건강 장애 중 하나로, 지속적인 우울감과 희망 없는 감정, 흥미와 즐거움을 잃는 것 등을 특징으로 합니다. 일상 생활에 심각한 영향을 주며, 에너지 부족, 무기력 생각 등의 증상을 동반할 수 있습니다. 유전적 요인, 신체적인 문제, 환경적 스트레스, 심리적 충격 등이 우울증의 원인이 될 수 있습니다. 정확한 진단과 개인에 맞는 치료 방법이 중요한데, 정신과 의사, 심리상담가와의 상담, 치료제 및 심리치료 등이 효과적입니다. 운동, 건강한 식습관, 충분한 휴식도 도움이 될 수 있습니다. 우울증은 치료 가능하며, 조기 발견과 치료로 삶의 질을 향상시킬 수 있습니다.";
const logo = "https://f5game.s3.ap-northeast-2.amazonaws.com/depression.webp";
useHead({
  title: title,
  link: [
    {
      rel: "canonical",
      href: metaUrl,
    },
  ],
  meta: [
    {
      name: "description",
      content: description,
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:url",
      content: metaUrl,
    },
    {
      name: "og:article:author",
      content: "F5game",
    },
    {
      name: "og:site_name",
      content: "F5game",
    },
    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:image",
      content: logo,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@f5game.co.kr",
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      name: "twitter:image",
      content: logo,
    },
    {
      name: "apple-touch-icon",
      content: logo,
    },
  ],
});
</script>
