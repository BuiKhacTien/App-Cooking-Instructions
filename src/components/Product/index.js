import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import data from '../../contains/data';
import styles from './styles';
import Icon from 'react-native-vector-icons//Entypo';

const Product = ({item, onPress}) => {

  console.log('item', item); 

  const handleChangeHeart = () => {
    console.log('change heart');
  };

  return (
          <View style={styles.item}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.boxImage}>
                <Image source={item.thumb} style={styles.image} />
              </View>
              <Text style={styles.textTitle}>{item.title}</Text>
              <View style={styles.boxIcon}>
                <TouchableOpacity onPress={handleChangeHeart}>
                  <Icon name="heart" size={30} color="#de0404" />
                </TouchableOpacity>
                <Text style={styles.textHeart}>{item.favorite}</Text>
                <Icon name="eye" size={30} color="#de0404" />
                <Text style={styles.textSeen}>{item.view}</Text>
              </View>
            </TouchableOpacity>
          </View>
  );
};

export default Product;
