var React = require('react');
var ModalHelper = require('ModalHelper');

var Creditors = React.createClass({
	getInitialState: function(){
		return {
			errorMessage: undefined
		}
	},
	render: function () {
		var componentState = this.state;

		return (
			<div>
				<p>Hello there Creditor inside</p>
				{ModalHelper(componentState)}
			</div>
		);
	}
});

module.exports = Creditors;
