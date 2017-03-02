module.exports = function(app){
    app.use('/api', require('./api'));
    app.use('/privatespace', require('./privatespace'));

    // For testing
    app.use('/test', require('./test'));

    app.use('/', require('./default'));
};