import * as React from 'react';
import {View, Text , StyleSheet} from 'react-native';

export default class Fb extends React.Component{
    render(){
        return(
            <View>
                <Text style = {styles.text}>
                    Facebook
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