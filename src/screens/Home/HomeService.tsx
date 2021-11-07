import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '@redux/hooks';
import * as Actions from './redux/actionTypes';

/**
 * HomeService will be used for functional part of
 * code like click handlers, dispatching redux actions
 * It wraps UI of each screen
 */
const HomeService = ({children}: any) => {
  const dispatch = useAppDispatch();
  const currentSection = useAppSelector(state => state.home.currentSection);
  //is true when network call is occuring
  const showProgress = useAppSelector(state => state.home.apiProgress);
  useEffect(() => {
    //if a section was not selected call default home page api
    if (!currentSection) {
      dispatch({
        type: Actions.GET_NEWS_FEED,
      });
    }
  }, []);

  const onSearchKeywordPress = (keyword: string) => {
    console.log('onSearchKeyword press', keyword);
  };

  return children({
    /**
    handlers, data, will be passed to UI here
   */
    showProgress,
    onSearchKeywordPress,
  });
};

export default HomeService;

const styles = StyleSheet.create({});
