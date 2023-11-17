<template>
  <div class="flex justify-center px-4 pt-4 pb-4">
    <div class="twitter-share-button inline" style="cursor: pointer">
      <a
        :href="`https://twitter.com/intent/tweet?text=${props.title}&url=${props.url}`"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://tistory.s3.ap-northeast-2.amazonaws.com/twitter.png"
          alt="twitter-share-icon"
          style="width: 90px"
        />
      </a>
    </div>
    <div
      class="facebook-share-button pt-1 inline"
      @click="shareFacebook()"
      style="cursor: pointer"
    >
      <img
        src="https://tistory.s3.ap-northeast-2.amazonaws.com/facebook.png"
        alt="facebook-share-icon"
        style="width: 80px"
      />
    </div>
    <div class="kakao-share-button inline" style="cursor: pointer">
      <button id="kakao-link-btn">
        <img
          src="https://tistory.s3.ap-northeast-2.amazonaws.com/kakao.png"
          alt="kakao-share-icon"
          style="width: 90px"
        />
      </button>
    </div>

    <div
      class="link-share-button inline pt-2"
      @click="copy()"
      style="cursor: pointer"
    >
      <img
        src="https://tistory.s3.ap-northeast-2.amazonaws.com/link.png"
        alt="link-share-icon"
        style="width: 70px"
      />
    </div>
  </div>
</template>

<script setup>
import { message } from "ant-design-vue";

const props = defineProps({
  title: String,
  url: String,
  imageUrl: String,
});
const shareFacebook = () => {
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      props.url
    )}&t=${props.title}`,
    "_blank",
    "width=600, height: 400"
  );
};
const success = () => {
  message.success("URL이 복사되었습니다.");
};
const copy = () => {
  success();
  var textarea = document.createElement("textarea");
  textarea.value = props.url;

  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, 9999); // 추가

  document.execCommand("copy");
  document.body.removeChild(textarea);
};
const createKakaoButton = () => {
  // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
  if (window.Kakao) {
    const kakao = window.Kakao;
    // 중복 initialization 방지
    if (!kakao.isInitialized()) {
      // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
      kakao.init("5b3054ed11032778fbcd220b25fd0c8e");
    }
    kakao.Link.createDefaultButton({
      // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
      container: "#kakao-link-btn",
      objectType: "feed",
      content: {
        title: props.title,
        description: props.title,
        imageUrl: props.imageUrl,
        link: {
          mobileWebUrl: props.url,
          webUrl: props.url,
        },
      },
      buttons: [
        {
          title: "플레이 하기",
          link: {
            mobileWebUrl: props.url,
            webUrl: props.url,
          },
        },
      ],
    });
  }
};
onMounted(() => {
  createKakaoButton();
});
</script>
