import React from 'react';
import PropTypes from 'prop-types';
const RecognizedValueCard = ({
	background,
	color,
	displayName,
	isEdit,
	value,
	resolved,
	handleEditParamChange,
	handleEditDone,
	editResolvedParam,
	handleDeleteParamConfirmation,
	Save_Logo,
	Edit_Logo,
	className
}) => {
  return (
		<div className={`right-inner-common ${className}`} style={{ backgroundColor: background, color: color }}>
			<div className="right-inner-list">
				<div className="name-recipeint">{displayName}:</div>
				{isEdit ?
					<input type="text" value={value} onChange={handleEditParamChange} placeholder="Enter new value" style={{ backgroundColor: background, color: color, borderBottom: '1px solid #000' }} />
					:
					resolved ? <div className="resolved-value" title={value}>{value}</div> : <div>NA</div>
				}
			</div>

			<div className="edit">
				{isEdit ?
					<img src={Save_Logo} className="save-icon" alt="save icon" onClick={handleEditDone} />
					:
					<>
						{Edit_Logo && <img src={Edit_Logo} className="edit-icon" alt="edit icon" onClick={editResolvedParam} />}
						<div className="cross-icon" onClick={handleDeleteParamConfirmation} style={!resolved ? { opacity: '0.2', pointerEvents: 'none', cursor: 'none' } : {}}></div>
					</>
				}
			</div>
		</div>
	)
};

RecognizedValueCard.propTypes = {
  handleEditParamChange : PropTypes.func
};

RecognizedValueCard.defaultProps = {
  handleEditParamChange : null
};

export default RecognizedValueCard;



 
