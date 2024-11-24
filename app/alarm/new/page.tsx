import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AlarmForm } from '../../../components/alarm-form';

export default function NewAlarmPage() {
  return (
    <View style={styles.container}>
      <AlarmForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
}); 