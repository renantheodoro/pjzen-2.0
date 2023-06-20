import api from "@/services/api";

export default {
  getPlans() {
    return api().get("get-plans");
  },
};
