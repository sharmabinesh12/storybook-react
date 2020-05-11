import React, { Component } from 'react';
import { Menu, MenuItems, MenuItem } from '../../../components/Menu';
import Button from '../../../components/Button';

class MenuBottonDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onMenuListClicked = event => {
    if (event.target.getAttribute('type') === 'button') {
      switch (event.target.innerHTML) {
        case 'Help':
          alert('help clicked');
          break;
        default:
          break;
      }
    } else {
      switch (event.target.innerHTML) {
        case 'Open Google':
          window.open('https://google.com', '_blank');
          break;
        default:
          break;
      }
    }
  };

  render() {
    const optionsList = (
      <MenuItems>
        <MenuItem onSelect={this.onMenuListClicked} type="link">
          Open Google
        </MenuItem>
        <MenuItem onSelect={this.onMenuListClicked} type="button" disabled>
          Refresh
        </MenuItem>
        <MenuItem onSelect={this.onMenuListClicked} type="link" disabled>
          Open facebook
        </MenuItem>
        <MenuItem onSelect={this.onMenuListClicked} type="button">
          Help
        </MenuItem>
      </MenuItems>
    );

    return (
      <div className="">
        <h3>Menu</h3>
        <Menu menuListItems={optionsList} className="custom-class">
          <Button className="trigger-button" text="Button..." key="Button" />
        </Menu>
      </div>
    );
  }
}

export default MenuBottonDocs;
