import React from 'react'
import { View, Text, Image } from 'react-native'
import { BannerCardStyles } from './Styles'
import ImageIcon from "../../../assets/icons/ImageIcon.svg";
import colors from '../../constants/colors'

export default function BannerCard({ discount }: { discount: {id: string, discount: string, imageUrl?: string, requirementText: string } }) {
  return (
    <View style={[BannerCardStyles.container, { backgroundColor: discount.id === "1" ? colors.systemDarkYellow : "#FFBC6E", opacity: discount.id === "1" ? 1 : 0.9, }]} >
      <View style={{ flex: 0.5 }} >
        {
          discount.imageUrl ? (
            <Image source={{ uri: discount.imageUrl,  }} />
          ): (
            <ImageIcon color={"#FFFFFF"} />
          )
        }
      </View>
      <View style={{ flex: 0.5 }} >
        <Text style={BannerCardStyles.discountHeaderText} >Get</Text>
        <Text style={BannerCardStyles.discountText} >{discount.discount} off</Text>
        <Text style={BannerCardStyles.requirementText} >{discount.requirementText}</Text>
      </View>
    </View>
  )
}