#nmess

[![travis-ci](http://img.shields.io/travis/chronize/nmess-generator.svg?style=flat-square)](https://npmjs.org/package/nmess)
[![npm version](https://img.shields.io/npm/v/nmess.svg?style=flat-square)](https://npmjs.org/package/nmess)
[![downloads](http://img.shields.io/npm/dm/nmess.svg?style=flat-square)](https://npmjs.org/package/nmess)
[![license](http://img.shields.io/npm/l/nmess.svg?style=flat-square)](https://npmjs.org/package/nmess)

`nmess` generates an modern and developer-friendly skeleton application that implements the MESS stack: MongoDB, Express.js, Socket.IO, and Stylus, which uses Jade as the templating language.

`nmess` is designed so that the developer can get right down to productive coding, instead of rewriting preparation code for every new project.

`nmess` prepares various server utilities and components such as a configurable REST API, Socket.IO connection, database controllers, and HTTP response codes, as well as organizing source files in an extensible and logical manner. The Jade templates are organized in a simple but conjugable hierarchy.

The MESS stack can easily be extended into the MEAN stack, by including Angular files into a generated application.

The actual skeleton code may be found at https://github.com/chronize/nmess.

`nmess` was inspired by `express-generator` and `node-boilerplate`.

##Installation
`sudo npm install -g nmess`

##Generator

###Help
`nmess -h`

```
  Usage: nmess [options] <application-name>

  Options:

    -h, --help                    output usage information
    -V, --version                 output the version number
    -d --directory [directory]    Application directory (application-name)
    -s --secret [session-secret]  Session secret (random)
    -b --database [localdb]       Local database name (application-name)
```

###Usage
`nmess myapp`

```
Node MESS Application generated with:
application-name: myapp
directory:        myapp
session-secret:   s1kTm5VN
localdb:          myapp
```

```
myapp/
	bin/
		www
	public/
		css/
			error.styl
			myapp.styl
		js/
			index.js
			jquery.min.js
			socket.io.js
        tpl/
            templates.jade
        favicon.ico
        robots.txt
	routes/
		api.js
		index.js
	utils/
		controller.js
		dbdriver.js
		dbmodel.js
		dbreset.js
		httpstatus.json
	views/
		base.jade
		error.jade
		index.jade
	app.js
    config.json
    nodemon.json
	package.json
	README.md
```

###Deploy
`cd ./myapp && npm install && nodemon`

###Packages
    body-parser
    compression
    cookie-parser
    debug
    express
    express-session
    jade
    mongoose
    morgan
    socket.io
    stylus

###Todo
- Specify MVC frameworks
- Dynamically add database models and controllers
- Specify packages to include
- Specify development paradigm
