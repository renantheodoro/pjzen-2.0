const axios = require("axios");
const { vindiPJZenUrlBase, apiKey } = require("../../config/consts");

module.exports = {
  async getPaymentMethods(req, res) {
    const urlPath = "/v1/payment_methods";

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    const auth = {
      username: apiKey,
      password: null,
    };

    let response;

    try {
      response = await axios.get(`${vindiPJZenUrlBase}${urlPath}`, {
        headers,
        auth,
      });

      res.send({
        data: response.data,
      });
    } catch (error) {
      console.error(error);
      res.send({
        error: error,
      });
    }
  },
};
