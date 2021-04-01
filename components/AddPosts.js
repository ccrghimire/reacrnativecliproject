import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AddPosts =props=>{
return <View style={styles.form}>
<View style={styles.formHeader}>
    <Text style={styles.text}>Add Posts</Text>
<Entypo onPress={() => props.cancel} name='cross' color="white" size={30} /> 
</View>
<Text> Form body</Text>
</View>
}
const styles=StyleSheet.create({
    form: {
        padding: 30,
        backgroundColor: '#009387'
    },
    formHeader: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1,
        alignContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center',
        color:"white"
    }
})
export default AddPosts;