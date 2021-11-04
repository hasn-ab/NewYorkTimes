import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import styles from './styles';
const ArticleItem = ({item}: any) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.contentContainer}>
        <Image style={styles.image} />

        <View style={styles.infoContainer}>
          <Text ellipsizeMode="clip" numberOfLines={2} style={styles.titleText}>
            Lorem Ipsum dormoti asdhfksdjf asdfsd kfsdks kfsdks
          </Text>
          <View>
            <Text style={styles.reporterText}>By reported</Text>
            <Text style={styles.publishedTimeText}>
              Published: 10 minutes ago
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleItem;
