import { StyleSheet } from "react-native";
import Theme from "../../config/theme";

const theme = Theme.getInstance();

export default StyleSheet.create({
  container: { flex: 1 },
  content: {
    height: 100,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: theme.getColor("giratina100"),
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  titleContainer: {
    padding: 16,
  },
  title: {
    lineHeight: 32,
    fontSize: theme.getFontSize("heading2"),
    fontFamily: theme.getFontFamily("poppinsSemiBold"),
  },
  image: { width: 82, height: 100 },
});
