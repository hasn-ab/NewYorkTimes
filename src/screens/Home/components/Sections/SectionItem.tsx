import {SectionItemProps} from '@screens/Home/types/sectionItemProps';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SectionItem = (props: SectionItemProps) => {
  const {name, active, onPress} = props;

  const activeStyles = active
    ? styles.containerActive
    : styles.containerInActive;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, activeStyles]}>
      <Text style={active ? styles.textActive : styles.textInactive}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default SectionItem;

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
    fontSize: 17,
    color: 'blue',
    alignSelf: 'center',
  },

  textInactive: {
    fontSize: 15,
    color: 'grey',
    alignSelf: 'center',
  },
});
