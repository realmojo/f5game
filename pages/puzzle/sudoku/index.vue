<template>
  <main class="test-layout flex justify-center flex-col">
    <h1 class="text-3xl text-center">스도쿠</h1>
    <Adsense slotId="7319976494" />
    <div class="w-full px-2">
      <NuxtLink
        v-for="item in types"
        :key="type"
        :to="`/puzzle/sudoku/play?type=${item}`"
      >
        <a-button
          class="bg-blue-500 mt-4 text-center w-full"
          type="primary"
          size="large"
        >
          {{ item.toUpperCase() }}
        </a-button>
      </NuxtLink>
    </div>

    <article>
      <div class="post">
        <h2>스도쿠를 즐겨보세요</h2>
        <p>
          누구나 한 번쯤은 풀어봤을 법한 두뇌 게임 ‘스도쿠’. 하지만 단순히 푸는
          것뿐만 아니라 어떻게 하면 더 빨리 풀 수 있을지 연구한다면 더욱
          재미있게 즐길 수 있을 것이다. 여기서 중요한 건 바로 규칙 이해다.
          문제를 풀기 위해선 먼저 각 가로줄과 세로줄 그리고 3×3 박스 안에
          1~9까지의 숫자가 중복되지 않도록 넣어야 한다. 이때 9개의 칸 모두 같은
          숫자가 들어가면 안 된다. 또 단 하나의 빈칸이라도 있다면 전체 답에서는
          제외된다. 스도쿠는 수학자 레온하르트 오일러가 고안한 것으로
          ‘한붓그리기’라는 뜻을 가지고 있습니다. 숫자가 겹치지 않아야 한다는
          기본 규칙만 지키면 쉽게 풀 수 있는 두뇌게임이기 때문에 온 가족이 함께
          즐기기 좋은 놀이입니다.
        </p>
      </div>
      <div class="post">
        <h2>스도쿠에 대하여</h2>
        <p>
          가로 세로 9칸씩 총 81칸으로 이루어진 정사각형의 빈칸에 1부터 9까지의
          숫자를 채워 넣는 퍼즐 게임입니다. 스도쿠는 수학자 레온하르트 오일러가
          고안한 것으로 ‘한붓그리기’라는 뜻을 가지고 있습니다. 숫자가 겹치지
          않아야 한다는 기본 규칙만 지키면 쉽게 풀 수 있는 두뇌게임이기 때문에
          온 가족이 함께 즐기기 좋은 놀이입니다.
        </p>
      </div>
      <div class="post">
        <h2>스도쿠 치매예방</h2>
        <p>
          요즘 들어 머리 쓸 일이 별로 없어서 그런지 가끔가다 두뇌회전이 필요할
          때가 있다. 그럴 때마다 나는 어렸을 적 즐겨 하던 스도쿠를 하곤 한다.
          물론 온라인 게임으로도 즐길 수 있지만 나에게는 아날로그 방식이 더
          친숙하다. 내가 어릴 적엔 인터넷이라는 게 활성화되지 않아 주로 신문
          지면 광고나 잡지 부록 같은 곳에서만 만날 수 있었는데 스마트폰 시대가
          열리면서 이젠 언제 어디서든 간편하게 즐길 수 있게 되었다. 아직 안 해본
          사람이라면 한 번쯤 도전해 보는 걸 추천한다.
        </p>
      </div>
    </article>
  </main>
</template>
<script setup>
const types = ["easy", "normal", "hard", "crazy"];

const route = useRoute();
const metaUrl = `https://f5game.co.kr${route.path}`;
const title = `스도쿠 퍼즐게임 - F5 games`;
const description =
  "스도쿠는 가로 세로 9칸씩 총 81칸으로 이루어진 정사각형의 빈칸에 1부터 9까지의 숫자를 채워 넣는 퍼즐 게임입니다. 스도쿠는 수학자 레온하르트 오일러가 고안한 것으로 ‘한붓그리기’라는 뜻을 가지고 있습니다. 숫자가 겹치지 않아야 한다는 기본 규칙만 지키면 쉽게 풀 수 있는 두뇌게임이기 때문에 온 가족이 함께 즐기기 좋은 놀이입니다.";
const logo = "https://f5game.s3.ap-northeast-2.amazonaws.com/sudoku.webp";
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
