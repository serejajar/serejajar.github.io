// import React from 'react';
// import PropTypes from 'prop-types'
// import { List } from 'immutable';
// import { Form, Button, InputGroup } from 'react-bootstrap';
const { Form, Button, InputGroup } = ReactBootstrap;

const messages = {
  empty: 'The options should\'t be empty, otherwise it will be IGNORED!',
  notUnique: 'The options should be unique, otherwise it will be IGNORED!',
  success: 'The option is correct'
}

/*export*/ class ColumnForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      type: 'text',
      isRequired: false,
      selectOptions: [{
        isValid: false,
        message: messages.empty,
        value: ''
      }]
    }

    this.handleInput = this.handleInput.bind(this);
    this.addOption = this.addOption.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  handleInput(e, prop) {
    let obj = {}
    obj[prop] = prop === 'isRequired' ? e.target.checked : e.target.value
    this.setState(obj)
  }

  addOption() {
    const { selectOptions } = this.state

    this.setState({
      selectOptions: Immutable.List(selectOptions).push({
        isValid: false,
        message: messages.empty,
        value: ''
      }).toJS()
    })
  }

  deleteOption(i) {
    const { selectOptions } = this.state

    this.setState({
      selectOptions: Immutable.List(selectOptions).delete(i).toJS()
    })
  }

  handleOptionChange(e, i) {
    const { selectOptions } = this.state
    const { value } = e.target;
    const list = Immutable.List(selectOptions)
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

    this.setState({
      selectOptions: list.set(i, {
        value,
        message,
        isValid,
      }).toJS()
    })
  }

  onBtnClick() {
    const { addColumn, closePopup } = this.props
    const { title, type, isRequired, selectOptions = [] } = this.state
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

  render() {
    const { closePopup } = this.props
    const { title, type, selectOptions } = this.state

    return (
      <Form>
        <h2>Fill the form</h2>
        <Form.Group controlId="userForm">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            onChange={(e) => this.handleInput(e, 'title')}
            placeholder="Enter title"
            value={title}
            isValid={title}
            required
          />
          <Form.Text className="text-muted">
            You can add a random text, you can edit it later
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Select type:</Form.Label>
          <Form.Control
            onChange={(e) => this.handleInput(e, 'type')}
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
            <Form.Group>
              <Form.Label>Add option:</Form.Label>
              {selectOptions.map((option , i) => (
                <InputGroup key={`option` + i}>
                  <Form.Control
                    onChange={(e) => this.handleOptionChange(e, i)}
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
                        onClick={() => this.deleteOption(i)}
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

              <Button variant="success" onClick={this.addOption}>+ option</Button>
            </Form.Group>
          )}
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Required"
            onChange={(e) => this.handleInput(e, 'isRequired')}
            />
        </Form.Group>

        <Button
          type="submit"
          variant="success"
          onClick={this.onBtnClick}
        >
          Add
        </Button>
        <Button
          variant="success"
          onClick={closePopup}
        >
          Close
        </Button>
      </Form>
    );
  }
}

ColumnForm.propTypes = {
  addColumn: PropTypes.func,
  closePopup: PropTypes.func,
};
