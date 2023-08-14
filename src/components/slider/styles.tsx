import { StyleSheet } from "react-native";
import Theme from "../../config/theme";

const theme = Theme.getInstance();

export default StyleSheet.create({
  background: {
    width: 88,
    height: 88,
    padding: 8,
    borderRadius: 8,
    display: "flex",
    overflow: "hidden",
    position: "relative",
    justifyContent: "flex-end",
  },
  gradient: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 88,
    height: 88,
    position: "absolute",
  },
  text: {
    color: theme.getColor("white"),
    fontSize: theme.getFontSize("body3"),
    fontFamily: theme.getFontFamily("poppinsMedium"),
  },
});
