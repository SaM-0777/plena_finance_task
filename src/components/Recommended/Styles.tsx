import { Dimensions, StyleSheet } from "react-native";
import typography from "../../constants/typography";
import colors from "../../constants/colors";

export const RecommendedStyles = StyleSheet.create({
  header: {
    ...typography.h1Regular,
    color: colors.dark,
  },
});

export const RecommendedCardStyles = StyleSheet.create({
  container: {
    padding: 10,
    width: "48%",
    minHeight: 180,
    borderRadius: 10,
    backgroundColor: colors.light2,
  },
  thumbnailContainer: {
    position: "relative",
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  likeButton: {
    position: "absolute",
    left: 4,
    top: 4,
  },
  price: {
    ...typography.b2SemiBold,
    color: colors.dark,
  },
  title: {
    ...typography.b1Regular,
  },
  addBtnContainer: {
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: colors.systemBlue,
  },
});
