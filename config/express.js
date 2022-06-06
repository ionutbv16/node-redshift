const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const createError = require("http-errors");
const routes = require("../app/routes/index");
const { config } = require("./config");
const { corsOptions } = require("./cors");
const logger = require("./logger")(module);

const app = express();
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (config.isDevelopment) {
  app.use((req, res, next) => {
    const { method, originalUrl } = req;
    logger.info(`${method} ${originalUrl}`);
    next();
  });
}

app.use("/", routes);

app.use((err, req, res, next) => {
  const { name, errors } = err;
  if (name === "ValidationError") {
    const msg = Object.keys(errors).map((field) => {
      const { message } = errors[field];
      return message;
    });
    return next(new createError(422, msg[0]));
  }
  return next(err);
});

app.use((req, res, next) => {
  next(new createError(404, "Not Found"));
});

app.use((err, req, res, next) => {
  const { status, message } = err;
  res.status(status || 500);
  res.json({
    error: message,
    status: status,
  });
});

module.exports = app;
