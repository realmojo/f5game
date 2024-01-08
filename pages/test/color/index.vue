<template>
  <main class="test-layout flex justify-center flex-col">
    <h1 class="text-3xl text-center">색맹 사색자 테스트</h1>
    <Adsense slotId="5363843090" />
    <div class="w-full px-2">
      <NuxtLink to="/test/color/play">
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
        <h2>관련검사</h2>
        <Testshare />
      </div>
      <div class="post">
        <h2>색맹 테스트를 즐겨보세요.</h2>
        <p>
          세상에는 수많은 색맹이 존재한다. 그러나 우리는 단순히 색약이라는
          단어만 알고 있을 뿐 구체적으로 무엇인지 모르는 경우가 많다. 따라서 본
          테스트에서는 색맹이란 무엇이며 어떠한 증상을 보이는지 자세히
          설명하고자 한다. 또한 이를 통해 색상구별능력 테스트 방법도 해보세요.
        </p>
      </div>
      <div class="post">
        <h2>색맹테스트에 대하여</h2>
        <p>
          색맹테스트는 두 가지의 색상을 두고 색상이 다른 하나를 찾는 테스트
          입니다. 어떠한 지식도 필요로 하지 않으며 어린아이들 부터 어르신 분들도
          쉽게 테스트를 할 수 있습니다. 색맹테스트는 뇌 활동 증진 및 치매 예방
          효과가 있는 퍼즐 게임입니다.
        </p>
      </div>
      <div class="post">
        <h2>색맹테스트 분류</h2>
        <p>
          초록색과 빨간색을 구분하지 못하는것을 적록 색각이상이라고 하며
          노란색과 파란색을 구분하지 못하면 청황 색각이상 완전히 구분을 못하는
          경우는 전색맹이라고 합니다. 아주 가끔씩 4원색을 감지하는 사람들도
          있다고 합니다. 대부분의 포유류 동물들은 삼원색을 구분하기 힘들지만
          조류 중에서는 4원색, 5원색 모두 감지하는 동물들도 있다. 하지만 우리는
          인간이기 때문에 3원색을 기본으로 구분한다.
        </p>
      </div>
    </article>
  </main>
</template>

<script setup>
const route = useRoute();
const metaUrl = `https://f5game.co.kr${route.path}`;
const title = `색맹 색상 사색자 테스트 - F5 games`;
const description =
  "색맹테스트, 색약테스트, 색맹검사는 두 가지의 색상을 두고 색상이 다른 하나를 찾는 테스트 입니다. 어떠한 지식도 필요로 하지 않으며 어린아이들 부터 어르신분들도 쉽게 테스트를 할 수 있습니다. 색맹테스트는 뇌 활동 증진 및 치매 예방 효과가 있는 퍼즐 게임입니다.";
const logo = "https://f5game.s3.ap-northeast-2.amazonaws.com/color.webp";
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
