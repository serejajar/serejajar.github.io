const ADD_ANSWER = "ADD_ANSWER";

const addAnswer = (id, text) => ({
  type: ADD_ANSWER,
  id,
  text
});
