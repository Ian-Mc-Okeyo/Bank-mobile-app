import React, {useState} from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
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

function ForexPage({navigation}){

    const goToForex=()=>{
        navigation.navigate('Home')
    }
    const goToHome=()=>{
        navigation.navigate('Home')
    }
    const goToLogin=()=>{
        navigation.navigate('Login')
    }
    const goToRegister=()=>{
        navigation.navigate('Register')
    }
    return(
        <View style={styles.body}>
            <Text style={styles.text}>
                From: 
            </Text>
            <TextInput
                placeholder='Currency Name'
                style={styles.inputCurrency}
            />
            <TextInput
                placeholder='Amount'
                keyboardType='numeric'
                style={styles.inputAmount}
            />

            <Text style={styles.text}>
                To: 
            </Text>
            <TextInput
                placeholder='Currency Name'
                style={styles.inputCurrency}
            />
            <TextInput
                placeholder='Amount'
                keyboardType='numeric'
                style={styles.inputAmount}
            />

            <Pressable
                style={styles.convertButton}
            >

                <Text style={styles.ConvertText}>Convert</Text>
            </Pressable>

            <View style={styles.nav}>
                <Pressable 
                    onPress={goToHome}
                    hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}>
                    <FontAwesome5 name="home" style={GlobalStyle.icon} />
                </Pressable>
                <Pressable      
                    onPress={goToForex}
                    hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}>
                    <FontAwesome5 name="chart-line" style={GlobalStyle.activeIcon} />
                </Pressable>
                <Pressable 
                    onPress={goToLogin}
                    hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}>
                    <FontAwesome5 name="unlock" style={GlobalStyle.icon} />
                </Pressable>
                <Pressable 
                    onPress={goToRegister}
                    hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}>
                    <FontAwesome5 name="user-plus" style={GlobalStyle.icon} />
                </Pressable>
            </View>
        </View>
        
    )
}

const styles=StyleSheet.create({
    body:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#02001fb9',
    },
    text: {
        color: '#17b908',
        fontSize: 40,
        marginTop: 30,
        fontWeight: 'bold',
    },
    inputCurrency: {
        width: '100%',
        backgroundColor: '#dfdfec',
        marginTop: 10,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600'
    },
    inputAmount: {
        width: '80%',
        backgroundColor: '#dfdfec',
        marginTop: 30,
        marginBottom: 10,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600'
    },
    convertButton: {
        width: '100%',
        backgroundColor: '#02001fef',
        marginTop: 20,
        marginBottom: 50,
        paddingBottom: 10,
        paddingTop: 5,
        borderRadius: 7,
    },
    ConvertText: {
        fontSize: 30,
        color: '#17b908',
        textAlign: 'center', 
        fontWeight: 'bold',
    },
    nav: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -35
    }
})

export default ForexPage