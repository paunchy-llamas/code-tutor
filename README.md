# [Code Tutor](http://104.131.176.9/)
Get connected with an experienced developer to learn coding.

[<img src="https://github.com/paunchy-llamas/code-tutor/blob/master/codetutor-home.png">](http://104.131.176.9/)

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Team (v1)
  - __Product Owner__: [Vivian Chen](https://github.com/vichen)
  - __Scrum Master__: [Adam Isom](https://github.com/adamrgisom)
  - __Development Team Members__: [Roland Fung](https://github.com/rolandfung), [Fred Ryder](https://github.com/fredryder)


## Requirements
- Node 5.9.1
- MongoDB 3.2.4

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
```

`npm install` will chain `bower install` and install bower client-side dependencies within the client/lib directory

To load example data on a running instance of mongodb...
`mongorestore -d <nameOfDatabase>  <pathToDump>`
See demoBackUp_readme.md for details

### Tasks
- `gulp task`
- `gulp start`


## Future directions
- Integrate Google Maps
- Scheduling for both tutor and normals accounts
- Handle images on front end (resize, crop)
- Secure messaging between accounts
- Add OAuth
- Allow signin with username
- Improve token authentication system
- Use https
- Stream images directly from the request POST to GridFS

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
