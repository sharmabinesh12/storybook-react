import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({
  className,
  id,
  required,
  text = '',
  readOnly,
  tabIndex,
  value,
  onChange
}) {
  const classes = ['checkbox', className]
    .toString()
    .replace(/,+/g, ' ')
    .trim();

  const renderLabel = (label, htmlFor) => (
    <label htmlFor={htmlFor}>
      {label}
      {required && ' *'}
    </label>
  );

  return (
    <div className={classes}>
      <input
        id={id}
        className="hidden"
        readOnly={readOnly}
        tabIndex={tabIndex}
        type="checkbox"
        value={value}
        onChange={e => onChange(e)}
      />
      {renderLabel(text, id)}
    </div>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  text: PropTypes.string,
  readOnly: PropTypes.bool,
  tabIndex: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  onChange: () => {}
};
export default Checkbox;
