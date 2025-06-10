// navigation/AppDrawer.js (NUEVO ARCHIVO)
import React, { useContext } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';

// Importamos la pantalla principal y creamos unas de ejemplo
import Principal from '../screens/main/Principal'; 

// Pantallas de ejemplo
function PerfilScreen() {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Pantalla de Perfil</Text></View>;
}
function ConfigScreen() {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Pantalla de Configuración</Text></View>;
}

const Drawer = createDrawerNavigator();

// --- Contenido personalizado para el Menú ---
function CustomDrawerContent(props) {
  const { logout } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
      <View className="p-5 bg-green-600">
        <Text className="text-xl font-bold text-white">Nombre Usuario</Text>
        <Text className="text-sm text-green-100">usuario@correo.com</Text>
      </View>
      <DrawerItemList {...props} />
      <View className="border-t border-gray-200 mx-4 mt-2" />
      <DrawerItem
        label="Cerrar Sesión"
        labelStyle={{ color: '#DC2626', fontWeight: 'bold' }}
        onPress={() => logout()}
        icon={({ color, size }) => <Feather name="log-out" size={size} color="#DC2626" />}
      />
    </DrawerContentScrollView>
  );
}

// --- El Navegador Drawer ---
export default function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: '#16A34A' },
        headerTintColor: '#fff',
        drawerActiveTintColor: '#16A34A',
        drawerInactiveTintColor: '#374151',
        drawerLabelStyle: { marginLeft: -20, fontSize: 16 }
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={Principal}
        options={{
          title: 'Página Principal',
          drawerIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          title: 'Mi Perfil',
          drawerIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Configuracion"
        component={ConfigScreen}
        options={{
          title: 'Configuración',
          drawerIcon: ({ color, size }) => <Feather name="settings" size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}