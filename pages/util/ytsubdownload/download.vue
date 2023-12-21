<template>
  <a-layout>
    <div class="flex justify-center flex-col">
      <Content class="site-layout" style="padding: 0 10px">
        <h1 class="text-3xl font-bold text-center pt-8 mb-8">
          유튜브 자막 다운로드
        </h1>
        <div class="text-center my-4" v-if="isLoading">
          <Space>
            <Spin tip="Downloading" size="large"></Spin>
          </Space>
        </div>
        <p class="text-center mt-2 mb-4">
          자동으로 다운이 되지 않으면 아래에서 다시 가능합니다. 메인 으로 가서
          다시 URL를 입력해주세요.
        </p>
        <Adsense slotId="7138828264" />
        <div class="text-center">
          <a href="/util/ytsubdownload" target="_self">
            <Button
              class="btn-start mt-4 text-center"
              type="primary"
              size="large"
            >
              메인으로 가기
            </Button>
          </a>
        </div>
      </Content>
    </div>
  </a-layout>
</template>
<script setup>
const isLoading = ref(true);
onMounted(() => {
  const item = localStorage.getItem("f5game-youtube-script")
    ? JSON.parse(localStorage.getItem("f5game-youtube-script"))
    : "";
  const value = localStorage.getItem("f5game-youtube-radio")
    ? Number(localStorage.getItem("f5game-youtube-radio"))
    : 1;
  setTimeout(() => {
    const text = [];
    const filename = `${item.title}.txt`;
    for (const d of item.items) {
      if (value === 1) {
        text.push(`${d.time}\t${d.text}`);
      } else if (value === 2) {
        text.push(d.text);
      }
    }
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text.join("\n"))
    );
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    isLoading.value = false;
  }, 3000);
});
</script>
