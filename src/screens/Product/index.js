import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Route} from 'react-router-dom';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductScreen = ({route}) => {
  const data = route.params.item;
  console.log('dataads', data);
  const navigation = useNavigation();
  const goBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={data.thumb} style={styles.backgroundImage}>
        <View style={styles.containerIcon}>
          <View style={styles.boxIconHeart}>
            <Icon name="heart" size={30} color="#de0404" />
            <Text style={styles.iconText}>{data.favorite}</Text>
          </View>
          <View style={styles.boxIconSeen}>
            <Icon name="eye" size={30} color="#de0404" />
            <Text style={styles.iconText}>{data.view}</Text>
          </View>
        </View>
      </ImageBackground>
      <ScrollView>
        <ImageBackground
          blurRadius={0}
          source={{
            uri: 'https://st4.depositphotos.com/1558912/38359/i/950/depositphotos_383596462-stock-photo-food-cooking-background-on-white.jpg?forcejpeg=true',
          }}
          style={styles.backgroundImageCook}>
          <View style={styles.backgroundBlur}>
            <Text style={styles.descriptionText}>{data.intro}</Text>

            <View style={styles.containerIngredient}>
              <View style={styles.boxIngredient}>
                <Text style={styles.ingredientTitle}>Nguyên liệu</Text>
              </View>
              <View style={styles.boxIngredientList}>
                <View style={styles.ingredient}>
                  {/* <Icon name="circle" size={7} color="black" /> */}
                  <Text style={styles.ingredientText}>{data.ingredients}</Text>
                </View>
              </View>
              {/* <View style={styles.boxIngredientList}>
                {data.ingredient.map((value, index) => (
                  <View key={index} style={styles.ingredient}>
                    <Icon name="circle" size={7} color="black" />
                    <Text style={styles.ingredientText}>{value}</Text>
                  </View>
                ))}
              </View> */}
            </View>

            <View style={styles.containerDoing}>
              <View style={styles.boxDoing}>
                <Text style={styles.doingTitle}>Cách thực hiện</Text>
              </View>
              <View style={styles.boxDoingList}>
                  <View style={styles.doing}>
                    <Text style={styles.doingText}>{data.instructions}</Text>
                  </View>
              </View>
              {/* <View style={styles.boxDoingList}>
                {data.doing.map((value, index) => (
                  <View key={index} style={styles.doing}>
                    <Icon name="circle" size={7} color="black" />
                    <Text style={styles.doingText}>{value}</Text>
                  </View>
                ))}
              </View> */}
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default ProductScreen;
