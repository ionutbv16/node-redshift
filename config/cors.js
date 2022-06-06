const { WHITE_LIST_DOMAINS } = require("./config");

const corsOptions = {
  origin(origin, callback) {
    const originIsWhitelisted = WHITE_LIST_DOMAINS.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true,
};

module.exports = corsOptions;
