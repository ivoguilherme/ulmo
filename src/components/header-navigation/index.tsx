import { Button, Text, TouchableHighlight, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Theme from "../../config/theme";
import styles from "./styles";

interface IHeaderNavigation {
  routeToBack: string;
}

export default function HeaderNavigation({
  route,
  navigation,
}: IHeaderNavigation & any) {
  const theme = Theme.getInstance();
  const { title } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableHighlight
          onPressOut={() => navigation.goBack()}
          underlayColor={theme.getColor("giratina100")}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableHighlight>
      </View>
      <View style={styles.titleContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
      <View style={styles.nextContainer}></View>
    </SafeAreaView>
  );
}
