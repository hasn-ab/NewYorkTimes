import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'purple',
  },
  overlay: {
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  cancelText: {
    color: 'red',
  },
  contentContainer: {
    width: 150,
    backgroundColor: 'white',
    height: 30,
    paddingStart: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderColor: '#ccc',
    fontSize: 16,
  },
  dropDown: {
    width: 30,
    height: 30,
  },
});

export default styles;
