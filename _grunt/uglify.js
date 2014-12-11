module.exports = {
	options: {
		banner:
        "\n" +
        "/*\n" +
        " * -------------------------------------------------------\n" +
        " * Project: <%= pkg.title %>\n" +
        " * Version: <%= pkg.version %>\n" +
        " * Author:  <%= pkg.author.name %> (<%= pkg.author.email %>)\n" +
        " *\n" +
        " * Copyright (c) <%= grunt.template.today(\"yyyy\") %> <%= pkg.title %>\n" +
        " * -------------------------------------------------------\n" +
        " */\n" +
        "\n"
	},
	dist: {
		files: {
			'<%= path.dest %>js/all.min.js': ['<%= path.src %>js/main.js']
		}
	}
};
