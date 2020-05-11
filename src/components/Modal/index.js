import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleClickOutside = event => {
    const { onClose } = this.props;
    if (event.target === this.wrapperRef) {
      onClose();
    }
  };

  renderButton = (type, args) => {
    const component = require('./partials/Button').default;
    return component(type, args);
  };

  renderModalHeader = props => {
    const { header, onClose } = props;
    return (
      <div className="modal__content__header" style={header.style}>
        {header.isRemoveCloseIcon ? null : (
          <span className="modal__content__header--close" onClick={onClose}>
            &times;
          </span>
        )}
        <div className="modal__content__header--title">{header.title}</div>
      </div>
    );
  };

  renderModalFooter = props => {
    const { footer } = props;
    return (
      <>
        {footer ? (
          <div className="modal__content__footer" style={footer.style}>
            {footer.onCancel ? this.renderButton('cancel', footer) : null}
            {footer.onSubmit ? this.renderButton('save', footer) : null}
          </div>
        ) : null}
      </>
    );
  };

  renderModalBody = props => (
    <div className="modal__content__body">{props.children}</div>
  );

  render() {
    const {
      children,
      onClose,
      header,
      footer,
      customStyle,
      isOpen
    } = this.props;
    return (
      <>
        {isOpen ? (
          <div
            className="modal"
            ref={header.closeOnOutsideClick ? this.setWrapperRef : null}
          >
            <div className="modal__content" style={customStyle}>
              {this.renderModalHeader({ onClose, header })}
              {this.renderModalBody({ children })}
              {this.renderModalFooter({ footer })}
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  header: PropTypes.shape({
    title: PropTypes.string,
    closeOnOutsideClick: PropTypes.bool,
    style: PropTypes.object
  }),
  footer: PropTypes.shape({
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    cancelText: PropTypes.string,
    submitText: PropTypes.string,
    disableCancel: PropTypes.bool,
    disableSubmit: PropTypes.bool,
    customStyle: PropTypes.object
  }),
  customStyle: PropTypes.object
};

export default Modal;

Modal.defaultProps = {
  header: {
    title: '',
    closeOnOutsideClick: false,
    style: {}
  },
  footer: {
    cancelText: 'Cancel',
    submitText: 'Submit',
    disableCancel: false,
    disableSubmit: false,
    customStyle: {}
  },
  customStyle: {}
};
