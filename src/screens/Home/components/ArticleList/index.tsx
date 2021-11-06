import {useNavigation} from '@react-navigation/core';
import {useAppSelector} from '@redux/hooks';
import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ArticleItem from '../ArticleItem';
import styles from './styles';
//displays list of articles in Home screen
const ArticleList = () => {
  const articles = useAppSelector(state => state.home.articles);
  const navigation = useNavigation();

  const onItemPress = (item: any) => {
    console.log({itempress: item});
    navigation.navigate('Article', {
      url: item.url,
      title: item.title,
    });
  };

  const renderItem = ({item}: any) => {
    return <ArticleItem onItemPress={() => onItemPress(item)} item={item} />;
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
