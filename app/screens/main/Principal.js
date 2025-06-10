// screens/main/Principal.js (CORREGIDO Y LISTO)

import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

// --- DATOS DE EJEMPLO ---
const DATOS_PLANTAS = [
  {
    id: '1',
    nombre: 'Monstera',
    imagen: require("../../assets/monstera.jpg"),
    temperatura: '18-25°C',
    humedad: '60-80%',
    descripcion: 'Una planta tropical popular, conocida por sus hojas grandes y perforadas. Fácil de cuidar y perfecta para interiores.',
  },
  {
    id: '2',
    nombre: 'Suculenta',
    imagen: require("../../assets/suculenta.jpg"),
    temperatura: '20-30°C',
    humedad: '30-40%',
    descripcion: 'Requiere poca agua y mucha luz. Ideal para principiantes por su bajo mantenimiento y variedad de formas.',
  },
  {
    id: '3',
    nombre: 'Helecho',
    imagen: require("../../assets/helecho.jpg"),
    temperatura: '15-22°C',
    humedad: '70-90%',
    descripcion: 'Ama la sombra y la alta humedad. Sus frondosas hojas verdes añaden un toque de frescura a cualquier espacio.',
  },
];

const DATOS_SENSOR = {
  humedad_ambiente: '65%',
  humedad_tierra: '55%',
  nivel_luz: 'Medio',
};

export default function Principal() {
  const [plantaSeleccionada, setPlantaSeleccionada] = useState(null);

  const handleSelectPlanta = (planta) => {
    setPlantaSeleccionada(planta);
  };

  const PlantaCard = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleSelectPlanta(item)}
      className={`p-4 rounded-2xl mr-4 w-36 items-center border-2 ${
        plantaSeleccionada?.id === item.id ? 'border-green-600 bg-green-50' : 'border-gray-200 bg-white'
      }`}
      style={{ elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, shadowOffset: { width: 0, height: 2 } }}
    >
      <Image source={item.imagen} className="w-24 h-24 mb-2" resizeMode="contain" />
      <Text className="text-base font-bold text-gray-800">{item.nombre}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6">
        <View className="mb-8">
          <Text className="text-3xl font-bold text-gray-800">Bienvenido de nuevo</Text>
          <Text className="text-lg text-gray-500">Administra tus plantas fácilmente</Text>
        </View>

        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-700 mb-4">Catálogo de Plantas</Text>
          <FlatList
            data={DATOS_PLANTAS}
            renderItem={PlantaCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View className="flex-row flex-wrap -mx-2">
          {/* --- TARJETA 2: DATOS DE LA PLANTA SELECCIONADA --- */}
          <View className="w-full lg:w-1/2 px-2 mb-4">
             {/* ▼▼▼ CAMBIO CLAVE AQUÍ ▼▼▼ */}
            <View className="bg-white rounded-2xl p-5" style={{ elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, shadowOffset: { width: 0, height: 2 } }}>
              {/* HEMOS QUITADO h-full DE LA LÍNEA DE ARRIBA */}
              <Text className="text-xl font-bold text-gray-800 mb-4">Detalles de la Planta</Text>
              {plantaSeleccionada ? (
                <View>
                  <Image source={plantaSeleccionada.imagen} className="w-full h-40 rounded-lg mb-4" resizeMode="cover" />
                  <Text className="text-2xl font-bold text-green-700 mb-2">{plantaSeleccionada.nombre}</Text>
                  <Text className="text-base text-gray-600 mb-4">{plantaSeleccionada.descripcion}</Text>
                  <View className="border-t border-gray-200 pt-3">
                    <View className="flex-row items-center mb-2">
                      <Feather name="thermometer" size={18} color="#4B5563" />
                      <Text className="text-base text-gray-700 ml-2 font-semibold">Temperatura Ideal: {plantaSeleccionada.temperatura}</Text>
                    </View>
                    <View className="flex-row items-center">
                      <Feather name="droplet" size={18} color="#4B5563" />
                      <Text className="text-base text-gray-700 ml-2 font-semibold">Humedad Ideal: {plantaSeleccionada.humedad}</Text>
                    </View>
                  </View>
                </View>
              ) : (
                <View className="justify-center items-center h-48">
                  <Feather name="leaf" size={40} color="#D1D5DB" />
                  <Text className="text-gray-400 mt-2 text-center">Selecciona una planta.</Text>
                </View>
              )}
            </View>
          </View>

          {/* --- TARJETA 3: DATOS DEL SENSOR --- */}
          <View className="w-full lg:w-1/2 px-2 mb-4">
            {/* ▼▼▼ CAMBIO CLAVE AQUÍ ▼▼▼ */}
            <View className="bg-white rounded-2xl p-5" style={{ elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, shadowOffset: { width: 0, height: 2 } }}>
              {/* HEMOS QUITADO h-full DE LA LÍNEA DE ARRIBA */}
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-xl font-bold text-gray-800">Monitor de Mi Planta</Text>
                <View className="flex-row items-center bg-green-100 px-3 py-1 rounded-full">
                  <View className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  <Text className="text-green-800 font-semibold">Online</Text>
                </View>
              </View>
              <View>
                <InfoSensor icono="sun" label="Nivel de Luz" valor={DATOS_SENSOR.nivel_luz} colorIcono="#F59E0B" />
                <InfoSensor icono="droplet" label="Humedad Ambiente" valor={DATOS_SENSOR.humedad_ambiente} colorIcono="#3B82F6" />
                <InfoSensor icono="trending-down" label="Humedad Tierra" valor={DATOS_SENSOR.humedad_tierra} colorIcono="#A5522E" />
              </View>
              <TouchableOpacity className="bg-green-600 rounded-lg p-3 mt-4">
                <Text className="text-white text-center font-semibold">Ver Historial</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const InfoSensor = ({ icono, label, valor, colorIcono }) => (
  <View className="flex-row items-center justify-between bg-gray-50 rounded-lg p-4 mb-3">
    <View className="flex-row items-center">
      <Feather name={icono} size={22} color={colorIcono} />
      <Text className="text-base text-gray-600 ml-3">{label}</Text>
    </View>
    <Text className="text-base font-bold text-gray-800">{valor}</Text>
  </View>
);