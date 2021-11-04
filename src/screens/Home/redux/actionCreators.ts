import * as actions from './actionTypes';
export const getNewsFeed = (payload: any) => ({
  type: actions.GET_NEWS_FEED,
  payload,
});
