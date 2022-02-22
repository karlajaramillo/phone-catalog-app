const ROUTES = require("./phone.constants");
const express = require("express");
const controllers = require("./phone.controllers");

function phoneRouter (app) {
    const router = express.Router();

    router
    .get(ROUTES.getPhones, controllers.getPhones)
    .get(ROUTES.getPhonebyId, controllers.getPhoneById)

    app.use("/api", router)
}

module.exports = phoneRouter;