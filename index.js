const _ = require("lodash");
const logger = require("./config/logger")(module);
const { config } = require("./config/config");
const app = require("./config/express");
const redshiftClient = require("./config/redshift");

const { env, port } = config;
app.listen(port, () => {
  logger.info(`Running on ${env} mode`);
  logger.info(`Todo server listening on port ${port}.`);
});

module.exports = {
  app,
};
