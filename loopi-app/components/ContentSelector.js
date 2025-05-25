import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

/**
 * Allows choosing between story, music, or upload.
 * This is a stub; integrate actual pickers for Spotify, etc.
 */
export default function ContentSelector({ selected, onSelect }) {
  return (
    <View style={styles.container}>
      <Button
        title="Story"
        onPress={() => onSelect('Story')}
        color={selected === 'Story' ? '#007AFF' : undefined}
      />
      <Button
        title="Music"
        onPress={() => onSelect('Music')}
        color={selected === 'Music' ? '#007AFF' : undefined}
      />
      <Button
        title="Upload"
        onPress={() => onSelect('Upload')}
        color={selected === 'Upload' ? '#007AFF' : undefined}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
});
