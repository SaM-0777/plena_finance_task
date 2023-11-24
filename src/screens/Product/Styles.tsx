import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";
import typography from "../../constants/typography";

export default StyleSheet.create({
  screen: {
    flex: 1,
    minWidth: Dimensions.get("window").width,
    minHeight: Dimensions.get("window").height,
    backgroundColor: "#FFFFFF",
  },
  container: {
    //flex: 1,
    flexGrow: 1,
  },
  header: {
    width: "100%",
    minHeight: 220,
    flexDirection: "column",
    //justifyContent: "flex-end",
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    //borderTopLeftRadius: 20,
    //borderTopRightRadius: 20,
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  backBtnContainer: {
    borderRadius: 999,
    padding: 18,
    backgroundColor: colors.light3,
  },
  cartContainer: {
    position: "relative",

  },
  cartItemContainer: {
    position: "absolute",
    right: 0,
    top: -8,
    borderRadius: 9999,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "transparent",
    backgroundColor: colors.systemLightYellow,
  },
  cartItemText: {
    ...typography.b2SemiBold,
    color: "#FFFFFF",
  },
  brandText: {
    fontFamily: "Manrope-ExtraLight",
    fontSize: 50,
    color: colors.dark,
    lineHeight: 56,
  },
  titleText: {
    fontFamily: "Manrope-ExtraBold",
    fontSize: 50,
    color: colors.dark,
    lineHeight: 52,
  },
  body: {
    width: "100%",
    //paddingHorizontal: 16,
    paddingBottom: 24,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
  },
  detailsContainer: {
    paddingHorizontal: 16,
  },
  priceText: {
    fontFamily: "Manrope-Bold",
    fontSize: 16,
    color: colors.systemBlue,
  },
  discountContainer: {
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 99,
    backgroundColor: colors.systemBlue,
  },
  discountText: {
    ...typography.lRegular,
    color: colors.light2,
  },
  details: {
    paddingHorizontal: 16,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  addToCartBtn: {
    width: "45%",
    height: 60,
    borderWidth: 2,
    borderColor: colors.systemBlue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buyNowBtn: {
    width: "50%",
    height: 60,
    backgroundColor: colors.systemBlue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  addToCartBtnText: {
    ...typography.b2SemiBold,
    color: colors.systemBlue,
  },
  buyNowBtnText: {
    ...typography.b2SemiBold,
    color: "#FFFFFF",
  },
  description: {
    marginTop: 5,
    ...typography.b1Regular,
    color: "#8891A5",
  },
});
