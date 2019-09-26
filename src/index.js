import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import './config/ReatotronConfig';

console.tron.log('TESTANDO A CONFIG DO REACTTRON', 2 + 3);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Bem vindo ao RN</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
