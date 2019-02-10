import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './todolist';
import App from './app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import actions from './actions';

const store = createStore(function(state = {}, action) {
  const { selectedMember } = actions;
  switch (action.type) {
    case selectedMember:
      return {
        "selectedMember":action.id
      };
      break;
    default:
      return state;
  }
}, {
  selectedMember: '-1'
})

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.querySelector('#container'));
