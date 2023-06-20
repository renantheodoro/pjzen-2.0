import api from "@/services/api";

export default {
  async createSubscription(subscriptionData) {
    try {
      const response = await api().post(
        "create-subscription",
        subscriptionData
      );

      console.log('createSubscription', response)

      if (response.error) {
        return { error: response.error };
      }

      return response;
    } catch (error) {
      return { error };
    }
  },
};
