var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
      	<div className="top-bar-left">
      		<ul className="menu">
      			<li className="menu-text">
      				RAL - Fish Brocker
      			</li>
      			<li>
      				<IndexLink to="/privatespace" activeClassName="active">Dashboard</IndexLink>
      			</li>
      			<li>
      				<Link to="/privatespace/creditors" activeClassName="active">Creditors</Link>
      			</li>
      		</ul>
      	</div>
      	<div className="top-bar-right"></div>
      </div>
    );
  }
});

module.exports = Nav;
