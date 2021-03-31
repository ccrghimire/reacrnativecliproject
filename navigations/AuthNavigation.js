import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GettingStarted from '../screens/GettingStartedScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';


const AuthStack = createStackNavigator();

const AuthStackNavigator =()=>{
    return <AuthStack.Navigator headerMode='none'>
        <AuthStack.Screen name='GettingStarted' component={GettingStarted}/>
        <AuthStack.Screen name='Signin' component={SigninScreen}/>
        <AuthStack.Screen name='Signup' component={SignupScreen}/>
    </AuthStack.Navigator>
}
export default AuthStackNavigator;