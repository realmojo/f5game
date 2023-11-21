<template>
  <main class="site-layout flex justify-center flex-col">
    <h1 class="text-4xl font-bold text-center pt-8">유튜브 동영상 다운로드</h1>
    <p class="text-center my-4">유튜브 주소를 입력해 주세요</p>
    <a-input
      v-model:value="youtubeUrl"
      placeholder="https://www.youtube.com/watch?v=Qg5-RpqenfQ"
      size="large"
      class="btn-search"
    />
    <h2 class="pt-4 px-2 text-sm text-left">
      당사의 서비스를 이용하면 당사의 서비스 약관 및
      <NuxtLink href="/util/ss/privacy" class="text-blue-500">
        개인정보보호방침 </NuxtLink
      >에 동의하는 것입니다.
      <strong>
        유튜브 주소를 입력하고 하단의 다운로드 버튼을 이용해 주세요.
      </strong>
    </h2>
    <Adsense slotId="3794471478" />
    <a-button
      @click="doSearch"
      :loading="isLoading"
      class="bg-blue-500 mt-4 text-center"
      type="primary"
      size="large"
    >
      DOWNLOAD
    </a-button>

    <div class="youtube-card" v-if="item.title">
      <a-card>
        <div class="ant-card-cover">
          <nuxt-img :alt="item.title" :src="item.thumbnail" loading="lazy" />
        </div>
        <a-card-meta :title="item.title" />

        <div class="pt-4">
          <a-select
            v-model:value="value2"
            style="width: 100%"
            :options="options2"
            @change="optionChange"
          ></a-select>
        </div>
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

    <a-row class="mt-8 px-2">
      <a-col span="24" class="text-center mb-4">
        <CloudDownloadOutlined class="text-6xl text-rose-400" />
        <h3 class="text-lg text-rose-500 mb-4">
          <strong>무료 다운로드</strong>
        </h3>
        <div class="text-center">
          <p>
            YouTube 링크를 입력하거나 입력하여 비디오를 찾으면 MP4 비디오 또는
            MP3 오디오를 다운로드 할 수 있습니다.
          </p>
        </div>
      </a-col>
      <a-col :xs="{ span: 24 }" class="text-center mb-4">
        <YoutubeOutlined class="text-6xl text-rose-400" />
        <h3 class="text-lg text-rose-500 mb-4">
          <strong>어디서나 빠르게</strong>
        </h3>
        <div class="text-center">
          <p>
            빠르고 사용하기 쉬움 YouTube 링크를 입력하거나 입력하여 비디오를
            찾으면 MP4 비디오 또는 MP3 오디오를 다운로드 할 수 있습니다.
          </p>
        </div>
      </a-col>
      <a-col :xs="{ span: 24 }" class="text-center mb-4">
        <CloseSquareOutlined class="text-6xl text-rose-400" />
        <h3 class="text-lg text-rose-500 mb-4">
          <strong>계정이 필요없음</strong>
        </h3>
        <div class="text-center">
          <p>로그인 및 설치가 필요없이 웹에서 바로 다운로드가 가능합니다.</p>
        </div>
      </a-col>
      <a-col :xs="{ span: 24 }" class="text-center mb-4">
        <LikeOutlined class="text-6xl text-rose-400" />
        <h3 class="text-lg text-rose-500 mb-4">
          <strong>고속 다운로드</strong>
        </h3>
        <div class="text-center">
          <p>
            자신의 와이파이 및 인터넷 속도 환경에 따라 다운로드 최대 1GB/s
            속도가 제공 됩니다.
          </p>
        </div>
      </a-col>
    </a-row>
  </main>
</template>

<script setup>
import {
  CloudDownloadOutlined,
  YoutubeOutlined,
  CloseSquareOutlined,
  LikeOutlined,
} from "@ant-design/icons-vue";
import { notification } from "ant-design-vue";
import axios from "axios";

const youtubeUrl = ref("");
const isLoading = ref(false);
const item = ref({});
const urlItem = ref({});
const value2 = ref("");
const options2 = ref([]);
const doSearch = async () => {
  const url = youtubeUrl.value;
  if (
    !url ||
    (url.indexOf("youtube") === -1 && url.indexOf("youtu.be") === -1)
  ) {
    openNotification("top");
    return;
  }
  isLoading.value = true;
  const { data } = await axios.get(
    `https://f5game-bot.herokuapp.com/youtube/download?url=${url}`
  );
  isLoading.value = false;
  item.value = data;
  options2.value = data.urls;
  urlItem.value = data.urls[0];
  value2.value = data.urls[0].value;
};

const optionChange = (item, e) => {
  urlItem.value = e;
};

const openNotification = (placement) => {
  notification["error"]({
    message: "올바르지 않은 주소 입니다.",
    description: "유튜브 주소가 올바르지 않습니다.",
    placement,
    duration: 10,
  });
};

const route = useRoute();
const metaUrl = `https://f5game.co.kr/${route.path}`;
const title = `유튜브 동영상 다운로드 - F5 games`;
const description =
  "유튜브를 무료로 다운로드 할 수 있는 사이트 입니다. 또한 동영상 뿐만 아니라 유튜브 자막까지 함께 추출이 가능합니다. 그 외 인스타그램, 틱톡, 트위터 동영상들도 무료로 다운로드가 가능합니다.";
const logo = "https://f5game.s3.ap-northeast-2.amazonaws.com/ss.webp";
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
