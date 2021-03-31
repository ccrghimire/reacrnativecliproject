import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TodosScreen from '../screens/TodosScreen';
import ProfileScreen from '../screens/ProfileScreen';

const MainStack=createStackNavigator();

const MainStackNavigator =()=>{
    return <MainStack.Navigator headerMode='none'>
        <MainStack.Screen name='Home' component={HomeScreen}/>
        <MainStack.Screen name='Todos' component={TodosScreen}/>
        <MainStack.Screen name='Profile' component={ProfileScreen}/>
    </MainStack.Navigator>
}
export default MainStackNavigator;