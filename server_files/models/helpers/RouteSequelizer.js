var path = require('path');
var queryFilter = require('./QueryFilter')

module.exports = {
	init : function(router, model, routeName){
	    var routeUrl = '/'+ routeName;

	    // Listing
	    router.get(routeUrl, function(req, res) {
	    	var filter = {};
	    	var query = req.query;

	    	queryFilter.search(filter, query, Object.keys(model.attributes));
	    	queryFilter.paginationObject(filter, query);
	    	
	    	model.findAndCountAll(filter).then(
	    		function(result){
		    		var items = result.rows;
		    		query.total = result.count;

		    		res.jsonp({
			            status: 'success',
			            message: '',
			            data: items,
			            params: query
			        });
			    },
			    function(err){
			    	console.log(err)
		    		res.jsonp({
			            status: 'fail',
			            message: err.message || '',
			            errors: err.errors || null,
			            data: null
			        });
		    	}
			   );

		    // model.findAll().then(function(items){
		    //     res.renderJsonSuccess(items);
		    // });
		});

	    // View
	    router.get(routeUrl +'/:id', function(req, res){
	    	model.findById(req.params.id).then(
	    		function(item){
		    		res.renderJsonSuccess(item);
		    	},
		    	function(err){
		    		res.jsonp({
			            status: 'fail',
			            message: '',
			            errors: err.errors || null,
			            data: null
			        });
		    	}
		    );
	    });

	    // Add
	    router.post(routeUrl, function(req, res){
	    	model.create(req.body).then(
	    		function(result){
		    		res.renderJsonSuccess(result);
		    	}, 
		    	function(err){
		    		res.jsonp({
			            status: 'fail',
			            message: err.message || '',
			            errors: err.errors || null,
			            data: null
			        });
		    	}
		    );
	    });

	    // Update
	    var updateFunc = function(req, res){
	    	model.findById(req.params.id).then(function(obj){
	    		obj.updateAttributes(req.body).then(
	    			function(result){
		    			obj.reload().then(function(){
				    		res.renderJsonSuccess(obj);
		    			})
		    		},
		    		function(err){
		    			res.jsonp({
				            status: 'fail',
				            message: err.message || '',
				            errors: err.errors || null,
				            data: null
				        });
		    		}
		    	);
	    	});
	    }

	    router.post(routeUrl +'/:id', updateFunc);
	    router.put(routeUrl +'/:id', updateFunc);
	}
}