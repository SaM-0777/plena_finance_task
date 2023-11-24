import React from 'react'
import { View, Text } from 'react-native'
import { Home, Product, Cart } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from "../../assets/icons/HomeIcon.svg"
import CategoryIcon from "../../assets/icons/CategoryIcon.svg"
import FavouriteIcon from "../../assets/icons/HeartIcon.svg"
import MoreIcon from "../../assets/icons/MoreVerticalIcon.svg"
import Animated from 'react-native-reanimated';
import colors from '../constants/colors';
import TabBarItem from '../components/CustomTabBar';

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
    <BottomTabNavigator.Navigator initialRouteName='home' screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal: 16,
        borderRadius: 10,
        height: 60,
        backgroundColor: colors.light3,
        position: "absolute",
        bottom: 10,
        left: 0,
        right: 0,
      },
      tabBarIcon: ({ focused, color, size }) => {

        switch (route.name) {
          case 'home':
            return (
              <TabBarItem focused={focused} routeName='home' />
            )
          case 'categories':
            return (
              <TabBarItem focused={focused} routeName='categories' />
            )
          case 'favourite':
            return (
              <TabBarItem focused={focused} routeName='favourite' />
            )
          case 'more':
            return (
              <TabBarItem focused={focused} routeName='more' />
            )
          
          default:
            break;
        }
      }
    })} >
      <BottomTabNavigator.Screen name='home' component={Home} options={{  }} />
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
