const fs = require("fs");

const writeResultsToFile = results => {
  const jsonArray = [];
  results.forEach(resource => {
    if (resource.resources !== "no tagged resources in this region") {
      jsonArray.push(resource);
    }
  });
  if (jsonArray.length === 0) {
    return new Promise(resolve => {
      resolve("no resources found, file not created");
    });
  }
  fs.writeFile("results.json", JSON.stringify(jsonArray), err => {
    if (err) {
      console.log("\x1b[31mfile creation error\x1b[0m");
      return err;
    }
  });
  return new Promise(resolve => {
    resolve("\n" + "\x1b[32mfile created\x1b[0m");
  });
};

module.exports = { writeResultsToFile };
