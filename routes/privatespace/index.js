var express = require('express');
var router = express.Router();
var path = require('path');

// require('./users')(router);

router.get('/', function(req, res, next) {
  	res.renderLayout('home', {title: 'Private spacer'}, 'privatespace');
});

router.get('/*', function(req, res, next) {
  	res.renderLayout('home', {title: 'Private spacer'}, 'privatespace');
});

module.exports = router;