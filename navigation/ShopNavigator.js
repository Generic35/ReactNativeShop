// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { Platform } from 'react-native';
// import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
// import ProductOverviewScreen from '../screens/shop/ProductsOverviewScreen';
// import Colors from '../constants/Colors';

// const ProductsNavigator = createStackNavigator(
//   {
//     ProductOverview: ProductOverviewScreen,
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
//       },
//       tintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
//     },
//   }
// );

// export default createAppContainer(ProductsNavigator);
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    },
  }
);

export default createAppContainer(ProductsNavigator);
