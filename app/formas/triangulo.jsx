import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

export default function Triangulo() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [lado1, setLado1] = useState('');
  const [lado2, setLado2] = useState('');
  const [lado3, setLado3] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const b = parseFloat(base);
    const h = parseFloat(altura);
    const l1 = parseFloat(lado1);
    const l2 = parseFloat(lado2);
    const l3 = parseFloat(lado3);

    if (!isNaN(b) && !isNaN(h)) {
      setResultado({
        area: ((b * h) / 2).toFixed(2),
        perimetro: (!isNaN(l1) && !isNaN(l2) && !isNaN(l3)) ? (l1 + l2 + l3).toFixed(2) : 'Inválido'
      });
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Fórmulas:</Text>
        <Text>Área = (base × altura) / 2</Text>
        <Text>Perímetro = soma dos lados</Text>
      </View>

      <TextInput
        placeholder="Base"
        style={styles.input}
        keyboardType="numeric"
        value={base}
        onChangeText={setBase}
      />

      <TextInput
        placeholder="Altura"
        style={styles.input}
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <View style={styles.row}>
        <TextInput
          placeholder="Lado 1"
          style={[styles.input, styles.smallInput]}
          keyboardType="numeric"
          value={lado1}
          onChangeText={setLado1}
        />
        <TextInput
          placeholder="Lado 2"
          style={[styles.input, styles.smallInput]}
          keyboardType="numeric"
          value={lado2}
          onChangeText={setLado2}
        />
        <TextInput
          placeholder="Lado 3"
          style={[styles.input, styles.smallInput]}
          keyboardType="numeric"
          value={lado3}
          onChangeText={setLado3}
        />
      </View>

      <Pressable style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </Pressable>

      {resultado && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Resultados:</Text>
          <Text>Área: {resultado.area}</Text>
          <Text>Perímetro: {resultado.perimetro}</Text>
        </View>
      )}
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#faf2fc'
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