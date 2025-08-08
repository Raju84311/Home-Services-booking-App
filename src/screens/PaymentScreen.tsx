// PaymentScreen.tsx

import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { bookings } from '../data/bookings';

export default function PaymentScreen({ route, navigation }) {
  const { service, worker, selectedDate, selectedTime } = route.params || {};

  const paymentAmount = worker?.price ?? 100;
  const qrValue = `Service: ${service}\nWorker: ${worker?.name}\nDate: ${selectedDate}\nTime: ${selectedTime}\nAmount: ₹${paymentAmount}`;

  const handlePaymentConfirmation = () => {
    // ✅ Store complete booking
    bookings.push({
      service,
      workerName: worker?.name,
      date: selectedDate,
      time: selectedTime,
      amount: paymentAmount,
    });

    // ✅ Show payment confirmation
    Alert.alert('Payment Confirmed', 'Thank you for your payment!', [
      {
        text: 'OK',
        onPress: () => {
          // ✅ Show SMS confirmation after first alert
          setTimeout(() => {
            Alert.alert(
              'SMS Sent',
              'SMS sent to +91XXXXXXXXXX: Your booking is confirmed!'
            );
          }, 500);

          navigation.navigate('Home');
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pay ₹{paymentAmount}</Text>
      <View style={styles.qrContainer}>
        {qrValue ? (
          <QRCode value={qrValue} size={200} />
        ) : (
          <Text>Generating QR...</Text>
        )}
      </View>
      <Button title="I have paid" onPress={handlePaymentConfirmation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  qrContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
});
