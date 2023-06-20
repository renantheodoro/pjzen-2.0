const plansController = require("./controllers/get/plans-controller");
const paymentMethodsController = require("./controllers/get/payment-methods-controller");
const customerController = require("./controllers/post/register-customer-controller");
const paymentProfileController = require("./controllers/post/payment-profiles-controller");
const subscriptionController = require("./controllers/post/subscription-controller");

module.exports = (app) => {
  // GET
  app.get("/get-plans", plansController.getPlans);
  app.get("/get-payment-methods", paymentMethodsController.getPaymentMethods);

  // POST
  app.post("/register-customer", customerController.registerCustomer);
  app.post(
    "/register-payment-profile",
    paymentProfileController.registerPaymentProfile
  );
  app.post("/create-subscription", subscriptionController.createSubscription);
};
