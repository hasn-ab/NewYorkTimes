import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Article = () => {
  return (
    <View style={styles.container}>
      <Text>Article</Text>
    </View>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
