var express = require('express');
var router = express.Router();
var path = require('path');

require('./users')(router);

module.exports = router;