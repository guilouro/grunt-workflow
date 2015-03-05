module.exports = {
    build: ['sass:dist', 'uglify'],
    lint: ['csslint', 'jshint'],
    runserver: ['watch', 'django-manage:runserver']
};