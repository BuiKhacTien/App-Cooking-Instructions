import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';

import FavoriteScreen from '../screens/Favorite';
import color from '../contains/colors';

const FavoriteStack = createStackNavigator();

function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: color.background,
            },
            headerTintColor: color.second,
            
        }}
    >
      <FavoriteStack.Screen name="FavoriteStack" component={FavoriteScreen}  options={{title: 'Yêu thích'}}  />
      {/* <FavoriteStack.Screen name="CategoryStack" component={CategoryScreen}  options={{title: 'Category'}}  />
      <FavoriteStack.Screen name="ProductStack" component={ProductScreen}  options={{title: 'Product'}}  /> */}
    </FavoriteStack.Navigator>
  );
}

export default FavoriteStackScreen