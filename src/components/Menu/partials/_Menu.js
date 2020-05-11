import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = event => {
    const { isMenuOpen } = this.state;
    if (!isMenuOpen) {
      return;
    }

    const buttonBoundary = this.getBoundary();
    if (this.isInsideBoundary(event, buttonBoundary)) {
      this.onMenuTrigger();
    }
  };

  getBoundary = () => {
    const {
      left,
      width,
      top,
      height
    } = this.wrapperRef.getBoundingClientRect();
    return {
      X: {
        min: left,
        max: left + width
      },
      Y: {
        min: top,
        max: top + height
      }
    };
  };

  isInsideBoundary = (event, boundary) =>
    boundary.X.max < event.clientX ||
    event.clientX < boundary.X.min ||
    (boundary.Y.max < event.clientY || event.clientY < boundary.Y.min);

  triggerMenuRef = node => {
    this.wrapperRef = node;
  };

  onMenuTrigger = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  setlistRefs = node => {
    const { isMenuOpen } = this.state;

    if (!isMenuOpen) return;
    const listRect = node.getBoundingClientRect();
    const triggerRect = this.wrapperRef.getBoundingClientRect();
    const positionState = {
      horizontalPlacement: 'right',
      verticalPlacement: 'bottom'
    };
    if (triggerRect.left + listRect.width > window.innerWidth) {
      positionState.horizontalPlacement = 'left';
    } else if (listRect.left < 0) {
      positionState.horizontalPlacement = 'right';
    }

    if (triggerRect.top + listRect.height > window.innerHeight) {
      this.listDom = node;
      positionState.verticalPlacement = 'top';
    } else if (listRect.top < 0) {
      this.listDom = node;
      positionState.verticalPlacement = 'bottom';
    }
    this.setState({ positionState });
  };

  getClassName = () => {
    const { positionState } = this.state;

    let className = '';
    if (positionState) {
      className += ` menu-container--horizontal-${
        positionState.horizontalPlacement
      }`;
      if (this.listDom)
        this.listDom.style.bottom = `${this.wrapperRef.getBoundingClientRect()
          .height + 4}px`;
    }
    return className;
  };

  renderMenuList = menuItems => menuItems;

  render() {
    const { children, className, menuListItems } = this.props;
    const { isMenuOpen } = this.state;
    const listContainerClass = `menu-container__list-container ${className} ${this.getClassName()}`;
    return (
      <>
        <div
          className="menu-container"
          onClick={e => this.onMenuTrigger(e)}
          ref={this.triggerMenuRef}
        >
          {children}
          {isMenuOpen ? (
            <div
              className={listContainerClass}
              ref={this.setlistRefs}
              id="listDom"
            >
              {this.renderMenuList(menuListItems)}
            </div>
          ) : null}
        </div>
      </>
    );
  }
}

Menu.propTypes = {
  className: PropTypes.string
};

Menu.defaultProps = {
  className: ''
};

export default Menu;
