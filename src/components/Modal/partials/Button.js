import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';

const ButtonPartial = (type, args) => {
  let buttonDom = <></>;
  if (type === 'cancel') {
    buttonDom = (
      <Button
        key={args.cancelText}
        text={args.cancelText}
        color="red"
        size="big"
        className="modal__content__footer--cancel-button"
        onClick={args.disableCancel === 'disabled' ? null : args.onCancel}
        disabled={args.disableCancel}
      />
    );
  } else if (type === 'save') {
    buttonDom = (
      <Button
        key={args.submitText}
        text={args.submitText}
        color="blue"
        size="big"
        className="modal__content__footer--submit-button"
        onClick={args.disableSubmit === 'disabled' ? null : args.onSubmit}
        disabled={args.disableSubmit}
      />
    );
  }
  return buttonDom;
};

export default ButtonPartial;

Button.propTypes = {
  args: PropTypes.shape({
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    cancelText: PropTypes.string,
    submitText: PropTypes.string,
    disableCancel: PropTypes.bool,
    disableSubmit: PropTypes.bool
  })
};
Button.defaultProps = {
  args: {
    cancelText: 'Cancel',
    submitText: 'Submit',
    disableCancel: false,
    disableSubmit: false
  }
};
