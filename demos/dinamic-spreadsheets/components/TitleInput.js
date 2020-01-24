// import React from 'react';
// import PropTypes from 'prop-types'
// import { Form } from 'react-bootstrap';


/*export*/ function TitleInput(props) {
  const { setTitle, title} = props

  return (
    <Form.Group controlId="userForm">
      <Form.Label>Title:</Form.Label>
      <Form.Control
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
        value={title}
        isValid={title}
        required
      />
      <Form.Text className="text-muted">
        You can add a random text, you can edit it later
      </Form.Text>
    </Form.Group>
  );
}

TitleInput.propTypes = {
  setTitle: PropTypes.func,
  title: PropTypes.string,
};
