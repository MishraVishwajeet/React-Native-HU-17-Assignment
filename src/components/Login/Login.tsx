import React,{ Component} from 'react';
import {StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native';

export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                <TouchableOpacity style={styles.backButton}>
                    <Image style={styles.backLogo} source={require('../../Images/back.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.textHeader}>LOGIN</Text>
                </View>
                <Text style={styles.emailHeader}>EMAIL ADDRESS/PHONE NUMBER</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    emailHeader:{
        marginLeft:30,
        fontSize:12,
        color:"#D8D8D8",
        marginTop:150,
    },
    titleContainer:{
        flex:1,
        flexDirection:"row",
        marginTop:100,
        maxHeight:50
    },
    textHeader:{
        textAlign:"center",
        fontSize:25,
        fontWeight:"bold",
        color:"blue",
        marginLeft:90
    },
    backButton:{
        marginLeft:30,
        width:20,
        height:20
    },
    backLogo:{
        width:20,
        height:20
    }
});