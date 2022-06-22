import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import ProductFavorite from '../../components/ProductFavorite';

const FavoriteScreen = ({navigation}) => {
  const changeScreen = () => {
    // navigation.push('CategoryStack', {});
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerItem}>
          <ProductFavorite navigation={navigation}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default FavoriteScreen;
