import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useAlarms } from '../../../context/alarm-context';
import { InteractiveTask } from '../../../components/interactive-task';
import { TaskResult } from '../../../types/task';

export default function DismissTaskPage() {
  const { id } = useLocalSearchParams();
  const { state } = useAlarms();
  
  const alarm = state.alarms.find((a) => a.id === id);

  if (!alarm) {
    return null;
  }

  const handleTaskComplete = (result: TaskResult) => {
    if (result.completed) {
      // Here you would typically handle the alarm dismissal
      // For now, we'll just navigate back
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <InteractiveTask
        type={alarm.taskType}
        difficulty={alarm.taskDifficulty}
        onComplete={handleTaskComplete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
}); 