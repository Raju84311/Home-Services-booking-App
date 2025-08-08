// src/screens/ClientViewScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { bookings } from '../data/bookings';

export default function ClientViewScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Bookings</Text>
      <FlatList
        data={bookings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Service: {item.service || 'N/A'}</Text>
            <Text>Worker: {item.workerName || 'Unknown'}</Text>
            <Text>Date: {item.date || 'N/A'}</Text>
            <Text>Time: {item.time || 'N/A'}</Text>
            <Text>Amount: ₹{item.amount ?? 'N/A'}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
});
