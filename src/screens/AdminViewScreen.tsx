// src/screens/AdminViewScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { bookings } from '../data/bookings';

export default function AdminViewScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All Bookings (Admin View)</Text>
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
    backgroundColor: '#fce4ec',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
});
