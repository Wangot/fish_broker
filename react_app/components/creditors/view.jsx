var React = require('react');
var ModalHelper = require('ModalHelper');
var RestApiHelper = require('../common/RestApiHelper');


var CreditorView = React.createClass({
	componentDidMount: function(){
		var that = this;
		var id = that.props.params.id;
		RestApiHelper.get('/api/profiles/'+ id, {type: 'CREDITOR'}).then(function(profile){
			var newStates = profile;
			newStates.Profile = profile;
			that.setState(newStates);
		}).catch(function(err){
			console.log(err);
			that.setState({
				errorMessage: err.message
			})
		});
	},
	getInitialState: function(){
		return {
			hasChanged: false,
			errorMessage: undefined
		}
	},
	handleChange: function(e){
		var newValue = {};
		newValue[e.target.id] = e.target.value;
		this.setState(newValue);
	},
	render: function () {
		var that = this;
		var componentState = this.state;
		var {Profile, id, first_name} = this.state;
		
		if(Profile){
			that.refs.first_name.value = first_name;
		}

		return (
			<div>
				<h1 className="page-title">Profile view</h1>
				<input type="text" id="first_name" ref="first_name" onChange={that.handleChange} />
				{ModalHelper(componentState)}
			</div>
		);
	}
});

module.exports = CreditorView;
