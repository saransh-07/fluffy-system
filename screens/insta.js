import * as React from 'react';
import {View, Text , StyleSheet} from 'react-native';

export default class Insta extends React.Component{
    render(){
        return(
            <View>
                <Text style = {styles.text}>
                    Instagram
                </Text>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    text : {
        fontSize : 50,
        fontWeight : 'bold',
        textAlign : 'center',
        marginTop : 100
    }
})