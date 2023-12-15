// import { defineNuxtPlugin } from "#app";
// import "ant-design-vue/dist/reset.css";
// // import Antd from "ant-design-vue";

// import {
//   Button,
//   Card,
//   CardMeta,
//   Input,
//   Layout,
//   List,
//   ListItem,
//   Radio,
//   RadioGroup,
//   Spin,
//   Row,
//   Col,
//   Popover,
//   Textarea,
//   Tag,
//   Select,
// } from "ant-design-vue";

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(Button);
//   nuxtApp.vueApp.use(Card);
//   nuxtApp.vueApp.use(CardMeta);
//   nuxtApp.vueApp.use(Input);
//   nuxtApp.vueApp.use(Layout);
//   nuxtApp.vueApp.use(List);
//   nuxtApp.vueApp.use(ListItem);
//   nuxtApp.vueApp.use(Radio);
//   nuxtApp.vueApp.use(RadioGroup);
//   nuxtApp.vueApp.use(Spin);
//   nuxtApp.vueApp.use(Row);
//   nuxtApp.vueApp.use(Col);
//   nuxtApp.vueApp.use(Popover);
//   nuxtApp.vueApp.use(Textarea);
//   nuxtApp.vueApp.use(Tag);
//   nuxtApp.vueApp.use(Select);
// });
import { defineNuxtPlugin } from "#app";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Antd);
});
