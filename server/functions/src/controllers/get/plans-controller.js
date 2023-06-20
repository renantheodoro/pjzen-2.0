const axios = require("axios");
const { vindiPJZenUrlBase, apiKey } = require("../../config/consts");

module.exports = {
  async getPlans(req, res) {
    const urlPath = "v1/plans";

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

      res.send(response.data);
    } catch (error) {
      res.send({
        error: error,
      });
    }
  },
};
