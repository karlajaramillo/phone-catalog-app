const express = require("express");

function middlewares(app) {
  try {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  } catch (err) {
    console.log("error", err.message);
  }
}

module.exports = middlewares;