// App/formas/retangulo.jsx
import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

export default function Retangulo() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const ladoA = parseFloat(a);
    const ladoB = parseFloat(b);
    
    if (!isNaN(ladoA) && !isNaN(ladoB)) {
      setResultado({
        area: (ladoA * ladoB).toFixed(2),
        perimetro: (2 * (ladoA + ladoB)).toFixed(2),
        diagonal: Math.sqrt(ladoA**2 + ladoB**2).toFixed(2)
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Retângulo</Text>
      
      <View style={styles.card}>
        <Text style={styles.subtitle}>Propriedades</Text>
        <Text>- Lados opostos são iguais</Text>
        <Text>- Todos os ângulos são 90 graus</Text>
        <Text>- Diagonais são iguais</Text>
      </View>

      <TextInput
        placeholder="Lado (a)"
        style={styles.input}
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />

      <TextInput
        placeholder="Lado (b)"
        style={styles.input}
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />

      <Pressable style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </Pressable>

      {resultado && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Resultados:</Text>
          <Text>Área: {resultado.area}</Text>
          <Text>Perímetro: {resultado.perimetro}</Text>
          <Text>Diagonal: {resultado.diagonal}</Text>
        </View>
      )}
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333'
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#eee'
  },
  subtitle: {
    fontWeight: '600',
    marginBottom: 5,
    color: '#444'
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16
  },
  button: {
    backgroundColor: '#b784d1',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    elevation: 2
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16
  },
  resultContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#eee'
  },
  resultTitle: {
    fontWeight: '600',
    marginBottom: 5,
    color: '#2196F3'
  }
};