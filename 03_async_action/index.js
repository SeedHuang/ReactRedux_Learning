import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import sagas from './sagas';

const preloadedState =  {
  name: 'Seed Huang',
  age: 34
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, preloadedState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

store.subscribe(()=> {
  console.log(store.getState());
});

store.dispatch({ type:'changeName', name: 'SkyHuang'});
store.dispatch({ type:'changeAge', age: 5});
