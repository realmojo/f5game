<template>
  <ul>
    <li v-for="item in items" :key="item.link">
      <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const items = [
  {
    link: "/test/adhd",
    title: "성인 ADHD 테스트 자가진단",
  },
  {
    link: "https://mindpang.com/health/left-right-brain-test",
    title: "좌뇌우뇌 테스트",
  },
  {
    link: "/test/animal",
    title: "영적동물 테스트",
  },
  {
    link: "/test/borderline-personality",
    title: "경계성 인격장애(성격장애) 테스트",
  },
  {
    link: "/test/color",
    title: "색맹 테스트",
  },
  {
    link: "/test/color-age",
    title: "정신연령 테스트",
  },
  {
    link: "/test/depression",
    title: "우울증 테스트",
  },
  {
    link: "/test/mbti",
    title: "MBTI 궁합 테스트",
  },
  {
    link: "/test/pitch",
    title: "절대음감 테스트",
  },
  {
    link: "/test/speed",
    title: "반응속도 테스트",
  },
];
</script>
