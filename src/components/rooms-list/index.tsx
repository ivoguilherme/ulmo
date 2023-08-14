import { FlatList, Image, Text, View } from "react-native";
import Theme from "../../config/theme";
import styles from "./styles";

const listData = [
  { title: "bedroom", image: require("../../../assets/images/list1.png") },
  { title: "living room", image: require("../../../assets/images/list2.png") },
  { title: "kitchen", image: require("../../../assets/images/list3.png") },
  { title: "dining", image: require("../../../assets/images/list4.png") },
  { title: "bathroom", image: require("../../../assets/images/list5.png") },
];

interface IRoomsList {
  onClick?(itemTitle: string): void;
}

export default function RoomsList({ onClick }: IRoomsList) {
  const theme = Theme.getInstance();

  return (
    <View style={styles.container}>
      {listData.map((item) => {
        return (
          <View
            key={item.title}
            style={styles.content}
            onTouchEnd={() => onClick?.(item.title)}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
            </View>

            <Image
              resizeMode="cover"
              source={item.image}
              style={styles.image}
            />
          </View>
        );
      })}
    </View>
  );
}
