import api from "@/services/api";

export default {
  async registerPaymentProfile(paymentData) {
    try {
      const response = await api().post(
        "register-payment-profile",
        paymentData
      );

      if (response.error) {
        return { error: response.error };
      }

      return response;
    } catch (error) {
      return { error };
    }
  },
};
