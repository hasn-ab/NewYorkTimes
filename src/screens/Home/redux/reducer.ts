//Immer is recommed method for creating reducers
import produce from 'immer';
const INITIAL_STATE = {
  articles: Array<any>(0),
};
import * as Actions from './actionTypes';
//
const homeReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {
      case Actions.SET_NEWS_FEED:
        console.log('set news feed', {action});
        const newArticles = action.payload.results;
        draft.articles = newArticles;
        break;
      default:
        break;
    }
  });

export default homeReducer;
