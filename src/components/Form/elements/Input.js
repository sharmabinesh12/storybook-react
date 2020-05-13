import React from 'react';
import PropTypes from 'prop-types';

function Input({
  type,
  maxLength,
  minLength,
  pattern,
  placeholder,
  readOnly,
  size,
  spellCheck,
  className,
  id,
  disabled,
  value,
  required,
  label,
  name,
  onChange,
  errorMessage,
  onFocus,
  onBlur,
  onKeyDown
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
    <div className="input">
      {renderLabel(label, id, required)}
      <input
        type={type}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        placeholder={placeholder}
        readOnly={readOnly}
        size={size}
        spellCheck={spellCheck}
        id={id}
        disabled={disabled}
        value={value}
        required={required}
        name={name}
        onChange={onChange}
        className={className}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
      <div className="input__error-message">{errorMessage}</div>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  pattern: PropTypes.any,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  size: PropTypes.string,
  spellCheck: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func
};

export default Input;
