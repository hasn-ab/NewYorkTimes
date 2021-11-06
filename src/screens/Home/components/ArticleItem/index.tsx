import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import styles from './styles';
import {timeTillNow} from '@utils/getTimeDifference';
import {ArticleItemProps} from '@screens/Home/propTypes/articleItemProps';
const Article = ({item, onItemPress}: ArticleItemProps) => {
  let uri;
  uri = item?.multimedia?.[2]?.url || null; //get 150x150 thumbnail, or null if missing
  //get time that has passed since the published date
  const time = timeTillNow(new Date(item.published_date));

  return (
    <TouchableOpacity onPress={onItemPress} style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={{uri}} style={styles.image} />

        <View style={styles.infoContainer}>
          <Text ellipsizeMode="tail" numberOfLines={2} style={styles.titleText}>
            {item.title}
          </Text>
          <View>
            <Text style={styles.reporterText}>{item.byline}</Text>
            <Text style={styles.publishedTimeText}>Published: {time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
function articlesAreEqual(prev, next) {
  return prev.item.url === next.item.url;
}
//implements PureComponent functionality
const ArticleItem = React.memo(Article, articlesAreEqual);
export default ArticleItem;
