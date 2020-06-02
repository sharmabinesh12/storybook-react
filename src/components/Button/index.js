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
  icon,
  iconLast,
  title,
  style,
  id
}) {
  const classes = ['button', size, color, width, className]
    .toString()
    .replace(/,+/g, ' ')
    .trim();

  const button = type;

  return (
    <button
      type={button}
      style={style}
      disabled={disabled}
      className={classes}
      onClick={onClick}
      title={title}
      id={id}
    >
      {icon && <img className='float-left' src={icon} alt="icon"/>}
      {text}
      {iconLast && <img className='float-left' src={iconLast} alt="icon"/>}
    </button>
  );
}
export default Button;
