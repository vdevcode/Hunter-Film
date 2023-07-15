import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { talwind } from "../dist/output.css";
import api from "@/services/api.js";

const app = createApp(App);
app.use(router);
app.use(talwind);

app.config.globalProperties.$http = api;

app.mount("#app");
