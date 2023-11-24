import React from 'react'
import { View, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../../store/cartActions'
import { RootState } from '../../store/store'
import { CartItem } from '../../types'
import Styles from './Styles'
import BackIcon from "../../../assets/icons/ArrowLeftIcon.svg";
import { AddedItem, Checkout } from '../../components';


export default function Cart({ navigation }: { navigation: any }) {
  const dispatch = useDispatch()
  const addedItems = useSelector((state: RootState) => state.cart.cart)

  function onPressBack() {
    navigation.goBack()
  }

  return (
    <View style={Styles.screen} >
      <StatusBar backgroundColor={"transparent"}  barStyle={'light-content'} />
      <View style={Styles.header} >
        <TouchableOpacity activeOpacity={0.9} onPress={onPressBack} style={Styles.backBtnContainer} >
          <BackIcon width={16} height={16} />
        </TouchableOpacity>
        <Text style={Styles.headerText} >Shopping Cart ({5})</Text>
      </View>

      {/* list of added items */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[Styles.body, { flex: 1, flexGrow: 1, }, addedItems?.length <= 0 ? { height: "80%", alignItems: "center", justifyContent: "center" } : {  }] } >
        {
          addedItems?.length > 0 ? (addedItems.map(item => (
            <AddedItem key={item.id.toString()} item={item} />
          ))) : (
            <Text style={Styles.emptyText} >Cart is Empty</Text>
          )
        }
      </ScrollView>

      {addedItems?.length > 0 && (
        <Checkout />
      )}
    </View>
  )
}