import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function App() {
  const [dates, setDate] = useState([]);

  const handleDates = () => {
    const d = new Date();
    setDate([...dates, d.toString()]);
  };

  const handleInit = () => {
    setDate([]);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Button title="Ajouter un LOG" onPress={handleDates} />
        <Button title="Réinitialiser" onPress={handleInit} />
      </View>
      {dates.map((arg, i) => <Text key={i}>{i + 1} - {arg}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
