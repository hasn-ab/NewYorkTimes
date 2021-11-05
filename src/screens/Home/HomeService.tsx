import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppDispatch} from '@redux/hooks';
import * as Actions from './redux/actionTypes';

/**
 * HomeService will be used for functional part of
 * code like click handlers, dispatching redux actions
 * It wraps UI of each screen
 */
const HomeService = ({children}: any) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: Actions.GET_NEWS_FEED,
    });
  }, []);

  return children({
    /**
    handlers, data, will be passed to UI here
    UI will get them as props
   */
  });
};

export default HomeService;

const styles = StyleSheet.create({});
