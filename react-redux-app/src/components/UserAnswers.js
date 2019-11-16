let AllAnswers = ({ text }) => (
  <div>
    <p>Your answers are: {text}</p>

  </div>
);

const AllAnswersConnecter = ReactRedux.connect(
  function functionName() {
    const text = store.getState().answers.map(answer => answer.text).join(', ');
    return { text }
  },
);

AllAnswers = AllAnswersConnecter(AllAnswers);
