import React,{ Component} from 'react';
import {StyleSheet,View,Image,Text,TouchableOpacity,TextInput, Alert} from 'react-native';
import axios from 'axios';
interface homeProps{
    navigation:any
}
 const Home=(props:homeProps)=>{
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    const onLoginButton=()=>{
        axios.post('http://tradenapp-env.us-east-1.elasticbeanstalk.com/api/v1/api-token-auth/',{
            username:email,
            password:password
          })
          .then((response)=>{
              console.log(response.data.token);
          })
          .catch(error=>console.log(error))
    }
    const onBackButton=()=>{
        
    }
    const onForgetButton=()=>{
        
    }
    const onSignUpButton=()=>{
        
    }
    return(
        <View style={styles.container}>
            </View>
    );
}

const styles=StyleSheet.create({
    lastButton:{
        backgroundColor:"#FFFFFF",
        marginLeft:20,
        marginRight:120,
    },
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    emailHeader:{
        marginLeft:30,
        fontSize:12,
        color:"#D8D8D8",
        marginTop:120,
    },
    titleContainer:{
        flex:1,
        flexDirection:"row",
        marginTop:80,
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
    },
    emailBody:{
        marginLeft:30,
        borderBottomColor:"black",
        borderBottomWidth:2,
        marginRight:30,
        fontSize:13
    },
    last:{
        marginLeft:30,
        fontSize:12,
        color:"blue",
        marginTop:10,  
    },
    passwordHeader:{
        marginLeft:30,
        fontSize:12,
        color:"#D8D8D8",
        marginTop:10,
    },
    passwordBody:{
        marginLeft:30,
        borderBottomColor:"black",
        borderBottomWidth:2,
        marginRight:30,
        fontSize:13
    },
    loginButton:{
        backgroundColor:"blue",
        marginLeft:40,
        marginTop:20,
        marginRight:40,
        height:40,
        borderRadius:30
    },
    loginTitle:{
        textAlign:"center",
        marginTop:10,
        color:"white"
    }
});


export default Home;