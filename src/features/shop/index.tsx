import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Theme from '../../config/theme';

export default function Shop() {
  const theme = Theme.getInstance();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.getColor('white') }}>
      <Text
        style={{
          width: '100%',
          lineHeight: 42,
          marginBottom: 16,
          textAlign: 'center',
          color: theme.getColor('black'),
          fontSize: theme.getFontSize('heading1'),
          fontFamily: theme.getFontFamily('poppinsSemiBold'),
        }}
      >
        Shop Screen
      </Text>
    </SafeAreaView>
  );
}
