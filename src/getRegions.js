const AWS = require("aws-sdk");

const getAWSRegions = async () => {
  const config = {
    region: "eu-central-1"
  };

  const ec2 = new AWS.EC2(config);
  const { Regions: regions } = await ec2.describeRegions({}).promise();
  return regions;
};

module.exports = { getAWSRegions };
