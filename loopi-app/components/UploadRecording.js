import React from 'react';
import { View, Text, Button } from 'react-native';

/**
 * Placeholder component for uploading or recording audio.
 * TODO: integrate recording library and file picker.
 */
export default function UploadRecording({ onComplete }) {
  return (
    <View>
      <Text>Upload or Record Audio (not implemented)</Text>
      <Button title="Done" onPress={() => onComplete('uploaded-file.mp3')} />
    </View>
  );
}
