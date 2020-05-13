import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ListItem from '../components/ListItem';

export default {
  title: 'ListItem',
	component: ListItem,
};

storiesOf('ListItem', module)
	.add('default', () =>{
		const listItems = [
			{name:'list1',id:'1235'},
			{name:'List2', id:'1234'}
		]
		return(
			<ul className="list-item-box">
				{listItems.map((itemObj, i) => {
					return(
						<ListItem
							itemObj={itemObj}
							textValue={itemObj.name}
							onClickLi={action('clicking list')}
							selectedId="1234"
						/>
					)})
				}
			</ul>
		)
	})