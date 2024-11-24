import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { AlarmItem } from './alarm-item';
import { useAlarms } from '../context/alarm-context';
import { Alarm } from '../types/alarm';

interface AlarmListProps {
  alarms: Alarm[];
}

export const AlarmList: React.FC<AlarmListProps> = ({ alarms }) => {
  const { state } = useAlarms();

  return (
    <FlatList
      data={alarms}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <AlarmItem alarm={item} />}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
}); 