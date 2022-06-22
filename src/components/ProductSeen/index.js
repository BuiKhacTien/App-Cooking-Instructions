import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import data from '../../contains/data';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';

const ProductSeen = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const res = data.find(item => item.id === 1);
    const item = res.item;
    setItems(item);
  }, []);

  const handlePressItem = () => {
    console.log('press item');
  };

  const handlePressDelete = () => {
    console.log('press delete');
  };

  const handlePressHeart = () => {
    console.log('press heart');
  };

  return (
    <>
      {items?.map((value, index) => (
        <View key={index + 'jkh'} style={styles.item}>
          <TouchableOpacity onPress={handlePressItem}>
            <View style={styles.itemBox}>
              <View style={styles.boxImage}>
                <Image source={value.image} style={styles.image} />
              </View>
              <Text style={styles.textTitle}>{value.title}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.boxIcon}>
            <View style={styles.icon}>
              <TouchableOpacity onPress={handlePressDelete}>
                <Icon name="delete" size={30} color="#de0404" />
              </TouchableOpacity>
            </View>
            <View style={styles.icon}>
              <TouchableOpacity onPress={handlePressHeart}>
                <IconAnt name="heart" size={25} color="#de0404" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

export default ProductSeen;
