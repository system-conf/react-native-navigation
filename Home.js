import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import CustomBottomTabBar from './CustomBottomTabBar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomBottomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AboutScreen" component={AboutScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
    </Tab.Navigator>
  );
};

const Home = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;
