import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MainTabNavigator from './navigations/MainNavigation';
import AuthNavigation from './navigations/AuthNavigation';
import AuthProvider from './store/provider/AuthProvider';
import AuthContext from './store/contexts/AuthContext';
import SplashScreen from './screens/SplashScreen';

const App=()=>{
  const isAuthenticated = true;
  return(
    <AuthProvider>
    <PaperProvider>
      <NavigationContainer>
       <AuthContext.Consumer>
         {
           (context)=>{
             if (context.isAuthenticating){
               return <SplashScreen/>
             }
             else
             return !context.isAuthenticated ? <AuthNavigation/> : <MainTabNavigator/>
           }
         }
       </AuthContext.Consumer>
      </NavigationContainer>
    </PaperProvider>
    </AuthProvider>
  );
};
export default App;