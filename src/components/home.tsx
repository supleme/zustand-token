// Home.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useToken from '../states/useToken';
import useEmail from '../states/useEmail';

const Home = () => {
  const {clearToken, token} = useToken();
  const {email} = useEmail();

  return (
    <View style={styles.container}>
      <Text>Bem-vindo à Home</Text>
      <Text>{email}</Text>
      <Text>Token: {token}</Text>
      <Button title="Logout" onPress={clearToken} />
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

export default Home;