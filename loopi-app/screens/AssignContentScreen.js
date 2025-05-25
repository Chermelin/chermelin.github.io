import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ContentSelector from '../components/ContentSelector';
import TimePicker from '../components/TimePicker';

/**
 * Screen to assign content to a channel.
 * Future improvement: integrate Spotify, record/upload audio, etc.
 */
export default function AssignContentScreen({ route, navigation }) {
  const { channelId } = route.params;
  const [contentType, setContentType] = useState(null);
  const [time, setTime] = useState(null);

  const handleAssign = () => {
    // TODO: upload assignment to cloud
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assign to Button {channelId}</Text>
      <ContentSelector onSelect={setContentType} selected={contentType} />
      <TimePicker time={time} onPick={setTime} />
      <Button title="Assign" onPress={handleAssign} disabled={!contentType} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
});
