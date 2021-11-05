import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, FlatList, ScrollView, View} from 'react-native';
import {sections, SectionType} from './data';
import SectionItem from '../SectionItem/SectionItem';
//dividing data into half for rows
const firstRowData = sections.slice(0, sections.length / 2);
const secondRowData = sections.slice(sections.length / 2);
import styles from './styles';
import {useAppDispatch} from '@redux/hooks';
import {GET_NEWS_FEED} from '../../redux/actionTypes';

const Sections = () => {
  const dispatch = useAppDispatch();
  const [currentActive, setCurrentActive] = useState<SectionType | null>(null);

  useEffect(() => {
    console.log({currentActive});

    //called on section press, call api with section key
    if (currentActive != null) {
      dispatch({
        type: GET_NEWS_FEED,
        payload: {
          section: currentActive.key,
        },
      });
    }
  }, [currentActive]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Sections</Text>

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {/**
         * rendering two rows
         */}
        {secondRowData.map((_, index) => (
          <View>
            <View style={styles.itemContainer}>
              {
                //check if size sections is odd, first row will have one less than second row
                firstRowData[index] && (
                  <SectionItem
                    key={firstRowData[index].key}
                    active={firstRowData[index].name === currentActive?.name}
                    name={firstRowData[index].name}
                    onPress={() => setCurrentActive(firstRowData[index])}
                  />
                )
              }
            </View>

            <View style={styles.itemContainer}>
              <SectionItem
                key={secondRowData[index].key}
                active={secondRowData[index].name === currentActive?.name}
                name={secondRowData[index].name}
                onPress={() => setCurrentActive(secondRowData[index])}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Sections;
