// import React, { useState } from 'react';
// import PropTypes from 'prop-types'
// import { Form, Button, ButtonToolbar } from 'react-bootstrap';
// import { TitleInput, RequiredCheckbox, TypeSelector } from './'
const { Form, Button, InputGroup } = ReactBootstrap;

/*export*/ function ColumnForm(props) {
  const { addColumn, closePopup } = props

  const [ title, setTitle ] = useState('');
  const [ type, setType ] = useState('text');
  const [ isRequired, setRequired ] = useState(false);
  const [ selectOptions, setSelectOptions ] = useState([{
    isValid: false,
    message: 'Please add the input',
    value: ''
  }])

  function onSubmit() {
    const options = selectOptions.filter(o => o.isValid).map(o => o.value)

    if (type === 'select' && !options.length) {
      return;
    }

    if (title !== '' && type !== '') {
      addColumn({
        title,
        type,
        options,
        isRequired,
      })
      closePopup()
    }
    return false;
  }

  return (
    <Form>
      <h2>Fill the form</h2>
      <TitleInput setTitle={setTitle} title={title} />
      <TypeSelector
        setType={setType}
        type={type}
        options={selectOptions}
        setOptions={setSelectOptions}
      />
      <RequiredCheckbox isRequired={isRequired} setRequired={setRequired} />
      <ButtonToolbar className="justify-content-between">
        <Button type="submit" variant="success" onClick={onSubmit}>Add</Button>
        <Button variant="success" onClick={closePopup}>Close</Button>
      </ButtonToolbar>
    </Form>
  );
}

ColumnForm.propTypes = {
  addColumn: PropTypes.func,
  closePopup: PropTypes.func,
};
