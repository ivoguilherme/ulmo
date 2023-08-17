import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../features/home';
import { CategoriesPage } from '../features/categories';
import HeaderNavigation from '../components/header-navigation';
import CategoryProductsPage from '../features/categories/category-products.page';

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
        component={CategoriesPage}
        options={{
          header: HeaderNavigation,
        }}
      />
      <Screen
        name="category-products"
        component={CategoryProductsPage}
        options={{
          header: HeaderNavigation,
        }}
      />
    </Navigator>
  );
}
