// navigation/AppStack.js (Archivo Nuevo)

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Principal from "../screens/main/Principal"; // Asegúrate que la ruta sea correcta

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Principal" 
        component={Principal} 
        options={{ title: "Página Principal" }} 
      />
      {/* Aquí podrías agregar más pantallas como Perfil, Ajustes, etc. */}
      {/* <Stack.Screen name="Perfil" component={Perfil} /> */}
    </Stack.Navigator>
  );
}