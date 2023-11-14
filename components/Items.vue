<template>
  <a-col
    v-for="item in items"
    :key="item.title"
    :xs="{ span: 24 }"
    :sm="{ span: 24 }"
    :md="{ span: 12 }"
    :lg="{ span: 8 }"
    :xl="{ span: 8 }"
    :xxl="{ span: 8 }"
    class="pb-2"
  >
    <a-card size="small">
      <div class="ant-card-cover">
        <nuxt-img :alt="item.link" :src="item.image" loading="lazy" />
      </div>
      <NuxtLink :to="`/${item.category}/${item.link}`">
        <div class="ant-card-meta">
          <div class="ant-card-meta-detail">
            <div class="ant-card-meta-title">
              <h2 class="text-sm py-3 mt-2">{{ item.title }}</h2>
            </div>
          </div>
        </div>
      </NuxtLink>
    </a-card>
  </a-col>
</template>

<script setup>
const props = defineProps({
  items: Array,
});
</script>
