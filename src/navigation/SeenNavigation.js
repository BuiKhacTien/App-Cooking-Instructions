import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';

import SeenScreen from '../screens/Seen';

import color from '../contains/colors';

const SeenStack = createStackNavigator();

function SeenStackScreen() {
  return (
    <SeenStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: color.background,
            },
            headerTintColor: color.second,
            
        }}
    >
      <SeenStack.Screen name="SeenStack" component={SeenScreen}  options={{title: 'Đã xem'}}  />
      {/* <SeenStack.Screen name="CategoryStack" component={CategoryScreen}  options={{title: 'Category'}}  />
      <SeenStack.Screen name="ProductStack" component={ProductScreen}  options={{title: 'Product'}}  /> */}
    </SeenStack.Navigator>
  );
}

export default SeenStackScreen