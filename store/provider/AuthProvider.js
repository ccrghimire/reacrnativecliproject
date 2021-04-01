import React from 'react';
import AuthContext from '../contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthProvider extends React.Component{
    state={
        isAuthenticated: false,
        isAuthenticating:false,
        error: false,
        authUser:{},
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

    SignupUser=async (user)=>{
        try{
            await AsyncStorage.setItem('users',JSON.stringify(user));
        } catch(error){
            console.log(error)
        }
    }

    SigninUser = async (email, password) => {
        try {
            const userRes = await AsyncStorage.getItem('users')|| JSON.stringify({});
            const users = JSON.parse(userRes);
            console.log(users)
            

            if (users.email ===email && users.password ===password) {
                await AsyncStorage.setItem('authenticated', JSON.stringify(users));
                this.setAuthenticated(true);
            } else {
                this.setAuthenticated(false);
                this.setAuthError(true);
            }

        } catch (error) {
            this.setAuthenticated(false);
            this.setAuthError(true);
        } finally {
            this.setAuthenticating(false)
        }
    }

    setAuthUser = (user)=>{
        this.setSate({
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
                SignupUser:this.SignupUser,
                SigninUser:this.SigninUser,

            }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}
export default AuthProvider;