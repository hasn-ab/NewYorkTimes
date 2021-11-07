import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import styles from './styles';
import locationsData from './data';

const LocationPicker = (props: any) => {
  const [selectedOption, setSelectedOption] = useState(locationsData[0]);

  return (
    <View style={styles.container}>
      <ModalSelector
        data={locationsData}
        overlayStyle={styles.overlay}
        cancelTextStyle={styles.cancelText}
        cancelText="Cancel"
        onChange={option => {
          //   alert(`${option.label} (${option.key}) nom nom nom`);
          setSelectedOption(option);
        }}>
        <View style={styles.contentContainer}>
          <TextInput
            style={styles.textInput}
            editable={false}
            placeholder="Location"
            value={selectedOption.label}
          />

          <Image
            source={require('@assets/images/dropdown.png')}
            style={styles.dropDown}
          />
        </View>
      </ModalSelector>
    </View>
  );
};

export default LocationPicker;
