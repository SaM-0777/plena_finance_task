import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const productCarouselStyles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 15,
    marginBottom: 20,
  },
  image: {
    width: Dimensions.get("window").width,
    height: 200,
  },
  likeBtnContainer: {
    position: "absolute",
    padding: 12,
    backgroundColor: "#FFFFFF",
    top: 16,
    right: 16,
    borderRadius: 16,
  },
  paginatorContainer: {
    position: "absolute",
    left: 5,
    bottom: -45,
    height: 64,
    flexDirection: 'row',
  },
  indicator: {
    height: 3,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#212134',
  },
});
