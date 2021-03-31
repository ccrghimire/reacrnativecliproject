import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image, StatusBar,Button} from 'react-native';



const GettingStarted =props =>{
return <View style={styles.container}>
    <StatusBar backgroundColor="#009387" barStyle='light-content' />
    <View style={styles.header}>
        <Image 
            source={require('../assets/freshproject.png')}
            style={styles.logo}
            resizeMode='contain'
            />
    </View>
    <View style={styles.footer}>
        <Text style={styles.title,{fontFamily:'Satisfy-Regular', fontSize:35}}>Stay Connected with us</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
                <Button style={styles.signIn}
                colors={['#08d4c4','#01ab9d']}
                title="Get Started"
                type="Solid" 
                onPress={()=>props.navigation.navigate('Signin')}
            />
        </View>
    </View>
</View>
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo,
      borderRadius:10,
  },
  title: {
      color: '#05375a',
      fontWeight: 'bold',
  },
  text: {
      color: 'grey',
      marginTop:5,
      fontSize:20,
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 70,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
})
   
export default GettingStarted;