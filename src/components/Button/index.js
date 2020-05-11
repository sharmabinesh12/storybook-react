import React from 'react';

function Button({
  className,
  size,
  text,
  onClick,
  color,
  disabled,
  width,
  type = 'button'
}) {
  const classes = ['button', size, color, width, className]
    .toString()
    .replace(/,+/g, ' ')
    .trim();

  const button = type;

  return (
    <button
      type={button}
      disabled={disabled}
      className={classes}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
export default Button;
