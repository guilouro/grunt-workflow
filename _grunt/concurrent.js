module.exports = {
    build: ['sass:dist', 'browserify', 'uglify'],
    lint: ['csslint', 'jshint'],
    runserver: ['watch', 'django-manage:runserver']
};