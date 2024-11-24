export type AlarmFrequency = 'once' | 'daily' | 'weekly' | 'custom';

export interface Alarm {
  id: string;
  time: Date;
  label: string;
  isEnabled: boolean;
  frequency: AlarmFrequency;
  // For weekly alarms
  daysOfWeek?: number[]; // 0-6 (Sunday-Saturday)
  // For custom frequency
  customDates?: Date[];
  // Dismissal task configuration
  taskType: 'math' | 'puzzle' | 'typing';
  taskDifficulty: 'easy' | 'medium' | 'hard';
} 