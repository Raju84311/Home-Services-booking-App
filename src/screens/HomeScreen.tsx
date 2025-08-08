import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Button } from 'react-native';

const services = [
  {
    name: 'Electrician',
    icon: require('../../assets/icons/electrician.png'),
  },
  {
    name: 'Plumber',
    icon: require('../../assets/icons/plumber.png'),
  },
  {
    name: 'Carpenter',
    icon: require('../../assets/icons/carpenter.png'),
  },
  {
    name: 'Painter',
    icon: require('../../assets/icons/painter.png'),
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Welcome to Home Services</Text>
      
      {services.map((service, index) => (
        <TouchableOpacity
          key={index}
          style={styles.serviceButton}
          onPress={() => navigation.navigate('Workers', { service: service.name })}
        >
          <Image source={service.icon} style={styles.icon} />
          <Text style={styles.serviceText}>{service.name}</Text>
        </TouchableOpacity>
      ))}

      {/* Client View Button */}
      <View style={styles.bookingsButton}>
        <Button
          title="View My Bookings"
          onPress={() => navigation.navigate('ClientView')}
          color="#007bff"
        />
      </View>

      {/* Admin Panel Button */}
      <View style={styles.adminButton}>
        <Button
          title="Admin Panel"
          onPress={() => navigation.navigate('AdminView')}
          color="#d32f2f"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  serviceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  serviceText: {
    fontSize: 18,
    fontWeight: '500',
  },
  bookingsButton: {
    marginTop: 20,
    width: '100%',
  },
  adminButton: {
    marginTop: 10,
    width: '100%',
  },
});
