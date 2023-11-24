/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, ScrollView, TouchableOpacity, ToastAndroid, Dimensions, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartActions'
import { Product as ProductType } from '../../types';
import BackIcon from "../../../assets/icons/ArrowLeftIcon.svg";
import BagIcon from "../../../assets/icons/BagIconBlack.svg";
import Styles from './Styles';
import colors from '../../constants/colors';
import { ProductReview } from '../../components';
import { ProductCarousel } from '../../components';
import typography from '../../constants/typography';
import { placeholderImage } from '../../constants/constants';
import { RootState } from '../../store/store';


export default function Product({ route, navigation }: { route: any, navigation: any }) {
  const { id } = route.params
  const dispatch = useDispatch()
  const cartCount = useSelector((state: RootState) => state.cart.cart.length)
  const [productDetails, setProductDetails] = useState<ProductType>()

  function onPressBack() {
    navigation.goBack()
  }
  function onPressCart() {
    navigation.navigate('cart')
  }
  function onPressAddToCart() {
    if (productDetails?.id) {
      dispatch(addToCart(productDetails))
      ToastAndroid.show(`${productDetails.title} added to cart`, ToastAndroid.SHORT)
    }
  }

  async function getProductDetails() {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`)
      if (response.ok) {
        const data = await response.json()
        //console.log(data);
        setProductDetails(data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductDetails()
  }, [])

  return (
    <View style={Styles.screen} >
      <StatusBar backgroundColor={"white"}  barStyle={'dark-content'} />
      <ScrollView alwaysBounceVertical={false} bounces={false} contentContainerStyle={Styles.container} showsVerticalScrollIndicator={false} style={{ flexGrow: 1, }} >
        {/* Header */}
        <View style={Styles.header} >
          <View style={Styles.headingContainer} >
            <TouchableOpacity activeOpacity={0.9} onPress={onPressBack} style={Styles.backBtnContainer} >
              <BackIcon width={16} height={16} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={onPressCart} style={Styles.cartContainer} >
              <BagIcon width={36} height={25} />
              <View style={Styles.cartItemContainer} >
                <Text style={Styles.cartItemText} >{cartCount}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            {
              productDetails?.brand ? (
                <Text numberOfLines={2} style={Styles.brandText} >{productDetails.brand}</Text>
              ) : (
                <View style={{ width: 200, height: 14, borderRadius: 6, backgroundColor: colors.light1, marginBottom: 5, }} />
              )
            }
            {
              productDetails?.title ? (
                <Text numberOfLines={2} style={Styles.titleText} >{productDetails.title}</Text>
              ) : (
                <View style={{ width: 300, height: 14, borderRadius: 6, backgroundColor: colors.light1, marginBottom: 5, }} />
              )
            }
          </View>
        </View>

        {/* Body */}
        <View style={Styles.body} >
          {
            productDetails?.rating ? (
              <ProductReview rating={productDetails.rating} reviews={110} />
            ) : (
              <View style={{ marginHorizontal: 16, width: 200, height: 14, borderRadius: 6, backgroundColor: colors.light1, marginBottom: 5, }} />
            )
          }

          {/* image carousel */}
          {
            productDetails?.images ? (
              <ProductCarousel images={productDetails.images} />
            ) : (
              <View style={{ alignItems: "center", justifyContent: "center",  width: Dimensions.get("window").width, height: 200, }} >
                <Image source={{ uri: placeholderImage }} style={{  width: 180, height: 180, }} />
              </View>
            )
          }

          {/* product details */}
          <View style={Styles.priceContainer} >
            {
              productDetails?.price ? (
                <>
                  <Text style={Styles.priceText} >${(productDetails.price - (productDetails.price * productDetails.discountPercentage / 100)).toFixed(2)}</Text>
                  <View style={Styles.discountContainer} >
                    <Text style={Styles.discountText} >${(productDetails.price * productDetails.discountPercentage / 100).toFixed(2)} OFF</Text>
                  </View>
                </>
              ) : (
                <View style={{ width: 60, height: 14, borderRadius: 6, backgroundColor: colors.light1, marginBottom: 5, }} />
              )
            }

          </View>

          <View style={Styles.details} >
            <View style={Styles.btnContainer} >
              {
                productDetails?.id ? (
                  <>
                    <TouchableOpacity style={Styles.addToCartBtn} activeOpacity={0.9} onPress={onPressAddToCart} >
                      <Text style={Styles.addToCartBtnText} >Add To Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.buyNowBtn} activeOpacity={0.9} onPress={onPressAddToCart} >
                      <Text style={Styles.buyNowBtnText} >Buy Now</Text>
                    </TouchableOpacity>
                  </>
                ): (
                  <>
                    <View style={{ width: "45%", height: 60, backgroundColor: colors.light1, borderRadius: 20, }} />
                    <View style={{ width: "45%", height: 60, backgroundColor: colors.light1, borderRadius: 20, }} />
                  </>
                )
              }
            </View>

            <Text style={{ marginTop: 30, ...typography.b1Regular, color: colors.dark }} >Details</Text>
            {
              productDetails?.description ? (
                <Text style={Styles.description} >{productDetails.description}</Text>
              ) : (
                <View style={{ marginTop: 5, width: 200, height: 14, borderRadius: 6, backgroundColor: colors.light1, marginBottom: 5, }} />
              )
            }
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
