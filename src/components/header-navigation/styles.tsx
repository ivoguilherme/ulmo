import { StyleSheet } from "react-native";
import Theme from "../../config/theme";

const theme = Theme.getInstance();

export default StyleSheet.create({
  container: {
    height: 100,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.getColor("white"),
  },
  backContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  backButton: {
    padding: 5,
    borderRadius: 17,
  },
  titleContainer: { flex: 3, flexDirection: "row", justifyContent: "center" },
  title: {
    lineHeight: 24,
    textTransform: "capitalize",
    color: theme.getColor("black"),
    fontSize: theme.getFontSize("body1"),
    fontFamily: theme.getFontFamily("poppinsMedium"),
  },
  nextContainer: { flex: 1, flexDirection: "row", justifyContent: "flex-end" },
});
