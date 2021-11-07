import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dadada',
    height: 40,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
});

export default styles;
