// import React from 'react';
// import PropTypes from 'prop-types'
// import Immutable from 'immutable';
// import { Form, InputGroup, Button } from 'react-bootstrap';

const messages = {
  empty: 'The options should\'t be empty, otherwise it will be IGNORED!',
  notUnique: 'The options should be unique, otherwise it will be IGNORED!',
  success: 'The option is correct'
}

/*export*/ function SelectOptions(props) {
  const { options, setOptions } = props

  function handleOptionChange(e, i) {
    const { value } = e.target;
    const list = Immutable.List(options)
    const notUnique = list.filter((item) => {
      return item.value === value
    }).size;
    let message, isValid;

    if (notUnique) {
      message = messages.notUnique
      isValid = false
    } else if (!value || !value.trim()) {
      message = messages.empty
      isValid = false
    } else {
      message = messages.success
      isValid = true
    }
    setOptions(list.set(i, {
      value,
      message,
      isValid,
    }).toJS())
  }

  return (
    <Form.Group>
      <Form.Label>Add option:</Form.Label>
      {options.map((option , i) => (
        <InputGroup key={`option` + i}>
          <Form.Control
            onChange={(e) => handleOptionChange(e, i)}
            placeholder="Add option for Select"
            value={option.value}
            isInvalid={!option.isValid}
            isValid={option.isValid}
            required
          />
          {i > 0 && (
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                onClick={() => setOptions(Immutable.List(options).delete(i).toJS())}
              >
                X
              </Button>
            </InputGroup.Append>
          )}
          <Form.Control.Feedback
            type={option.isValid ? 'valid' : 'invalid'}
          >
            {option.message}
          </Form.Control.Feedback>
        </InputGroup>
      ))}

      <Button
        variant="success"
        onClick={() => setOptions(Immutable.List(options).push({
          isValid: false,
          message: messages.empty,
          value: ''
        }).toJS())}
      >
        + option
      </Button>
    </Form.Group>
  );
}

SelectOptions.propTypes = {
  options: PropTypes.array,
  setOptions: PropTypes.func,
};
