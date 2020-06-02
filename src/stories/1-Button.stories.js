import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import './index.scss';
export default {
  title: 'Button',
  component: Button,
};

storiesOf('Button', module)
  .add('default', () => 
    <div className="button-box">
      <Button key='default' text='default'/>
    </div>
    )
  .add('default-with-callback', () => (
    <div className="button-box">
      <Button 
        key = 'default-with-callback'
        text = 'with callback'
        onClick={action('default')}
      />
    </div>
    
  ))
  .add('big-blue', () => (
    <div className="button-box">
      <Button 
        key = 'big-blue'
        text = 'Blue'
        color='blue'
        size='big'
        onClick={action('default')}
      />
    </div>
  ))
  .add('button with iconn both side', () => (
    <div className="button-box">
      <Button 
        key = 'with icon'
        text = 'with icons'
        color = 'red'
        icon = {require('./img/add-24px.svg')}
        iconLast = {require('./img/ic_entity.svg')}
        size='big'
        onClick={action('default')}
      />
    </div>
  ))
  .add('big-disabled', () => (
    <div className="button-box">
      <Button 
        key = 'big-disabled'
        text = 'big disabled'
        size = 'big'
        disabled='disabled'
      />
    </div>

    
  ))