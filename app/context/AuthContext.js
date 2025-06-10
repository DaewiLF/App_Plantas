// context/AuthContext.js
import React, { createContext, useState } from 'react';

// Exporta el contexto para que otros archivos puedan usarlo con useContext
export const AuthContext = createContext(null); // Iniciar con null es más seguro

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  const login = async (email, password) => {
    // ... tu lógica de fetch
    console.log("Login function called con:", email, password);
    setUserToken('fake-token-for-testing'); // Simula un login exitoso
  };

  const logout = () => {
    setUserToken(null);
  };

  // Asegúrate que el objeto `value` que pasas no sea undefined
  return (
    <AuthContext.Provider value={{ userToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};