import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

storiesOf('Button', module)
  .add('default', () => <Button key='default' text='default'/>)
  .add('default-with-callback', () => (
    <Button 
      key = 'default-with-callback'
      text = 'with callback'
      onClick={action('default')}
    />
  ))
  .add('big-blue', () => (
    <Button 
      key = 'big-blue'
      text = 'Blue'
      color='blue'
      size='big'
      onClick={action('default')}
    />
  ))
  .add('big-disabled', () => (
    <Button 
      key = 'big-disabled'
      text = 'big disabled'
      size = 'big'
      disabled='disabled'
    />
  ))