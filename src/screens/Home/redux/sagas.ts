import * as actions from './actionTypes';
import {takeLatest, put, call, select} from 'redux-saga/effects';
function* getArticlesList(action) {}

function* homeSagas() {
  yield takeLatest(actions.GET_NEWS_FEED, getArticlesList);
}

export default homeSagas;
