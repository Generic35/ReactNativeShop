import React from 'react';
import {
  Button,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import Colors from '../../constants/Colors';

const ProductItem = (props) => {
  const TouchableComponent =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;
  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableComponent onPress={props.onViewDetail} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image source={{ uri: props.image }} style={styles.image} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
              <Button
                title="Details"
                color={Colors.primary}
                onPress={props.onViewDetail}
              />
              <Button
                color={Colors.primary}
                title="Add to cart"
                onPress={props.onAddToCart}
              />
            </View>
          </View>
        </TouchableComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 8,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20,
  },
});

export default ProductItem;
