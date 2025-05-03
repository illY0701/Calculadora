import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora Geométrica</Text>
      
      <Link href="/formas" asChild>
        <Pressable style={styles.botao}>
          <Text style={styles.textoBotao}>Acessar Calculadora</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#faf2fc'
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#1a237e'
  },
  botao: {
    backgroundColor: '#b98dc9',
    padding: 15,
    borderRadius: 10,
    elevation: 3
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500'
  }
};