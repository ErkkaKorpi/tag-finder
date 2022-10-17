const argv = require("yargs")
  .usage("Usage: $0 [options]")
  .help("h")
  .alias("h", "help")
  .command("find", "find resources with specified tags", (yargs) => {
    yargs
      .nargs("k", 1)
      .nargs("v", 1)
      .options("k", {
        alias: "key",
        demandOption: true,
        describe: "Tag key to search with",
        type: "string",
      })
      .options("v", {
        alias: "value",
        demandOption: true,
        describe:
          "Tag value or values to search with (if using multiple values, provide comma separated list with no whitespaces)",
        type: "string",
      })
      .options("f", {
        alias: "file",
        demandOption: false,
        describe: "Output search results to file",
        type: "boolean",
      })
      .options("p", {
        alias: "profile",
        demandOption: false,
        describe: "AWS profile name",
        type: "string",
      })
      .demandOption(["k", "v"]);
  }).argv;

module.exports = { argv };
