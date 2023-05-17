import Home from "@/presentation/views/Home.vue";
import NotFound from "@/presentation/views/NotFound.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];
