module.exports = {
    build: ['compass', 'uglify'],
    lint: ['csslint', 'jshint'],
    runserver: ['watch', 'django-manage:runserver']
};