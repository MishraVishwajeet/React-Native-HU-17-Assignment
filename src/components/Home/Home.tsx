import React,{ Component} from 'react';
import {StyleSheet,View,Image,Text,TouchableOpacity,TextInput, Alert} from 'react-native';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
interface homeProps{
    navigation:any
}
 const Home=(props:homeProps)=>{
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    const availVerify=useSelector(state=>state.verify.token);
    Alert.alert("Using Redux-Saga Token is:"+availVerify);
    return(
        <View style={styles.container}>
            <View style={styles.location} >
                <Image
                    style={styles.loc}
                    source={require('../../Images/location_icon.png')}
                ></Image>
                <Text style={styles.locationHead}>HSR Layout,Banglore</Text>
                <Image
                    style={styles.locdrop}
                    source={require('../../Images/location_dropdown.png')}
                ></Image>
            </View>
            <View style={styles.nav}>
                <TouchableOpacity style={styles.navButton} onPress={()=>Alert.alert('SideBar')}>
            <Image
                    style={styles.navbar}
                    source={require('../../Images/side_menu.png')}
                >
            </Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={()=>Alert.alert('Home')}>
            <Image
                    style={styles.navbar}
                    source={require('../../Images/home.png')}
                >
            </Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={()=>Alert.alert('Search')}>
            <Image
                    style={styles.navbar}
                    source={require('../../Images/search.png')}
                >
            </Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={()=>Alert.alert('Alert')}>
            <Image
                    style={styles.navbar}
                    source={require('../../Images/notification.png')}
                >
            </Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={()=>Alert.alert('inapp_Chat')}>
            <Image
                    style={styles.navbar}
                    source={require('../../Images/inapp_chat.png')}
                >
            </Image>
            </TouchableOpacity>
            </View>
            <Text style={styles.service}>FOLLOWING SERVICES</Text>
            <View style={styles.cards}>
                <ScrollView horizontal={true}>
                    <View style={styles.card}><Text>This is Scrollable! Please Scroll</Text></View>
                    <View style={styles.card}></View>
                    <View style={styles.card}></View>
                    </ScrollView>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    cards:{
        flex:1,
        flexDirection:'row',
        marginTop:10,
        marginLeft:20
    },
    card:{
        backgroundColor:'grey',
        height:170,width:150,marginRight:10
    },
    service:{
        marginTop:10,
        fontSize:10,
        marginLeft:20
    },
    locationHead:{
        color:'white',
        marginTop:10,
        marginLeft:5
    },
    navbar:{
        width:25,
        height:25,
        
    },
    navButton:{
        width:25,
        height:25
    },
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    location:{
        flex:1,
        backgroundColor:'blue',
        flexDirection:'row',
        maxHeight:40
    },
    nav:{
        flex:1,
        backgroundColor:'blue',
        flexDirection:'row',
        justifyContent:'space-around',
        maxHeight:40
    },
    loc:{
        width:15,
        height:15,
        marginLeft:90,
        marginTop:12
    },
    locdrop:{
        width:15,
        height:15,
        marginLeft:10,
        marginTop:12
    }
});


export default Home;