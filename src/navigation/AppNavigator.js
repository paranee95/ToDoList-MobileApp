import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoListScreen from '../screens/ToDoListScreen';
import AddToDoScreen from '../screens/AddToDoScreen';
import EditToDoScreen from '../screens/EditToDoScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ToDoList" component={ToDoListScreen} />
      <Stack.Screen name="EditToDo" component={EditToDoScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="AddToDo" component={AddToDoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
