import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pagination from '../components/Pagination';
export default {
  title: 'Pagination',
  component: Pagination,
};

storiesOf('Pagination', module)
  .add('default', () => (
    <div className="pagination-box">
      <Pagination 
				maxCount={50}
				pageNumber={2}
				LIST_SIZE = {15}
				handlePaginationList={action('page click')}
				setListPageNumber={ action('set page list')}				
      />
    </div>

    
  ))