var path = require('path');
var models = require(path.resolve("./models/orm"));
var routeSequelizer = require(path.resolve('./models/helpers/RouteSequelizer'));

module.exports = function(router){
	routeSequelizer.init(router, models.User, 'users')
};