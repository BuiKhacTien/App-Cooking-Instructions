import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './styles';
import ProductFavorite from '../../components/ProductFavorite';
import { useSelector } from 'react-redux';
import { PRODUCTS } from '../../contains/data';

const FavoriteScreen = ({ navigation }) => {

  const favoriteSelector = useSelector(state => state.favorite.items)
  console.log('favorite selector', favoriteSelector);

  const [data, setData] = useState([]);
  useEffect(() => {
    const res = favoriteSelector.map(itemId =>  PRODUCTS.find(item => item.id === itemId));
    setData(res);
  }, [favoriteSelector]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerItem}>
          <ProductFavorite data={data} navigation={navigation}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default FavoriteScreen;
