import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router/router";

var cors = require('cors')

createApp(App).use(store).use(router).mount("#app");
