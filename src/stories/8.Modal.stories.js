import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from '../components/Modal';
export default {
  title: 'Modal',
  component: Modal,
};

storiesOf('Modal', module)
  .add('default', (state, setState) => (
    <div className="Modal-box">
      <Modal 
				isOpen={true}
				onClose={action("close")}
				header={{title: 'Sample title',
				closeOnOutsideClick: false}}
				footer={{
					submitText: 'Save',
					cancelText: 'Delete',
					disableSubmit: false,
					disableCancel: false
				}}
      />
    </div>
  ))