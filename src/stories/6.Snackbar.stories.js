import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Snackbar from '../components/snackbar';
export default {
  title: 'Snackbar',
  component: Snackbar,
};

storiesOf('Snackbar', module)
  .add('Warning', () => (
    <div className="snackbar-box"> 
			<Snackbar
				text="Are you sure you want to Delete?"
				style="snackbar-block snackbar-wrapper"
				color="snackbar snackbar-warning"
				icon={require('../assets/img/icons/ic_delete_white.svg')}
				buttons={[
					{
						icon: require('../assets/img/icons/thumbs-up-blue-icon.svg'),
						text: "Yes",
						onClick: action("yes"),
					},
					{
						icon: require('../assets/img/icons/thumbs-down-blue-icon.svg'),
						text: "Cancel",
						onClick: action("no")
					}
				]}
			/>
    </div>
	))
	.add('Alert', ()=>(
		<div className="sackbar-box">
			<Snackbar
				text="There are unsaved changes. Do you want to navigate away?"
				icon={require('../assets/img/icons/ic_delete_white.svg')}
				style="snackbar-block snackbar-wrapper"
				color="snackbar snackbar-notification"
				buttons={[
					{
						icon: require('../assets/img/icons/thumbs-up-blue-icon.svg'),
						text: "Yes",
						onClick:action('action confirmed'),
						action: 'TOAST.INTENT_DETAIL',
						actionObj: 'this.state.toast.actionObj',
						pageNum: 1
					},
					{
						icon: require('../assets/img/icons/thumbs-down-blue-icon.svg'),
						text: "Cancel",
						onClick: action('clear toast')
					}
				]}
			/>
		</div>
	))

