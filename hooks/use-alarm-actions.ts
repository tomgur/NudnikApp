import { useAlarms } from '../context/alarm-context';
import { Alarm, AlarmFrequency } from '../types/alarm';

export const useAlarmActions = () => {
  const { dispatch } = useAlarms();

  const createAlarm = (alarmData: Omit<Alarm, 'id'>) => {
    const newAlarm: Alarm = {
      ...alarmData,
      id: Date.now().toString(), // Simple ID generation
    };
    dispatch({ type: 'ADD_ALARM', payload: newAlarm });
    return newAlarm;
  };

  const updateAlarm = (alarm: Alarm) => {
    dispatch({ type: 'UPDATE_ALARM', payload: alarm });
  };

  const deleteAlarm = (id: string) => {
    dispatch({ type: 'DELETE_ALARM', payload: id });
  };

  return {
    createAlarm,
    updateAlarm,
    deleteAlarm,
  };
}; 