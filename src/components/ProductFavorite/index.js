import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import data from '../../contains/data';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProductFavorite = ({navigation}) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const res = data.find(item => item.id === 1);
    const item = res.item;
    setItems(item);
  }, []);

  const handlePressItem = (value) => {
    navigation.navigate('ProductDetail', {item: value});
  }

  const handlePressDelete = () => {
    console.log('press delete');
  }

  return (
    <>
      {items?.map((value, index) => (
        <View key={index + 'jkh'} style={styles.item}>
          <TouchableOpacity onPress={() => handlePressItem(value)}>
            <View style={styles.itemBox}>
              <View style={styles.boxImage}>
                <Image source={value.image} style={styles.image} />
              </View>
              <Text style={styles.textTitle}>{value.title}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.iconDelete}>
            <TouchableOpacity onPress={handlePressDelete}>
              <Icon name="delete" size={30} color="#de0404" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </>
  );
};

export default ProductFavorite;
