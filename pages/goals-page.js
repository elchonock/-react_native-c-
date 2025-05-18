import { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';
import { GoalsList } from '../components/goals-list';
import { GoalInputModal } from '../components/goal-input-modal';

const initGoals = [
  { id: nanoid(), text: 'My first goal!', priority: 'medium' },
  { id: nanoid(), text: 'My first goal1!', priority: 'medium' },
  { id: nanoid(), text: 'My first goal2!', priority: 'low' },
  { id: nanoid(), text: 'My first goal3!', priority: 'medium' },
  { id: nanoid(), text: 'My first goal4!', priority: 'medium' },
  { id: nanoid(), text: 'My first goal5!', priority: 'high' },
  { id: nanoid(), text: 'My first goal6!', priority: 'medium' },
  { id: nanoid(), text: 'My first goal7!', priority: 'low' },
  { id: nanoid(), text: 'My first goal8!', priority: 'medium' },
  { id: nanoid(), text: 'My first goal9!', priority: 'medium' },
  { id: nanoid(), text: 'My first goal10!', priority: 'high' },
  { id: nanoid(), text: 'My first goal11!', priority: 'medium' },
  { id: nanoid(), text: 'My first goal11!', priority: 'medium' },
  { id: nanoid(), text: 'My ', priority: 'medium' },
];

export const GoalsPage = () => {
  const [goals, setGoals] = useState(initGoals);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showInputModal = () => setIsModalVisible(true);
  const closeInputModal = () => setIsModalVisible(false);

  const addGoal = (inputText, priority) => {
    const newGoal = { id: nanoid(), text: inputText || '', priority: priority || 'medium' };
    setGoals((prev) => [...prev, newGoal]);
  };

  const deleteGoal = (id) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.addGoalButton}>
        <Pressable
          android_ripple="#ff89ef"
          onPress={showInputModal}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.addGoalButtonText}>+ Add new goal</Text>
        </Pressable>
      </View>

      <GoalInputModal onAddGoal={addGoal} onClose={closeInputModal} isVisible={isModalVisible} />

      <View style={styles.goalsContainer}>
        <GoalsList goals={goals} onDeleteGoal={deleteGoal} />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b4ff13',
    padding: 12,
    paddingBottom: 40,
    paddingTop: '20%',
    width: '100%',
    gap: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 1,
  },
  addGoalButton: {
    backgroundColor: '#cc44bb',
    borderRadius: 12,
    overflow: 'hidden',
  },
  pressedItem: {
    backgroundColor: '#ff89ef',
  },
  addGoalButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    padding: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
