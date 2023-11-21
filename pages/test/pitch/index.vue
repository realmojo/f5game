<template>
  <main class="test-layout flex justify-center flex-col">
    <h1 class="text-3xl text-center">절대음감 테스트</h1>
    <Adsense slotId="4961454191" />
    <div class="w-full px-2">
      <NuxtLink to="/test/pitch/play">
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
        <h2>절대음감 테스트란</h2>
        <p>
          절대음감(Perfect Pitch)은 음악적 음계나 음의 높낮이를 듣고 바로 그
          음을 인식하는 능력을 말해요. 이 능력을 가진 사람들은 음악을 듣거나
          연주할 때 특정 음계의 음이 무엇인지를 즉각적으로 알아차릴 수 있어요.
          이 능력은 타고난 것이며, 가르치거나 훈련으로 얻을 수 없는 경우가
          많아요.
        </p>
      </div>
      <div class="post">
        <h2>절대음감에 대하여</h2>
        <p>
          절대음감을 가진 사람들은 음악을 학습하거나 연주할 때 도움이 될 수
          있지만, 반드시 음악적인 능력을 가진다는 것은 아니에요. 음악적인 훈련과
          경험이 없어도 바로 음을 인식할 수 있지만, 음악을 이해하고 연주하는
          것은 다른 과정이에요.
        </p>
      </div>
      <div class="post">
        <h2>절대음감과 상대음감</h2>
        <p>
          절대음감은 음 높낮이를 듣고 즉각 알아차리는 능력이며, 타고난 것이고
          음악 재능과는 별개일 수 있어요. 상대음감은 음들의 관계를 이해하고,
          훈련과 경험으로 발전하는 능력이에요.
        </p>
      </div>
    </article>
  </main>
</template>

<script setup>
const route = useRoute();
const metaUrl = `https://f5game.co.kr/${route.path}`;
const title = `절대음감 테스트 - F5 games`;
const description =
  "절대음감 테스트 입니다. 피아노, 기타 소리의 청각 소리를 맞춰보세요. 여러분들도 한번 도전해보세요!";
const logo = "https://f5game.s3.ap-northeast-2.amazonaws.com/pitch.webp";
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
