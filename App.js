import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/navigation';

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;