var React = require('react');
var Nav = require('./Nav');

var MainLayout = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <div className="row">
        	<div className="columns small-center">
	        	{this.props.children}
	        </div>
	    </div>
      </div>
    );
  }
});

module.exports = MainLayout;
