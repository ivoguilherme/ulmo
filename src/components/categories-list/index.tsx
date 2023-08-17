import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import Theme from '../../config/theme';

const categoriesData = [
  {
    text: 'Furniture',
    image: require('../../../assets/images/slide1.png'),
  },
  {
    text: 'Furniture',
    image: require('../../../assets/images/slide1.png'),
  },
  {
    text: 'Furniture',
    image: require('../../../assets/images/slide1.png'),
  },
  {
    text: 'Furniture',
    image: require('../../../assets/images/slide1.png'),
  },
  {
    text: 'Furniture',
    image: require('../../../assets/images/slide1.png'),
  },
  {
    text: 'Furniture',
    image: require('../../../assets/images/slide1.png'),
  },
  {
    text: 'Furniture',
    image: require('../../../assets/images/slide1.png'),
  },
  {
    text: 'Furniture',
    image: require('../../../assets/images/slide1.png'),
  },
];

export interface ICategoriesList {
  onClick?(itemTitle: string): void;
}

export default function CategoriesList({ onClick }: ICategoriesList) {
  const theme = Theme.getInstance();

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          lineHeight: 32,
          marginBottom: 16,
          color: theme.getColor('black'),
          fontSize: theme.getFontSize('heading2'),
          fontWeight: theme.getFontWeight('semibold'),
          fontFamily: theme.getFontFamily('poppinsSemiBold'),
        }}
      >
        categories
      </Text>

      <FlatList
        data={categoriesData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: category, index }) => (
          <View
            key={index}
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 16,
              paddingTop: 14,
              paddingBottom: index === categoriesData.length - 1 ? 28 : 14,
            }}
            onTouchEnd={() => onClick?.(category.text)}
          >
            <Image
              source={category.image}
              resizeMode="cover"
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                marginRight: 16,
              }}
            />
            <Text
              style={{
                lineHeight: 24,
                color: theme.getColor('black'),
                fontSize: theme.getFontSize('body1'),
                fontFamily: theme.getFontFamily('poppinsRegular'),
                fontWeight: theme.getFontWeight('regular'),
              }}
            >
              {category.text + index}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
