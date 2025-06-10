// App.js (ACTUALIZADO)
import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, AuthProvider } from './context/AuthContext';
import AuthStack from './navigation/AuthStack';
import AppDrawer from './navigation/AppDrawer'; // <-- Importamos el nuevo Drawer
import "./global.css";
import { View, ActivityIndicator } from 'react-native';

// (El componente RootNavigator que creamos antes puede ser modificado
// para manejar un estado de carga mientras se verifica el token)

function RootNavigator() {
  const { userToken, isLoading } = useContext(AuthContext); // Asumimos que AuthContext provee isLoading

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken ? <AppDrawer /> : <AuthStack />}
      {/* ▲▲▲ Usamos AppDrawer en lugar de AppStack ▲▲▲ */}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}