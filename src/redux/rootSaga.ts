import {all, fork} from 'redux-saga/effects';

// Imports: Redux Sagas
import {homeSagas} from '@screens/Home/redux';
// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fork(homeSagas)]);
}
