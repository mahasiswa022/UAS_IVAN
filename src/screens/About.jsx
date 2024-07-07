import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Us</Text>
      <Image
        source={{
          uri: 'data:image/png;base64,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',
        }}
        style={styles.image}
      />
      <Text style={styles.description}>
        Welcome to our Drink Shop! We offer a variety of refreshing beverages to
        quench your thirst. Our mission is to provide high-quality drinks made
        with the freshest ingredients. Visit us and enjoy a delicious drink
        today!
      </Text>
      <View style={styles.contactContainer}>
        <Text style={styles.contactHeader}>Contact Us</Text>
        <Text style={styles.contactText}>Email: contact@drinkshop.com</Text>
        <Text style={styles.contactText}>Phone: +123 456 7890</Text>
        <Text style={styles.contactText}>
          Address: 123 Drink St, Beverage City
        </Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  contactContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 20,
    marginTop: 20,
  },
  contactHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
});
