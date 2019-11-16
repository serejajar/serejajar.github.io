class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { addAnswer } = this.props;

    return (
      <div>
        <ul className="App">
          {store.getState().answers.map((answer) =>
            <Task
              id={answer.id}
              textA={answer.labelA}
              correct={answer.corect}
              text={answer.text}
              textB={answer.labelB}
              onChange={addAnswer}
            />
          )}
        </ul>
        <AllAnswers />
      </div>
    );
  }
}

const AppConnector = ReactRedux.connect(
  null,
  { addAnswer }
);
App = AppConnector(App);
