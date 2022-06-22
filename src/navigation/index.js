import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../contains/colors'
import HomeStackScreen from './HomeNavigation';
import SeenStackScreen from './SeenNavigation';
import FavoriteStackScreen from './FavoriteNavigation';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'ios-home' : 'ios-home-outline';
              break;
            case 'Seen':
              iconName = focused ? 'ios-timer' : 'ios-timer-outline';
              break;
            case 'Favorite':
              iconName = focused ? 'ios-heart' : 'ios-heart-outline';
              break;
            default:
              break;
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.second,
        tabBarInactiveTintColor: colors.second,
        tabBarStyle: {
          backgroundColor: colors.background,
          height: 70,
          paddingBottom: 10,
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeStackScreen} options={{title: 'Trang Chủ'}} />
      <Tab.Screen name="Seen" component={SeenStackScreen} options={{title: 'Đã Xem'}} />
      <Tab.Screen name="Favorite" component={FavoriteStackScreen} options={{title: 'Yêu Thích'}} />
    </Tab.Navigator>
  );
};

export default MyTabs;
