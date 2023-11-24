import React from 'react'
import { View, Text, FlatList } from 'react-native'
import BannerCard from './BannerCard'

export default function Banner({ discounts }: { discounts: {id: string, discount: string, imageUrl?: string, requirementText: string }[] }) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={discounts}
      bounces={false}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      renderItem={({ item }) => <BannerCard discount={item} />}
    />
  )
}