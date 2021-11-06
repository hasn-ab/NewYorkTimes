import * as actions from './actionTypes';
import {takeLatest, put, spawn, fork, call, select} from 'redux-saga/effects';
import {getSectionArticles} from 'src/api/homeApi';
import {AnyAction} from 'redux';
import {SectionDataType} from '../propTypes/sectionItemProps';

function* storeSection(section: SectionDataType) {
  if (section) {
    try {
      //save selected section to remember on next app launch
      yield put({
        type: actions.UPDATE_SECTION,
        payload: {
          section,
        },
      });
    } catch (error) {}
  }
}

//listens for getnewsfeed action
function* getArticlesList(action: AnyAction): any {
  const {payload = null} = action;
  try {
    //run storeSection saga
    yield fork(storeSection, payload?.section);
    const result = yield call(getSectionArticles, payload?.section.key);
    console.log({result});
    //store api response in redux
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
