var React = require('react');
var ErrorModal = require('ErrorModal');

var Creditors = React.createClass({
	render: function () {
		var errorMessage = "hello";

		function renderError () {
	      if (typeof errorMessage === 'string') {
	        return (
	          <ErrorModal message={errorMessage}/>
	        )
	      }
	    }

		return (
			<div>
				<p>Hello there Creditor inside</p>
				{renderError()}
			</div>
		);
	}
});

module.exports = Creditors;
