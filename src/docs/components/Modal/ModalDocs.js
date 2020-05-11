import React, { Component } from 'react';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
class ModalDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleModal = () => {
    const { isOpen } = this.state;
    document.getElementsByTagName('body')[0].style.overflow = isOpen
      ? 'auto'
      : 'hidden';
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  onSubmitCallback = () => {
    alert('Submit clicked');
  };

  onCancelCallback = () => {
    alert('cancel clicked');
  };

  renderContent = () => <div>hello how are you</div>;

  render() {
    const { isOpen } = this.state;
    const header = {
      title: 'Sample title',
      closeOnOutsideClick: false,
      // isRemoveCloseIcon : true,  // send if needed to hide close icon on header
      style: {
        // backgroundColor: 'red'
      }
    };
    const footer = {
      onSubmit: this.onSubmitCallback,
      onCancel: this.onCancelCallback,
      submitText: 'Save',
      cancelText: 'Delete',
      style: {
        // backgroundColor:'blue'
      },
      disableSubmit: false,
      disableCancel: false
    };
    const customStyle = {
      // color:'yellow'
    };

    return (
      <>
        <Button key="open modal" text="Open Modal" onClick={this.toggleModal} />
        <Modal
          isOpen={isOpen}
          onClose={this.toggleModal}
          header={header}
          footer={footer}
          customStyle={customStyle}
        >
          {this.renderContent()}
        </Modal>
      </>
    );
  }
}

export default ModalDocs;
