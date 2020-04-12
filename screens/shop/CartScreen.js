import React from 'react';
import { Button, View, StyleSheet, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colors';

const CartScreen = (props) => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const transformedItems = [];
    for (const key in state.cart.items) {
      transformedItems.push({
        productId: key,
        productTitle: state.cart.items[key].title,
        productPrice: state.cart.items[key].price,
        productQuantity: state.cart.items[key].quanitity,
        productSum: state.cart.items[key].sum,
      });
    }
    return transformedItems;
  });

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{' '}
          <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          color={Colors.accent}
          title="Order Now"
          disabled={cartItems.length === 0}
        />
      </View>
      <View>
        <FlatList>
          <Text>CART ITEMS</Text>
        </FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { margin: 20 },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
  },
  summaryText: {
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
});

export default CartScreen;
