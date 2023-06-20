const axios = require("axios");
const { vindiPJZenUrlBase, apiKey } = require("../../config/consts");

module.exports = {
  async createSubscription(req, res) {
    const urlPath = "/v1/subscriptions";

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    const auth = {
      username: apiKey,
    };

    const subscriptionData = req.body.subscriptionData;

    console.log('--- subscriptionData', subscriptionData)

    try {
      response = await axios.post(
        `${vindiPJZenUrlBase}${urlPath}`,
        {
          plan_id: subscriptionData.planId,
          customer_id: subscriptionData.customerId,
          payment_method_code: "credit_card",
          product_items: [{ product_id: subscriptionData.productId }],
        },
        {
          headers,
          auth,
        }
      );

      console.log('response', response.data)
      
      res.send({
        data: response.data,
      });
    } catch (error) {
      console.log('response', error)
      res.send({
        error: error,
      });
    }
  },
};
