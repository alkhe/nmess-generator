#nmess

[![travis-ci](http://img.shields.io/travis/edge/nmess-generator.svg?style=flat-square)](https://npmjs.org/package/nmess)
[![npm version](https://img.shields.io/npm/v/nmess.svg?style=flat-square)](https://npmjs.org/package/nmess)
[![downloads](http://img.shields.io/npm/dm/nmess.svg?style=flat-square)](https://npmjs.org/package/nmess)
[![license](http://img.shields.io/npm/l/nmess.svg?style=flat-square)](https://npmjs.org/package/nmess)

`nmess` generates an modern and developer-friendly skeleton application that implements the MESS stack: MongoDB, Express.js, Socket.IO, and Stylus, which uses Jade as the templating language. It is designed so that the developer can get right down to productive coding, instead of rewriting preparation code and build systems for every new project. The MESS stack can easily be extended into the MEAN stack, by including Angular files into a generated application.

`nmess` prepares various server utilities and components such as a configurable REST API, Socket.IO connection, database controllers, Gulp build system, and HTTP response codes, and organizes source files in an extensible and logical manner.

The actual skeleton code may be found at https://github.com/edge/nmess.

`nmess` was inspired by and intends to replace `express-generator` and `node-boilerplate`, both projects with great initiatives but undermaintained.

##Installation
`sudo npm install -g nmess`

##Generator

###Help
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

###Usage
`nmess myapp`

```
Node MESS Application generated with:
name:      myapp
directory: myapp
secret:    tLQqdSso
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
        tpl/
            fragment.jade
    db/
        control.js
        init.js
        model.js
	public/
		css/
		js/
			index.js
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

###Deploy
####Production
`cd ./myapp && npm install && npm start`
####Development
`cd ./myapp && npm install && npm run dev`

###Dependencies
####Production
    socket.io
    morgan
    mongoose
    jade
    express-session
    express
    compression
    body-parser
####Development
    gulp-uglifyjs
    gulp-watch
    lazypipe
    templatizer
    gulp-stylus
    gulp

###Todo
- Specify MVC frameworks
- Dynamically add database models and controllers
- Specify packages to include
- Specify development paradigm
- Gulpify scripts
- Document each file
- Auto-build on initialization
