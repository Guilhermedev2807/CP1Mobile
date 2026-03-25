import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  // Lista de dicas (Criteria 1 & 5: English code/variable names)
  const tipsList = [
    "Organize sua mesa de trabalho no final do dia. O seu 'eu' do amanhã vai agradecer.",
    "Beba um copo de água assim que acordar para reidratar o corpo e despertar o cérebro.",
    "Antes de comprar algo por impulso, espere 24 horas. Na maioria das vezes, a vontade passa.",
    "Faça pausas de 5 minutos a cada 25 minutos de trabalho focado.",
    "Pratique a regra dos 2 minutos: se algo leva menos de 2 minutos, faça agora."
  ];

  const [currentTip, setCurrentTip] = useState("");

  // Function to get a random tip (Requirement 1)
  const generateRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * tipsList.length);
    setCurrentTip(tipsList[randomIndex]);
  };

  // Show a tip as soon as the app opens
  useEffect(() => {
    generateRandomTip();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gerador de Dicas</Text>

      <View style={styles.card}>
        <View style={styles.iconCircle}>
          <Text style={{ fontSize: 30 }}>💡</Text>
        </View>
        <Text style={styles.tipText}>{currentTip}</Text>
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={generateRandomTip} // Requirement 2: Update on click
      >
        <Text style={styles.buttonText}>Nova dica</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8', // Cores coerentes (Requirement 3)
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    // Sombra para o efeito de Card
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFBEB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FEF3C7',
  },
  tipText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#444',
    lineHeight: 26,
  },
  button: {
    backgroundColor: '#3B82F6', // Azul do protótipo
    width: '100%',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});