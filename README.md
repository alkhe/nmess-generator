# nmess

[![travis-ci](http://img.shields.io/travis/edge/nmess-generator.svg?style=flat-square)](https://travis-ci.org/edge/nmess-generator)
[![npm version](https://img.shields.io/npm/v/nmess.svg?style=flat-square)](https://npmjs.org/package/nmess)
[![downloads](http://img.shields.io/npm/dm/nmess.svg?style=flat-square)](https://npmjs.org/package/nmess)
[![license](http://img.shields.io/npm/l/nmess.svg?style=flat-square)](http://opensource.org/licenses/MIT)

`nmess` is a modern and developer-friendly skeleton application generator that implements the MESS stack: MongoDB, Express.js, Socket.IO, and Stylus, which uses Jade as the templating language. It is designed so that the developer can immediately start being productive, instead of writing preparation code and build systems for every new project. The MESS stack can easily be extended into the MEAN stack, by including Angular files into a generated application.

The generator prepares various server utilities and components such as a configurable REST API, Socket.IO connection, database controllers, gulp build system, and HTTP response codes, and organizes source files in an extensible and logical manner.

The included gulp build system automatically builds client assets such as .styl sheets and Jade MVC templates. Using a build system instead of middleware for client assets improves reliability and response time for all requests.

The actual skeleton code may be found at https://github.com/edge/nmess.

`nmess` was inspired by and intends to replace `express-generator` and `node-boilerplate`, both projects with great initiatives but undermaintained.

## Table of Contents
* [Installation](#installation)
* [Generator](#generator)
    * [Help](#help)
    * [Usage](#usage)
    * [Visual](#visual)
* [Deployment](#deployment)
* [Dependencies](#dependencies)
* [Documentation](#documentation)
* [Todo](#todo)

## Installation
`sudo npm install -g nmess`

## Generator

### Help
`nmess -h`

```
  Usage: nmess [options] <name>

  Options:

    -h, --help                   output usage information
    -V, --version                output the version number
    -d, --directory [directory]  application directory (name)
    -s, --secret [secret]        session secret (random)
    -b, --database [db]          local database name (name)
```

### Usage
`nmess myapp`

```
Downloading...
Populating...
Installing...
Building...
Node MESS Application generated with:
name:      myapp
directory: myapp
secret:    4B1zTDRv
db:        myapp
```

```
myapp/
    bin/
        www
    client/
        css/
            error.styl
            myapp.styl
        js/
            index.js
        tpl/
            fragment.jade
    db/
        control.js
        init.js
        model.js
    public/
        css/
            error.css
            myapp.css
        js/
            jquery.js
            socket.js
        favicon.ico
        robots.txt
    routes/
        api.js
        index.js
    utils/
        httpres.json
    views/
        base.jade
        error.jade
        index.jade
    app.js
    config.json
    gulpfile.js
    nodemon.json
    package.json
    README.md
    router.js
```

### Visual
[![install](http://i.j2.io/7KUL.png)](http://i.j2.io/7KUL.png)
[![initial](http://i.j2.io/FX1K.png)](http://i.j2.io/FX1K.png)

### Deployment
#### Production
`cd ./myapp && npm start`
#### Development
`cd ./myapp && npm run dev`

### Dependencies
#### Production
These modules are required to run the server.
```
body-parser
compression
express
express-session
jade
mongoose
morgan
socket.io
```
#### Development
These modules are required to compile the templates and stylesheets.
```
gulp
gulp-stylus
gulp-uglifyjs
gulp-watch
lazypipe
templatizer
```
#### Global
These modules are required to run the application in development mode.
```
gulp
nodemon
```
#### Machine
These technologies are required to run the server, but features using them disengage gracefully if missing.
```
mongodb
```

### Documentation
```
d.f. - directory for
m.f. - module for
```

```
__name__/                   // d.f. all application files
    bin/                    // d.f. executable scripts
        www                 // server start script
    client/                 // d.f. client assets
        css/                // d.f. stylesheets
            error.styl      // error page stylesheet
            __name__.styl   // main stylesheet
        js/                 // d.f. client scripts
            index.js        // index page script
        tpl/                // d.f. client MVC templates
            fragment.jade   // MVC template, rename to a specific client control
    db/                     // d.f. database design
        control.js          // m.f. database business logic
        init.js             // m.f. database connection
        model.js            // m.f. database model definitions
    public/                 // d.f. client-accessible resources
        css/                // d.f. files compiled from client/css/
            error.css       // compiled from client/css/error.styl
            __name__.css    // compiled from client/css/__name__.styl
        js/                 // d.f. client scripts
            index.js        // compiled from client/js/index.js
            jquery.js       // jQuery 1.11.1, minified
            socket.js       // Socket.IO 1.2.0, minified
            templates.js    // compiled from all templates in client/tpl
        favicon.ico         // n.js tab icon
        robots.txt          // robots.txt
    routes/                 // d.f. server routes
        api.js              // m.f. api route
        index.js            // m.f. index route
    utils/                  // d.f. server utilities
        httpres.json        // HTTP response code list
    views/                  // d.f. page templates
        base.jade           // base template
        error.jade          // error page template
        index.jade          // index page template
    app.js                  // m.f. main application interface
    config.json             // application configuration
    gulpfile.js             // m.f. gulp build system
    nodemon.json            // nodemon server configuration
    package.json            // package configuration
    README.md               // application README
    router.js               // m.f. server route coordination
```

### Todo
- Specify MVC frameworks
- Dynamically add database models and controllers
- Specify packages to include
- Specify development paradigm
- gulpify scripts
- Locally cached versions of nmess
