import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function EdicaoScreen({ route }) {
  const { nome, email } = route.params;

  const [novoNome, setNovoNome] = useState(nome);
  const [novoEmail, setNovoEmail] = useState(email);

  function salvarEdicao() {
    Alert.alert(
      'Dados atualizados',
      `Nome: ${novoNome}\nEmail: ${novoEmail}`
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Edição</Text>

      <TextInput
        style={styles.input}
        value={novoNome}
        onChangeText={setNovoNome}
      />

      <TextInput
        style={styles.input}
        value={novoEmail}
        onChangeText={setNovoEmail}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={salvarEdicao}
      >
        <Text style={styles.textoBotao}>Salvar Alterações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});