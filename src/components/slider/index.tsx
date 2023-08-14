import { FlatList, Image, ImageBackground, Text } from "react-native";
import { LinearGradient, LinearGradientPoint } from "expo-linear-gradient";
import Theme from "../../config/theme";
import styles from "./styles";

const listData = [
  {
    text: "best of 2020",
    image: require("../../../assets/images/slide1.png"),
  },
  {
    text: "the golden hour",
    image: require("../../../assets/images/slide2.png"),
  },
  {
    text: "lovely kitchen",
    image: require("../../../assets/images/slide3.png"),
  },
  {
    text: "summer choice",
    image: require("../../../assets/images/slide4.png"),
  },
];

export default function Slider() {
  const theme = Theme.getInstance();

  return (
    <FlatList
      data={[...listData, ...listData]}
      horizontal
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ImageBackground
            source={item.image}
            style={{
              ...styles.background,
              marginLeft: index === 0 ? 16 : null,
              marginRight: index === listData.length - 1 ? 16 : 12,
            }}
          >
            <LinearGradient
              style={styles.gradient}
              start={{ y: 0.4, x: 0.5 }}
              colors={[
                `${theme.getColor("black")}00`,
                `${theme.getColor("black")}CC`,
              ]}
            />
            <Text style={styles.text}>{item.text}</Text>
          </ImageBackground>
        );
      }}
    />
  );
}
