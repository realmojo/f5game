<template>
  <main class="test-layout flex justify-center flex-col">
    <h1 class="text-3xl text-center">같은그림찾기</h1>
    <Adsense slotId="7319976494" />
    <div class="w-full px-2">
      <NuxtLink to="/puzzle/match/play">
        <a-button
          class="bg-blue-500 mt-4 text-center w-full"
          type="primary"
          size="large"
        >
          START
        </a-button>
      </NuxtLink>
    </div>
    <article>
      <div class="post">
        <h2>같은그림찾기를 즐겨보세요</h2>
        <p>
          "같은 그림 찾기"는 주로 어린이들이나 두뇌 훈련을 위해 사용되는 퍼즐
          게임입니다. 이 게임은 여러 그림 중에서 서로 동일한 그림을 찾는 것을
          목표로 합니다.
        </p>
      </div>
      <div class="post">
        <h2>같은그림찾기에 대하여</h2>
        <p>
          인기있는 같은그림찾기 게임은 Match3라고도 불립니다. 서로다른 여러개의
          그림들 중에서 모양이 같은 그림을 선택하면 됩니다. 특별한 지식을 필요로
          하지 않습니다. 두뇌와 집중력만 있으면 됩니다.
        </p>
      </div>
    </article>
  </main>
</template>

<script setup>
const route = useRoute();
const metaUrl = `https://f5game.co.kr${route.path}`;
const title = `같은그림찾기 퍼즐게임 - F5 games`;
const description =
  "F5game.co.kr 은 최신 최고의 무료 온라인 게임을 제공합니다. 같은그림을 제한시간 이내에 빠르게 찾아보세요.";
const logo = "https://f5game.s3.ap-northeast-2.amazonaws.com/match.webp";
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
