import React, {useState} from 'react';
import {
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
  Image,
  ImageBackground,
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

function RegisterPage({navigation}){
    return(
        <View style={styles.body}>
            <Text>LoginPage</Text>
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
        width: 380,
        backgroundColor: '#dfdfec',
        marginTop: 10,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600'
    },
    inputAmount: {
        width: 300,
        backgroundColor: '#dfdfec',
        marginTop: 30,
        marginBottom: 10,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600'
    },
    convertButton: {
        width: 380,
        backgroundColor: '#02001fef',
        marginTop: 20,
        marginBottom: 50,
        paddingBottom: 10,
        paddingTop: 5,
        borderRadius: 7,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600'
    },
    ConvertText: {
        fontSize: 30,
        color: '#17b908',
        textAlign: 'center', 
        fontWeight: 'bold',
    } 
})

export default RegisterPage