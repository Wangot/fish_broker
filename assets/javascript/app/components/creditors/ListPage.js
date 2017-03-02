'use strict';

import React from 'react';

var test = [
	{
		'id': 1,
		'name': 'uno uno'
	},
	{
		'id': 2,
		'name': 'dos'
	},
	{
		'id': 3,
		'name': 'tres'
	}
];

export default class CreditorsPage extends React.Component {
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
