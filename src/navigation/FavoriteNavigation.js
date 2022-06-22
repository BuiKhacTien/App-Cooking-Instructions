import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';

import FavoriteScreen from '../screens/Favorite';
import color from '../contains/colors';
import IconHeader from '../components/IconHeader';
const FavoriteStack = createStackNavigator();

function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.background,
        },
        headerTintColor: color.second,
      }}>
      <FavoriteStack.Screen
        name="FavoriteStack"
        component={FavoriteScreen}
        options={{
          title: 'Yêu thích',
          headerRight: () => <IconHeader type='favorite'/>
        }}
      />
    </FavoriteStack.Navigator>
  );
}

export default FavoriteStackScreen;
