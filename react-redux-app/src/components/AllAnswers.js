let AllAnswers = ({ text }) => (
  <div>{text}</div>
);

const AllAnswersConnecter = ReactRedux.connect(
  function functionName() {
    const text = store.getState().answers.map(answer => answer.text).join();
    return { text }
  },
);

AllAnswers = AllAnswersConnecter(AllAnswers);
