#!/usr/bin/env node

const { findResourcesWithTags } = require("./src/logic");
const { argv } = require("./src/cli");
const { writeResultsToFile } = require("./src/writeResultsToFile");
const { configAWS } = require("./src/configAWS");

const callFind = async () => {
  const valueArray = argv.value.split(",");

  if (argv.file) {
    await findResourcesWithTags(argv.key, valueArray)
      .then(async r => {
        console.log(JSON.stringify(r, null, 2));
        await writeResultsToFile(r).then(r => {
          console.log(r);
        });
      });
  } else if (!argv.file) {
    findResourcesWithTags(argv.key, valueArray).then(r => {
      console.log(JSON.stringify(r, null, 2));
    });
  }
};

if (argv._.includes("find")) {
  if (argv.profile) {
    configAWS(argv.profile);
  } else {
    configAWS("default");
  }
  callFind();
} else {
  console.log(
    "\x1b[31mNot enough arguments or wrong argument provided, 'tagfinder --help' for usage \x1b[0m"
  );
}
