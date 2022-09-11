import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Estudante from './components/Estudante';
import Estudante2 from './components/Estudante2';

export default function App() {
  return (
    <View style={styles.container}>
     <Text style={styles.paragraph}>Estudantes
      </Text>
    <Estudante/>
    <Estudante2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 20,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    },
});
