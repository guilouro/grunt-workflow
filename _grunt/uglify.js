module.exports = {
	dist: {
		files: {
			'<%= path.dest %>js/all.min.js': ['<%= path.src %>js/main.js']
		}
	}
};
