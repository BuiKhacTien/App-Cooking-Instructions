import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './styles';
import ProductSeen from '../../components/ProductSeen';
import { useSelector } from 'react-redux';
import { PRODUCTS } from '../../contains/data';

const SeenScreen = ({navigation}) => {

  const viewedSelector = useSelector(state => state.viewed.items)
  console.log('viewedSelector', viewedSelector);

  const [data, setData] = useState([]);
  useEffect(() => {
    const res = viewedSelector.map(itemId =>  PRODUCTS.find(item => item.id === itemId));
    setData(res);
  }, [viewedSelector]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerItem}>
          <ProductSeen data={data} navigation={navigation}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default SeenScreen