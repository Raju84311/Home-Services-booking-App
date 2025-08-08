// BookingScreen.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRoute, useNavigation } from '@react-navigation/native';
import { bookings } from '../data/bookings';

export default function BookingScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { service, worker } = route.params || {};

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (event, selected) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selected) {
      const newDate = selected;
      setDate(newDate);
      const formatted = `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
      setSelectedDate(formatted);
    }
  };

  const handleTimeChange = (event, selected) => {
    setShowTimePicker(Platform.OS === 'ios');
    if (selected) {
      const newTime = selected;
      const formatted = `${newTime.getHours()}:${newTime.getMinutes().toString().padStart(2, '0')}`;
      setSelectedTime(formatted);
    }
  };

  const handleProceed = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time.');
      return;
    }

    const isAlreadyBooked = bookings.some(
      (b) =>
        b.workerName === worker?.name &&
        b.date === selectedDate &&
        b.time === selectedTime
    );

    if (isAlreadyBooked) {
      Alert.alert(
        'Worker Already Booked',
        'Please select another available worker or different time.'
      );
      return;
    }

    navigation.navigate('Payment', {
      service,
      worker,
      selectedDate,
      selectedTime,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Book {worker?.name}</Text>
      <Text style={styles.label}>Service: {service}</Text>
      <Text style={styles.label}>Worker: {worker?.name}</Text>
      <Text style={styles.label}>Price: ₹{worker?.price}</Text>

      <TouchableOpacity
        style={styles.selector}
        onPress={() => setShowDatePicker(true)}
      >
        <Text>Select Date</Text>
      </TouchableOpacity>
      {selectedDate ? <Text>Selected Date: {selectedDate}</Text> : null}
      {showDatePicker && (
        <DateTimePicker value={date} mode="date" display="default" onChange={handleDateChange} />
      )}

      <TouchableOpacity
        style={styles.selector}
        onPress={() => setShowTimePicker(true)}
      >
        <Text>Select Time</Text>
      </TouchableOpacity>
      {selectedTime ? <Text>Selected Time: {selectedTime}</Text> : null}
      {showTimePicker && (
        <DateTimePicker value={date} mode="time" display="default" onChange={handleTimeChange} />
      )}

      <TouchableOpacity style={styles.button} onPress={handleProceed}>
        <Text style={styles.buttonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  selector: {
    backgroundColor: '#ddd',
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
