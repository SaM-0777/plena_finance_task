import React from 'react'
import { View, Text, } from 'react-native'
import HomeActiveIcon from "../../../assets/icons/HomeActiveIcon.svg"
import CategoryActiveIcon from "../../../assets/icons/CategoryActiveIcon.svg"
import HomeIcon from "../../../assets/icons/HomeIcon.svg"
import CategoryIcon from "../../../assets/icons/CategoryIcon.svg"
import FavouriteIcon from "../../../assets/icons/HeartIcon.svg"
import MoreIcon from "../../../assets/icons/MoreVerticalIcon.svg"
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring } from 'react-native-reanimated'
import colors from '../../constants/colors'


export default function TabBarItem({ focused, routeName }: { focused: boolean, routeName: string }) {
  let Icon;
  const translateY = useSharedValue(0)
  const scaleI = useSharedValue(1)
  const paddingValue = useSharedValue(0)
  const backgroundIconColor = useDerivedValue(() => {
    return withSpring(focused ? 1 : 0)
  })

  const focusedStyle = useAnimatedStyle(() => {
    const transform = [{ translateY: withSpring(translateY.value - 18) }, { scale: withSpring(scaleI.value * 1.2) }]
    const backgroundColor = interpolateColor(backgroundIconColor.value, [0, 1], ["transparent", colors.dark] )
    const padding = withSpring(paddingValue.value + 16)
    return {
      transform,
      padding,
      backgroundColor
    }
  })

  const blurredStyle = useAnimatedStyle(() => {
    const transform = [{ translateY: withSpring(0) }, { scale: withSpring(scaleI.value * 1) }]
    const backgroundColor = interpolateColor(backgroundIconColor.value, [0, 1], ["transparent", colors.dark] )
    const padding = withSpring(paddingValue.value + 0)
    return {
      transform,
      padding,
      backgroundColor
    }
  })

  switch (routeName) {
    case 'home':
      Icon = focused ? <HomeActiveIcon /> : <HomeIcon /> 
      break;
    case 'categories':
      Icon = focused ? <CategoryActiveIcon /> : <CategoryIcon />
      break;
    case 'favourite':
      Icon = <FavouriteIcon />
      break;
    case 'more':
      Icon = <MoreIcon />
      break;
    default:
      break;
  }

  return (
    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }} >
      <Animated.View style={[{  alignItems: "center", justifyContent: "center", borderRadius: 99, }, focused ? focusedStyle : blurredStyle]} >
        {Icon}
      </Animated.View>
      {!focused && <Text style={{ fontFamily: "Manrope-Medium", fontSize: 12, color: "#8891A5", textTransform: "capitalize" }} >{routeName}</Text>}
    </View>
  )
}
