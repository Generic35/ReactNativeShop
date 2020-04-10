import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  Button,
  StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetailScreen = (props) => {
  const productId = props.navigation.getParam('productId');
  const productDetails = useSelector((state) => {
    return state.products.availableProducts.find((product) => {
      return product.id === productId;
    });
  });
  return (
    <View>
      <Text>Product detail works!</Text>
    </View>
  );
};

ProductDetailScreen.navigationOptions = (navigationData) => {
  return { headerTitle: navigationData.navigation.getParam('productTitle') };
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;
