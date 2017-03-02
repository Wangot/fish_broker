var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("asasasa")
    res.renderLayout('index', { title: 'RAL: Secured page' }, 'privatespace');
});

/* Checker if system is alive */
router.get('/*', function(req, res){
    res.renderLayout('index', { title: 'RAL: Secured page' }, 'privatespace');
});

module.exports = router;