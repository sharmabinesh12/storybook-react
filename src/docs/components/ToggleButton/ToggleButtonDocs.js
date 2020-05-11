import React from 'react';
import ToggleButton from '../../../components/ToggleButton';

const toggleCallback = event => {
  alert(event.target.id);
};

function ToggleButtonDocs() {
  const toggleProps = [
    {
      id: 'toggle',
      isChecked: true
    },
    {
      id: 'toggle2',
      label: 'With Label'
    },
    {
      id: 'toggle3',
      label: 'Toggle-Disabled',
      disabled: true
    },
    {
      id: 'toggle6',
      isChecked: false,
      label: 'With callback',
      onChange: toggleCallback
    }
  ];

  const renderToggleButtons = props =>
    props.map(prop => (
      <div key={prop.id}>
        <ToggleButton {...prop} />
      </div>
    ));

  return (
    <div>
      <h3>Toggle Button</h3>
      {renderToggleButtons(toggleProps)}
    </div>
  );
}

export default ToggleButtonDocs;
