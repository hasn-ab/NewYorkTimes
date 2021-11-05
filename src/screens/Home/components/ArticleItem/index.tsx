import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import styles from './styles';
const Article = ({item}: any) => {
  let uri;
  try {
    uri = item?.multimedia?.[2]?.url || null;
  } catch (error) {
    console.log({
      error,
      item,
    });
  }
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={{uri}} style={styles.image} />

        <View style={styles.infoContainer}>
          <Text ellipsizeMode="tail" numberOfLines={2} style={styles.titleText}>
            {item.title}
          </Text>
          <View>
            <Text style={styles.reporterText}>{item.byline}</Text>
            <Text style={styles.publishedTimeText}>
              Published: {item.published_date}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
function articlesAreEqual(prev, next) {
  return prev.title === next.title;
}
const ArticleItem = React.memo(Article, articlesAreEqual);
export default ArticleItem;
