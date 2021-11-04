import React, {useState} from 'react';
import {StyleSheet, Text, FlatList, ScrollView, View} from 'react-native';
import {sections} from './data';
import SectionItem from '../SectionItem/SectionItem';
const firstRowData = sections.slice(0, sections.length / 2);
const secondRowData = sections.slice(sections.length / 2);
import styles from './styles';
const Sections = props => {
  const [currentActive, setCurrentActive] = useState('');

  console.log({
    sections,
    firstRowData,
    secondRowData,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Sections</Text>

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {secondRowData.map((_, index) => (
          <View>
            <View style={styles.itemContainer}>
              {firstRowData[index] && (
                <SectionItem
                  active={firstRowData[index].name === currentActive}
                  name={firstRowData[index].name}
                  onPress={() => {}}
                />
              )}
            </View>

            <View style={styles.itemContainer}>
              <SectionItem
                active={secondRowData[index].name === currentActive}
                name={secondRowData[index].name}
                onPress={() => {}}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Sections;
