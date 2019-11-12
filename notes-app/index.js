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
          id: action.id,
          text: action.text,
        }
      ]
    case 'DELETE_NOTE':
      return state.filter(note => note.id != action.id);
    case 'SAVE_NOTE':
      return state.map(note => {
        if (note.id == action.id) {
          note.text = action.newText;
        }
        return note;
      });
    default:
      return state
  }
}

// VIEW
const store = Redux.createStore(notes);

const container = document.getElementById('notes');
const addBtn = document.getElementById('addBtn');
const addInp = document.getElementById('addInp');
const editInput = document.createElement('input');

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
    console.log('ENTER');
    store.dispatch({ type: 'ADD_NOTE', text: addInp.value, id: nextTodoId++ })
  }
}

container.onclick = function (e) {
  const elem = e.target;
  const parent = e.target.parentNode;
  const type = elem.getAttribute('name');
  const id = parent.getAttribute('data-id');

  if (!type) {
    return;
  }


  switch (type) {
    case 'delete':
      store.dispatch({ type: 'DELETE_NOTE', id })
      break;
    case 'edit':
      const saveBtn = parent.querySelector('button[name="save"]');
      const labelEl = parent.querySelector('span');

      parent.replaceChild(editInput, labelEl);
      editInput.value = labelEl.innerText;
      editInput.focus();
      editInput.onkeypress = function (e) {
        if (e.keyCode === 13) {
          store.dispatch({ type: 'SAVE_NOTE', newText: editInput.value, id })
        }
      }

      elem.style.display = 'none'; // hide 'edit' btn
      saveBtn.style.display = 'inline';

      break;
    case 'save':
      store.dispatch({ type: 'SAVE_NOTE', newText: editInput.value, id });
      break;
    default:

  }
}
