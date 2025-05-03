// App/index.jsx (Home)
import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora Geométrica</Text>
      
      <Link href="/formas/triangulo" asChild>
        <Pressable style={styles.menuItem}>
          <Text>Triângulo</Text>
        </Pressable>
      </Link>

      <Link href="/formas/quadrado" asChild>
        <Pressable style={styles.menuItem}>
          <Text>Quadrado</Text>
        </Pressable>
      </Link>

      <Link href="/formas/retangulo" asChild>
        <Pressable style={styles.menuItem}>
          <Text>Retângulo</Text>
        </Pressable>
      </Link>

      <Link href="/formas/circulo" asChild>
        <Pressable style={styles.menuItem}>
          <Text>Circulo</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center'
  },
  menuItem: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2
  }
};