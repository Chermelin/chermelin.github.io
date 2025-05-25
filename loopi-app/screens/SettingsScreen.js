import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

/**
 * Screen for connection settings.
 * Future improvement: WiFi/USB connection, test sync, restore content.
 */
export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Speaker Settings</Text>
      <Button title="Test Connection" onPress={() => alert('Not implemented')} />
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
