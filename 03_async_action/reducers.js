import { combineReducers } from 'redux';

const reducers = {
  name: (state = '', action) => {
    switch(action.type) {
      case 'setName': {
        return  action.name
      }
      default:
        return state;
    }
  },
  age: (state = 0, action) => {
    switch (action.type) {
      case 'setAge': {
        return action.age
      }
      default:
        return state;
    }
  }
};

export default combineReducers(reducers);
