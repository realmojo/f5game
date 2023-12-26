<template>
  <main class="test-layout flex justify-center flex-col">
    <h1 class="text-3xl text-center">반응속도 테스트</h1>
    <Adsense slotId="8897750578" />
    <div class="w-full px-2">
      <NuxtLink to="/test/speed/play">
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
        <h2>반응속도 테스트란</h2>
        <p>
          반응 속도 테스트는 사람이 외부 자극에 반응하는 빠른 능력을 측정하는
          테스트입니다. 일반적으로 컴퓨터나 모바일 앱을 통해 진행되며, 화면에
          나타나는 신호에 대한 반응 속도를 측정합니다. 주로 색이나 모양이
          변하거나 신호가 나타나면 사용자는 최대한 빨리 해당 신호에 반응하여
          클릭하거나 터치합니다. 이를 통해 신호가 나타난 순간부터 사용자가
          반응하여 신호를 처리하는 데 걸리는 시간을 측정하여 반응 속도를 알 수
          있습니다. 이 테스트는 주로 인지 능력, 뇌의 신속한 처리 속도, 집중력
          등을 평가하는 데 사용됩니다.
        </p>
      </div>
    </article>
  </main>
</template>

<script setup>
const route = useRoute();
const metaUrl = `https://f5game.co.kr${route.path}`;
const title = `반응속도 테스트 - F5 games`;
const description =
  "반응 속도 테스트는 사람이 외부 자극에 반응하는 빠른 능력을 측정하는 테스트입니다. 일반적으로 컴퓨터나 모바일 앱을 통해 진행되며, 화면에 나타나는 신호에 대한 반응 속도를 측정합니다. 주로 색이나 모양이 변하거나 신호가 나타나면 사용자는 최대한 빨리 해당 신호에 반응하여 클릭하거나 터치합니다. 이를 통해 신호가 나타난 순간부터 사용자가 반응하여 신호를 처리하는 데 걸리는 시간을 측정하여 반응 속도를 알 수 있습니다. 이 테스트는 주로 인지 능력, 뇌의 신속한 처리 속도, 집중력 등을 평가하는 데 사용됩니다.";
const logo = "https://f5game.s3.ap-northeast-2.amazonaws.com/reactspeed.webp";
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
