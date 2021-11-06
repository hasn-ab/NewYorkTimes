//Immer is recommed method for creating reducers
import produce from 'immer';
import * as Actions from './actionTypes';
import {AnyAction} from 'redux';
//Type for prestored Sections Data
import {SectionDataType} from '../propTypes/sectionItemProps';

const INITIAL_STATE = {
  currentSection: null as SectionDataType | null,
  articles: Array<any>(0),
};

//creating reducer with immer avoids returning state and spreading previous states
const homeReducer = (state = INITIAL_STATE, action: AnyAction) =>
  produce(state, draft => {
    switch (action.type) {
      case Actions.SET_NEWS_FEED:
        const newArticles = action.payload.results;
        draft.articles = newArticles;
        break;
      case Actions.UPDATE_SECTION:
        const section = action?.payload?.section || null;
        draft.currentSection = section;
        break;
      default:
        break;
    }
  });

export default homeReducer;
