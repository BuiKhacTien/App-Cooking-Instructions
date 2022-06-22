import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import data from '../../contains/data';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../store/slices/favorite';

const Product = ({item, onPress}) => {
  const dispatch = useDispatch();
  const favoriteSelector = useSelector(state => state.favorite.items)
  const isFavorite = favoriteSelector.includes(item.id)
  const numberFavorite = isFavorite ? item.favorite + 1 : item.favorite
  const handleChangeHeart = () => {
    dispatch(toggleFavorite({id: item.id}))
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
                  <Icon name={isFavorite ? 'heart' : 'heart-outlined'} size={30} color="#de0404" />
                </TouchableOpacity>
                <Text style={styles.textHeart}>{numberFavorite}</Text>
                <Icon name="eye" size={30} color="#de0404" />
                <Text style={styles.textSeen}>{item.view}</Text>
              </View>
            </TouchableOpacity>
          </View>
  );
};

export default Product;
