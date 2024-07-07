import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';

const Account = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Account</Text>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://marketplace.canva.com/EAFmIahu-_E/2/0/1600w/canva-logo-twitch-esport-taktis-hitam-biru-putih-cwZhs0WS3qw.jpg',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Vanzz</Text>
        <Text style={styles.profileEmail}>actorschainsmokers@gmail.com</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Order History</Text>
        {/* You can replace this with a FlatList or other component to list actual orders */}
        <Text style={styles.sectionContent}>No orders yet.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Settings</Text>
        <Button title="Change Password" onPress={() => {}} color="black"/>
        <Button title="Log Out" onPress={() => {}} color="red" />
      </View>
    </View>
  );
};

export default Account;

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
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 16,
    color: '#888',
  },
  section: {
    marginVertical: 20,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#555',
  },
});
