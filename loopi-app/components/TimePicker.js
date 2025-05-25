import React from 'react';
import { View, Text, Button } from 'react-native';

/**
 * Stub time picker component.
 * TODO: replace with proper date/time picker.
 */
export default function TimePicker({ time, onPick }) {
  return (
    <View>
      <Text>Selected time: {time || 'None'}</Text>
      <Button title="Pick Time" onPress={() => onPick('7:00 PM')} />
    </View>
  );
}
