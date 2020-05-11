import React from 'react';
import Button from '../../../components/Button';

function ButtonDocs() {
  const buttonsProps = [
    {
      key: 'default',
      text: 'default',
    }, {
      key: 'default-with-callback',
      text: 'with callback',
      onClick: () => alert('default'),
    }, {
      key: 'default-big',
      text: 'big one',
      size: 'big'
    }, {
      key: 'big-red',
      text: 'big red',
      size: 'big',
      color: 'red',
    }, {
      key: 'big-blue',
      text: 'big blue',
      size: 'big',
      color: 'blue',
    }, {
      key: 'big-disabled',
      text: 'big disabled',
      size: 'big',
      disabled: 'disabled',
    }, {
      key: 'extra class name',
      text: 'extra class name',
      size: 'big',
      className: 'extra-class',
    }, {
      key: 'fullwidth red',
      text: 'fullwidth red',
      size: 'big',
      width: 'fullwidth',
      color: 'blue',
    },
  ]

  const renderButtons = props =>
    props.map(prop => 
      <Button key={prop.key} {...prop} />
    )

  return(
    <>
      <h3>Buttons</h3>
      {renderButtons(buttonsProps)}
    </>
  )
}

export default ButtonDocs;

