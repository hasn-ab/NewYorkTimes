import {homeReducer} from '@screens/Home/redux/';
import {combineReducers} from 'redux';
import articleReducer from '../screens/Article/redux/reducer';

//returns a single joint reducer for all reducers in app
const rootReducer = combineReducers({
  article: articleReducer,
  home: homeReducer,
});

export default rootReducer;
