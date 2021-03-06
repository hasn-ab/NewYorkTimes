import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
    backgroundColor: 'white',
  },
  contentContainer: {
    flexDirection: 'row',
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    backgroundColor: '#dadada',
  },
  infoContainer: {
    flex: 1,
    marginStart: 16,
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 16,
    fontWeight: '500',
    flexShrink: 1,
  },
  reporterText: {
    fontSize: 12,
    marginTop: 5,
  },
  publishedTimeText: {
    fontSize: 12,
    marginTop: 3,
  },
});

export default styles;
