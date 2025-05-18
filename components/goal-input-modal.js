import { Button, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export const GoalInputModal = ({ onAddGoal, isVisible, onClose }) => {
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('medium');

  const inputHandler = (text) => {
    setInput(text);
  };

  const handleAddGoal = () => {
    onAddGoal(input, priority);
    setInput('');
    setPriority('medium');
    onClose();
  };

  const handlePriority = (newValue) => {
    switch (newValue) {
      case 'high':
        setPriority('high');
        break;
      case 'medium':
        setPriority('medium');
        break;
      case 'low':
        setPriority('low');
        break;

      default:
        setPriority('medium');
    }
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <TextInput value={input} placeholder="Enter your goal..." style={styles.input} onChangeText={inputHandler} />

        <View style={styles.priorityContainer}>
          <View>
            <Text style={{ fontSize: 16 }}>Priority:</Text>
          </View>

          <View style={{ flexDirection: 'row', gap: 12 }}>
            <Pressable onPress={() => handlePriority('high')} style={({ pressed }) => pressed && styles.pressedItem}>
              <View
                style={{
                  backgroundColor: 'red',
                  borderRadius: 8,
                  alignItems: 'center',
                  padding: 4,
                  paddingHorizontal: 12,
                  borderWidth: 2,
                  borderColor: priority === 'high' ? 'black' : 'red',
                }}
              >
                <Text style={{ color: 'white' }}>High</Text>
              </View>
            </Pressable>

            <Pressable onPress={() => handlePriority('medium')} style={({ pressed }) => pressed && styles.pressedItem}>
              <View
                style={{
                  backgroundColor: 'orange',
                  borderRadius: 8,
                  alignItems: 'center',
                  padding: 4,
                  paddingHorizontal: 12,
                  borderWidth: 2,
                  borderColor: priority === 'medium' ? 'black' : 'orange',
                }}
              >
                <Text>Medium</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePriority('low')} style={({ pressed }) => pressed && styles.pressedItem}>
              <View
                style={{
                  backgroundColor: 'blue',
                  borderRadius: 8,
                  alignItems: 'center',
                  padding: 4,
                  paddingHorizontal: 12,
                  borderWidth: 2,
                  borderColor: priority === 'low' ? 'black' : 'blue',
                }}
              >
                <Text style={{ color: 'white' }}>Low</Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <Button title="Create" onPress={handleAddGoal} accessibilityLabel="Create a new goal." color="#00c4e2" />

          <Button
            title="Cancel"
            onPress={onClose}
            accessibilityLabel="Cancel goal creation and close the modal."
            color="#a43a3a"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    padding: 20,
    paddingVertical: 60,
    height: '100%',
  },
  input: {
    borderColor: '#345334',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 12,
    width: '100%',
    height: 48,
    fontSize: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  priorityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#d5f0fa',
    borderRadius: 12,
    padding: 12,
    width: '100%',
  },
  pressedItem: {
    opacity: 0.5,
  },
});
