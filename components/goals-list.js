import { StyleSheet, View, FlatList } from 'react-native';
import { GoalItem } from './goal-item';

export const GoalsList = ({ goals, onDeleteGoal }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={goals}
        contentContainerStyle={{ gap: 4, justifyContent: 'flex-start', paddingBottom: 40 }}
        renderItem={(itemData) => (
          <GoalItem
            text={itemData.item.text}
            priority={itemData.item.priority}
            onDeleteGoal={() => onDeleteGoal(itemData.item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 12,
    flex: 1,
  },
});
