const axios = require("axios");
const { vindiPJZenUrlBase, apiKey } = require("../../config/consts");

module.exports = {
  async registerPaymentProfile(req, res) {
    const urlPath = "/v1/payment_profiles";

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    const auth = {
      username: apiKey,
    };

    const paymentData = req.body.paymentData;

    try {
      response = await axios.post(
        `${vindiPJZenUrlBase}${urlPath}`,
        {
          holder_name: paymentData.holderName, 
          card_expiration: paymentData.cardExpirationDate,
          card_number: paymentData.cardNumber,
          card_cvv: paymentData.securityCode,
          customer_id: paymentData.userId,
          payment_method_code: "credit_card",
          // payment_company_code: customer.card.expirationDate, // "mastercard",
        },
        {
          headers,
          auth,
        }
      );

      res.send({
        data: response.data,
      });
    } catch (error) {
      res.send({
        error: error,
      });
    }
  },
};
