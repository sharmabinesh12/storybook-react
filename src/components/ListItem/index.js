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
			{/* {props.selectedId === itemObj.id ? (
				<img className="pull-right" src={ICONS.ARROW_RIGHT} />
			) : (
					<img className="pull-right" src={BW_ICONS.ARROW_RIGHT} />
				)} */}
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