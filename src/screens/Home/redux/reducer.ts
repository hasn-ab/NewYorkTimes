//Immer is recommed method for creating reducers
import produce from 'immer';
import * as Actions from './actionTypes';
import {AnyAction} from 'redux';
//Type for prestored Sections Data
import {SectionDataType} from '../propTypes/sectionItemProps';
import {WritableDraft} from 'immer/dist/internal';

const INITIAL_STATE = {
  currentSection: null as SectionDataType | null, // will hold value for current active section
  articles: {} as WritableDraft<any>, //will hold articles for each section for offline use
  apiProgress: false,
};

//creating reducer with immer avoids returning state and spreading previous states
const homeReducer = (state = INITIAL_STATE, action: AnyAction) =>
  produce(state, draft => {
    switch (action.type) {
      case Actions.SET_NEWS_FEED: {
        //default section is home
        const section = action.payload.section || 'home';
        //extract key, incase of home key is same
        const key = typeof section === 'string' ? section : section.key;
        //set or update the articles
        draft.articles = {
          ...draft.articles,
          [key]: action.payload.data.results,
        };

        break;
      }
      case Actions.UPDATE_SECTION: {
        const section = action?.payload?.section || null;
        draft.currentSection = section;
        break;
      }
      case Actions.UPDATE_API_PROGRESS: {
        draft.apiProgress = action?.payload || false;
        break;
      }
      default:
        break;
    }
  });

export default homeReducer;
