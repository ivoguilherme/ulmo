import { View } from 'react-native';
import TextField from '../../components/text-field';
import { Entypo } from '@expo/vector-icons';
import Theme from '../../config/theme';

export default function Categories({ route, navigation }: any) {
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
    <View
      style={{
        backgroundColor: theme.getColor('white'),
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
      }}
    >
      <TextField placeholder="Search" Icon={renderIcon()} />
    </View>
  );
}
