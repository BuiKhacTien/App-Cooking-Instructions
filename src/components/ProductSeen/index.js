import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import data from '../../contains/data';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {removeProductView} from '../../store/slices/viewed';
import {toggleFavorite} from '../../store/slices/favorite';

const ProductSeen = ({data, navigation}) => {
  const favoriteSelector = useSelector(state => state.favorite.items);
  const handlePressItem = (value) => {
    navigation.navigate('ProductStack', {
      item: value,
      title: value.title,
    });
  };
  const dispatch = useDispatch();

  const handlePressDelete = id => {
    Alert.alert('Thông báo', 'Bạn có chắc chắn muốn xóa không???', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => dispatch(removeProductView({id}))},
    ]);
  };

  const handlePressHeart = id => {
    dispatch(toggleFavorite({id}));
  };

  return (
    <>
      {data?.map((value, index) => {
        const isFavorite = favoriteSelector.includes(value.id);
        return (
          <View key={index + 'jkh'} style={styles.item}>
            <TouchableOpacity onPress={() => handlePressItem(value)}>
              <View style={styles.itemBox}>
                <View style={styles.boxImage}>
                  <Image source={value.thumb} style={styles.image} />
                </View>
                <Text style={styles.textTitle}>{value.title}</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.boxIcon}>
              <View style={styles.icon}>
                <TouchableOpacity onPress={() => handlePressDelete(value.id)}>
                  <Icon name="delete" size={30} color="#de0404" />
                </TouchableOpacity>
              </View>
              <View style={styles.icon}>
                <TouchableOpacity onPress={() => handlePressHeart(value.id)}>
                  <IconAnt
                    name={isFavorite ? 'heart' : 'hearto'}
                    size={25}
                    color="#de0404"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })}
      {data.length < 1 && (
        <View>
          <Text style={styles.textEmpty}>
            Danh sách món ăn đã xem đang rỗng!
          </Text>
        </View>
      )}
    </>
  );
};

export default ProductSeen;
