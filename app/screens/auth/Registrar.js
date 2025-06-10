// app/screens/Register.js
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-2xl font-bold mb-6 text-green-700">Registrarse</Text>

      <TextInput
        placeholder="Nombre completo"
        className="border border-gray-300 rounded-xl px-4 py-2 w-full mb-4"
      />
      <TextInput
        placeholder="Correo electrónico"
        className="border border-gray-300 rounded-xl px-4 py-2 w-full mb-4"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        className="border border-gray-300 rounded-xl px-4 py-2 w-full mb-6"
        secureTextEntry
      />

      <TouchableOpacity className="bg-green-600 rounded-xl py-3 w-full">
        <Text className="text-center text-white font-semibold">Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text className="text-green-500 mt-4">¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
