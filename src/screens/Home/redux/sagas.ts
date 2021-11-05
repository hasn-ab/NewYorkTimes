import * as actions from './actionTypes';
import {takeLatest, put, call, select} from 'redux-saga/effects';
import {getSectionArticles} from 'src/api/homeApi';
import {AnyAction} from 'redux';

//listens for get news feed action
function* getArticlesList(action: AnyAction) {
  const {payload = null} = action;
  try {
    //TODO: save action if not empty
    const result = yield call(getSectionArticles, payload?.section);
    console.log({result});
    yield put({
      type: actions.SET_NEWS_FEED,
      payload: result.data,
    });
  } catch (error) {
    console.log({error});
  }
}

function* homeSagas() {
  yield takeLatest(actions.GET_NEWS_FEED, getArticlesList);
}

export default homeSagas;
