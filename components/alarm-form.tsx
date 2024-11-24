import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import { Alarm, AlarmFrequency } from '../types/alarm';
import { useAlarmActions } from '../hooks/use-alarm-actions';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AlarmFormProps {
  initialAlarm?: Alarm;
}

export const AlarmForm: React.FC<AlarmFormProps> = ({ initialAlarm }) => {
  const navigation = useNavigation();
  const [date, setDate] = useState(initialAlarm?.time || new Date());
  const [time, setTime] = useState(initialAlarm?.time || new Date());
  const [label, setLabel] = useState(initialAlarm?.label || '');
  const [frequency, setFrequency] = useState<AlarmFrequency>(
    initialAlarm?.frequency || 'once'
  );
  const [taskType, setTaskType] = useState(initialAlarm?.taskType || 'math');
  const [taskDifficulty, setTaskDifficulty] = useState(
    initialAlarm?.taskDifficulty || 'medium'
  );
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const { createAlarm, updateAlarm } = useAlarmActions();

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    setDate(selectedDate || date);
  };

  const handleTimeChange = (event: any, selectedTime: Date | undefined) => {
    setShowTimePicker(false);
    setTime(selectedTime || time);
  };

  const handleCancelDatePicker = () => {
    setShowDatePicker(false);
  };

  const handleCancelTimePicker = () => {
    setShowTimePicker(false);
  };

  const handleCancelForm = () => {
    navigation.goBack();
  };

  const handleSubmit = async () => {
    const alarmData = {
      time,
      label,
      frequency,
      taskType,
      taskDifficulty,
      isEnabled: true,
    };

    if (initialAlarm) {
      updateAlarm({ ...alarmData, id: initialAlarm.id } as Alarm);
    } else {
      const alarmsString = await AsyncStorage.getItem('alarms');
      const alarms = alarmsString ? JSON.parse(alarmsString) : [];
      alarms.push(alarmData);
      await AsyncStorage.setItem('alarms', JSON.stringify(alarms));
      console.log('Alarm created:', alarmData);
    }

    navigation.goBack();
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Date</Text>
        <Text style={styles.selectedTime}>{formatDate(date)}</Text>
        <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
        {showDatePicker && (
          <View>
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
            <Button title="Cancel" onPress={handleCancelDatePicker} />
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Time</Text>
        <Text style={styles.selectedTime}>{formatTime(time)}</Text>
        <Button title="Select Time" onPress={() => setShowTimePicker(true)} />
        {showTimePicker && (
          <View>
            <DateTimePicker
              value={time}
              mode="time"
              is24Hour={true}
              onChange={handleTimeChange}
            />
            <Button title="Cancel" onPress={handleCancelTimePicker} />
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Label</Text>
        <TextInput
          style={styles.input}
          value={label}
          onChangeText={setLabel}
          placeholder="Alarm label"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Frequency</Text>
        <Picker
          selectedValue={frequency}
          onValueChange={(value) => setFrequency(value as AlarmFrequency)}
        >
          <Picker.Item label="Once" value="once" />
          <Picker.Item label="Daily" value="daily" />
          <Picker.Item label="Weekly" value="weekly" />
          <Picker.Item label="Custom" value="custom" />
        </Picker>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Dismissal Task</Text>
        <Picker
          selectedValue={taskType}
          onValueChange={(value) => setTaskType(value)}
        >
          <Picker.Item label="Math Problem" value="math" />
          <Picker.Item label="Puzzle" value="puzzle" />
          <Picker.Item label="Typing" value="typing" />
        </Picker>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Task Difficulty</Text>
        <Picker
          selectedValue={taskDifficulty}
          onValueChange={(value) => setTaskDifficulty(value)}
        >
          <Picker.Item label="Easy" value="easy" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Hard" value="hard" />
        </Picker>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={handleCancelForm} />
        <Button
          title={initialAlarm ? 'Update Alarm' : 'Create Alarm'}
          onPress={handleSubmit}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 24,
  },
  selectedTime: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
}); 