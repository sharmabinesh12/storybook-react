import React from 'react';
import PropTypes from 'prop-types';
const ListItem = props => {
	var selectedStyle = props.selectedId === props.itemObj.id ? { background: "#00a0ae", color: "#fff", fontWeight: "700" }: {};
  return (
		<li
			title={props.textValue}
			className="list-box-common"
			style={selectedStyle}
			key={props.itemObj.id}
			onClick={() => props.onClickLi(props.itemObj)}
		>
			<span>{props.textValue}</span>
			{props.selectedId === props.itemObj.id ? (  
				<img src={require('../../assets/img/icons/ic_arrow-right.svg')} alt="right arrow"/>
			) : (
					<img src={require('../../assets/img/icons/ic_arrow-right-grey.svg')} alt="right arrow" /> 
				)}
		</li>
        
  );
}

ListItem.propTypes = {
	itemObj: PropTypes.object,
	textValue:PropTypes.string,
	onClickLi:PropTypes.func,
	selectedId: PropTypes.string
};

ListItem.defaultProps = {
	itemObj: {},
	textValue:'',
	onClickLi:null,
	selectedId: ''
};

export default ListItem;