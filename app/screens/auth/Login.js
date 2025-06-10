import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
// Ya no necesitas 'useNavigation' para el login, pero sí para ir a 'Register'.
// El hook 'useNavigation' es correcto si este componente no recibe 'navigation' como prop directo.
import { useNavigation } from '@react-navigation/native'; 
import { AuthContext } from '../../context/AuthContext'; // <-- 1. IMPORTA EL CONTEXTO

export default function Login() {
  const navigation = useNavigation();
  const { login } = useContext(AuthContext); // <-- 2. OBTIENE LA FUNCIÓN LOGIN DEL CONTEXTO

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // <-- Estado para manejar la carga

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, ingresa tu correo y contraseña.');
      return;
    }

    setLoading(true); // Inicia la carga
    try {
      // 3. LLAMA A LA FUNCIÓN LOGIN DEL CONTEXTO CON LOS DATOS DEL USUARIO
      // Esta es la función que hablará con tu backend de Express.
      await login(email, password);
      
      // Si login() tiene éxito, el AuthProvider se encargará de cambiar de pantalla automáticamente.
      // No necesitas hacer navigation.navigate('Principal') aquí.
    } catch (error) {
      // Si login() falla (desde el backend), muestra el error.
      Alert.alert('Error de autenticación', error.message || 'No se pudo iniciar sesión. Revisa tus credenciales.');
    } finally {
      setLoading(false); // Finaliza la carga, tanto si tuvo éxito como si falló
    }
  };

  return (
    <View className="flex-1 bg-gray-100 justify-center p-6">
      <Text className="text-2xl font-bold mb-6 text-center">Iniciar sesión</Text>
      <TextInput
        className="bg-white rounded-lg p-4 mb-4 border border-gray-300"
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        editable={!loading} // No se puede editar mientras carga
      />
      <TextInput
        className="bg-white rounded-lg p-4 mb-6 border border-gray-300"
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        editable={!loading} // No se puede editar mientras carga
      />
      <TouchableOpacity
        className={`rounded-lg p-4 mb-4 ${loading ? 'bg-green-400' : 'bg-green-600'}`}
        onPress={handleLogin}
        disabled={loading} // <-- 4. EL BOTÓN SE DESHABILITA MIENTRAS CARGA
      >
        {loading ? (
          <ActivityIndicator color="#ffffff" /> // Muestra un spinner
        ) : (
          <Text className="text-white text-center font-semibold">Entrar</Text>
        )}
      </TouchableOpacity>
      <Text
        className="text-blue-600 text-center mt-4"
        onPress={() => navigation.navigate('Register')}
      >
        ¿No tienes cuenta? Regístrate
      </Text>
    </View>
  );
}