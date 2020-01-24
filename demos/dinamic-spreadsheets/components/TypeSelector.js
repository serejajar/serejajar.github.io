// import React from 'react';
// import PropTypes from 'prop-types'
// import { Form } from 'react-bootstrap';
// import { SelectOptions } from './'


export function TypeSelector(props) {
  const { setType, type, options, setOptions } = props

  return (
    <Form.Group>
      <Form.Label>Select type:</Form.Label>
      <Form.Control
        onChange={(e) => setType(e.target.value)}
        as="select"
        isValid={type}
        required
        defaultValue={type}
      >
        {['text', 'number', 'date', 'select'].map((o) => (
          <option key={o}>{o}</option>
        ))}
      </Form.Control>
      <Form.Text className="text-muted">
        If you use Select type please add the options
      </Form.Text>

      {type === 'select' && (
        <SelectOptions
          options={options}
          setOptions={setOptions}
        />
      )}
    </Form.Group>
  );
}

TypeSelector.propTypes = {
  type: PropTypes.string,
  setType: PropTypes.func,
  options: PropTypes.array,
  setOptions: PropTypes.func,
};
