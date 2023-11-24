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
  header: {
    width: "100%",
    //height: 220,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    //justifyContent: "flex-end",
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    marginVertical: 10,
  },
  backBtnContainer: {
    borderRadius: 999,
    padding: 18,
    backgroundColor: colors.light3,
  },
  headerText: {
    ...typography.b1Regular,
    color: colors.dark,
  },
  body: {
    //flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  emptyText: {
    ...typography.h3SemiBold,
    color: colors.dark,
  },
});
