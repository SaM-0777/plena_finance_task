import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const BannerCardStyles = StyleSheet.create({
  container: {
    width: 300,
    height: 130,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 20,
  },
  discountHeaderText: {
    fontFamily: "Manrope-Light",
    fontSize: 20,
    fontWeight: "300",
    color: colors.light3,
  },
  discountText: {
    fontFamily: "Manrope-ExtraBold",
    fontSize: 26,
    lineHeight: 28,
    color: colors.light3,
    textTransform: "uppercase",
  },
  requirementText: {
    fontFamily: "Manrope-Light",
    fontSize: 13,
    color: colors.light3,
  },
})
