import React from 'react';

function Button({
  className,
  size,
  text,
  onClick,
  color,
  disabled,
  width,
  type = 'button',
  icon
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
      {icon && <img className='float-left' src={icon} alt="icon"/>}
      {text}
    </button>
  );
}
export default Button;
