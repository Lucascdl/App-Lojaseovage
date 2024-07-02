import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Product = ({ product }) => {
  return (
    <View style={styles.productContainer}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>Price: ${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    marginTop: 5,
    color: 'green',
  },
});

export default Product;
