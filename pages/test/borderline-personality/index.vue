<template>
  <main class="test-layout flex justify-center flex-col">
    <h1 class="text-3xl text-center">
      경계성 인격장애(성격장애) 테스트 자가진단
    </h1>
    <Adsense slotId="1265562744" />
    <div class="w-full px-2">
      <NuxtLink to="/test/borderline-personality/play">
        <a-button
          class="bg-blue-500 mt-4 text-center w-full"
          type="primary"
          size="large"
        >
          열기
        </a-button>
      </NuxtLink>
    </div>
    <article class="mt-4">
      <div class="post">
        <h2>경계성 인격장애란</h2>
        <p>
          경계성 인격장애(Borderline Personality Disorder, BPD)는 정체성에 대한
          불안, 강한 감정 변동, 대인관계의 불안정성 등이 특징인 정신건강
          이상으로, 이를 평가하기 위한 테스트는 전문가의 진단과 함께 신중한
          고려가 필요합니다. 그러나 여기에는 경계성 인격장애에 대한 이해를 돕기
          위한 예시로 사용될 수 있는 30개의 문항이 있습니다. 이러한 문항은
          자가평가를 통해 자신의 경향성을 파악하는 데 도움이 될 수 있습니다.
        </p>
      </div>
      <div class="post">
        <h2>관련검사</h2>
        <Testshare />
      </div>
    </article>
  </main>
</template>

<script setup>
const route = useRoute();
const metaUrl = `https://f5game.co.kr${route.path}`;
const title = `경계성 인격장애(성격장애) 테스트 자가진단 - F5 games`;
const description =
  "경계성 인격장애(Borderline Personality Disorder, BPD)는 정체성에 대한 불안, 강한 감정 변동, 대인관계의 불안정성 등이 특징인 정신건강 이상으로, 이를 평가하기 위한 테스트는 전문가의 진단과 함께 신중한 고려가 필요합니다. 그러나 여기에는 경계성 인격장애에 대한 이해를 돕기 위한 예시로 사용될 수 있는 30개의 문항이 있습니다. 이러한 문항은 자가평가를 통해 자신의 경향성을 파악하는 데 도움이 될 수 있습니다.";
const logo =
  "https://f5game.s3.ap-northeast-2.amazonaws.com/borderline-personality.webp";
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
