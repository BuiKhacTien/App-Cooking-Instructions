import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {lazy} from 'react';
import styles from './styles';

const Category = ({item, onPress}) => {

  return (
    <>
      <View style={styles.boxItem}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.item}>
            <View style={styles.boxImage}>
              <Image source={item.thumb} style={styles.image} />
            </View>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* {data &&
        data?.map((item, index) => (
          <View key={index+"asd"} style={styles.boxItem}>
            <TouchableOpacity onPress={() => changeScreenCategory(item)}>
              <View style={styles.item}>
                <View style={styles.boxImage}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))} */}
    </>
  );
};

export default Category;
