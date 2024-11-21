import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'
import React, { useRef } from 'react'
import usePassword from '../states/usePassword';
import useEmail from '../states/useEmail';
import useToken from '../states/useToken';

export default function login() {
  const passWordRef = useRef('');
  const emailRef = useRef('');

  const {setPassword} = usePassword();
  const {setEmail} = useEmail();
  const {setToken} = useToken();

  const handleLogin = () => {
    const email = emailRef.current
    const password = passWordRef.current;

    if (email && password) {
      setPassword(password);
      setEmail(email);
      const token = Math.random().toString(36).substring(2);
      setToken(token);
      // navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={(text) => emailRef.current = text}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => (passWordRef.current = text)}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});