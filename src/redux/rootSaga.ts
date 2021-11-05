import {all, fork} from 'redux-saga/effects';
import {homeSagas} from '@screens/Home/redux';
// Root Saga combining all sagas of the app
export default function* rootSaga() {
  yield all([fork(homeSagas)]);
}
