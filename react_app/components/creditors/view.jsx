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



		$('#birthday').fdatepicker({
			// initialDate: '04-22-1985',
			format: 'mm-dd-yyyy',
			disableDblClickSelection: true,
			leftArrow:'<<',
			rightArrow:'>>',
			closeIcon:'X',
			closeButton: false
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
		var {Profile, id, first_name, last_name, mobile, alternative_contact} = this.state;
		
		if(Profile){
			that.refs.first_name.value = first_name;
			that.refs.last_name.value = last_name;
			that.refs.mobile.value = mobile;
			that.refs.alternative_contact.value = alternative_contact;

		}

		return (
			<div>
				<h3 className="page-title">Profile view</h3>
				<div className="columns large-8 medium-10 small-centered">
				  <form>
					<div className="row">
					    <div className="medium-6 columns">
					      <label>First name
					        <input type="text" id="first_name" ref="first_name" onChange={that.handleChange} placeholder="Pangalan" />
					      </label>
					    </div>
					    <div className="medium-6 columns">
					      <label>Last name
					        <input type="text" id="last_name" ref="last_name" onChange={that.handleChange} placeholder="Apilyedo" />
					      </label>
					    </div>
				  	</div>
				  	<div className="row">
					    <div className="medium-6 columns">
					      <label>Mobile number
					        <input type="text" id="mobile" ref="mobile" onChange={that.handleChange} placeholder="Smart, Globe, Sun, etc" />
					      </label>
					    </div>
					    <div className="medium-6 columns">
					      <label>Alternative number
					        <input type="text" id="alternative_contact" ref="alternative_contact" onChange={that.handleChange} placeholder="Landline, kapitbahay, etc" />
					      </label>
					    </div>
				  	</div>
				  	<div className="row">
					    <div className="medium-6 columns">
					      <label>Email address
					        <input type="text" id="email" ref="email" onChange={that.handleChange} placeholder="your-email@yahoo.com" />
					      </label>
					    </div>
					    <div className="medium-6 columns">
					      <label>Birthday
					        <input type="text" id="birthday" ref="birthday" onChange={that.handleChange} placeholder="mm-dd-yyyy" />
					      </label>
					    </div>
				  	</div>
				  </form>
				</div>
				{ModalHelper(componentState)}
			</div>
		);
	}
});

module.exports = CreditorView;
