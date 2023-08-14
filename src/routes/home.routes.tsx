import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../features/home-screen";
import CategoriesScreen from "../features/categories-screen";
import HeaderNavigation from "../components/header-navigation";

export default function HomeStackRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator>
      <Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="categories"
        component={CategoriesScreen}
        options={{
          header(props) {
            return <HeaderNavigation {...props} />;
          },
        }}
      />
    </Navigator>
  );
}
