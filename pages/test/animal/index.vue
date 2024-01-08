<template>
  <main class="test-layout flex justify-center flex-col">
    <h1 class="text-3xl text-center">영적동물 테스트</h1>
    <p class="text-center mb-2">
      본인의 영적동물은 어떤것인지 테스트 해보세요.
    </p>
    <Adsense slotId="2653100417" />
    <div class="w-full px-2">
      <NuxtLink to="/test/animal/page1">
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
        <h2>영적동물 테스트란</h2>
        <p>
          영적동물이란 말 그대로 인간보다 상위 존재 혹은 초자연적인 힘과의
          연결성을 가진다는 의미입니다. 현대 사회에서는 이러한 사람들은 특정
          종교나 단체 소속이라는 인식이 강하지만 고대 그리스 시대만 해도 그렇지
          않았습니다. 예를 들어 플라톤 철학자 같은 경우도 자신 스스로 매우
          영적이고 초월적인 무언가와의 연결성이 있다고 주장했고 실제로 그랬다고
          합니다. 하지만 그런 정신 상태 덕분에 더 뛰어난 지혜를 가질 수 있었다고
          하니 아이러니하죠? 자 그럼 여기서 질문 하나 드리겠습니다. 여러분
          주위엔 혹시 본인이 영적 동물이라고 말하는 사람이 있나요? 만약 있다면
          어떻게 반응하실 건가요?
        </p>
      </div>
      <div class="post">
        <h2>영적동물 대하여</h2>
        <p>
          인간처럼 지성도 있고 감정 및 의지도 가지고 있으며 언어능력까지도
          갖추고 있는 동물 종들은 무엇이 있을까? 이러한 특성을 모두 지니고 있는
          동물종을 우리는 '영적동물' 이라고 부른다. 또한 오늘날 과학자들은
          유인원에서부터 현생인류까지의 진화과정을 연구하면서 침팬지와 보노보
          그리고 오랑우탄 같은 영장류에서도 지능지수가 높은 종이 존재한다는
          증거를 찾아냈다. 따라서 현재 지구상에는 수많은 종류의 영적동물 들이
          살고 있을 것으로 추정된다. 그렇다면 어떠한 특징을 지닌 생물체들이
          영적동물 로 분류될까?
        </p>
      </div>
      <div class="post">
        <h2>영적동물 분류</h2>
        <p>
          사람들은 흔히 동물하면 떠오르는 이미지가 있다. 사자, 호랑이, 곰, 토끼
          등등.. 하지만 인간도 동물이라는 걸 아는 사람은 그리 많지 않다. 우리
          인류 또한 영장류라는 분류 안에 속해있으며 이러한 특징으로는 직립보행,
          도구사용, 사회성 발달 등이 있다. 그럼 왜 굳이 다른 동물 이야기를
          꺼내며 시작했을까? 바로 여기서 말하고자 하는 바가 있기 때문이다.
          "영적동물"이란 무엇일까?
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
const title = `영적동물 테스트 - F5 games`;
const description =
  "영적동물 테스트란 인간보다 상위 존재 혹은 초자연적인 힘과의 연결성을 가지는 테스트 입니다. 현대 사회에서는 이러한 사람들은 특정 종교나 단체 소속이라는 인식이 강하지만 고대 그리스 시대만 해도 그렇지 않았습니다. 예를 들어 플라톤 철학자 같은 경우도 자신 스스로 매우 영적이고 초월적인 무언가와의 연결성이 있다고 주장했고 실제로 그랬다고 합니다.";
const logo = "https://f5game.s3.ap-northeast-2.amazonaws.com/animal.webp";
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
