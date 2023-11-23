import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const ToDoListScreen = ({ route, navigation }) => {
    const isFocused = useIsFocused();
    const [tasks, setTasks] = useState([
        { id: '1', text: 'Task 1', completed: false },
        { id: '2', text: 'Task 2', completed: true },
    ]);

    useEffect(() => {
        // Check if there's a new task in the route params
        if (isFocused && route.params && route.params.newTask) {
            setTasks((prevTasks) => [...prevTasks, route.params.newTask]);
        }
    }, [isFocused, route.params]);

    const toggleTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const editTask = (id, text) => {
        navigation.navigate('EditToDo', { taskId: id, taskText: text });
    };

    const deleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ToDo List</Text>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.taskContainer}>
                        <TouchableOpacity
                            style={[
                                styles.taskText,
                                { textDecorationLine: item.completed ? 'line-through' : 'none' },
                            ]}
                            onPress={() => toggleTask(item.id)}
                        >
                            <Text>{item.text}</Text>
                        </TouchableOpacity>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.deleteButton}
                                onPress={() => deleteTask(item.id)}
                            >
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.editButton}
                                onPress={() => editTask(item.id, item.text)}
                            >
                                <Text style={styles.buttonText}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    taskText: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 4,
        marginRight: 8,
    },
    editButton: {
        backgroundColor: 'blue',
        padding: 8,
        borderRadius: 4,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ToDoListScreen;
