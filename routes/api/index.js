var express = require('express');
var router = express.Router();
var path = require('path');
var models = require(path.resolve("./models/orm"));

require('./users')(router);

module.exports = router;