import { TextInput, View } from "react-native";
import styles from "./styles";
import Theme from "../../config/theme";

interface ITextField {
  placeholder?: string;
  Icon?: JSX.Element;
}

export default function TextField({ placeholder, Icon }: ITextField) {
  const theme = Theme.getInstance();

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder={placeholder}
        cursorColor={theme.getColor("giratina400")}
        style={{ ...styles.inputField, paddingLeft: !!Icon ? 56 : 16 }}
      />
      {!!Icon && <View style={styles.inputIcon}>{Icon}</View>}
    </View>
  );
}
