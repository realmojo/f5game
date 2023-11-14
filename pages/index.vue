<template>
  <main>
    <a-layout class="site-layout">
      <a-row>
        <Items :items="items" />
      </a-row>
    </a-layout>
  </main>
</template>

<script setup>
const items = ref([
  {
    image: "https://f5game.s3.ap-northeast-2.amazonaws.com/match.png",
    link: "match",
    category: "puzzle",
    title: "같은그림찾기 - 치매예방 두뇌운동",
    description:
      "같은그림을 제한시간 이내에 빠르게 찾아보세요. 같은그림을 3초간 보여준 후 빠르게 찾아내는 두뇌운동 게임입니다.",
  },
  {
    image: "https://f5game.s3.ap-northeast-2.amazonaws.com/sudoku.png",
    link: "sudoku",
    category: "puzzle",
    title: "스도쿠",
    description:
      "스도쿠 퍼즐의 목표는 9×9 격자를 숫자로 채워, 각 행과 열과 3×3구역이 1에서 9까지의 숫자 모두를 포함하도록 하는 것입니다.",
  },
  {
    image: "https://f5game.s3.ap-northeast-2.amazonaws.com/memory.png",
    link: "memory",
    category: "puzzle",
    title: "순간기억력",
    description:
      "여러개의 반짝이는 순간 기억력을 테스트 해보세요. 당신의 기억력은 얼마나 좋으신가요? 순간의 기억력이 당신의 지능입니다.",
  },
  {
    image: "https://f5game.s3.ap-northeast-2.amazonaws.com/color.png",
    link: "color",
    category: "test",
    title: "색맹 테스트",
    description:
      "비슷한 색상 중에서 다른 색상을 찾아보세요. 사색자 테스트이며 색맹인지 아닌지 구분할 수 있습니다.",
  },
  {
    image: "https://f5game.s3.ap-northeast-2.amazonaws.com/pitch.png",
    link: "pitch",
    category: "test",
    title: "절대음감 테스트",
    description:
      "절대음감이란 어떤 음을 들었을 때 그 고유의 진동수를 파악하여 정확한 음정을 찾아내는 청각 능력을 말합니다. 여러분들도 한번 도전해보세요!",
  },
  {
    image: "https://f5game.s3.ap-northeast-2.amazonaws.com/color-age.png",
    link: "color-age",
    category: "test",
    title: "정신연령 테스트",
    description:
      "색상으로 알아보는 정신연령 테스트를 해보세요. 10대부터 60대까지 확인 가능합니다.",
  },
  {
    image: "https://f5game.s3.ap-northeast-2.amazonaws.com/mbti.png",
    link: "mbti",
    category: "test",
    title: "MBTI 검사 성격 이상형 테스트",
    description:
      "몇 가지 문항을 통하여 자신의 MBTI유형과 이성의 MBTI유형을 확인할 수 있습니다.",
  },
  {
    image: "https://f5game.s3.ap-northeast-2.amazonaws.com/adhd.png",
    link: "adhd",
    category: "test",
    title: "성인 ADHD 테스트 자가진단",
    description:
      "몇 가지 문항을 통하여 자신의 성인 ADHD인지 확인할 수 있습니다.",
  },
  {
    image: "https://f5game.s3.ap-northeast-2.amazonaws.com/animal.png",
    link: "animal",
    category: "test",
    title: "영적동물 테스트",
    description:
      "몇 가지 문항을 통하여 자신의 영적동물이 어느것과 어울리는지 확인할 수 있습니다.",
  },
  {
    image: "https://ss.f5game.co.kr/logo.png",
    link: "ss",
    category: "util",
    title: "유튜브 동영상 다운로드",
    description:
      "유튜브 동영상 다운로드 기능을 무료로 제공합니다. 웹 모바일 모두 무료로 유튜브 영상을 다운로드 할 수 있습니다.",
  },
  {
    image: "https://ytsubdownload.f5game.co.kr/logo.png",
    link: "ytsubdownload",
    category: "util",
    title: "유튜브 자막 다운로드",
    description:
      "유튜브 자막 다운로드 기능을 제공합니다. 해당 애플리케이션은 모두 무료로 이용가 능합니다.",
  },
  {
    image: "https://twitterdownload.f5game.co.kr/logo.png",
    link: "twitterdownload",
    category: "util",
    title: "트위터 영상 다운로드",
    description:
      "트위터 영상 다운로드를 할 수 있습니다. 모든 디바이스에서 모두 무료로 이용가 능합니다.",
  },
  {
    image: "https://f5game.s3.ap-northeast-2.amazonaws.com/f5game.png",
    link: "line",
    category: "test",
    title: "한 문장 테스트",
    description:
      "한 문장으로 다양한 테스트 케이스를 만들고 친구들과 공유해보세요.",
  },
]);
// const recentlyItems = ref([]);
// const popularItems = ref([]);
// const page = ref(1);

// const searchText = computed(() => {
//   return route.query.search;
// });

// let queryParams = "";
// if (searchText.value) {
//   queryParams = `?search=${searchText.value}`;
// }

// const url = `${runtimeConfig.public.BASE_URL}/mind/main.php${queryParams}`;
// const { data } = await useFetch(url, {
//   key: "main",
//   method: "get",
// });

// const d = JSON.parse(data._rawValue);
// items.value = d.items;
// recentlyItems.value = d.recentlyItems;
// popularItems.value = d.popularItems;

// const url = `/api/mind/main${queryParams}`;
// const { data } = await useFetch(url, {
//   key: "main",
//   method: "get",
// });

// items.value = data._rawValue.items;
// recentlyItems.value = data._rawValue.recentlyItems;
// popularItems.value = data._rawValue.popularItems;

// const doMoreItem = async () => {
//   // const url = `/api/mind/list?page=${page.value}`;
//   const url = `${runtimeConfig.public.BASE_URL}/mind/list.php?page=${page.value}`;
//   const { data } = await useFetch(url, {
//     key: "moreList",
//     method: "get",
//   });
//   const d = JSON.parse(data._rawValue);
//   const moreItems = d;
//   if (moreItems.length) {
//     page.value += 1;
//     items.value = items.value.concat(moreItems);
//   }
// };
</script>
