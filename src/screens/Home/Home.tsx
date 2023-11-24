/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, ScrollView, Button, TouchableOpacity, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import BagIcon from "../../../assets/icons/BagIcon.svg";
import SearchIcon from "../../../assets/icons/SearchIcon.svg";
import ArrowDownIcon from "../../../assets/icons/ArrowIcon.svg";
import Styles from './Styles';
import { Banner, Recommended } from '../../components';
import { Product } from '../../types';
import colors from '../../constants/colors';
import { RootState } from '../../store/store';


export default function Home({ navigation }: { navigation: any }) {
  const user = "Rahul"
  const cartCount = useSelector((state: RootState) => state.cart.cart.length)
  const deliveryTo = "Green Way 3000, Sylhet"
  const discounts = [
    {
      id: "1",
      discount: "50%",
      requirementText: "on first 03 orders",
    },
    {
      id: "2",
      discount: "50%",
      requirementText: "on first 03 orders",
    },
  ]

  const [products, setProducts] = useState<Product[]>()

  async function getProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products")
      if (response.ok) {
        const data = await response.json()
        setProducts(data.products)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  function onPressSearch() {

  }

  function onPressCart() {
    navigation.navigate('cart')
  }

  return (
    <View style={Styles.screen} >
      <StatusBar backgroundColor={colors.systemBlue}  barStyle={'light-content'} />
      <ScrollView alwaysBounceVertical={false} bounces={false} contentContainerStyle={Styles.container} showsVerticalScrollIndicator={false} style={{ flexGrow: 1, marginBottom: 40, }} >
        {/* Header */}
        <View style={Styles.header} >
          <View style={Styles.headingContainer} >
            <Text style={Styles.headerText} >Hey, {user}</Text>
            <TouchableOpacity onPress={onPressCart} activeOpacity={0.9} style={Styles.cartContainer} >
              <BagIcon width={36} height={25} />
              {cartCount > 0 && <View style={Styles.cartItemContainer} >
                <Text style={Styles.cartItemText} >{cartCount}</Text>
              </View>}
            </TouchableOpacity>
          </View>

          <View style={Styles.searchContainer} >
            <SearchIcon onPress={onPressSearch} width={20} height={20} />
            <TextInput placeholder="Search Products or store" placeholderTextColor={"#8891A5"} cursorColor={"#F8F9FB"} style={Styles.searchInput} />
          </View>

          <View style={Styles.headerFooterContainer} >
            <View  >
              <Text style={Styles.optionText} >Delivery To</Text>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8, }} >
                <Text style={Styles.optionContentText} >{deliveryTo}</Text>
                <ArrowDownIcon onPress={() => {}} />
              </View>
            </View>
            <View>
              <Text style={Styles.optionText} >Within</Text>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8, }} >
                <Text style={Styles.optionContentText} >{"1 Hour"}</Text>
                <ArrowDownIcon onPress={() => {}} />
              </View>
            </View>
          </View>
        </View>

        {/* Body */}
        <View style={Styles.body} >
          <Banner discounts={discounts} />
          {/* discount banner */}

          {/* recommended section */}
          <Recommended navigation={navigation} products={products} />
        </View>

      </ScrollView>
    </View>
  );
}
