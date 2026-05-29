import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  SafeAreaView, 
  ActivityIndicator, 
  Alert 
} from 'react-native';

export default function App() {
  const [usuariosAPI, setUsuariosAPI] = useState([]);
  const [carregando, setCarregando] = useState(false);

  
  const consumirApiRest = async () => {
    try {
      setCarregando(true);
      
      const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
      
      
      const dados = await resposta.json();
      
      setUsuariosAPI(dados);
    } catch (error) {
      console.error("Erro ao consumir API:", error);
      Alert.alert('Erro', 'Não foi possível carregar os dados da API.');
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    consumirApiRest();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Usuários da API REST</Text>
      <Text style={styles.subtitulo}>Dados vindos de jsonplaceholder.typicode.com</Text>

      {carregando && <ActivityIndicator size="large" color="#007BFF" style={{ marginVertical: 20 }} />}

      {}
      <ScrollView style={styles.listaContainer}>
        {
          usuariosAPI.map((usuario) => {
            return (
              <View key={usuario.id} style={styles.cardUsuario}>
                <Text style={styles.nome}>{usuario.name}</Text>
                <Text style={styles.email}>✉️ {usuario.email}</Text>
              </View>
            );
          })
        }

        
        {!carregando && usuariosAPI.length === 0 && (
          <Text style={styles.listaVazia}>Nenhum usuário encontrado.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    paddingHorizontal: 20, 
    paddingTop: 40 
  },
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#333' 
  },
  subtitulo: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
    textTransform: 'lowercase'
  },
  listaContainer: {
    flex: 1,
  },
  cardUsuario: { 
    backgroundColor: '#f4f4f9', 
    padding: 15, 
    borderRadius: 8, 
    marginBottom: 10, 
    borderLeftWidth: 5,
    borderLeftColor: '#007BFF',
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  nome: { 
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#222'
  },
  email: { 
    fontSize: 14, 
    color: '#555', 
    marginTop: 4 
  },
  listaVazia: { 
    textAlign: 'center', 
    color: '#999', 
    marginTop: 20 
  }
});