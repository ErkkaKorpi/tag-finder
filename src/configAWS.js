const AWS = require("aws-sdk");
const { existsSync } = require("fs");
const { homedir } = require("os");

const configAWS = profile => {
  if (existsSync(`${homedir}/.aws/credentials`)) {
    AWS.config.credentials = new AWS.SharedIniFileCredentials({
      profile: profile
    });
  } else {
    console.log(
      "\x1b[31mCannot find .aws/credentials file, please configure aws credentials before using this tool\x1b[0m"
    );
    process.exit(1);
  }
};

module.exports = { configAWS };
