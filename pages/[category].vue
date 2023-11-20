<template>
  <Main :f5gameList="filterF5gameList" :categories="categories" />
</template>

<script setup>
import { f5gameList, categories } from "../assets/js/categories.js";

const route = useRoute();
const filterF5gameList = f5gameList.filter(
  (item) => item.category === route.params.category
);
</script>
