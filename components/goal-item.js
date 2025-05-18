import { View, StyleSheet, Text, Pressable } from 'react-native';

const priorityColors = {
  low: '#82bbfc',
  medium: '#fcc982',
  high: '#f947bb',
};

const Priority = ({ priority }) => {
  return <View style={{ borderRadius: 999, backgroundColor: priorityColors[priority], width: 16, height: 16 }} />;
};

export const GoalItem = ({ text, priority, onDeleteGoal, ...props }) => {
  return (
    <Pressable
      android_ripple="#bed6ff"
      onPress={onDeleteGoal}
      style={({ pressed }) => ({ ...styles.pressable, ...(pressed && styles.pressedItem) })}
      {...props}
    >
      <Priority priority={priority} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: '#ffffff',
    paddingInline: 12,
    margin: 4,
    borderRadius: 8,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  pressedItem: {
    backgroundColor: '#d6ebff',
  },
  text: {
    color: '#202021',
    padding: 8,
    paddingVertical: 12,
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
});
