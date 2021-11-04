import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ArticleItem from '../ArticleItem';
import styles from './styles';
//displays list of articles in Home screen
const ArticleList = () => {
  const renderItem = ({item}) => {
    return <ArticleItem item={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={[1, 2, 3, 4, 5, 8, 9, 18]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ArticleList;
