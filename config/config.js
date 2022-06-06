require("dotenv").config();

const envVars = process.env;

const WHITE_LIST_DOMAINS = ["http://localhost:3000"];

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  isDevelopment: envVars.NODE_ENV === "development",
  db: {
    host: envVars.DB_HOST,
  },
};

module.exports = {
  config,
  WHITE_LIST_DOMAINS,
};
