import React,{useContext} from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity, Button, StatusBar,ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AuthContext from '../store/contexts/AuthContext';


const SigninScreen = props => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });
    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }
    const handlePasswordChange=(val)=>{
        setData({
            ...data,
            password:val
        });
    }
    const updateSecureTextEntry=()=>{
        setData({
            ...data,
            secureTextEntry:!data.secureTextEntry
        })
    }
    const authContext=useContext(AuthContext);

    return <View style={styles.container}>
        <StatusBar backgroundColor="#009387" barStyle='light-content' />
        <View style={styles.header}>
            <Text style={styles.text_header,{fontFamily:'Satisfy-Regular',fontSize:50}}> Welcome !</Text>
        </View>
        <View style={styles.footer}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.text_footer}> Email</Text>
            <View style={styles.action}>
                <FontAwesome name='user-o' color='#05375a' size={20} />
                <TextInput placeholder='Your Email' style={styles.textInput}  autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)} 
                />
                {data.check_textInputChange ?
                    <Feather name='check-circle' color='green' size={20} /> : null}
            </View>
            <Text style={[styles.text_footer, { marginTop: 35 }]}> Password</Text>
            <View style={styles.action}>
                <FontAwesome name='lock' color='#05375a' size={20} />
                <TextInput placeholder='Password'
                 secureTextEntry={data.secureTextEntry? true: false }
                  style={styles.textInput} autoCapitalize="none" 
                onChangeText={(val)=> handlePasswordChange(val)} 
                />
               <TouchableOpacity onPress={updateSecureTextEntry}>
                   {data.secureTextEntry ?
                <Feather name='eye-off' color='grey' size={20} />:
                <Feather name='eye' color='grey' size={20} />}
                </TouchableOpacity>
            </View>
            <View style={{marginTop:30}}>
            {authContext.error && <Text style={{color:'red'}}>Something went wrong!!</Text>}
            <Button style={styles.button}
                colors={['#08d4c4','#01ab9d']}
                title="sign In"
                type="Solid"
                onpress={()=>authContext.SigninUser(email, password)}/>
                </View>
                <View style={{marginTop:30}}>
            <Button style={styles.button}
                // colors={['#08d4c4','#01ab9d']}
                title="Sign Up"
                type="Outline" 
                onPress={()=>props.navigation.navigate('Signup')}
                />
                </View>
                </ScrollView>
    </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
        borderRadius:20,
        fontSize:28,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
export default SigninScreen;