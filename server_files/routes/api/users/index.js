var path = require('path');
var models = require(path.resolve("./server_files/models/orm"));
var routeSequelizer = require(path.resolve('./server_files/models/helpers/RouteSequelizer'));

module.exports = function(router){
	routeSequelizer.init(router, models.User, 'users')
};