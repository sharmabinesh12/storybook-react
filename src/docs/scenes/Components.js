import React from 'react';
import ModalDocs from '../components/Modal/ModalDocs';
import MenuButtonDocs from '../components/Menu/MenuButtonDocs';
import ButtonDocs from '../components/Button/ButtonDocs';
import FormDocs from '../components/Form/FormDocs';
import ToggleButtonDocs from '../components/ToggleButton/ToggleButtonDocs';
import PaginationDocs from '../components/Pagination/PaginationDocs';
import LoadingDocs from '../components/Loading/LoadingDocs';
function ComponentsScene() {
  return (
    <div className="container">
      <LoadingDocs />
      <MenuButtonDocs />
      <ModalDocs />
      <ButtonDocs />
      <FormDocs />
      <ToggleButtonDocs />
      <PaginationDocs />
    </div>
  );
}

export default ComponentsScene;
