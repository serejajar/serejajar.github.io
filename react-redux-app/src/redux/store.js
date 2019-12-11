const initialState = [{
  id: 0,
  labelA: 'His name ',
  text: '',
  labelB: ' Mark',
  corect: 'is',
}, {
  id: 1,
  labelA: 'What ',
  text: '',
  labelB: ' her name?',
  corect: 'is',
}, {
  id: 2,
  labelA: 'How ',
  text: '',
  labelB: ' you?',
  corect: 'are',
}];

// <Task textA='His name ' correct="is"  textB=' Mark' />
// <Task textA='What ' correct="is"  textB=' her name?' />
// <Task textA='How ' correct="are"  textB=' you?' />
// <Task textA='Where ' correct="are"  textB=' your kids?' />
// <Task textA='He ' correct="is"  textB=' not thirty-five years old.?' />
// <Task correct="is" textB=' your wife a singer?' />
// <Task textA='I ' correct="am"  textB=' busy' />

// reducers
function answers(state = initialState, action) {
  switch (action.type) {
    case ADD_ANSWER: {
      const { text, id } = action;
      return  state.map((answer, i) => {
        if (answer.id == id) {
          answer.text = text;
        }
        return answer;
      });
    }
    default:
      return state;
  }
}

const rootReducer = Redux.combineReducers({ answers });
const store = Redux.createStore(rootReducer);
