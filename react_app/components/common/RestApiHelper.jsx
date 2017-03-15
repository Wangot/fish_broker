var axios = require('axios');

module.exports = {
	get: function (url, params) {
		return axios.get(url, {
			params: params
		}).then(function (res) {
			// TODO: add validation here
			var returnData = res.data;

			return returnData.data;
		}, function (res) {
			throw new Error(res.data.message);
		});
	}
}