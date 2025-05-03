import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

export default function Quadrado() {
  const [lado, setLado] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const l = parseFloat(lado);
    
    if (!isNaN(l)) {
      setResultado({
        area: (l * l).toFixed(2),
        perimetro: (4 * l).toFixed(2),
        diagonal: (l * Math.sqrt(2)).toFixed(2)
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quadrado</Text>
      
      <View style={styles.card}>
        <Text style={styles.subtitle}>Propriedades</Text>
        <Text>- Todos os lados são iguais</Text>
        <Text>- Todos os ângulos são 90 graus</Text>
        <Text>- Diagonais se cruzam no centro</Text>
      </View>

      <TextInput
        placeholder="Lado"
        style={styles.input}
        keyboardType="numeric"
        value={lado}
        onChangeText={setLado}
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
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10
  },
  smallInput: {
    flex: 1,
    padding: 8,
    fontSize: 14
  }
};