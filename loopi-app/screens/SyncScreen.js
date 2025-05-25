import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

/**
 * Screen to manually sync content to the speaker.
 * Future improvement: handle actual download and device connection.
 */
export default function SyncScreen({ navigation }) {
  const handleSync = () => {
    // TODO: implement offline sync logic
    alert('Syncing (not implemented)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sync to Loopi Speaker</Text>
      <Button title="Start Sync" onPress={handleSync} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
});
