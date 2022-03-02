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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Deposit({navigation}){
    return(
        <View style={styles.body}>
            <FontAwesome5 name='paper-plane' style={styles.icon}/>
            <View style={styles.form}>
              <TextInput style={styles.input}
                placeholder= 'Amount'
                keyboardType='numeric'
                />
              
              <TextInput style={styles.input}
                placeholder= 'Receiver Account Number'
                keyboardType='numeric'
                />
              
              <Pressable style={styles.submitButton}>
                <Text style={styles.submitText}>Send</Text>
              </Pressable>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#02001fce',
    },
    form:{
      flex: 2,
    },
    icon: {
      fontSize: 80,
      margin: 20,
      color: '#17b908',
    },
    input: {
      width: 330,
      backgroundColor: '#fff',
      borderRadius: 5,
      marginBottom: 20,
    },
    submitButton: {
      width: 330,
      backgroundColor: '#02001fef',
      marginTop: 20,
      marginBottom: 50,
      paddingBottom: 10,
      paddingTop: 5,
      borderRadius: 7,
    },
    submitText: {
      fontSize: 25,
      color: '#17b908',
      textAlign: 'center', 
      fontWeight: 'bold',
    },

})

export default Deposit