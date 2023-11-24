import { StyleSheet } from "react-native";
import typography from "../../constants/typography";
import colors from "../../constants/colors";

export const CheckoutStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  text: {
    ...typography.b2Regular,
    color: "#616A7D",
  },
  value: {
    ...typography.b2Medium,
    color: colors.dark,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.systemBlue,
    width: "100%",
    height: 60,
    borderRadius: 20,
    marginTop: 16,
  },
  btntext: {
    ...typography.b2SemiBold,
    color: "#FFFFFF",
  },
});