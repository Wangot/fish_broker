var express = require('express');
var router = express.Router();
var path = require('path');

require('./users')(router);
require('./profiles')(router);

module.exports = router;