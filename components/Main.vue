<template>
  <main>
    <a-layout class="main-layout flex flex-row">
      <div class="grid grid-cols-5 gap-4 mt-2">
        <div class="max-[640px]:hidden sm:col-span-1">
          <a-list bordered :data-source="categories">
            <template #renderItem="{ item }">
              <NuxtLink :to="`${item.link}`"
                ><a-list-item>{{ item.name }}</a-list-item>
              </NuxtLink>
            </template>
          </a-list>
        </div>
        <div class="max-[640px]:col-span-5 sm:col-span-4">
          <Items :items="f5gameList" />
        </div>
      </div>
    </a-layout>
  </main>
</template>
<script setup>
const props = defineProps({
  f5gameList: Array,
  categories: Array,
});
const selectedKeys = ref(["1"]);
const collapsed = ref(false);
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
