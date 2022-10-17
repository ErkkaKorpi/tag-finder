const AWS = require("aws-sdk");
const { getAWSRegions } = require("./getRegions");

const findResourcesWithTags = async (key, values) => {
  try {
    const regions = await getAWSRegions();

    const results = regions.map(async (region) => {
      const tagging = new AWS.ResourceGroupsTaggingAPI({
        region: region.RegionName,
      });

      const getTaggedResources = async (token, key, values) => {
        const params = {
          TagFilters: [
            {
              Key: key,
              Values: values,
            },
          ],
        };

        if (token !== null) {
          params.PaginationToken = token;
        }

        return await tagging.getResources(params).promise();
      };

      const getAllTagResults = async (token, key, values) => {
        let tags = await getTaggedResources(token, key, values);
        const tagsArray = [];
        while (tags.PaginationToken) {
          tags = await getTaggedResources(tags.PaginationToken, key, values);
          tagsArray.push(tags.ResourceTagMappingList);
        }

        return tagsArray.length !== 0 ? tagsArray : tags;
      };

      const parseResourceNameFromARN = (arn) => {
        if (Array.isArray(arn)) {
          return arn.map((name) => {
            const splittedARN = name.ResourceARN.split(":");
            const resource = splittedARN[2];
            const resourceName = splittedARN[splittedARN.length - 1];

            return {
              resourceType: resource,
              resourceName: resourceName,
            };
          });
        } else {
          const splittedARN = arn.ResourceARN.split(":");
          const resource = splittedARN[2];
          const name = splittedARN[splittedARN.length - 1];

          return {
            resourceType: resource,
            resourceName: name,
          };
        }
      };

      const filterSearchResults = async (key, values) => {
        const arnsList = await getAllTagResults("", key, values);
        if (Array.isArray(arnsList)) {
          return arnsList.map((arn) => {
            return parseResourceNameFromARN(arn);
          });
        } else {
          return arnsList.ResourceTagMappingList.map((arn) => {
            return parseResourceNameFromARN(arn);
          });
        }
      };

      const taggedResources = (await filterSearchResults(key, values)).flat();

      if (taggedResources.length !== 0) {
        return {
          region: region.RegionName,
          resources: taggedResources,
        };
      }
    });

    return Promise.all(results).then((res) => res.filter((x) => x));
  } catch (e) {
    console.log(
      "\x1b[31mError happened while fetching tags: \x1b[0m",
      e.originalError.originalError.message
    );
    process.exit(1);
  }
};

module.exports = { findResourcesWithTags };
