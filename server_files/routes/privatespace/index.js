var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.renderLayout('index', { title: 'RAL: Privatespace' }, 'privatespace');
});

/* Checker if system is alive */
router.get('/*', function(req, res, next) {
    res.renderLayout('index', { title: 'RAL: Privatespace' }, 'privatespace');
});

module.exports = router;