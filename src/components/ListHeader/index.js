import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchBox from "../search";
import SearchLogo from "../../assets/img/icons/search.svg";
import Close from "../../assets/img/icons/close-24px.svg";


const ListViewHeader = ({
	headText,
	searchPlaceholder,
	addTitle,
	filterTitle,
	headerIcon,
	searchIcon,
	filterIcon,
	addIcon,
	onAddClick,
	onFilterClick,
	onSearchInput,
	onSearchButtonCB,
	searchValue,
	children
}) => {
	const [activeSearch, setActiveSearch] = useState(0);

	return (
		<div className="list-header">
			{!activeSearch && (
				<div className="img-logo">
					<img src={headerIcon} alt="header icon" />
					<span>{headText}</span>
				</div>
			)}
			{!activeSearch && (
				<div className="icon-alignment">
					{searchIcon &&
						<img
							onClick={()=>{ setActiveSearch(true); onSearchButtonCB(true);}}
							src={searchIcon} alt="search icon" 
						/>
					}
					{filterIcon &&
						<img
							onClick={onFilterClick}
							src={filterIcon} 
							id="filter"
							alt="filter icon"
							title={filterTitle}
						/>
					}
					{addIcon &&
						<img
							onClick={onAddClick}
							title={addTitle}
							src={addIcon} alt="add icon"
						/>
					}
				</div>
			)}
			{activeSearch ? (
				<SearchBox
					SearchLogo={SearchLogo}
					Close={Close}
					onSearchInput={onSearchInput}
					placeholder={searchPlaceholder}
					searchValue={searchValue}
					closeButtonCB = {()=>{setActiveSearch(false); onSearchButtonCB(false) }}
				/>
			):''}

			{children}
		</div>
	);
}

ListViewHeader.propTypes = {
	SearchLogo:PropTypes.string,
	filterTitle : PropTypes.string
	
};

ListViewHeader.defaultProps = {
	SearchLogo : '',
	filterTitle:'filter',
	children : null
};

export default ListViewHeader;
