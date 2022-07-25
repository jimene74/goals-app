import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View><Text>Another text</Text></View>
      <Text style={styles.dummyText}>Hello world!</Text>
      <Button title='press me'></Button>
      <StatusBar style="auto" />
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
  dummyText: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: 'blue',
  }
});
