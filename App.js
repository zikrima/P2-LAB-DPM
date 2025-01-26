import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Teks di Tengah Layar</Text>
      
      {/* Kontainer FlexBox untuk kotak */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, { backgroundColor: '#FF5733' }]} /> {/* Kotak 1 */}
        <View style={[styles.box, { backgroundColor: '#33FF57' }]} /> {/* Kotak 2 */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3', // Latar belakang abu-abu terang
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold', // Gaya teks tebal
    marginBottom: 50, // Spasi di bawah teks
  },
  boxContainer: {
    flexDirection: 'row', // Susunan horizontal
    justifyContent: 'space-between', // Jarak merata antar elemen
    width: '80%', // Lebar kontainer
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10, // Opsional: Sudut membulat
  },
});
