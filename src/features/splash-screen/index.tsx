import { LayoutChangeEvent, Text, View } from "react-native";
import styles from "./styles";

interface ISplashScreen {
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
}

export default function SplashScreen({ onLayout }: ISplashScreen) {
  return (
    <View style={styles.container} onLayout={onLayout}>
      <Text style={styles.text}>ulmo</Text>
    </View>
  );
}
