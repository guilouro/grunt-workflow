module.exports = {
    server: {
        options: {
            port: 9000,
            base: '<%= path.dest %>',
            hostname: 'localhost',
            livereload: true,
            open: true
        }
    }
};
