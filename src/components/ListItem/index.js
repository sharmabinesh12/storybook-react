import React from 'react';
import PropTypes from 'prop-types';
const ListItem = ({
	itemObj,
	textValue,
	onClickLi,
	selectedId,
	activeIcon,
	arrowIcon,
	activeBGColor,
	activeColor 

}) => {
	var selectedStyle = selectedId === itemObj.id ? { background: activeBGColor, color: activeColor, fontWeight: "700" }: {};
  return (
		<li
			title={textValue}
			className="list-box-common"
			style={selectedStyle}
			key={itemObj.id}
			onClick={() => onClickLi(itemObj)}
		>
			<span>{textValue}</span>
			{selectedId === itemObj.id ? (  
				<img src={activeIcon} alt="right arrow"/>
			) : (
					<img src={arrowIcon} alt="right arrow" /> 
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