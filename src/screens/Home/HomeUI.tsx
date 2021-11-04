import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {HomeProps} from './types';
import Sections from './components/Sections';
const HomeUI = (props: HomeProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Sections />
    </SafeAreaView>
  );
};

export default HomeUI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
