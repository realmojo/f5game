<template>
  <div class="grid max-[640px]:grid-cols-4 sm:grid-cols-3 gap-4">
    <div
      v-for="item in items"
      :key="item.title"
      class="max-[640px]:col-span-2 sm:col-span-1"
    >
      <a-card size="small">
        <NuxtLink :to="`/${item.category}/${item.link}`">
          <div class="ant-card-cover">
            <img :alt="item.link" :src="item.image" />
          </div>
          <div class="ant-card-meta">
            <div class="ant-card-meta-detail">
              <div class="ant-card-meta-title">
                <h2 class="py-3 mt-2 px-2">{{ item.title }}</h2>
              </div>
            </div>
          </div>
        </NuxtLink>
      </a-card>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: Array,
});
</script>
