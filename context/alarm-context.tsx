import React, { createContext, useContext, useReducer } from 'react';
import { Alarm } from '../types/alarm';

interface AlarmState {
  alarms: Alarm[];
}

type AlarmAction =
  | { type: 'ADD_ALARM'; payload: Alarm }
  | { type: 'UPDATE_ALARM'; payload: Alarm }
  | { type: 'DELETE_ALARM'; payload: string }
  | { type: 'TOGGLE_ALARM'; payload: string };

const AlarmContext = createContext<{
  state: AlarmState;
  dispatch: React.Dispatch<AlarmAction>;
} | null>(null);

const alarmReducer = (state: AlarmState, action: AlarmAction): AlarmState => {
  switch (action.type) {
    case 'ADD_ALARM':
      return {
        ...state,
        alarms: [...state.alarms, action.payload],
      };
    case 'UPDATE_ALARM':
      return {
        ...state,
        alarms: state.alarms.map((alarm) =>
          alarm.id === action.payload.id ? action.payload : alarm
        ),
      };
    case 'DELETE_ALARM':
      return {
        ...state,
        alarms: state.alarms.filter((alarm) => alarm.id !== action.payload),
      };
    case 'TOGGLE_ALARM':
      return {
        ...state,
        alarms: state.alarms.map((alarm) =>
          alarm.id === action.payload
            ? { ...alarm, isEnabled: !alarm.isEnabled }
            : alarm
        ),
      };
    default:
      return state;
  }
};

export const AlarmProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(alarmReducer, { alarms: [] });

  return (
    <AlarmContext.Provider value={{ state, dispatch }}>
      {children}
    </AlarmContext.Provider>
  );
};

export const useAlarms = () => {
  const context = useContext(AlarmContext);
  if (!context) {
    throw new Error('useAlarms must be used within an AlarmProvider');
  }
  return context;
}; 