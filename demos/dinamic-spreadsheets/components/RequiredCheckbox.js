// import React from 'react';
// import PropTypes from 'prop-types'
// import { Form } from 'react-bootstrap';


export function RequiredCheckbox(props) {
  const { setRequired } = props
  console.log(Form.Check);
  return (
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check
        custom
        type="checkbox"
        label="Required"
        onChange={(e) => setRequired(e.target.checked)}
        />
    </Form.Group>
  );
}

RequiredCheckbox.propTypes = {
  setRequired: PropTypes.func,
  isRequired: PropTypes.bool,
};
