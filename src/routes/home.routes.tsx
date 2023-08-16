import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../features/home';
import Categories from '../features/categories';
import HeaderNavigation from '../components/header-navigation';

export default function HomeStackRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator>
      <Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="categories"
        component={Categories}
        options={{
          header(props) {
            return <HeaderNavigation {...props} />;
          },
        }}
      />
    </Navigator>
  );
}
