// Hint: newer:taskName - configure Grunt tasks to run with newer files only.
module.exports = {
    options: {
        nospawn: true,
        debounceDelay: 250,
        livereload: true,
    },
    css: {
        files: ['<%= path.src %>scss/**/*.scss'],
        tasks: ['sass:dev'],
    },
    js: {
        files: ['<%= path.src %>js/**/*.js'],
        tasks: ['uglify', 'jshint'],
    },
    img: {
        files: ['<%= path.src %>**/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
    }
};