import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerBackTitleVisible: false,
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Calculadora' }} />
      <Stack.Screen name="formas/index" options={{ title: 'Formas Geométricas' }} />
      <Stack.Screen name="formas/circulo" options={{ title: 'Círculo' }} />
      <Stack.Screen name="formas/quadrado" options={{ title: 'Quadrado' }} />
      <Stack.Screen name="formas/retangulo" options={{ title: 'Retângulo' }} />
      <Stack.Screen name="formas/triangulo" options={{ title: 'Triângulo' }} />
    </Stack>
  );
}