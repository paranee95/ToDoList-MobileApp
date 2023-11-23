import React, { useState } from 'react';
import { View,StyleSheet, Text, TextInput, Button, Alert } from 'react-native';

const AddToDoScreen = ({ navigation }) => {
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') {
      Alert.alert('Error', 'Task cannot be empty');
      return;
    }

    // Generate a unique ID for the new task (you can use a library like uuid)
    const newTaskItem = {
      id: Math.random().toString(),
      text: newTask,
      completed: false,
    };

    // Pass the new task to the ToDoListScreen through navigation params
    navigation.navigate('ToDoList', { newTask: newTaskItem });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add ToDo Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={newTask}
        onChangeText={(text) => setNewTask(text)}
      />
      <Button title="Add" onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'skyblue', // Background color of the screen
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default AddToDoScreen;