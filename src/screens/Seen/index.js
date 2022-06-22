import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import ProductSeen from '../../components/ProductSeen';

const SeenScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerItem}>
          <ProductSeen navigation={navigation}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default SeenScreen