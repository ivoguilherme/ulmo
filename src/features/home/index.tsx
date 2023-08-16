import { Text, View, ScrollView } from 'react-native';
import Theme from '../../config/theme';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
import TextField from '../../components/text-field';
import Slider from '../../components/slider';
import RoomsList from '../../components/rooms-list';

export default function Home({ navigation }: any) {
  const theme = Theme.getInstance();

  const renderIcon = () => (
    <Entypo
      size={24}
      name="magnifying-glass"
      color={theme.getColor('giratina500')}
      style={{ lineHeight: 24 }}
    />
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Text style={styles.logo}>ulmo</Text>

      <View style={styles.inputWrapper}>
        <TextField placeholder="Search" Icon={renderIcon()} />
      </View>

      <View style={styles.sliderWrapper}>
        <Slider />
      </View>

      <View style={styles.roomsWrapper}>
        <RoomsList
          onClick={(title) => {
            navigation.navigate('categories', { title });
          }}
        />
      </View>
    </ScrollView>
  );
}
