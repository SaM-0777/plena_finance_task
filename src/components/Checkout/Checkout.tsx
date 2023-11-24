import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CheckoutStyles } from './Styles'
import colors from '../../constants/colors'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function Checkout() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const [subtotal, setSubtotal] = useState<number>(0.00)

  useEffect(() => {
    // Calculate the total price whenever cart items change
    const newTotalPrice = cartItems.reduce((acc, item) => {
      return acc + (item.price - (item.price * item.discountPercentage / 100)) * item.quantity;
    }, 0);

    setSubtotal(newTotalPrice);
  }, [cartItems]);

  function onPressCheckout() {

  }

  return (
    <View style={CheckoutStyles.container} >
      <View style={{ backgroundColor: colors.light2, padding: 20, marginBottom: 10, borderRadius: 20, }} >
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 8, }} >
          <Text style={CheckoutStyles.text} >Subtotal</Text>
          <Text style={CheckoutStyles.value} >${subtotal.toFixed(2)}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 8, }} >
          <Text style={CheckoutStyles.text} >Delivery</Text>
          <Text style={CheckoutStyles.value} >$2.00</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 8, }} >
          <Text style={CheckoutStyles.text} >Total</Text>
          <Text style={CheckoutStyles.value} >${(subtotal + 2).toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={CheckoutStyles.btn} >
          <Text style={CheckoutStyles.btntext} >Proceed To Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}