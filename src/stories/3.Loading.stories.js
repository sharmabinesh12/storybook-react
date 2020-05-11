import React from 'react';
// import { action } from '@storybook/addon-actions';
import Loading  from '../components/Loading';
import '../assets/scss/style.scss';
export default {
  title: 'Loading',
  component: Loading,
};


export const LoadingItem = () => (
	<Loading 
		loading={true}
	/>
);