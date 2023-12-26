// AppNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MuchosScreen from './Muchos';
import HomeScreen from './Home';
import OtrosScreen from './Otros';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Muchos" component={MuchosScreen} options={{ headerShown: false }}  />
      <Tab.Screen name="Otros" component={OtrosScreen} options={{ headerShown: false }}  />
    </Tab.Navigator>
  );
};

export default AppNavigator;
