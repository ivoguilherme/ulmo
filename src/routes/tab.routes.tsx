import * as React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import Theme from '../config/theme';
import { Feather, Ionicons } from '@expo/vector-icons';
import Shop from '../features/shop';
import FavoritesScreen from '../features/favorites';
import Profile from '../features/profile';
import HomeStackRoutes from './home.routes';

const { Navigator, Screen } = createBottomTabNavigator();

type TTabScreen = {
  name: string;
  component: (props: any) => JSX.Element;
  options?: BottomTabNavigationOptions;
};

const tabScreens: TTabScreen[] = [
  {
    name: 'Home',
    component: HomeStackRoutes,
    options: {
      tabBarLabel: undefined,
      headerTitle: () => null,
      headerShown: false,
      headerShadowVisible: false,
      tabBarIcon({ color }) {
        return <Text style={{ fontSize: 32, lineHeight: 32, color }}>u</Text>;
      },
    },
  },
  {
    name: 'Shop',
    component: Shop,
    options: {
      tabBarIcon({ size, color }) {
        return <Feather name="shopping-bag" size={size} color={color} />;
      },
    },
  },
  {
    name: 'Favorites',
    component: FavoritesScreen,
    options: {
      tabBarIcon({ size, color }) {
        return <Feather name="heart" size={size} color={color} />;
      },
    },
  },
  {
    name: 'Profile',
    component: Profile,
    options: {
      tabBarIcon({ size, color }) {
        return <Ionicons name="person-outline" size={size} color={color} />;
      },
    },
  },
];

export default function TabRoutes() {
  const theme = Theme.getInstance();

  return (
    <Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 64 },
        tabBarActiveTintColor: theme.getColor('black'),
        tabBarInactiveTintColor: theme.getColor('giratina400'),
      }}
    >
      {tabScreens.map((screen) => (
        <Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Navigator>
  );
}
