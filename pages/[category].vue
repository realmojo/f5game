<template>
  <Main :f5gameList="filterF5gameList" :categories="categories" />
</template>

<script setup>
import {
  f5gameList,
  categories,
  categoriesKr,
} from "../assets/js/categories.js";

const route = useRoute();
const filterF5gameList = f5gameList.filter(
  (item) => item.category === route.params.category
);
const title = `${categoriesKr[route.params.category]} - F5 games`;
const description = `${
  categoriesKr[route.params.category]
} 카테고리 - F5 games`;
const logo = "https://f5game.s3.ap-northeast-2.amazonaws.com/f5game.png";
useHead({
  title: title,
  link: [
    {
      rel: "canonical",
      href: `https://f5game.co.kr/${route.params.category}`,
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
      content: `https://f5game.co.kr/${route.params.category}`,
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
