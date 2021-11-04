import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  containerActive: {
    borderColor: 'blue',
  },
  containerInActive: {
    borderColor: 'grey',
  },
  textActive: {
    fontSize: 14,
    color: 'blue',
    alignSelf: 'center',
  },

  textInactive: {
    fontSize: 14,
    color: 'grey',
    alignSelf: 'center',
  },
});
export default styles;
