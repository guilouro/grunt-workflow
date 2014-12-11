## Grunt Workflow

This is a simple grunt workflow for add on projects

### How to use

Configure to project folder in `Gruntfile.js`

```javascript
	...
	path: {
        src: 'assets/', //your source path
        dest: 'build/' //your destiny path
    }
    ...
```

> Configure your paths in `config.rb` to use `sass`


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
* `grunt rs`: running `grunt connect` and `grunt watch`
* `grunt b`: compile `sass` and running `uglify`, `csslint` and `jshint`
* `grunt r`: running `grunt b` and deploy files in server