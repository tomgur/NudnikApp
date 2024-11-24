import React from 'react';
import { View, Text, StyleSheet, Switch, Pressable } from 'react-native';
import { router } from 'expo-router';
import { Alarm } from '../types/alarm'
import { useAlarms } from '../context/alarm-context';
import { format } from 'date-fns';

interface AlarmItemProps {
  alarm: Alarm;
}

export const AlarmItem: React.FC<AlarmItemProps> = ({ alarm }) => {
  const { dispatch } = useAlarms();

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_ALARM', payload: alarm.id });
  };

  const handlePress = () => {
    router.push(`/alarm/${alarm.id}`);
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{format(alarm.time, 'HH:mm')}</Text>
        <Text style={styles.label}>{alarm.label}</Text>
        <Text style={styles.frequency}>{alarm.frequency}</Text>
      </View>
      <Switch
        value={alarm.isEnabled}
        onValueChange={handleToggle}
        style={styles.switch}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  timeContainer: {
    flex: 1,
  },
  time: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    color: '#666',
  },
  frequency: {
    fontSize: 14,
    color: '#999',
  },
  switch: {
    marginLeft: 16,
  },
}); 