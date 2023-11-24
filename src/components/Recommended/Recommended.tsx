import React from 'react'
import { View, Text, FlatList } from 'react-native'
import RecommendedCard from './RecommendedCard'
import { RecommendedStyles } from './Styles'
import { Product } from '../../types'

export default function Recommended({ navigation, products }: {
  navigation: any,
  products?: Product[]
}) {
  return (
    <View style={{ marginTop: 20, }} >
      <Text style={[RecommendedStyles.header, { marginBottom: 5, }]} >Recommended</Text>
      <View style={{ flexWrap: "wrap", flexDirection: "row", gap: 10, justifyContent: "space-between" }} >
        {
          products ? products.map(p => (
          <RecommendedCard navigation={navigation} key={p.id.toString()} product={p} />
          )): (
            [...Array(8).keys()].map(i => (
              <RecommendedCard navigation={navigation} key={i.toString()} />  
            ))
          )
        }
      </View>
    </View>
  )
}