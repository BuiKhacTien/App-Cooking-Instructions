import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';

import HomeScreen from '../screens/Home';
import CategoryScreen from '../screens/Category';
import ProductScreen from '../screens/Product';

import color from '../contains/colors';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: color.background,
            },
            headerTintColor: color.second,
            
        }}
    >
      <HomeStack.Screen name="HomeStack" component={HomeScreen}  options={{title: 'Món ăn ngon'}}  />
      <HomeStack.Screen name="CategoryStack" component={CategoryScreen} options={({ route }) => ({ title: route.params.title })} />
      <HomeStack.Screen name="ProductStack" component={ProductScreen}  options={({ route }) => ({ title: route.params.title })} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen