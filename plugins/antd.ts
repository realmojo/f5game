import { defineNuxtPlugin } from "#app";
import "ant-design-vue/dist/antd.css";

import {
  Button,
  Card,
  Layout,
  List,
  Radio,
  Spin,
  Row,
  Col,
  Popover,
  Tag,
  Select,
} from "ant-design-vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .use(Button)
    .use(Card)
    .use(Layout)
    .use(List)
    .use(Radio)
    .use(Spin)
    .use(Row)
    .use(Col)
    .use(Popover)
    .use(Tag)
    .use(Select);
});
