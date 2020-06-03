import React,{ useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import RecognizedValueCard from '../components/recognizedValueCard';
import Edit_Logo from "./img/ic_edit_black.svg";
import Save_Logo from "./img/save_black.svg";


export default {
  title: 'RecognizedValueCard',
  component: RecognizedValueCard,
};

storiesOf('RecognizedValueCard', module)
  .add('with edit', () =>{
		const [isEdit, setIsEdit] = useState(false);
		return (
			<div className="listHeader-box">
				<RecognizedValueCard 
					background = {'grey'}
					color = {'#fff' }
					displayName = {'city destination'}
					isEdit = {isEdit}
					value = {'Bangalore'}
					resolved = {true}
					handleEditParamChange = {action('handle edit param change')} 
					handleEditDone = {()=>setIsEdit(false)} 
					editResolvedParam = {()=>setIsEdit(true)}
					handleDeleteParamConfirmation = {action('param deleted')}
					Save_Logo = { Save_Logo}
					Edit_Logo = {Edit_Logo}
				/>
			</div>
		)
	})

	.add('without resolved', () =>{
		const [isEdit, setIsEdit] = useState(false);
		return (
			<div className="listHeader-box">
				<RecognizedValueCard 
					background = {'grey'}
					color = {'#fff' }
					displayName = {'city destination'}
					isEdit = {isEdit}
					value = {'Bangalore'}
					resolved = {false}
					handleEditParamChange = {action('handle edit param change')} 
					handleEditDone = {()=>setIsEdit(false)} 
					editResolvedParam = {()=>setIsEdit(true)}
					handleDeleteParamConfirmation = {action('param deleted')}
					Save_Logo = { Save_Logo}
					Edit_Logo = {Edit_Logo}
				/>
			</div>
		)
	})

	.add('without edit', (state, setState) => (
    <div className="listHeader-box">
			<RecognizedValueCard 
				background = {'#ddd000'}
				color = {'#fff' }
				displayName = {'city destination'}
				value = {'Bangalore'}
				handleDeleteParamConfirmation = {action('param deleted')}
				className="nes-resolved"
			/>
    </div>
	)) 

	



