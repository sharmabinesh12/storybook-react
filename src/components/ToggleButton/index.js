import React from 'react';
import PropTypes from 'prop-types';

const ToggleButton = props => {
  const { name, id, label, isChecked, onChange, disabled } = props;

  return (
    <div className="toggle">
      <input
        type="checkbox"
        className="toggle__checkbox"
        id={id}
        onChange={onChange}
        defaultChecked={isChecked}
        disabled={disabled}
        name={name}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

ToggleButton.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

ToggleButton.defaultProps = {
  id: '',
  label: '',
  isChecked: false,
  onChange: null,
  disabled: false
};

export default ToggleButton;
