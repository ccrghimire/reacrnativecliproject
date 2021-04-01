import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, StatusBar, Modal} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import AddPosts from '../components/AddPosts';




const HomeScreen = ({navigation}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    // const handleSubmit = (data) => {
        
    //     setIsOpen(false)
    //   }

    return <View style={styles.screen}>
        <StatusBar backgroundColor="#009387" barStyle='light-content' />
        <View style={styles.body}>
            <View style={{ width: '50%' }}>
                <View style={styles.v1}>
                    <Text style={styles.v2}>Hi Fresh APP</Text>
                    <View style={styles.v3}>
                        <Image source={require('../assets/freshproject.png')} style={styles.v4} />
                    </View>
                </View>
            </View>
            <View color={["rgba(0,164,109,0.4)", "transparent"]} style={styles.v5} >
                <View style={styles.v6}>
                    <TextInput placeholder="Search" placeholderTextColor="#b1e5d3" style={{
                        fontWeight: 'bold', fontSize: 16, width: 260
                    }} />
                </View>
            </View>

        </View>
        <View style={styles.FloatingActionButton}>
            <Fontisto name="plus-a" onPress={() =>setIsOpen(true)} size={20} color='white' />
        </View>
        <Modal visible={isOpen} statusBarTranslucent >
            <AddPosts cancel={()=> setIsOpen(false)}/>
      </Modal>
       
    </View>
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff'
    },
    body: {
        backgroundColor: '#009387',
        height: '18%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20,
    },
    v1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        width: '100%'
    },
    v2: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold'
    },
    v3: {
        width: '90%',
        alignItems: 'flex-end'
    },
    v4: {
        height: 45,
        width: 45,
        borderRadius: 23
    },
    v5: {
        left: 0,
        right: 0,
        height: 90,
        margin: -1
    },
    v6: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        borderRadius: 15,
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    FloatingActionButton: {
        width: 50,
        height: 50,
        backgroundColor: '#009387',
        borderRadius: 25,
        position: 'absolute',
        bottom: 30,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    

})
export default HomeScreen;