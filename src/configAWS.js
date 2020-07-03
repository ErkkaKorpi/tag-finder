const AWS = require("aws-sdk");

const configAWS = profile => {
  AWS.config.credentials = new AWS.SharedIniFileCredentials({
    profile: profile
  });
};

module.exports = { configAWS };
