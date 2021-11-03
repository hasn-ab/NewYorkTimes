import homeReducer from '@screens/Home/redux/reducer';
import {combineReducers} from 'redux';
import articleReducer from '../screens/Article/redux/reducer';

const rootReducer = combineReducers({
  article: articleReducer,
  home: homeReducer,
});

export default rootReducer;
