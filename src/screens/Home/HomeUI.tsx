import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {HomeProps} from './propTypes';
import Sections from './components/Sections';
import ArticleList from './components/ArticleList';
import Loader from 'src/components/Loader';
import LocationPicker from './components/LocationPicker/index';
import SearchKeyword from './components/SearchKeyword/index';

/**
 * HomeUI will only render the UI
 * all functional part of component will be passed
 * down from service
 */
const HomeUI = (homeProps: HomeProps) => {
  console.log({homeProps});
  const {showProgress, onSearchKeywordPress} = homeProps;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Sections />
        <LocationPicker />
        <SearchKeyword onSearchPress={onSearchKeywordPress} />
        <View style={{flex: 1}}>
          <ArticleList />
          {showProgress && <Loader style={styles.loader} />}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeUI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
  },
  loader: {
    position: 'absolute',
  },
});
