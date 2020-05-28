import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ListViewHeader from '../components/ListHeader';
import headerIcon from './img/ic_entity.svg';
import searchIcon from './img/search.svg';
import addIcon from './img/add-24px.svg';
import filterIcon from './img/filter.svg';

export default {
  title: 'ListViewHeader',
  component: ListViewHeader,
};

storiesOf('ListViewHeader', module)
  .add('default', (state, setState) => (
    <div className="listHeader-box">
			<ListViewHeader 
				headText="Entities"
				onSearchInput={action('search entity')}
				searchPlaceholder="Search entities..."
				addTitle="click to create entity"
				onAddClick={action('add click')}
				onFilterClick={action('filter click')}
				headerIcon={headerIcon}
				searchIcon={searchIcon}
				filterIcon={filterIcon}
				addIcon={addIcon}
				searchValue = {'hello'}
				onSearchButtonCbB={action('searchAction')}
			></ListViewHeader>
    </div>
  ))
	.add('without search', (state, setState) => (
    <div className="listHeader-box">
			<ListViewHeader 
				headText="Entities"
				searchPlaceholder="Search entities..."
				addTitle="click to create entity"
				onAddClick={action('add click')}
				onFilterClick={action('filter click')}
				headerIcon={headerIcon}
				filterIcon={filterIcon}
				addIcon={addIcon}
			></ListViewHeader>
    </div>
	)) 
	.add('without filter', (state, setState) => (
    <div className="listHeader-box">
			<ListViewHeader 
				headText="Entities"
				onSearchInput={action('search entity')}
				searchPlaceholder="Search entities..."
				addTitle="click to create entity"
				onAddClick={action('add click')}
				headerIcon={headerIcon}
				searchIcon={searchIcon}
				addIcon={addIcon}
			></ListViewHeader>
    </div>
	)) 
	.add('without add', (state, setState) => (
    <div className="listHeader-box">
			<ListViewHeader 
				headText="Entities"
				onSearchInput={action('search entity')}
				searchPlaceholder="Search entities..."
				addTitle="click to create entity"
				onFilterClick={action('filter click')}
				headerIcon={headerIcon}
				searchIcon={searchIcon}
				filterIcon={filterIcon}
			></ListViewHeader>
    </div>
	))
	.add('only add', (state, setState) => (
    <div className="listHeader-box">
			<ListViewHeader 
				headText="Entities"
				addTitle="click to create entity"
				headerIcon={headerIcon}
				onAddClick={action('add click')}
				addIcon={addIcon}
			></ListViewHeader>
    </div>
  ))



