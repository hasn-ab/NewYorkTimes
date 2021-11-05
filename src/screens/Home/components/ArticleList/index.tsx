import {useAppSelector} from '@redux/hooks';
import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ArticleItem from '../ArticleItem';
import styles from './styles';
//displays list of articles in Home screen
const ArticleList = () => {
  const articles = useAppSelector(state => state.home.articles);
  console.log({articles});

  const renderItem = ({item}) => {
    return <ArticleItem item={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={articles}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ArticleList;
