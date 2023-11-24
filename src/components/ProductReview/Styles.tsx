import { StyleSheet } from "react-native";
import typography from "../../constants/typography";
import colors from "../../constants/colors";

export const productReviewStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 16,
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  reviewText: {
    ...typography.b2Regular,
    color: colors.lightGrey,
  },
});
