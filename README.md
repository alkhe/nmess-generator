# nmess

[![travis-ci](http://img.shields.io/travis/edge/nmess-generator.svg?style=flat-square)](https://travis-ci.org/edge/nmess-generator)
[![npm version](https://img.shields.io/npm/v/nmess.svg?style=flat-square)](https://npmjs.org/package/nmess)
[![downloads](http://img.shields.io/npm/dm/nmess.svg?style=flat-square)](https://npmjs.org/package/nmess)
[![license](http://img.shields.io/npm/l/nmess.svg?style=flat-square)](http://opensource.org/licenses/MIT)

`nmess` is a modern and developer-friendly skeleton application generator that implements the MESS stack: MongoDB, Express.js, Socket.IO, and Stylus, which uses Jade as the templating language. It is designed so that the developer can immediately start being productive, instead of writing preparation code and build systems for every new project. `nmess` now includes Bootstrap 3 by default and automatically extends the project into the MEAN stack, integrating Angular into the application.

The generator prepares various server utilities and components such as a configurable REST API, Socket.IO connection, database controllers, gulp build system, and HTTP response codes, and organizes source files in an extensible and logical manner.

The included gulp build system automatically builds client assets such as .styl sheets and Javascripts. Using a build system instead of middleware for client assets improves reliability and response time for all requests.

`nmess` is great for single page applications, hybrid servers, web services, and API endpoints.

**`nmess` now provides automatic local caching by SHA-comparison and source management, so a fully functional environment can be set up while offline, and generation while online is expedited as well.**

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
```sh
sudo npm install -g nmess
```

## Generator

### Help
```sh
nmess -h
```

```
  Usage: nmess [options] <name>

  Options:

    -h, --help                  output usage information
    -V, --version               output the version number
    -d, --directory [directory]  Application directory [name]
    -s, --secret [secret]        Session secret [uuid.v4()]
    -b, --database [db]          Local database path ['localhost/' + name]
```

### Usage
```sh
nmess myapp
```

```
Downloading...
Populating...
Installing...
Building...
Node MESS Application generated with:
name:      myapp
directory: myapp
secret:    445e18e0-1362-422b-84e2-06cc7e0a5701
db:        localhost/myapp
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
    db/
        control.js
        init.js
        model.js
    public/
        css/
            bootstrap.css
            error.css
            myapp.css
        font/
            OpenSans.ttf
        js/
            angular.js
            bootstrap.js
            index.js
            jquery.js
            socket.io.js
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
    .gitignore
    app.js
    config.json
    gulpfile.js
    nodemon.json
    package.json
    README.md
    router.js
```

### Visual
[![install](http://i.j2.io/30OP.png)](http://i.j2.io/30OP.png)
[![initial](http://i.j2.io/FX1K.png)](http://i.j2.io/FX1K.png)

### Deployment
#### Production
```sh
cd ./myapp && npm start
```
#### Development
```sh
cd ./myapp && npm run dev
```

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
gulp-uglify
gulp-watch
lazypipe
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
d: - directory for
m: - module for
```

```
__name__/                   // d: all application files
    bin/                    // d: executable scripts
        www                 // server start script
    client/                 // d: client assets
        css/                // d: stylesheets
            __name__.styl   // main stylesheet
            error.styl      // error page stylesheet
        js/                 // d: client scripts
            index.js        // index page script
    db/                     // d: database design
        control.js          // m: database business logic
        init.js             // m: database connection
        model.js            // m: database model definitions
    public/                 // d: client-accessible resources
        css/                // d: files compiled from client/css/
            bootstrap.css   // Bootstrap 3.3.2, minified
            error.css       // compiled from client/css/error.styl
            __name__.css    // compiled from client/css/__name__.styl
        font/               // d: client fonts
            OpenSans.ttf    // Open Sans font
        js/                 // d: client scripts
            angular.js      // Angular 1.3.11, minified
            bootstrap.js    // Bootstrap 3.3.2, minified
            index.js        // compiled from client/js/index.js
            jquery.js       // jQuery 1.11.2, minified
            socket.js       // Socket.IO 1.3.2, minified
            templates.js    // compiled from all templates in client/tpl
        favicon.ico         // n.js tab icon
        robots.txt          // robots.txt
    routes/                 // d: server routes
        api.js              // m: api route
        index.js            // m: index route
    util/                   // d: server utilities
        httpres.json        // HTTP response code list
    views/                  // d: page templates
        base.jade           // base template
        error.jade          // error page template
        index.jade          // index page template
    .gitignore              // .gitignore
    app.js                  // m: main application interface
    config.json             // application configuration
    gulpfile.js             // m: gulp build system
    nodemon.json            // nodemon server configuration
    package.json            // package configuration
    README.md               // application README
    router.js               // m: server route coordination
```

### Todo
- Dynamically add database models and controllers
- Specify CSS preprocessor
- Clean up Gulpfile
