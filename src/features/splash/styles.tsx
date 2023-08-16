import { StyleSheet } from "react-native";
import Theme from "../../config/theme";

const theme = Theme.getInstance();

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.getColor("charizard300"),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: theme.getFontFamily("poppinsSemiBold"),
    fontSize: theme.getFontSize("heading1"),
    fontWeight: theme.getFontWeight("semibold"),
  },
});
