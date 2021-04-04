import React from 'react';
import AuthContext from '../contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import BASE_URL from '../../components/BASE_URL';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';

class AuthProvider extends React.Component{
    state={
        isAuthenticated: false,
        isAuthenticating:false,
        error: false,
        authUser:{},
        errorMessage:'',
    };
    
    componentDidMount=async () =>{
        // await AsyncStorage.removeItem('users');
        // await AsyncStorage.removeItem('authenticated');
        // await AsyncStorage.removeItem('Authenticated');
    
        const userRes = await AsyncStorage.getItem('users')|| JSON.stringify([]);
            const users = JSON.parse(userRes);
            console.log(users)
                        
        this.setAuthenticating(true);

        const auth=await AsyncStorage.getItem('authenticated')

        console.log(auth);

        if (!auth){
            this.setAuthenticated(false) //set for designing home screen
        }
        else {
            this.setAuthenticated(true);
            this.setAuthUser(JSON.parse(auth))
        }
        this.setAuthenticating(false)
    }   

    // SignupUser=async (user)=>{
    //     try{
    //         await AsyncStorage.setItem('users',JSON.stringify(user));
    //     } catch(error){
    //         console.log(error)
    //     }
    // }

    SignupUserFirebase= async (user)=>{
        try{
            const userRes = await axios.post(`${BASE_URL}/users.json`,user)
        }catch (error) {
            console.log(error)
        }
    }

    // SigninUser = async (email, password) => {
    //     try {
    //         const userRes = await AsyncStorage.getItem('users')|| JSON.stringify({});
    //         const users = JSON.parse(userRes);
    //         console.log(users)
            

    //         if (users.email ===email && users.password ===password) {
    //             await AsyncStorage.setItem('authenticated', JSON.stringify(users));
    //             this.setAuthenticated(true);
    //         } else {
    //             this.setAuthenticated(false);
    //             this.setAuthError(true);
    //         }

    //     } catch (error) {
    //         this.setAuthenticated(false);
    //         this.setAuthError(true);
    //     } finally {
    //         this.setAuthenticating(false)
    //     }
    // }

    SigninUserFirebase= async(email,password)=>{
        try{
            const allUsers = await axios.get(`${BASE_URL}/users.json`);
            const usersIds = Object.keys(allUsers.data)
            const users = usersIds.map(userId=>{
                return{
                    ...allUsers.data[userId],
                    id:userId
                }
            })
            console.log(users)
            const SigninUser = users.find(user=>user.email===email)
            var err="";
            if (SigninUser){
                if (SigninUser.password !==password){
                    err= "Email & password doesnot match";
                }else{
                    await AsyncStorage.setItem('authenticated',JSON.stringify(SigninUser));
                    this.setAuthUser(JSON.stringify(SigninUser));
                }
            }else {
                err ='User with given email doesnot exist.'
            }
            this.setState({
                ...this.state,
                errorMessage: err
            })

        }catch (error) {
            console.log(error)
        }
    }

    setAuthUser = (user)=>{
        this.setState({
            ...this.state,
            authUser:user,
        })
    }

    setAuthenticated =(isAuthenticated)=>{
        this.setState({
            ...this.state,
            isAuthenticated
        })
    }

    setAuthenticating =(isAuthenticating)=>{
        this.setState({
            ...this.state,
            isAuthenticating
        })
    }
    setAuthError =(error)=>{
        this.setState({
            ...this.state,
            error
        })
    }
    render() {
        return(
            <AuthContext.Provider value={{
                ...this.state,
                setAuthError:this.setAuthError,
                setAuthUser:this.setAuthUser,
                setAuthenticated:this.setAuthenticated,
                setAuthenticating:this.setAuthenticating,
                // SignupUser:this.SignupUser,
                SigninUser:this.SigninUser,
                SignupUserFirebase:this.SignupUserFirebase,
                SigninUserFirebase:this.SigninUserFirebase,
            }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}
export default AuthProvider;