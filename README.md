# Tag-Finder

tag-finder is a CLI tool to find tagged resources from AWS by specifying key and value with the option to save results into a JSON file 

## Installation

```npm run install-app```
- Installs dependencies and runs ```npm link``` that creates symbolic link to ```app.js```


## Usage

```Usage: tagfinder [options]

Commands:
  tagfinder find    find resources with specified tags

Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]

```

#Find

```
tagfinder find

find resources with specified tags

Options:
  --version      Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]
  -k, --key      Tag key to search with                      [string] [required]
  -v, --value    Tag value or values to search with          [string] [required]
  -f, --file     Output search results to file              [boolean] [required]
  -p, --profile  AWS profile name                                       [string]

```

## License

[MIT](https://choosealicense.com/licenses/mit/)
