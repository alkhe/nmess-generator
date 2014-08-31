#nmess

An intuitive and elegant boilerplate for the Node.js MESS webstack.

##Installation
`sudo npm install -g nmess`

##Generator
```
nmess -h

  Usage: nmess [options] <application-name>

  Options:

    -h, --help                    output usage information
    -V, --version                 output the version number
    -d --directory [directory]    Application directory (application-name)
    -s --secret [session-secret]  Session secret (random)
    -b --database [localdb]       Local database name (application-name)
```

`nmess ./myapp`

```
nmess ./myapp
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

`cd ./myapp && npm install && npm start`
