const { createStore, combineReducers } = Redux;

// MODEL
// State
let nextTodoId = 0;
const initialState = {
  notes: []
}

// COMPONENT
// Actions
const ADD_NOTE = 'ADD_NOTE';
const REMOVE_NOTE = 'REMOVE_NOTE';
const EDIT_NOTE = 'EDIT_NOTE';

// Reducers
const notes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          id: nextTodoId++,
          text: action.text,
        }
      ]
    case 'REMOVE_NOTE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]
    case 'EDIT_NOTE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]
    default:
      return state
  }
}

// VIEW
//
const store = Redux.createStore(notes);

const container = document.getElementById('notes');
const addBtn = document.getElementById('addBtn');
const addInp = document.getElementById('addInp');

function render() {
  const html = store.getState().map((note) => `<li data-id="${note.id}">
  <span>${note.text}</span>
  <button type="button" name="edit">edit</button>
  <button type="button" name="save">save</button>
  <button type="button" name="delete">delete</button>
  </li>`);

  container.innerHTML = html.join('');
  addInp.value = '';
  addInp.focus();
}

store.subscribe(render);


addBtn.onclick = function () {
  store.dispatch({ type: 'ADD_NOTE', text: addInp.value, id: nextTodoId++ })
}

addInp.onkeypress = function (e) {
  if (e.keyCode === 13) {
    store.dispatch({ type: 'ADD_NOTE', text: addInp.value, id: nextTodoId++ })
  }
}
