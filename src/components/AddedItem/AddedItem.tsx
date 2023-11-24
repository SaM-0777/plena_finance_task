import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import SubstractIcon from "../../../assets/icons/SubstractIcon.svg"
import AddIcon from "../../../assets/icons/AddIcon.svg"
import { AddedItemStyles } from './Styles'
import { CartItem } from '../../types'
import { useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../../store/cartActions'


export default function AddedItem({ item }: { item: CartItem }) {
  const dispatch = useDispatch();

  function onPressDecrease() {
    if (item.quantity > 1) {
      dispatch(updateQuantity(item.id, item.quantity - 1))
    } else {
      dispatch(removeFromCart(item.id))
    }
  }
  function onPressIncrease() {
    dispatch(updateQuantity(item.id, item.quantity + 1))
  }

  return (
    <View style={AddedItemStyles.container} >
      <View style={{ width: "30%", flexDirection: 'row', alignItems: "center", gap: 10 }} >
        <Image source={{ uri: item.thumbnail }} resizeMode='contain' style={{ width: 80, height: 50, borderRadius: 5, }} />
        <View>
          <Text ellipsizeMode='tail' numberOfLines={1} style={AddedItemStyles.title} >{item.title}</Text>
          <Text style={AddedItemStyles.price} >${(item.price - (item.price * item.discountPercentage / 100)).toFixed(2)}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", width: "42%" }} >
        <TouchableOpacity activeOpacity={0.9} onPress={onPressDecrease} style={AddedItemStyles.btnContainer} >
          <SubstractIcon width={18} height={18} />
        </TouchableOpacity>
        <Text style={AddedItemStyles.title} >{item.quantity}</Text>
        <TouchableOpacity activeOpacity={0.9} onPress={onPressIncrease} style={AddedItemStyles.btnContainer} >
          <AddIcon width={16} height={16} />
        </TouchableOpacity>
      </View>
    </View>
  )
}