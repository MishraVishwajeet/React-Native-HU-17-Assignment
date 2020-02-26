import React,{ Component} from 'react';
import {StyleSheet,View,Image,Text,TouchableOpacity,TextInput} from 'react-native';

 const Login=()=>{
    const [email,setEmail]=React.useState("eg:sulthan@tradenapp.com or +91 9742 889 859");
    const [password,setPassword]=React.useState("Password");
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
            <TouchableOpacity style={styles.backButton}>
                <Image style={styles.backLogo} source={require('../../Images/back.png')}></Image>
            </TouchableOpacity>
            <Text style={styles.textHeader}>LOGIN</Text>
            </View>
            <Text style={styles.emailHeader}>EMAIL ADDRESS/PHONE NUMBER</Text>
            <TextInput
                style={styles.emailBody}
                value={email}
                onChangeText={text=>setEmail(text)}
                ></TextInput>
            <Text style={styles.passwordHeader}>PASSWORD</Text>
            <TextInput
                style={styles.passwordBody}
                value={password}
                onChangeText={text=>setPassword(text)}
                ></TextInput>
                <TouchableOpacity style={styles.loginButton}><Text style={styles.loginTitle}>LOGIN</Text></TouchableOpacity>
                <TouchableOpacity style={styles.lastButton}><Text style={styles.last}>Forget Password?</Text></TouchableOpacity>
                <TouchableOpacity style={styles.lastButton}><Text style={styles.last}>Not a Member Yet? Sign Up Now</Text></TouchableOpacity>
        </View>
    );
}

const styles=StyleSheet.create({
    lastButton:{
        backgroundColor:"#FFFFFF"
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


export default Login;