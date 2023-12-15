<template>
  <main class="site-layout flex justify-center flex-col">
    <div class="youtube-card" v-if="item.title">
      <a-card>
        <div class="ant-card-cover">
          <img :alt="item.title" :src="item.thumbnail" />
        </div>

        <div class="ant-card-meta">
          <div class="ant-card-meta-detail">
            <div class="ant-card-meta-title">
              <h2 class="py-3 mt-2 px-2 text-2xl">제목: {{ urlItem.title }}</h2>
            </div>
          </div>
        </div>

        <NuxtLink to="/util/ss" class="mr-4">
          <a-button
            class="bg-blue-500 mt-4 text-center"
            type="primary"
            size="large"
          >
            뒤로가기
          </a-button></NuxtLink
        >
        <a
          class="link link-download subname ga_track_events download-icon"
          :href="urlItem.value"
          :data-quality="urlItem.quality"
          :data-type="urlItem.type"
          :download="urlItem.title"
          target="_self"
        >
          <a-button
            class="bg-blue-500 mt-4 text-center"
            type="primary"
            size="large"
          >
            DOWNLOAD
          </a-button>
        </a>
      </a-card>
    </div>
  </main>
</template>
<script setup>
const item = ref({ title: "" });
const urlItem = ref({});
onMounted(() => {
  console.log(item.value);
  item.value = JSON.parse(localStorage.getItem("f5game-ss-item"));
  urlItem.value = JSON.parse(localStorage.getItem("f5game-ss-urlItem"));
});
</script>
