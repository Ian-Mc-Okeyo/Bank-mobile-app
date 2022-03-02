import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GlobalStyle from './Styles/GlobalStyle';
import ForexPage from './ForexPage';

function LoginPage({navigation}){

    navigation.setOptions({
        headerLeft: ()=>(
            <Pressable
                style={styles.backButton}
                onPress={goToForex}
            >
                <Text style={styles.backButtonText}>Back</Text>
            </Pressable>
        )
    })

    const goToForex=()=>{
        navigation.navigate('App', {screen: 'Forex'});
    }
    const goToHome=()=>{
        navigation.navigate('App', {screen: 'Forex'})
    }
    const goToLogin=()=>{
        navigation.navigate('Login')
    }
    const goToRegister=()=>{
        navigation.navigate('App', {screen: 'Register'})
    }

    const goToAuthentication=()=>{
        navigation.navigate('AuthRoot')
    }

    return(
        <View style={styles.body}>
            <Text style={styles.logo}>
                G7
            </Text>
            <Text style={styles.label}>
                User Name:
            </Text>
            <TextInput
                style={styles.inputs}
                placeholder='Your User name'
            />
            <Text style={styles.label}>
                Account Number:
            </Text>
            <TextInput
                style={styles.inputs}
                placeholder='Account Number'
            />
            <Text style={styles.label}>
                Password:
            </Text>
            <TextInput
                style={styles.inputs}
                secureTextEntry
                placeholder='Password'
            />
            <Pressable 
                onPress={goToAuthentication}
                style={styles.loginButton} 
                android_ripple={{color: '#ffffff'}}>
                <Text style={styles.loginText}>Login</Text>
            </Pressable>

            
        </View>
    )
}

const styles=StyleSheet.create({
    body:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#02001fce',
    },
    logo: {
        color: '#17b908',
        fontSize: 100,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: -25
        
    },
    label: {
        color: '#17b908',
        fontSize: 22,
        marginTop: 30,
        fontWeight: 'bold',
    },
    inputs: {
        width: '100%',
        backgroundColor: '#dfdfec',
        marginTop: 10,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '600' 
    },
    loginButton: {
        backgroundColor: '#02001fb9',
        width: '100%',
        marginTop: 25,
        borderRadius: 7,
        paddingBottom: 10,
        paddingTop: 10,
    },
    loginText: {
        textAlign: 'center',
        color: '#17b908',
        fontSize: 25,
        fontWeight: 'bold',
    },
    nav: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -100
    },
    backButton: {
        backgroundColor: '#17b908',
        width: '70%',
        paddingBottom: 10,
        paddingTop: 10,
        marginBottom: -6,
        borderRadius: 3
    },
    backButtonText:{
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
    }
    
})

export default LoginPage