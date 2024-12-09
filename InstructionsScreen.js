import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InstructionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instructions</Text>
      <Text style={styles.text}>Instructions for game!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
  },
  title: {
    fontSize: 36,
    color: '#FF0000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#F2F2F2',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
