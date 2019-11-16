class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  updateInput = input => {
    const { onChange, id } = this.props;
    onChange(id, input);
    this.setState({ input });
  };

  render() {
    const { textA, textB, text, correct, onChange } = this.props;
    const { input } = this.state;
    return (
      <li>
        {textA}
        <input value={input} onChange={ e => this.updateInput(e.target.value) }/>
        {textB}
      </li>
    );
  }
}
