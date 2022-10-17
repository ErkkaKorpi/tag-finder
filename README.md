# Tag-Finder

Tag-Finder is a CLI tool to find tagged resources from across all AWS regions by specifying key and value. By default, results are written to stdout in JSON format.

- ``--key`` argument represents tag key to search resources with

- ``--value`` argument represents tag or tags to search resources with. When using multiple values, provide a comma separated list with no whitespaces: ``key1,key2,key3...``

- ``--file`` argument can be used to write search results to ```results.json``` file in the current working directory

- ``--profile`` argument can be used to get search results from different profiles configured to ```.aws/credentials```, if no argument is passed, Tag-Finder will try to load credentials from environment variables. Tag-Finder depends on finding aws credentials from aforementioned path

## Requirements

- Node.js versions 8 and newer
- npm versions 3.5.2 and never
- AWS credentials configured in ```.aws/credentials```
 (more information in following link: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)

## Installation
#### macOs / Linux
```npm run install-unix```
- Installs dependencies and runs ```npm link``` that creates symbolic link for ```app.js``` in ``/usr/local/bin``
#### Windows
```npm run install-windows```
- Installs dependencies and runs ```npm link``` that creates necessary files in ``%UserProfile%\AppData\Roaming\npm ``


## Usage

```
Usage: tagfinder [options]

Commands:
  tagfinder find    find resources with specified tags

Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]
```
```
tagfinder find

find resources with specified tags

Options:
  --version      Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]
  -k, --key      Tag key to search with                      [string] [required]
  -v, --value    Tag value or values to search with (if using multiple values,
                 provide comma separated list with no whitespaces)
                                                             [string] [required]
  -f, --file     Output search results to file                         [boolean]
  -p, --profile  AWS profile name                                       [string]
```

## Example
```
tagfinder find --key important --value true --file true
```
## Example output
```
[
  {
    "region": "eu-north-1",
    "resources": "no resources with specified tags in this region"
  },
  {
    "region": "ap-south-1",
    "resources": "no resources with specified tags in this region"
  },
  {
    "region": "eu-west-3",
    "resources": "no resources with specified tags in this region"
  },
  {
    "region": "eu-west-2",
    "resources": "no resources with specified tags in this region"
  },
  {
    "region": "eu-west-1",
    "resources": [
      {
        "resourceType": "ec2",
        "resourceName": "subnet/subnet-1234567"
      }
    ]
  },
  {
    "region": "ap-northeast-2",
    "resources": "no resources with specified tags in this region"
  },
  {
    "region": "ap-northeast-1",
    "resources": "no resources with specified tags in this region"
  },
  {
    "region": "sa-east-1",
    "resources": "no resources with specified tags in this region"
  },
  {
    "region": "ca-central-1",
    "resources": "no resources with specified tags in this region"
  },
  {
    "region": "ap-southeast-1",
    "resources": "no resources with specified tags in this region"
  },
  {
    "region": "ap-southeast-2",
    "resources": "no resources with specified tags in this region"
  },
  {
    "region": "eu-central-1",
    "resources": [
      {
        "resourceType": "lambda",
        "resourceName": "example-function"
      },
      {
        "resourceType": "s3",
        "resourceName": "example-bucket-1"
      }
    ]
  },
  {
    "region": "us-east-1",
    "resources": "no resources with specified tags in this region"
  },
  {
    "region": "us-east-2",
    "resources": "no resources with specified tags in this region"
  },
  {
    "region": "us-west-1",
    "resources": "no resources with specified tags in this region"
  },
  {
    "region": "us-west-2",
    "resources": "no resources with specified tags in this region"
  }
]
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
