import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Category from '../../components/Category';
import data from '../../contains/data';
import {CATEGORIES} from '../../contains/data';

const HomeScreen = ({navigation}) => {
  const renderCategory = ({item}) => {
    return (
      <Category
        item={item}
        onPress={() => {
          navigation.push('CategoryStack', {
            categoryId: item.id,
            title: item.title,
          });
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={CATEGORIES}
        renderItem={renderCategory}
        numColumns={2}
        keyExtractor={item => item.id}
      />
      {/* <ScrollView>
        <View style={styles.containerItem}>
          <Category data={data} navigation={navigation} />
        </View>
      </ScrollView> */}
    </View>
  );
};

export default HomeScreen;
