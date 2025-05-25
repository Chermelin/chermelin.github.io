import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ChannelCard from '../components/ChannelCard';

/**
 * Home screen displaying three channels.
 * Future improvement: fetch assignments from cloud.
 */
export default function HomeScreen({ navigation }) {
  const channels = [
    { id: 1, label: 'Button 1', content: 'Story' },
    { id: 2, label: 'Button 2', content: 'Music Playlist' },
    { id: 3, label: 'Button 3', content: 'Custom Recording' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loopi Channels</Text>
      {channels.map((ch) => (
        <ChannelCard key={ch.id} channel={ch} onAssign={() => navigation.navigate('AssignContent', { channelId: ch.id })} />
      ))}
      <View style={styles.buttons}>
        <Button title="Sync" onPress={() => navigation.navigate('Sync')} />
        <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
});
