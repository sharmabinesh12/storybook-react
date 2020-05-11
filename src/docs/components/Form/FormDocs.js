import React from 'react';
import { Input, Checkbox, Textarea } from '../../../components/Form';

function FormDocs() {
  const inputOnChange = e =>
    alert(`onChange on input with value "${e.target.value}" triggered`);

  const textFieldProps = [
    {
      key: 'input1',
      type: 'text',
      placeholder: 'Empty state',
      size: '15'
    },
    {
      key: 'input2',
      type: 'text',
      placeholder: 'Disabled',
      size: '15',
      disabled: true
    },
    {
      key: 'input3',
      type: 'text',
      placeholder: 'required',
      size: '15',
      required: true,
      errorMessage: 'Error message goes here'
    },
    {
      key: 'input4',
      type: 'text',
      placeholder: 'with label',
      size: '15',
      label: 'With Caption'
    },
    {
      key: 'input5',
      type: 'text',
      placeholder: 'Required',
      size: '15',
      label: 'With Caption',
      required: true,
      errorMessage: 'Error message goes here'
    },
    {
      key: 'input6',
      type: 'text',
      placeholder: 'Fullwidth with on change function',
      className: 'fullwidth',
      value: '',
      onChange: inputOnChange
    }
  ];

  const textareaOnChange = e =>
    alert(
      `textareaOnChange on textarea with value "${e.target.value}" triggered`
    );

  const textareaFieldProps = [
    {
      key: 'textarea1',
      cols: 50,
      rows: 9,
      name: 'textarea_1',
      placeholder: 'Empty state'
    },
    {
      key: 'textarea-noresize',
      cols: 50,
      rows: 1,
      name: 'textarea_noresize',
      placeholder: 'No resize',
      className: 'no-resize'
    },
    {
      key: 'textarea2',
      cols: 50,
      rows: 2,
      disabled: true,
      name: 'textarea_2',
      placeholder: 'Disabled'
    },
    {
      key: 'textarea3',
      cols: 50,
      rows: 3,
      name: 'textarea_3',
      placeholder: 'Read Only',
      readOnly: true
    },
    {
      key: 'textarea4',
      cols: 50,
      rows: 4,
      name: 'textarea_4',
      required: true,
      placeholder: 'Required Field'
    },
    {
      key: 'textarea5',
      cols: 50,
      rows: 5,
      name: 'textarea_5',
      required: true,
      placeholder: 'Required Field with error msg',
      errorMessage: 'Error message goes here'
    },
    {
      key: 'textarea6',
      cols: 50,
      rows: 6,
      name: 'textarea_6',
      required: true,
      placeholder: 'onchange',
      value: 'text area value',
      onChange: textareaOnChange
    },
    {
      label: 'Textarea with label',
      key: 'textarea7',
      rows: 7,
      name: 'textarea_7',
      placeholder: 'fullwidth textarea',
      onChange: textareaOnChange,
      className: 'no-resize fullwidth'
    }
  ];

  const checkboxOnChange = e =>
    alert(`onChange on checkbox with id ${e.target.id} triggered`);

  const checkboxProps = [
    {
      key: 'checkbox1'
    },
    {
      key: 'checkbox2',
      text: 'with label',
      id: 'checkbox2'
    },
    {
      key: 'checkbox3',
      text: 'with label required',
      required: true,
      id: 'checkbox3'
    },
    {
      key: 'checkbox4',
      required: true,
      text: 'with onChange event',
      id: 'checkbox4',
      onChange: checkboxOnChange
    }
  ];

  const renderInputs = props => props.map(prop => <Input {...prop} />);

  const renderCheckbox = props =>
    props.map(prop => (
      <div key={prop.key}>
        <Checkbox {...prop} />
      </div>
    ));

  const renderTextarea = props => props.map(prop => <Textarea {...prop} />);

  return (
    <div className="container">
      <h3>Forms</h3>
      <h4>Inputs</h4>
      <div className="row">
        <div className="col-sm-6">{renderInputs(textFieldProps)}</div>
      </div>

      <h4>Textarea</h4>
      <div className="row">
        <div className="col-sm-4">{renderTextarea(textareaFieldProps)}</div>
      </div>

      <h4>Checkbox</h4>
      <div className="row">
        <div className="col-sm-6">{renderCheckbox(checkboxProps)}</div>
      </div>
    </div>
  );
}

export default FormDocs;
