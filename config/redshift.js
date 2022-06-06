const Redshift = require('node-redshift');
require("dotenv").config();

const envVars = process.env;

const client = {
  user: envVars.REDSHIFT_USER,
  database: envVars.REDSHIFT_DATABASE,
  password: envVars.REDSHIFT_PASSWORD,
  port: envVars.REDSHIFT_PORT,
  host: envVars.REDSHIFT_HOST,
};

const redshiftClient = new Redshift(client);

module.exports = redshiftClient;
