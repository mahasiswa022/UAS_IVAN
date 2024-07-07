import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';

const drinks = [
  {
    id: '1',
    name: 'Brown Sugar Milk Tea.',
    price: '$2.50',
    image:
      'data:image/jpeg;base64,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',
  },
  {
    id: '2',
    name: 'Taro Boba Milk Tea',
    price: '$3.00',
    image:
      'https://www.foodandwine.com/thmb/gCbX8uOXxzebZMYhLk3SdkBcawE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/taro-bubble-tea-XL-RECIPE0316-6a4d5b49afcd41ab8ea6b5ef5805858a.jpg',
  },
  {
    id: '3',
    name: 'Black Milk Tea',
    price: '$4.00',
    image:
      'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/8f1e6c865e5b4ef0a1f8d15b3f676202/BFV69042_HowToMakeBobaFromScratch_JP_Final_YT.jpg?resize=1000:*&output-format=auto&output-quality=auto',
  },
  {
    id: '4',
    name: 'Green Tea Boba',
    price: '$4.00',
    image:
      'data:image/jpeg;base64,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',
  },
 
];

const DrinkItem = ({drink}) => (
  <View style={styles.drinkItem}>
    <Image source={{uri: drink.image}} style={styles.drinkImage} />
    <Text style={styles.drinkName}>{drink.name}</Text>
    <Text style={styles.drinkPrice}>{drink.price}</Text>
  </View>
);

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Drink Shop</Text>
      <FlatList
        data={drinks}
        renderItem={({item}) => <DrinkItem drink={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.drinkList}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Welcome to our Drink Shop!</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  drinkList: {
    paddingHorizontal: 20,
  },
  drinkItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  drinkImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  drinkName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  drinkPrice: {
    fontSize: 16,
    color: '#888',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 16,
    color: '#333',
  },
});