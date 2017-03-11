var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to="/privatespace" activeClassName="active">Dashboard</IndexLink>
        <Link to="/privatespace/creditors" activeClassName="active">Creditors</Link>
      </div>
    );
  }
});

module.exports = Nav;
