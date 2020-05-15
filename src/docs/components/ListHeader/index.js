import React from 'react';
import ListViewHeader from '../../../components/ListHeader';
// import Filter from './filter';
import headerIcon from '../../assets/img/icons/ic_entity.svg';
import searchIcon from '../../assets/img/icons/search.svg';
import addIcon from '../../assets/img/icons/add-24px.svg';
import filterIcon from '../../assets/img/icons/filter.svg';
class ListHeaderDoc extends React.Component {

	render(){
		return(
			<div style={{maxWidth:'350px'}}>
				<ListViewHeader 
					headText="Entities"
					onSearchInput={this.onSearchInput}
					searchPlaceholder="Search entities..."
					addTitle="click to create entity"
					onAddClick={this.onAddClick}
					headerIcon={headerIcon}
					searchIcon={searchIcon}
					filterIcon={filterIcon}
					addIcon={addIcon}
				>
					 {/* <div style={this.state.isFilterOpen ? {display:'block'}:{display:'none'}} id="filterId">
						<Filter 
							filterObj = {this.state.filterObj} 
							arrowColor='10px solid #aaa'
							applyFilterAction={this.applyFilterAction}
							// removeFilterAction = {this.removeFilterAction}
							showFilterList={this.showFilterList}
							searchPlaceHolder = "Search TagGroup"
							filterType="tagGroup"
						/>
					</div> */}
				</ListViewHeader>			
			</div>
		)
	}
}
export default ListHeaderDoc;