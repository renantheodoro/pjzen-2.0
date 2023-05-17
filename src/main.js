import { createApp } from "vue";
import * as VueRouter from "vue-router";
import routes from "./routes";

import App from "./App.vue";
import VueLazyload from "vue-lazyload";

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

app.config.globalProperties.$getPngUrl = (img) => {
  var images = require.context("@/assets/images/png/", false, /\.png$/);
  return images("./" + img + ".png");
};

app.use(router);
app.use(VueLazyload);

// App mount
app.mount("#app");

// CSS Libs
import "materialize-css/dist/css/materialize.min.css";
import "./assets/styles/index.scss";
