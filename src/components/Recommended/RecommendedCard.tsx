import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartActions'
import { RecommendedCardStyles } from './Styles'
import { placeholderImage } from '../../constants/constants'
import LikeInActiveIcon from "../../../assets/icons/LikeInActiveIcon.svg";
import LikeActiveIcon from "../../../assets/icons/LikeActiveIcon.svg";
import AddIcon from "../../../assets/icons/AddIconWhite.svg";
import colors from '../../constants/colors';
import { Product } from '../../types'


export default function RecommendedCard({ navigation, product }: {
  navigation: any,
  product?: Product
}) {
  const dispatch = useDispatch()
  const [liked, setLiked] = useState<boolean>(false)

  function onPressToggleLike() {
    setLiked(state => !state)
  }

  function onPressAddToCart() {
    if (product?.id) {
      dispatch(addToCart(product))
    }
  }

  function onPressProduct() {
    if (product?.id) {
      navigation.navigate('product', {
        id: product.id,
      })
    }
  }

  return (
    <View style={RecommendedCardStyles.container} >
      <View style={RecommendedCardStyles.thumbnailContainer} >
        {liked ? <LikeActiveIcon style={RecommendedCardStyles.likeButton} onPress={onPressToggleLike} /> : <LikeInActiveIcon style={RecommendedCardStyles.likeButton} onPress={onPressToggleLike} />}
        <Image source={{ uri: product?.thumbnail || placeholderImage }} resizeMode='contain' style={{ width: 100, height: 100 }} />
      </View>
      <TouchableOpacity activeOpacity={0.9} onPress={onPressProduct} style={{ marginVertical: 10 }} >
        <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }} >
          {
            product?.price ? (
              <Text style={RecommendedCardStyles.price} >${(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</Text>
            ) : (
              <View style={{ width: 100, height: 14, borderRadius: 6, backgroundColor: colors.light1, marginBottom: 5, }} />
            )
          }
          {product && <TouchableOpacity activeOpacity={0.9} onPress={onPressAddToCart} style={RecommendedCardStyles.addBtnContainer} >
            <AddIcon color={"#FFFFFF"} width={16} height={16} />
          </TouchableOpacity>}
        </View>
        {
          product?.title ? (
            <Text ellipsizeMode='tail' numberOfLines={1} style={RecommendedCardStyles.title} >{product.title}</Text>
          ): (
            <View style={{ width: 120, height: 14, borderRadius: 6, backgroundColor: colors.light1 }} />
          )
        }
      </TouchableOpacity>
    </View>
  )
}
