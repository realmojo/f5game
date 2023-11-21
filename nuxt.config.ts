const title = "F5games - 다양하고 유익한 유틸리티 및 HTML5 퍼즐게임";
const description =
  "F5games 모든 유틸리티들은 무료로 즐길 수 있습니다. 유튜브 다운로드, 트위터 영상 저장, 인스타그램 저장 HTML5 퍼즐게임 등 다양하게 즐겨보세요.";
const logo = "https://f5game.s3.ap-northeast-2.amazonaws.com/f5game.png";
export default defineNuxtConfig({
  css: ["~/assets/css/style.css", "~/assets/css/mobile.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image-edge"],
  plugins: ["@/plugins/antd", "@/plugins/gtag"],
  app: {
    head: {
      htmlAttrs: { lang: "ko" },
      title: title,
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      script: [
        {
          src: "https://t1.kakaocdn.net/kakao_js_sdk/v1/kakao.min.js",
        },
        {
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9130836798889522",
          crossorigin: "anonymous",
          async: true,
        },
        {
          src: "//wcs.naver.net/wcslog.js",
          type: "text/javascript",
        },
        {
          innerHTML:
            'if(!wcs_add) var wcs_add = {}; wcs_add["wa"] = "145da0b4f222fe0"; if(window.wcs) {wcs_do();}',
          type: "text/javascript",
        },
        {
          innerHTML:
            '(function (c, l, a, r, i, t, y) { c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); }; t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i + "?ref=bwt"; y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y); })(window, document, "clarity", "script", "ju0kl7d4d4");',
          type: "text/javascript",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://f5game.co.kr",
        },
      ],
      meta: [
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "theme-color",
          content: "#fff",
        },
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
          content: "https://f5game.co.kr",
        },
        {
          name: "og:article:author",
          content: "F5games",
        },
        {
          name: "og:site_name",
          content: "F5games",
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
    },
  },
});
