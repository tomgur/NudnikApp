import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { AlarmForm } from '../../../components/alarm-form';
import { useAlarms } from '../../../context/alarm-context';

export default function EditAlarmPage() {
  const { id } = useLocalSearchParams();
  const { state } = useAlarms();
  
  const alarm = state.alarms.find((a) => a.id === id);

  if (!alarm) {
    return null; // Handle error state
  }

  return (
    <View style={styles.container}>
      <AlarmForm initialAlarm={alarm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
}); 