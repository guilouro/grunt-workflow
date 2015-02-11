module.exports = {
    dev: {
        files: {
            src: [
                '<%= path.dest %>css/*.css',
                '<%= path.dest %>*.html',
            ]
        },
        options: {
            watchTask: true,
            ghostMode: {
                scroll: true,
                links: true,
                forms: true
            }
        },
    }
};