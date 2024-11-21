
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from './src/components/home'
import Login from './src/components/login'
import useToken from './src/states/useToken';

const App = () => {
  const {token} = useToken();

  return (
    <View style={styles.container}>
      {token ? <Home /> : <Login />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;