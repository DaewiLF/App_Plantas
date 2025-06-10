import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Registrar";

const Stack = createNativeStackNavigator();

export default function AuthStack() {  // Cambiar el nombre de exportación
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ title: "Login" }} 
      />
      <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{ title: "Registro" }} 
      />
    </Stack.Navigator>
  );
}