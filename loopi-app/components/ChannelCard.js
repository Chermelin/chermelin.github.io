import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

/**
 * Card showing assigned content for a channel.
 */
export default function ChannelCard({ channel, onAssign }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{channel.label}</Text>
      <Text style={styles.content}>{channel.content}</Text>
      <Button title="Assign" onPress={onAssign} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  label: {
    fontSize: 18,
    marginBottom: 4,
  },
  content: {
    marginBottom: 8,
  },
});
