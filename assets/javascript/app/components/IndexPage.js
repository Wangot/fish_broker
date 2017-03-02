'use strict';

import React from 'react';

var test = [
	{
		'id': 1,
		'name': 'one'
	},
	{
		'id': 2,
		'name': 'two'
	},
	{
		'id': 3,
		'name': 'three'
	}
];

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
          <ul className="PlayerList">
          	{test.map((arr) => {   
          		return <li>{arr.name}</li>
          	})
	        }
          </ul>
        </div>
      </div>
    );
  }
}
