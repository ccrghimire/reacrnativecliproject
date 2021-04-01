import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TodosScreen from '../screens/TodosScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddPostsScreen from '../screens/AddPostsScreen';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const MainTab=createBottomTabNavigator();
const HomeStack=createStackNavigator();
const TodosStack=createStackNavigator();
const ProfileStack=createStackNavigator();

const HomeStackNavigator=()=>{
    return <HomeStack.Navigator>
        <HomeStack.screen name="AddPosts" component={AddPostsScreen}/>
    </HomeStack.Navigator>
}
// const TodosStackNavigator=()=>{
//     return <HomeStack.Navigator>
//         <HomeStack.screen name="Todos" component={TodosScreen}/>
//     </HomeStack.Navigator>
// }
// const  ProfileStackNavigator=()=>{
//     return <HomeStack.Navigator>
//         <HomeStack.screen name="Profile" component={ProfileScreen}/>
//     </HomeStack.Navigator>
// }


const MainTabNavigator =()=>{
    return <MainTab.Navigator headerMode='none' tabBarOptions= {{
        activeTintColor:'#009387', showLabel:false
    }} >
        <MainTab.Screen name='Home' component={HomeScreen} options= {{
            tabBarIcon: ({focused, color, size})=>{
                if (focused) {
                    return <MaterialIcons name='home' size={35} color='#009387' />
                }
                return <MaterialIcons name='home' size={30} />
            } 
        }} />
        <MainTab.Screen name='Todos' component={TodosScreen} options= {{
            tabBarIcon: ({focused, color, size})=>{
                if (focused) {
                    return  <SimpleLineIcons name='note' size={25} color='#009387' />
                }
                return <SimpleLineIcons name='note' size={20} /> 
            }
        }}/>
        <MainTab.Screen name='Profile' component={ProfileScreen} options= {{
           tabBarIcon: ({focused, color, size})=>{
            if (focused) {
                return  <MaterialIcons name='person' size={35} color='#009387'  />
            }
            return <MaterialIcons name='person' size={30} />
        }
        }}/>
    </MainTab.Navigator>
}
export default MainTabNavigator;