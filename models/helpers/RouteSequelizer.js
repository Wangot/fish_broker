// var path = require('path');

module.exports = {
	init : function(router, model, routeName){
	    var routeUrl = '/'+ routeName;

	    // Listing
	    router.get(routeUrl, function(req, res) {
		    model.findAll().then(function(items){
		        res.renderJsonSuccess(items);
		    });
		});

	    // View
	    router.get(routeUrl +'/:id', function(req, res){
	    	model.findById(req.params.id).then(function(item){
	    		res.renderJsonSuccess(item);
	    	})
	    });

	    // Add
	    router.post(routeUrl, function(req, res){
	    	model.create(req.body).then(function(result){
	    		res.renderJsonSuccess(result);
	    	})
	    });

	    // Update
	    var updateFunc = function(req, res){
	    	model.findById(req.params.id).then(function(obj){
	    		obj.updateAttributes(req.body).then(function(result){
	    			obj.reload().then(function(){
			    		res.renderJsonSuccess(obj);
	    			})
	    		});
	    	})
	    }

	    router.post(routeUrl +'/:id', updateFunc);
	    router.put(routeUrl +'/:id', updateFunc);
	}
}