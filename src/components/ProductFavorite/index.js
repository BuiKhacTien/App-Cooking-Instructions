import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {removeProductFavorite} from '../../store/slices/favorite';

const ProductFavorite = ({data, navigation}) => {
  const dispatch = useDispatch();
  const handlePressItem = value => {
    navigation.navigate('ProductStack', {
      item: value,
      title: value.title,
    });
  };

  const handlePressDelete = id => {
    Alert.alert('Thông báo', 'Bạn có chắc chắn muốn xóa không???', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => dispatch(removeProductFavorite({id}))},
    ]);
  };

  return (
    <>
      {data?.map((value, index) => (
        <View key={index + 'jkh'} style={styles.item}>
          <TouchableOpacity onPress={() => handlePressItem(value)}>
            <View style={styles.itemBox}>
              <View style={styles.boxImage}>
                <Image source={value.thumb} style={styles.image} />
              </View>
              <Text style={styles.textTitle}>{value.title}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.iconDelete}>
            <TouchableOpacity onPress={() => handlePressDelete(value.id)}>
              <Icon name="delete" size={30} color="#de0404" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
      {data.length < 1 && (
        <View>
          <Text style={styles.textEmpty}>
            Danh sách món ăn yêu thích đang rỗng!
          </Text>
        </View>
      )}
    </>
  );
};

export default ProductFavorite;
