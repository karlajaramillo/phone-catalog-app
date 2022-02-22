const express = require("express");
const phoneRouter = require("./modules/phone");
const {middlewares } = require("./config");

async function start() {
  try {
    const { PORT } = process.env;
    const app = express();

    // middlewares
    middlewares(app);
    // routes
    phoneRouter(app);

    app.listen(PORT, () => console.log(`Server running at: ${PORT}`));
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = start;
