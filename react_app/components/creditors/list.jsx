var React = require('react');
var ModalHelper = require('ModalHelper');
var {Link} = require('react-router');
var RestApiHelper = require('../common/RestApiHelper');


var Creditors = React.createClass({
	componentDidMount: function(){
		var that = this;
		RestApiHelper.get('/api/profiles', {type: 'CREDITOR'}).then(function(profiles){
			that.setState({
				Profiles: profiles
			})
		}).catch(function(err){
			console.log(err);
			that.setState({
				errorMessage: err.message
			})
		});
	},
	getInitialState: function(){
		return {
			Profiles: [],
			errorMessage: undefined
		}
	},
	render: function () {
		var componentState = this.state;
		var {Profiles} = this.state;
		// var tableBody = [];

		var tableBody = Profiles.map((profile) => 
			<tr key={profile.id}>
		      <td>
		      	<Link to={'/privatespace/creditors/'+ profile.id}>
		      		{profile.id}
		      	</Link>
		      </td>
		      <td>
		      	<Link to={'/privatespace/creditors/'+ profile.id}>
		      		{profile.first_name} {profile.last_name}
		      	</Link>
		      </td>
		      <td>Current Balance</td>
		      <td>{profile.mobile || '-'}</td>
		      <td>
		      	<Link to={'/privatespace/creditors/'+ profile.id}>
		      		Edit
		      	</Link>
		      </td>
		    </tr>
		);

		return (
			<div>
				<h1 className="page-title">Get Weather</h1>
				<table>
				  <thead>
				    <tr>
				      <th width="10">ID</th>
				      <th width="200">Name</th>
				      <th width="150">Current Balance</th>
				      <th width="100">Contact details</th>
				      <th width="150">Actions</th>
				    </tr>
				  </thead>
				  <tbody>
				  	{tableBody}
				  </tbody>
				</table>
				{ModalHelper(componentState)}
			</div>
		);
	}
});

module.exports = Creditors;
