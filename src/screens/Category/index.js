import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import Product from '../../components/Product';
import {PRODUCTS} from '../../contains/data';
import { useDispatch } from 'react-redux';
import { addNewProductView } from '../../store/slices/viewed';

const CategoryScreen = ({route, navigation}) => {
  const {categoryId} = route.params;
  const productData = PRODUCTS.filter(item => item.categoryId === categoryId);
  const dispatch = useDispatch()
  const renderProduct = ({item}) => {
    return (
      <Product
        item={item}
        onPress={() => {
          navigation.push('ProductStack', {
            item: item,
            title: item.title,
          });
          dispatch(addNewProductView({id: item.id}))
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        data={productData}
        renderItem={renderProduct}
        numColumns={1}
        keyExtractor={item => item.id}
      />
    </View>
    // <ScrollView>
    //   <View style={styles.container}>
    //     <Product navigation={navigation} id={route.params.item.id} />
    //   </View>
    // </ScrollView>
  );
};

export default CategoryScreen;
