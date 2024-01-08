<template>
  <main class="test-layout flex justify-center flex-col">
    <h1 class="text-3xl text-center">성인 ADHD 테스트 자가진단</h1>
    <p class="text-center mb-2">
      본인이 성인 ADHD라고 생각이 드신다면<br />
      문항을 읽고 답해보세요.
    </p>
    <Adsense slotId="9319130475" />
    <div class="w-full px-2">
      <NuxtLink to="/test/adhd/play">
        <a-button
          class="bg-blue-500 mt-4 text-center w-full"
          type="primary"
          size="large"
        >
          START
        </a-button>
      </NuxtLink>
    </div>
    <article class="mt-4">
      <div class="post">
        <h2>성인 ADHD란</h2>
        <p>
          성인 ADHD는 주의력결핍 과잉행동장애(ADHD)라는 질환입니다. 아마
          생소하실 겁니다. 국내에서는 아직까지 잘 알려지지 않은 질병이기
          때문입니다. 많은 환자분들이 단순히 산만하다고 여겨 치료시기를 놓치는
          경우가 많습니다. 실제로 우리나라 전체 인구의 5%정도가 앓고 있다고
          합니다. 현재 의학계에서도 주목하고 있는 질환이기도 하죠. 당신이 만약
          집중력이 부족하고 충동조절이 힘들다면 꼭 한번 읽어보시기 바랍니다.
          혹시 나도 모르는 사이에 증상을 키우고 있지는 않은지 점검해보는 시간이
          될 것입니다.
        </p>
      </div>
      <div class="post">
        <h2>성인 ADHD 검사</h2>
        <p>
          주의력결핍 과잉행동장애(ADHD) 증상 여부를 확인할 수 있는 자가진단
          테스트입니다. 주의력결핍 과잉행동장애(ADHD)는 아동기에 주로 나타나는
          장애이지만, 최근에는 성인에게도 많이 나타나고 있습니다. 성인 ADHD
          환자들은 직장생활이나 대인관계에도 어려움을 겪는 경우가 많아
          사회적으로도 문제가 되고 있습니다. 자가진단 테스트를 통해 자신의
          상태를 점검해보고 전문가와 상담을 받아보세요.
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
const title = `성인 ADHD 테스트 자가진단 - F5 games`;
const description =
  "ADHD는 주의력결핍 과잉행동장애(ADHD)라는 질환입니다. 국내에서는 아직까지 잘 알려지지 않은 질병이기 때문입니다. 많은 환자분들이 단순히 산만하다고 여겨 치료시기를 놓치는 경우가 많습니다. 실제로 우리나라 전체 인구의 5%정도가 앓고 있다고 합니다. 현재 의학계에서도 주목하고 있는 질환이기도 하죠. 당신이 만약 집중력이 부족하고 충동조절이 힘들다면 꼭 한번 읽어보시기 바랍니다. 혹시 나도 모르는 사이에 증상을 키우고 있지는 않은지 점검해보는 시간이 될 것입니다.";
const logo = "https://f5game.s3.ap-northeast-2.amazonaws.com/adhd.webp";
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
