import { Stack } from 'expo-router';
import { AlarmProvider } from '../context/alarm-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AlarmProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" options={{ title: 'Alarms' }} />
          <Stack.Screen name="alarm/new" options={{ title: 'New Alarm', presentation: 'modal' }} />
        </Stack>
      </AlarmProvider>
    </SafeAreaProvider>
  );
} 