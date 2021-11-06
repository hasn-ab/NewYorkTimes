import React from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';
import {ArticleProps} from './types';

//takes url as prop and displays the article in webview
const ArticleUI = (props: ArticleProps) => {
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: props.url}}
        style={styles.webview}
        originWhitelist={['*']}
        startInLoadingState={true}
        allowsBackForwardNavigationGestures
      />
    </View>
  );
};

export default ArticleUI;

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    backgroundColor: 'white',
  },
});
