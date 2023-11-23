import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const EditToDoScreen = ({ route, navigation }) => {
  const { taskId, taskText } = route.params;
  const [editedTask, setEditedTask] = useState(taskText);

  const saveChanges = () => {
    // Implement logic to save changes to the task
    // For simplicity, we'll just log the edited task details
    console.log('Edited task:', { id: taskId, text: editedTask });
    navigation.goBack(); // Navigate back to ToDoListScreen
  };

  return (
    <View>
      <Text>Edit ToDo Screen</Text>
      <TextInput
        placeholder="Edit task"
        value={editedTask}
        onChangeText={(text) => setEditedTask(text)}
      />
      <Button title="Save Changes" onPress={saveChanges} />
    </View>
  );
};

export default EditToDoScreen;
