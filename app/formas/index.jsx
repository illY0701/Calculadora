import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Formas() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Escolha uma forma:</Text>

      <Link href="/formas/circulo" asChild><Button title="Círculo" /></Link>
      <Link href="/formas/quadrado" asChild><Button title="Quadrado" /></Link>
      <Link href="/formas/retangulo" asChild><Button title="Retângulo" /></Link>
      <Link href="/formas/triangulo" asChild><Button title="Triângulo" /></Link>
    </View>
  );
}
