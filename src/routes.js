import Home from "@/presentation/views/Home.vue";
import PricePage from "@/presentation/views/PricePage.vue";
import NotFound from "@/presentation/views/NotFound.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/quanto-custa",
    name: "price-page",
    component: PricePage,
  },

  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];
