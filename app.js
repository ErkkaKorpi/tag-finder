#!/usr/bin/env node

const { findResourcesWithTags } = require("./src/logic");
const { argv } = require("./src/cli");
const { writeResultsToFile } = require("./src/writeResultsToFile");
const { configAWS } = require("./src/configAWS");

const callFind = async () => {
  const valueArray = argv.value.split(",");

  if (argv.file) {
    return findResourcesWithTags(argv.key, valueArray).then(async (r) => {
      return writeResultsToFile(r);
    });
  } else if (!argv.file) {
    return findResourcesWithTags(argv.key, valueArray);
  }
};

if (argv._.includes("find")) {
  if (argv.profile) {
    configAWS(argv.profile);
  }
  callFind().then((r) =>
    typeof r === "object"
      ? console.log(JSON.stringify(r, null, 2))
      : console.log(r)
  );
} else {
  console.log(
    "\x1b[31mNot enough arguments or wrong argument provided, 'tagfinder --help' for usage \x1b[0m"
  );
}
