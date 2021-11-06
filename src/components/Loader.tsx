import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const Loader = ({style = {}}) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
  },
});
