#nmess

nmess generates an intuitive and developer-friendly skeleton application that implements the MESS stack: MongoDB, Express.js, Socket.IO, and Stylus, which uses Jade as the templating language.

Various server utilities and functionalities are included, such as a REST API, Socket.IO inclusion, Database drivers, and HTTP codes.

The Jade templates are organized in a simple but conjugable hierarchy.

The actual skeleton code may be found at https://github.com/chronize/nmess.

nmess was inspired by express-generator and node-boilerplate.

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
`nmess ./myapp`

```
Node MESS Application generated with:
application-name: myapp
directory:        myapp
session-secret:   4qWf1HER
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
	mess.js
	package.json
	README.md
```

###Deploy
`cd ./myapp && npm install && nodemon`
