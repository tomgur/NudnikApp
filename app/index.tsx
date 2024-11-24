import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AlarmList } from '../components/alarm-list';
import { Link } from 'expo-router';
import { AlarmProvider } from '../context/alarm-context';

export default function HomePage() {
  const [alarms, setAlarms] = useState([]);

  const loadAlarms = async () => {
    const storedAlarms = await AsyncStorage.getItem('alarms');
    if (storedAlarms) {
      setAlarms(JSON.parse(storedAlarms));
    }
    console.log('Alarms loaded:', alarms);
  };

  useEffect(() => {
    loadAlarms();
  }, []);

  return (
    <AlarmProvider>
      <View style={styles.container}>
        <Text>Your Alarms:</Text>
        <AlarmList alarms={alarms} />
        <Link href="alarm" style={styles.fab}>
          +
        </Link>
      </View>
    </AlarmProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#007AFF',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 56,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
}); 