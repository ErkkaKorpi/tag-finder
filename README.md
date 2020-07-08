# Tag-Finder

Tag-Finder is a CLI tool to find tagged resources from AWS by specifying key and value. By default, results are written to stdout in JSON format.

- ``--key`` argument represents tag key to search resources with

- ```-value``` argument represents tag or tags to search resources with. When using multiple values, provide a comma separated list with no whitespaces: ``key1,key2,key3...``

- ```--file``` argument can be used to write search results to ```results.json``` file in the current working directory

- ``--profile`` argument can be used to get search results from different profiles configured to ```~/.aws/credentials```, if no argument is passed, the default profile is used

## Installation

```npm run install-app```
- Installs dependencies and runs ```npm link``` that creates symbolic link to ```app.js```


## Usage

```
Usage: tagfinder [options]

Commands:
  tagfinder find    find resources with specified tags

Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]

```

## Find

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

## License

[MIT](https://choosealicense.com/licenses/mit/)
