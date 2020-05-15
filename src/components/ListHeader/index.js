import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchBox from "../search";
import SearchLogo from "../../assets/img/icons/search.svg";
import Close from "../../assets/img/icons/close-24px.svg";


const ListViewHeader = ({
	headText,
	searchPlaceholder,
	addTitle,
	headerIcon,
	searchIcon,
	filterIcon,
	addIcon,
	onAddClick,
	onFilterClick,
	onSearchInput,
	searchValue
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
							onClick={()=>setActiveSearch(true)}
							src={searchIcon} alt="search icon" 
						/>
					}
					{filterIcon &&
						<img
							onClick={onFilterClick}
							src={filterIcon} alt="filter icon"
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
					closeButtonCB = {()=>setActiveSearch(false) }
				/>
			):''}
		</div>
	);
}

ListViewHeader.propTypes = {
	SearchLogo:PropTypes.string,
	
};

ListViewHeader.defaultProps = {
	SearchLogo : '',
	
};

export default ListViewHeader;
