import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import typography from "../../constants/typography";

export const AddedItemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.light2,
  },
  title: {
    ...typography.b2Medium,
    color: colors.dark,
  },
  price: {
    ...typography.b2Regular,
    color: colors.dark,
  },
  btnContainer: {
    borderRadius: 999,
    padding: 12,
    backgroundColor: colors.light3,
  },
});
