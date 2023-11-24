import React from 'react'
import { View, Text } from 'react-native'
import { Home, Product, Cart } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const NativeStackNavigator = createNativeStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();

function Categories() {
  return <View />
}
function Favourite() {
  return <View />
}
function More() {
  return <View />
}

function BottomTab() {
  return (
    <BottomTabNavigator.Navigator screenOptions={{ headerShown: false }} >
      <BottomTabNavigator.Screen name='home' component={Home} options={{
        
      }} />
      <BottomTabNavigator.Screen name='categories' component={Categories} />
      <BottomTabNavigator.Screen name='favourite' component={Favourite} />
      <BottomTabNavigator.Screen name='more' component={More} />
    </BottomTabNavigator.Navigator>
  )
}

export default function Navigation() {
  return (
    <NativeStackNavigator.Navigator screenOptions={{
      headerShown: false,     
    }} >
      <NativeStackNavigator.Screen name='bottom-tab' component={BottomTab} />
      <NativeStackNavigator.Screen name='product' component={Product} />
      <NativeStackNavigator.Screen name='cart' component={Cart} />
    </NativeStackNavigator.Navigator>
  )
}
