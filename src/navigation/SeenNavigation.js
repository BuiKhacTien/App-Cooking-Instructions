import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import SeenScreen from '../screens/Seen';
import color from '../contains/colors';
import IconHeader from '../components/IconHeader';

const SeenStack = createStackNavigator();

function SeenStackScreen() {
  return (
    <SeenStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.background,
        },
        headerTintColor: color.second,
      }}>
      <SeenStack.Screen
        name="SeenStack"
        component={SeenScreen}
        options={{
          title: 'Đã xem',
          headerRight: () => <IconHeader type="viewed" />,
        }}
      />
    </SeenStack.Navigator>
  );
}

export default SeenStackScreen;
