import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GoalsPage } from './pages/goals-page';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <GoalsPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
