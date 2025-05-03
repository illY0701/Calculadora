import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Formas() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Selecione uma Forma:</Text>
      
      <Link href="/formas/circulo" asChild>
        <Pressable style={styles.card}>
          <Text style={styles.nomeForma}>Círculo</Text>
        </Pressable>
      </Link>

      <Link href="/formas/quadrado" asChild>
        <Pressable style={styles.card}>
          <Text style={styles.nomeForma}>Quadrado</Text>
        </Pressable>
      </Link>

      <Link href="/formas/retangulo" asChild>
        <Pressable style={styles.card}>
          <Text style={styles.nomeForma}>Retângulo</Text>
        </Pressable>
      </Link>

      <Link href="/formas/triangulo" asChild>
        <Pressable style={styles.card}>
          <Text style={styles.nomeForma}>Triângulo</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#faf2fc'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1a237e'
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 3,
    alignItems: 'center'
  },
  nomeForma: {
    fontSize: 18,
    color: '#3f51b5',
    fontWeight: '500'
  }
};