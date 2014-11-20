import * as React from 'react';
import ListItem from './listItem.jsx';

export default React.createClass({
	displayName: 'list',

	render: function () {

		return (
			<ul>
				{this.props.listItems.Details.map((item) => <ListItem restaurant={item} />)}
			</ul>
			)
	}
});