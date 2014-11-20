import * as React from 'react';

export default React.createClass({
	displayName: 'listItem',

	render: function () {
		let item = this.props.restaurant;
		return (
			<li>
				<img src={item.LogoUrl} />
				<h2>{item.Name}</h2>
				<p>{item.Address.FirstLine}, {item.Address.City}, {item.Address.Postcode}</p>
			</li>
			)
	}
});