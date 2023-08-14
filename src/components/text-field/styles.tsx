import { StyleSheet } from "react-native";
import Theme from "../../config/theme";

const theme = Theme.getInstance();

export default StyleSheet.create({
  inputWrapper: {
    position: "relative",
  },
  inputField: {
    paddingTop: 20,
    borderRadius: 8,
    paddingRight: 16,
    paddingBottom: 20,
    color: theme.getColor("giratina500"),
    fontSize: theme.getFontSize("body1"),
    backgroundColor: theme.getColor("giratina100"),
    fontFamily: theme.getFontFamily("poppinsRegular"),
    verticalAlign: "bottom",
    textAlignVertical: "bottom",
  },
  inputIcon: {
    position: "absolute",
    left: 16,
    top: 20,
  },
});
