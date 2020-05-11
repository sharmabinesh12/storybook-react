import React from 'react';
import PropTypes from 'prop-types';

function Textarea({
  cols,
  rows,
  wrap,
  disabled,
  id,
  className,
  name,
  value,
  required,
  placeholder,
  maxLength,
  onChange,
  readOnly,
  label,
  errorMessage
}) {
  const renderLabel = (text, htmlFor) => {
    if (text === undefined) return null;
    return (
      <label htmlFor={htmlFor}>
        {text}
        {required && ' *'}
      </label>
    );
  };

  return (
    <div className="textarea">
      {renderLabel(label, id, required)}
      <textarea
        onChange={onChange}
        rows={parseInt(rows)}
        cols={parseInt(cols)}
        required={required}
        readOnly={readOnly}
        placeholder={placeholder}
        name={name}
        maxLength={maxLength}
        disabled={disabled}
        id={id}
        value={value}
        wrap={wrap}
        className={className}
      />
      {errorMessage && (
        <div className="input__error-message">{errorMessage}</div>
      )}
    </div>
  );
}

Textarea.defaultProps = {
  cols: 50,
  rows: 5
};

Textarea.propTypes = {
  cols: PropTypes.number,
  rows: PropTypes.number,
  wrap: PropTypes.string,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  label: PropTypes.string,
  errorMessage: PropTypes.string
};

export default Textarea;
