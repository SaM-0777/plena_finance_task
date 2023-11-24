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
    height: 220,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    backgroundColor: colors.systemBlue,
    //borderTopLeftRadius: 20,
    //borderTopRightRadius: 20,
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  headerText: {
    fontFamily: "Manrope-SemiBold",
    color: colors.light3,
    fontSize: 22,
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
    borderColor: colors.systemBlue,
    backgroundColor: colors.systemLightYellow,
  },
  cartItemText: {
    ...typography.b2SemiBold,
    color: "#FFFFFF",
  },
  bagIcon: {
    width: 36,
    height: 36,
    fontSize: 48,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    //justifyContent: "space-between",
    backgroundColor: colors.systemDarkBlue,
    paddingHorizontal: 30,
    borderRadius: 999,
    height: 56,
    marginBottom: 30,
  },
  searchInput: {
    width: "90%",
    ...typography.b2Medium,
  },
  headerFooterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  optionsContainer: {

  },
  optionText: {
    fontFamily: "Manrope-ExtraBold",
    textTransform: "uppercase",
    fontSize: 11,
    color: "#FBF8F8",
  },
  optionContentText: {
    color: colors.light3,
    ...typography.b2Medium,
  },
  body: {
    //flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});
