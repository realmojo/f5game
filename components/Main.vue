<template>
  <main>
    <a-layout class="main-layout flex flex-row">
      <a-row :gutter="8">
        <a-col
          :xs="{ span: 0 }"
          :sm="{ span: 4 }"
          :md="{ span: 6 }"
          :lg="{ span: 6 }"
        >
          <a-list bordered :data-source="categories">
            <template #renderItem="{ item }">
              <NuxtLink :to="`${item.link}`"
                ><a-list-item>{{ item.name }}</a-list-item>
              </NuxtLink>
            </template>
          </a-list>
        </a-col>
        <a-col
          :xs="{ span: 24 }"
          :sm="{ span: 20 }"
          :md="{ span: 18 }"
          :lg="{ span: 18 }"
        >
          <a-row :gutter="8"> <Items :items="f5gameList" /> </a-row
        ></a-col>
      </a-row>
    </a-layout>
  </main>
</template>
<script setup>
const props = defineProps({
  f5gameList: Array,
  categories: Array,
});
</script>
