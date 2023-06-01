import { createApp } from "vue";

// CSS import
import "./assets/styles/index.scss";
import "vue3-carousel/dist/carousel.css";

import App from "./App.vue";
import * as VueRouter from "vue-router";
import routes from "./routes";
import VueLazyload from "vue-lazyload";
import axios from "axios";
import VueAxios from "vue-axios";

import { Collapse } from "vue-collapsed";

// Route definition
const router = new VueRouter.createRouter({
  linkActiveClass: "active",
  history: VueRouter.createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

// App config
const app = createApp(App);

app.config.globalProperties.$getWebpUrl = (img) => {
  var images = require.context("@/assets/images/webp/", false, /\.webp$/);
  return images("./" + img + ".webp");
};

app.config.globalProperties.$getSvgIconUrl = (img) => {
  var images = require.context("@/assets/images/svg/icons/", false, /\.svg$/);
  return images("./" + img + ".svg");
};

app.config.globalProperties.$getSvgUrl = (img) => {
  var images = require.context("@/assets/images/svg/", false, /\.svg$/);
  return images("./" + img + ".svg");
};

app.config.globalProperties.$getPngUrl = (img) => {
  var images = require.context("@/assets/images/png/", false, /\.png$/);
  return images("./" + img + ".png");
};

// App Usages
app.use(router);
app.use(VueLazyload);
app.use(VueAxios, axios);

// App Components
app.component(Collapse, "Collapse");

// App mount
app.mount("#app");
