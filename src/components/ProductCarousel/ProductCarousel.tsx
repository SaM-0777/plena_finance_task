import React, { useRef, useState } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, Animated, Dimensions } from 'react-native'
import { productCarouselStyles } from './Styles'
import HeartIcon from "../../../assets/icons/HeartIcon.svg"

export default function ProductCarousel({ images }: { images: string[] }) {
  const width = Dimensions.get("window").width
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current
  const slidesRef = useRef(null)

  //const viewableItmesChanged = useRef(({ viewableItems }) => {
  //  setCurrentIndex(viewableItems[0].index)
  //}).current

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  return (
    <View style={productCarouselStyles.container} >
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={images}
        bounces={false}
        keyExtractor={(index) => index}
        pagingEnabled
        renderItem={({ item }) => <Image source={{ uri: item }} resizeMode='contain' style={productCarouselStyles.image} />}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false, })}
        //onViewableItemsChanged={viewableItmesChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <TouchableOpacity style={productCarouselStyles.likeBtnContainer} >
        <HeartIcon />
      </TouchableOpacity>
      <View style={productCarouselStyles.paginatorContainer} >
        {images.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
          
          const indicatorWidth = scrollX.interpolate({
            inputRange,
            outputRange: [15, 15, 15],
            extrapolate: 'clamp',
          })

          const indicatorColor = scrollX.interpolate({
            inputRange,
            outputRange: ["#E4E4E4", "#F9B023", "#E4E4E4"],
            extrapolate: 'clamp',
          }) 
          
          return <Animated.View key={i.toString()} style={[productCarouselStyles.indicator, { width: indicatorWidth, backgroundColor: indicatorColor }]} />
        })}
      </View>
    </View>
  )
}