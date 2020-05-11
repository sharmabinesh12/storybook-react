import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';

const MenuItem = props => {
  const { children, disabled, onSelect, type } = props;
  return (
    <li>
      <Button
        key={children}
        onClick={onSelect}
        text={children}
        disabled={disabled}
        type={type}
      />
    </li>
  );
};
MenuItem.propTypes = {
  disabled: PropTypes.bool,
  onSelect: PropTypes.func
};
MenuItem.defaultProps = {
  disabled: false
};
export default MenuItem;
