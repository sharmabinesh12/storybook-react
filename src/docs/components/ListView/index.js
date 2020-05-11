import React from 'react';
import ListItem from '../../../components/ListItem';

const onClickLi = () =>{
	console.log('clicked')
}
const listItems = [
	{name:'list1',id:'1235'},
	{name:'List2', id:'1234'}
]
const LoadingDocs = () => {
	return (
		<ul className="list-group">
			{listItems.map((itemObj, i) => {
				return (
					<ListItem
						itemObj={itemObj}
						textValue={itemObj.name}
						onClickLi={onClickLi}
						selectedId="1234"
					/>
        );
			})}
    </ul>		
	)
}

export default LoadingDocs;

