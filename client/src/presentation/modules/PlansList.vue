<template>
  <div v-if="plansList.length > 0" class="plans-section">
    <div
      v-for="(plan, index) in plansList"
      :key="index"
      @click="selectPlan(plan)"
      :class="[
        { active: selectedPlan != null && selectedPlan.name === plan.name },
        `plans-section__card plans-section__card--${planColor(plan)}`,
      ]"
    >
      <h3>{{ plan.plan_items[0].product.name }}</h3>
      <h4 v-if="plan.plan_items[0].product.pricing_schema.price !== null">
        {{ plan.plan_items[0].product.pricing_schema.short_format }}
      </h4>
      <legend>{{ plan.interval_name }}</legend>

      <a
        v-if="isInteractive"
        href="#"
        @click.prevent
        :class="`button button--primary button--${planColor(plan) || 'orange'}`"
      >
        {{ isInteractive ? "SELECIONAR PLANO" : "COMECE AGORA" }}
      </a>

      <router-link
        v-else
        :to="{ name: 'price-page' }"
        :class="`button button--primary button--${planColor(plan) || 'orange'}`"
      >
        {{ isInteractive ? "SELECIONAR PLANO" : "COMECE AGORA" }}
      </router-link>

      <div class="divider"></div>

      <ul class="plans-section__card__list">
        <li v-for="(included, index) in plan.included" :key="index">
          <img
            src="@/assets/images/svg/icons/icon-check.svg"
            alt="Icon check"
          />
          <span>{{ included }}</span>
        </li>
      </ul>
    </div>

    <div
      v-if="hasCustomPlan"
      @click="selectPlan(customPlan)"
      :class="[
        {
          active: selectedPlan != null && selectedPlan.name === customPlan.name,
        },
        `plans-section__card plans-section__card--${planColor(customPlan)}`,
      ]"
    >
      <h3>{{ customPlan.plan_items[0].product.name }}</h3>
      <h5 v-if="customPlan.plan_items[0].product.pricing_schema.price !== null">
        {{ customPlan.plan_items[0].product.pricing_schema.price }}
      </h5>
      <legend>{{ customPlan.interval_name }}</legend>

      <a
        href="#"
        @click.prevent="$emit('onOpenGetInTouchForm')"
        :to="{ name: 'price-page' }"
        :class="`button button--primary button--${planColor(customPlan)}`"
      >
        ENTRE EM CONTATO
      </a>

      <div class="divider"></div>

      <ul class="plans-section__card__list">
        <li v-for="(included, index) in customPlan.included" :key="index">
          <img
            src="@/assets/images/svg/icons/icon-check.svg"
            alt="Icon check"
          />
          <span>{{ included }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import GetPlansService from "@/services/get-plans-service.js";

import plansList from "@/commons/content/plans.json";

export default {
  name: "app-plans-list",

  data() {
    return {
      plansList: [],

      selectedPlan: null,

      customPlan: {
        name: "Custom",
        status: "active",
        interval_name: "Saiba mais",
        included: [
          "Contabilidade completa",
          "Processo de abertura grátis",
          "Emissão de NFs pela PJzen",
          "Até 2 sócios (Pró-Labore)",
          "Entre 100K e 300K faturamento/mês",
        ],
        plan_items: [
          {
            product: {
              name: "Custom",
              unit: "Reais",
              status: "active",
              pricing_schema: {
                short_format: "On-Demand",
                price: "On-Demand",
              },
            },
          },
        ],
      },
    };
  },

  props: {
    isInteractive: {
      type: Boolean,
      required: true,
    },
    hasCustomPlan: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  async created() {
    this.plansList = plansList.plans;
    this.selectedPlan = plansList.plans[0];

    // this.isBusy = true;
    // const response = await GetPlansService.getPlans();
    // this.isBusy = false;

    // for (let index = 0; index < 3; index++) {
    //   this.plansList.push(response.data.plans[index]);
    // }

    // console.log(response);
  },

  computed: {},

  methods: {
    planColor(plan) {
      switch (plan.name) {
        case "Plano Zen I":
          return "orange";

        case "Plano Zen II":
          return "blue";

        case "Plano Zen III":
          return "blue-dark";

        default:
          return "blue-darkest";
      }
    },

    selectPlan(plan) {
      this.selectedPlan = plan;
      this.$emit("onSelectPlan", plan);
    },
  },

  mounted() {
    this.$emit("onSelectPlan", this.selectedPlan);
  },
};
</script>
<style lang=""></style>
