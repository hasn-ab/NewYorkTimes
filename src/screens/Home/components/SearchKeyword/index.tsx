import {SearchKeywordProps} from '@screens/Home/propTypes/searchKeywordProps';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
const SearchKeyword = ({onSearchPress}: SearchKeywordProps) => {
  const [keyword, setKeyword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          editable
          style={styles.input}
          value={keyword}
          onChangeText={setKeyword}
          autoCorrect={false}
          autoComplete="off"
          placeholder="Search Keywords"
          returnKeyLabel="Search"
          returnKeyType="search"
          onSubmitEditing={() => onSearchPress(keyword)}
        />

        <TouchableOpacity onPress={() => onSearchPress(keyword)}>
          <Image
            style={styles.searchIcon}
            source={require('@assets/images/search.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchKeyword;
