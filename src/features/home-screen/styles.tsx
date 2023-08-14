import { StyleSheet } from "react-native";
import Theme from "../../config/theme";

const theme = Theme.getInstance();

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.getColor("white"),
  },
  logo: {
    width: "100%",
    lineHeight: 42,
    marginTop: 30,
    marginBottom: 16,
    textAlign: "center",
    color: theme.getColor("black"),
    fontSize: theme.getFontSize("heading1"),
    fontFamily: theme.getFontFamily("poppinsSemiBold"),
  },
  inputWrapper: {
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,
    position: "relative",
  },
  sliderWrapper: { marginTop: 16 },
  roomsWrapper: { marginTop: 24, flex: 1 },
});
