import React from 'react'
import { View, Text } from 'react-native'
import StarIcon from "../../../assets/icons/StarYellowIcon.svg"
import HalfStarIcon from "../../../assets/icons/StartYellowBlackIcon.svg"
import { productReviewStyles } from './Styles'

export default function ProductReview({ rating, reviews }: { rating: number, reviews: number }) {
  return (
    <View style={productReviewStyles.container} >
      <View style={productReviewStyles.starContainer} >
        {[...Array(Math.floor(rating)).keys()].map(i => (
          <StarIcon key={i.toString()} />
        ))}
        {rating - Math.floor(rating) > 0 && <HalfStarIcon />}
      </View>
      <Text style={productReviewStyles.reviewText} >{reviews} Reviews</Text>
    </View>
  )
}