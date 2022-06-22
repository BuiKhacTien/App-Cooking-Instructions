import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {removeAllProduct} from '../../store/slices/favorite';
import {removeAllProductView} from '../../store/slices/viewed';

const IconHeader = ({type}) => {
  const selectorFavorite = useSelector(state => state.favorite.items);
  const selectorViewed = useSelector(state => state.viewed.items);
  const dispatch = useDispatch();
  const handleDeleteAll = () => {
    if (type === 'favorite' && selectorFavorite.length > 0) {
      Alert.alert(
        'Thông báo',
        'Bạn có chắc chắn muốn xóa hết tất cả danh sách món ăn yêu thích?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => dispatch(removeAllProduct()),
          },
        ],
      );
    } else if (type === 'viewed' && selectorViewed.length > 0) {
      Alert.alert(
        'Thông báo',
        'Bạn có chắc chắn muốn xóa hết tất cả danh sách món ăn đã xem?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => dispatch(removeAllProductView()),
          },
        ],
      );
    } else {
      Alert.alert('Thông báo', 'Danh sách món ăn đang rỗng!');
    }
  };

  return (
    <TouchableOpacity onPress={handleDeleteAll} style={styles.icon}>
      <Icon name="delete" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default IconHeader;
