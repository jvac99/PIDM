const express = require("express");
const routeBot = require("../routes/bot.route");

module.exports = () => {
  let app = express();
  app.set("port", 3000);
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  routeBot(app);
  return app;
};
