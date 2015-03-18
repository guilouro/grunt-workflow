## Grunt Workflow

This is a simple grunt workflow for add on projects, inspired by [Davidson Fellipe grunt workflow](https://github.com/davidsonfellipe/grunt-workflow).

### How to use

```shell
 $ git clone https://github.com/guilouro/grunt-workflow.git .
 $ npm install 
```

Configure to project folder in `Gruntfile.js`

```javascript
	...
	path: {
        src: 'assets/', //your source path
        dest: 'build/' //your destiny path
    }
    ...
```



### Project information

Set the project information in `package.json`

```json
	
	...

	"name": "project-name",
	"version": "0.1.0",
	"title": "Project Title",
	"homepage": "www.project.com",
	"description": "Some description.",
	"private": true,
	"author": {
		"name": "Author name",
		"url": "http://authorsite.com.br",
		"email": "author@email.com"
	},

	...

```

### Alias

* `grunt`: running `grunt watch`
* `grunt s`: running `grunt whatc` witch `BrowserSync`
* `grunt rs`: running `grunt connect` and `grunt watch`
* `grunt b`: compile `sass` and running `uglify`, `csslint` and `jshint`
* `grunt r`: running `grunt b` and deploy files in server
* `grunt o`: Optimize images with imagemin

### Dependencies

* [**BrowserSync**](http://www.browsersync.io/): Time-saving synchronised browser testing.
* [**Browserify**](http://browserify.org/): Browserify lets you require('modules') in the browser by bundling up all of your dependencies.
* [**Concurrent**](https://www.npmjs.com/package/grunt-concurrent): Run grunt tasks concurrently
* [**Connect**](https://www.npmjs.com/package/grunt-connect): Run a connect server, indefinitely.
* [**Csslint**](https://github.com/gruntjs/grunt-contrib-csslint): Lint CSS files
* [**Imagemin**](https://www.npmjs.com/package/grunt-contrib-imagemin): Minify images
* [**Jshint**](https://github.com/gruntjs/grunt-contrib-jshint): Validate files with JSHint.
* [**Sass**](https://github.com/gruntjs/grunt-contrib-sass): Compile Sass to CSS
* [**Uglify**](https://github.com/gruntjs/grunt-contrib-uglify): Minify files with UglifyJS.
* [**Watch**](https://github.com/gruntjs/grunt-contrib-watch): Run predefined tasks whenever watched file patterns are added, changed or deleted.
* [**Django**](https://github.com/nicolaspanel/grunt-contrib-django): Grunt tasks to run common django commands. Inspired from rockabox/grunt-django-manage
