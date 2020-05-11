import React from 'react';

const MenuItems = props => {
  const { children } = props;
  return <ul className="menu-container__list-container__list">{children}</ul>;
};
export default MenuItems;
