<template>
  <main class="test-layout flex justify-center flex-col">
    <h1 class="text-3xl text-center">정신연령 색상 테스트</h1>
    <p class="text-center mb-2">색상으로 알아보는 정신연령 테스트 입니다.</p>
    <Adsense slotId="2441578931" />
    <div class="w-full px-2">
      <NuxtLink to="/test/color-age/page1">
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
        <h2>정신연령 테스트란</h2>
        <p>
          사람들은 저마다 자신만의 정신연령 테스트를 가지고 있다. 성인이지만
          어린아이 같은 행동을 하는 어른도 있고 반대로 아이지만 성숙한 모습을
          보이는 어린이도 있다. 나는 어렸을 때 내가 굉장히 조숙하다고
          생각했었다. 하지만 자라면서 점점 더 어려지는 나를 발견할 수 있었다.
          그러던 어느 날 인터넷 서핑을 하던 도중 우연히 ‘정신연령 테스트’라는
          제목의 글을 보게 되었다. 순간 호기심이 발동하여 클릭하였고 이내 곧
          진지하게 문제를 풀기 시작했다. 그리고 결과는 충격적이었다. 20살
          이후로는 항상 10대 후반이었던 걸로 기억하는데 이날만큼은 놀랍게도
          40대가 나왔다. 기분 탓인지 모르겠지만 어쩐지 조금 씁쓸하기도 했다.
        </p>
      </div>
      <div class="post">
        <h2>정신연령 대하여</h2>
        <p>
          "나이보다 어려보인다" 라는 말 들어본 적 있으신가요? 흔히 동안이라는
          뜻이죠. 그렇다면 반대로 "나이보다 늙어보인다"라는 말도 들어보신 적
          있으실 겁니다. 이것 또한 노안이라는 뜻인데요. 이러한 사람들은 도대체
          왜 그런걸까요? 정답은 바로 우리의 뇌 속에 있습니다. 먼저 어린아이 같은
          경우 모든 일에 호기심이 많고 순수하기 때문에 사물을 바라볼 때 왜곡
          없이 있는 그대로 받아들이는 경향이 있습니다. 하지만 어른일 경우 현실에
          치여 살다보니 무언가를 받아들일 때 자신만의 주관성을 가지고 바라보는
          경향이 있죠. 그러다보니 자연스럽게 시각 차이가 발생할 수 밖에
          없습니다. 실제로 연구 결과에서도 만 2세 아이의 평균 지능지수는
          100이지만 성인의 평균 지능지수는 80~90 사이라고 합니다. 즉 어렸을 때
          보다 머리가 나빠진거죠. 물론 이건 단순 수치상의 얘기이고 실제로는 더
          높을 수도 있겠지만 어찌됐든 과거에 비해 인간의 두뇌능력이 퇴화되었다는
          건 부정할 수 없는 사실입니다.
        </p>
      </div>
      <div class="post">
        <h2>정신연령 나이</h2>
        <p>
          "나 요즘 진짜 왜 이러지?" 라는 말을 입에 달고 사는 사람이라면
          주목하자. 혹시 내가 너무 철없이 행동하거나 유치한 언행을 일삼고 있지는
          않은지 한 번 점검해볼 필요가 있다. 실제로 전문가들은 실제 나이보다 더
          중요한 것이 바로 ‘정신 연령’이라고 말한다. 육체 나이는 어쩔 수 없지만
          정신만은 건강하게 유지할 수 있다는 것이다. 그렇다면 어떻게 해야 조금
          더 성숙한 어른이 될 수 있을까? 우선 자신의 현재 상태를 정확하게
          파악해야 한다. 나는 평소 긍정적인 편인지 부정적인 편인지, 참을성이
          많은지 적은지 등등.. 그리고 나서 부족한 부분을 채워나가는 노력을
          꾸준히 한다면 분명 훨씬 더 나은 삶을 살 수 있을 것이다.
        </p>
      </div>
    </article>
  </main>
</template>

<script setup>
const route = useRoute();
const metaUrl = `https://f5game.co.kr${route.path}`;
const title = `정신연령 색상 테스트 - F5 games`;
const description =
  "사람들은 저마다 자신만의 정신연령 테스트를 가지고 있다. 성인이지만 어린아이 같은 행동을 하는 어른도 있고 반대로 아이지만 성숙한 모습을 보이는 어린이도 있다. 나는 어렸을 때 내가 굉장히 조숙하다고 생각했었다. 하지만 자라면서 점점 더 어려지는 나를 발견할 수 있었다.";
const logo = "https://f5game.s3.ap-northeast-2.amazonaws.com/color-age.webp";
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
