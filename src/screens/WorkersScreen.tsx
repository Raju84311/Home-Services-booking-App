import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';

export default function WorkersScreen({ route, navigation }) {
  const { service } = route.params || {};

  const workersByService = {
    Electrician: [
      { id: '1', name: 'Ravi Sharma', price: 300 },
      { id: '2', name: 'Amit Verma', price: 350 },
      { id: '3', name: 'Deepak Kumar', price: 320 },
      { id: '4', name: 'Sandeep Singh', price: 400 },
      { id: '5', name: 'Manoj Yadav', price: 280 },
    ],
    Plumber: [
      { id: '1', name: 'Nikhil Jain', price: 250 },
      { id: '2', name: 'Harish Patel', price: 270 },
      { id: '3', name: 'Rajeev Bhat', price: 300 },
      { id: '4', name: 'Sunil Gowda', price: 290 },
      { id: '5', name: 'Ashok Reddy', price: 310 },
    ],
    Carpenter: [
      { id: '1', name: 'Vikram Naik', price: 350 },
      { id: '2', name: 'Kiran Shetty', price: 330 },
      { id: '3', name: 'Ramesh Desai', price: 370 },
      { id: '4', name: 'Mohit Raj', price: 360 },
      { id: '5', name: 'Tapan Dey', price: 340 },
    ],
    Painter: [
      { id: '1', name: 'Arjun Sen', price: 300 },
      { id: '2', name: 'Imran Khan', price: 320 },
      { id: '3', name: 'Sohail Shaikh', price: 310 },
      { id: '4', name: 'Ganesh Pawar', price: 330 },
      { id: '5', name: 'Prakash Jha', price: 350 },
    ],
  };

  const workers = workersByService[service] || [];

  const handleSelectWorker = (worker) => {
    navigation.navigate('Booking', { service, worker });
  };

  const renderWorker = ({ item }) => (
    <TouchableOpacity
      style={styles.workerItem}
      onPress={() => handleSelectWorker(item)}
    >
      <Image
        source={require('../../assets/icons/worker.png')} // ✅ Correct path
        style={styles.icon}
      />
      <View>
        <Text style={styles.workerName}>{item.name}</Text>
        <Text style={styles.workerPrice}>Price: ₹{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{service} Workers</Text>
      <FlatList
        data={workers}
        renderItem={renderWorker}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  workerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  workerName: {
    fontSize: 18,
    fontWeight: '500',
  },
  workerPrice: {
    fontSize: 16,
    color: '#555',
  },
});
