#!/usr/bin/env node

const logic = require("./src/logic");
const cli = require("./src/cli");
const fileWrite = require("./src/writeResultsToFile");
const { configAWS } = require("./src/configAWS");

const callFind = async () => {
  const valueArray = cli.argv.value.split(",");

  if (cli.argv.file) {
    await logic
      .findResourcesWithTags(cli.argv.key, valueArray)
      .then(async r => {
        console.log(JSON.stringify(r, null, 2));
        await fileWrite.writeResultsToFile(r).then(r => {
          console.log(r);
        });
      });
  } else if (!cli.argv.file) {
    logic.findResourcesWithTags(cli.argv.key, valueArray).then(r => {
      console.log(JSON.stringify(r, null, 2));
    });
  }
};

if (cli.argv._.includes("find")) {
  if (cli.argv.profile) {
    configAWS(cli.argv.profile);
  } else {
    configAWS("default");
  }
  callFind();
} else {
  console.log(
    "\x1b[31mNot enough arguments or wrong argument provided, 'tagfinder --help' for usage \x1b[0m"
  );
}
