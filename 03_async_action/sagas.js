import { put, call, take, takeEvery } from 'redux-saga/effects';

function setNameAsync(name) {
  console.log(`name is ${name}`);
  return new Promise((resolve)=> {
    setTimeout(()=>{
      resolve()
    }, 1000);
  });
}

function setAgeAsync(age) {
  console.log(`age is ${age}`);
  return new Promise((resolve)=> {
    setTimeout(()=>{
      resolve()
    }, 1000);
  });
}

function * changeNameAsync(action) {
  const { name } = action;
  yield call(setNameAsync, name);
  yield put({
      type: 'setName',
      name
  });
}

function * changeAgeAsync(action) {
  const { age } = action;
  yield call(setAgeAsync, age);
  yield put({
      type: 'setAge',
      age
  });
}

export default function * sagas() {
  yield takeEvery('changeName', changeNameAsync)
  yield takeEvery('changeAge', changeAgeAsync);
}
