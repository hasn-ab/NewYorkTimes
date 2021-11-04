import React, {useState} from 'react';
import {StyleSheet, Text, FlatList, ScrollView, View} from 'react-native';
import {sections} from './data';
import SectionItem from './SectionItem';
const firstRowData = sections.slice(0, sections.length / 2);
const secondRowData = sections.slice(sections.length / 2);
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

      <ScrollView contentContainerStyle={styles.contentContainer} horizontal>
        {secondRowData.map((_, index) => (
          <View>
            <View style={styles.itemContainer}>
              {firstRowData[index] && (
                <SectionItem
                  active={firstRowData[index] === currentActive}
                  name={firstRowData[index]}
                  onPress={() => {}}
                />
              )}
            </View>

            <View style={styles.itemContainer}>
              <SectionItem
                active={secondRowData[index] === currentActive}
                name={secondRowData[index]}
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

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  contentContainer: {
    paddingStart: 12,
  },
  itemContainer: {
    margin: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 16,
    paddingStart: 12,
  },
});
