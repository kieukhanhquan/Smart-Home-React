import React, { useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from "../../Screens/HomeScreen/HomeScreen";
import RoutineScreen from "../../Screens/RoutineScreen/RoutineScreen";
import SettingScreen from "../../Screens/SettingScreen/SettingScreen";
import StaticScreen from "../../Screens/StaticScreen/StaticScreen";
import LightList from '../../Screens/HomeScreen/LightList';
const Tab = createMaterialBottomTabNavigator();

const BottomBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#00D1FF"
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Static" component={StaticScreen}
        options={{
          tabBarLabel: 'Static',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="equalizer" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Routines" component={RoutineScreen}
        options={{
          tabBarLabel: 'Routines',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="timer-settings" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Setting" component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-settings" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="LightList" component={LightList} />
    </Tab.Navigator>
  );
}
export default BottomBar;