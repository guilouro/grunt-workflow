module.exports = {
    dist: {
        options: {
            optimizationLevel: 3
        },
        files: [{
            expand: true,
            cwd: '<%= path.src %>img',
            src: ['**/*.{png,jpg,gif}'],
            dest: '<%= path.dest %>img'
        }]
    }
}