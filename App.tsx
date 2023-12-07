import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.teste}>
        <Text>Ariel Gamal</Text>
      </TouchableOpacity>

      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar translucent style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teste: {
    backgroundColor: 'red',
    padding: 10,
  },
});
