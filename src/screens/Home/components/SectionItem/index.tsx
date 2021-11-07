import {SectionItemProps} from '@screens/Home/propTypes/sectionItemProps';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
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
