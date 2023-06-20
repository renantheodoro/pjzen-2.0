const axios = require("axios");
const { vindiPJZenUrlBase, apiKey } = require("../../config/consts");

module.exports = {
  async registerCustomer(req, res) {
    const urlPath = "v1/customers";

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    const auth = {
      username: apiKey,
    };

    const userData = req.body.user;

    try {
      const response = await axios.post(
        `${vindiPJZenUrlBase}${urlPath}`,
        {
          name: userData.name,
          email: userData.email,
          phones: [
            {
              phone_type: "mobile",
              number: userData.phone, // format: "551191234"
              extension: "",
            },
          ],
          // address: {
          //   street: userData.address.street,
          //   number: userData.address.number,
          //   zipcode: userData.address.zipcode,
          //   neighborhood: userData.address.neighborhood,
          //   city: userData.address.city,
          //   state: userData.address.uf,
          //   country: "BR",
          // },
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
