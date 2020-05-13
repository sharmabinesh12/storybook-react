import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Input, Checkbox, Textarea } from '../components/Form';
import './index.scss';
export default {
  title: 'Form',
  component: 'Form',
};


const textFieldProps = [
  {
    key: 'input with bottom border',
    type: 'text',
    placeholder: 'Empty state',
    size: '15',
    className:'input-bottom-border'
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
    onChange: action('input6')
  }
];


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
    onChange: action("textArea6")
  },
  {
    label: 'Textarea with label',
    key: 'textarea7',
    rows: 7,
    name: 'textarea_7',
    placeholder: 'fullwidth textarea',
    onChange: action('Textarea with label'),
    className: 'no-resize fullwidth'
  }
];

// const checkboxProps = [
//   {
//     key: 'checkbox1'
//   },
//   {
//     key: 'checkbox2',
//     text: 'with label',
//     id: 'checkbox2'
//   },
//   {
//     key: 'checkbox3',
//     text: 'with label required',
//     required: true,
//     id: 'checkbox3'
//   },
//   {
//     key: 'checkbox4',
//     required: true,
//     text: 'with onChange event',
//     id: 'checkbox4',
//     onChange: action('checkbox4')
//   }
// ];

const renderInputs = props => props.map(prop => <Input {...prop} value={props.state && props.state.value} onChange={e=> props.setState({value:e.target.value})} />);
const renderTextarea = props => props.map(prop => <Textarea {...prop} value={props.state && props.state.value} onChange={e=> props.setState({value:e.target.value})} />);
// const renderCheckbox = props =>
//   props.map(prop => (
//     <div key={prop.key}>
//       <Checkbox {...prop} />
//     </div>
//   ));

storiesOf('Form', module)
  .add('Input field', (state,setState) => (
    <div className="form-box">
        <div className="col-sm-6">{renderInputs(textFieldProps,state,setState)}</div>
    </div>
  ))
  .add('Textarea field', (state,setState) => (
    <div className="form-box">
    <div className="col-sm-4">{renderTextarea(textareaFieldProps, state, setState)}</div>
    </div>
  ))
  // .add('Checkbox field', () => (
  //   <div className="form-box">
  //     <div className="col-sm-6">{renderCheckbox(checkboxProps)}</div>
  //   </div>
  // ))