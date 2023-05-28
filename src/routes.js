import Home from "@/presentation/views/Home.vue";
import PricePage from "@/presentation/views/PricePage.vue";
import PaymentFlow from "@/presentation/views/PaymentFlow.vue";
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

  {
    path: "/abrir-empresa",
    name: "open-company",
    component: PaymentFlow,
    meta: {
      title: "Abrir empresa",
      view: "open-company",
    },
  },

  {
    path: "/trocar-de-contador",
    name: "change-counter",
    component: PaymentFlow,
    meta: {
      title: "Trocar de contador",
      view: "change-counter",
    },
  },

  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];
