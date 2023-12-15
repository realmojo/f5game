<template>
  <main class="site-layout flex justify-center flex-col">
    <h1 class="text-4xl font-bold text-center pt-8">트위터 영상 다운로드</h1>
    <p class="text-center my-4">트위터 주소를 입력해 주세요</p>
    <a-input
      v-model:value="twitterUrl"
      placeholder="https://twitter.com/ScienceGuys_/status/1724411757391913459"
      size="large"
      class="btn-search"
    />
    <h2 class="pt-4 px-2 text-sm text-left">
      당사의 서비스를 이용하면 당사의 서비스 약관 및
      <NuxtLink href="/util/twitterdownload/privacy" class="text-blue-500">
        개인정보보호방침 </NuxtLink
      >에 동의하는 것입니다.
      <strong>
        트위터 주소를 입력하고 하단의 다운로드 버튼을 이용해 주세요.
      </strong>
    </h2>
    <Adsense slotId="5822711314" />
    <a-button
      @click="doSearch"
      :loading="isLoading"
      class="bg-blue-500 mt-4 text-center"
      type="primary"
      size="large"
    >
      DOWNLOAD
    </a-button>

    <div class="twitter-card" v-if="item.content">
      <a-card>
        <div class="ant-card-cover">
          <img :alt="item.content" :src="item.thumbnail" />
        </div>
        <a-card-meta :title="item.content" />

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
          :data-type="urlItem.content_type.split('/')[1]"
          :download="`twitter-${new Date().getTime()}`"
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
        <CloudDownloadOutlined class="text-6xl text-blue-400" />
        <h3 class="text-lg text-blue-500 mb-4">
          <strong>무료 다운로드</strong>
        </h3>
        <div class="text-center">
          <p>
            Twitter 링크를 입력하거나 입력하여 비디오를 찾으면 MP4 비디오 또는
            MP3 오디오를 다운로드 할 수 있습니다.
          </p>
        </div>
      </a-col>
      <a-col :xs="{ span: 24 }" class="text-center mb-4">
        <TwitterOutlined class="text-6xl text-blue-400" />
        <h3 class="text-lg text-blue-500 mb-4">
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
        <CloseSquareOutlined class="text-6xl text-blue-400" />
        <h3 class="text-lg text-blue-500 mb-4">
          <strong>계정이 필요없음</strong>
        </h3>
        <div class="text-center">
          <p>로그인 및 설치가 필요없이 웹에서 바로 다운로드가 가능합니다.</p>
        </div>
      </a-col>
      <a-col :xs="{ span: 24 }" class="text-center mb-4">
        <LikeOutlined class="text-6xl text-blue-400" />
        <h3 class="text-lg text-blue-500 mb-4">
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
  TwitterOutlined,
  CloseSquareOutlined,
  LikeOutlined,
} from "@ant-design/icons-vue";
import { notification } from "ant-design-vue";
import axios from "axios";

const twitterUrl = ref("");
const isLoading = ref(false);
const item = ref({});
const urlItem = ref({});
const value2 = ref("");
const options2 = ref([]);
const doSearch = async () => {
  const url = twitterUrl.value;

  if (!url || (url.indexOf("twitter") === -1 && url.indexOf("t.co") === -1)) {
    openNotification("top");
    return;
  }
  isLoading.value = true;
  const { data } = await axios.get(
    `https://f5game-bot.herokuapp.com/twitter/videos?url=${url}`
  );
  isLoading.value = false;
  item.value = data;
  options2.value = data.videoItems;
  urlItem.value = data.videoItems[0];
  value2.value = data.videoItems[0].value;
};

const optionChange = (item, e) => {
  urlItem.value = e;
};

const openNotification = (placement) => {
  notification["error"]({
    message: "올바르지 않은 주소 입니다.",
    description: "트위터 주소가 올바르지 않습니다.",
    placement,
    duration: 10,
  });
};

const route = useRoute();
const metaUrl = `https://f5game.co.kr${route.path}`;
const title = `트위터 영상 저장 - F5 games`;
const description =
  "트위터 영상 저장을 무료 다운로드 하는 사이트 입니다. 전용 앱 없이 저장하면 누구나 쉽게 사용할 수 있습니다. iPhone, Android 및 PC에서 사용할 수 있으므로 자유롭게 사용하십시오.";
const logo = "https://f5game.s3.ap-northeast-2.amazonaws.com/twitter.webp";
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
