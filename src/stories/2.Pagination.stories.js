import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pagination from '../components/Pagination';
export default {
  title: 'Pagination',
  component: Pagination,
};

storiesOf('Pagination', module)
  .add('default', (state, setState) => (
    <div className="pagination-box">
      <Pagination 
				maxCount={50}
				pageNumber={state.pageNumber}
				LIST_SIZE = {15}
				handlePaginationList={action('page click')}
				setListPageNumber={ pageNumber => setState({ pageNumber })}				
      />
    </div>
  ))