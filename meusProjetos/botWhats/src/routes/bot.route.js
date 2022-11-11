const controller = require("../controllers/bot.controller");

module.exports = (app) => {
  app.get("/", controller.enviar);
};
