import React from 'react';
import Loading  from '../components/Loading';
import '../assets/scss/style.scss';
import './index.scss';
import { object } from '@storybook/addon-knobs';

const label = 'Styles';
const defaultValue = {
	color: 'green',
	height:'30px',
	width:'30px'
};
const groupId = 'GROUP-ID1';
const styles = object(label, defaultValue, groupId);

export default {
  title: 'Loading',
  component: Loading,
};

export const LoadingItem = () => (
	<div className="loading-box">
			<Loading 
				loading={true}
				// styles={{color:'red',height:'20px', width:'20px'}}
				styles={styles}
			/>
	</div>

);