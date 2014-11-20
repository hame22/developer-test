import * as React from 'react';

export default React.createClass({
	displayName: 'listItem',

	render: function () {
		return (
			<li>{this.props.restaurant.Name}</li>
			)
	}
});