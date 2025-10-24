import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [nbr1, setNbr1] = useState('');
  const [nbr2, setNbr2] = useState('');
  const [somme, setSomme] = useState(0);

  const calculerSomme = () => {
    const result = parseFloat(nbr1) + parseFloat(nbr2);
    if (!isNaN(result)) setSomme(result);
    else setSomme(0);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="First Number"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setNbr1}
      />
      <TextInput
        placeholder="Second Number"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setNbr2}
      />
      <Button title="Addition" onPress={calculerSomme} />
      <Text style={styles.result}>Result : {somme}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  input: {
    borderWidth: 1,
    width: 200,
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
  },
  result: {
    fontSize: 18,
    marginTop: 10,
  },
});
