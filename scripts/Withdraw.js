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
  const[isAgent, setIsAgent]= useState(false)
  const[isAtm, setIsAtm]= useState(true)

  const changeAgentIcon=()=>{
    setIsAgent(true)
    setIsAtm(false)
  }
  const changeAtmIcon=()=>{
    setIsAgent(false)
    setIsAtm(true)
  }
    return(
        <View style={styles.body}>
          <FontAwesome5 name='money-check' style={styles.icon}/>
          <View style={styles.formContainer}>
            <View style={styles.optionsContainer}>
              <Pressable 
              style={styles.optionsButton}
              onPress={changeAtmIcon}>{
                isAtm?
                  <FontAwesome5 name='key' style={{fontSize: 20, color: '#17b908'}}/>
                  :
                  <FontAwesome5 name='btc' style={{fontSize: 10, color: '#fff'}}/>
              }
                <Text> ATM</Text>
              </Pressable>
              <Pressable 
                style={styles.optionsButton}
                onPress={changeAgentIcon}>{
                  isAgent?
                  <FontAwesome5 name='key' style={{fontSize: 20, color: '#17b908'}}/>
                  :
                  <FontAwesome5 name='btc' style={{fontSize: 10, color: '#fff'}}/>
                }
                <Text>Agent</Text>
              </Pressable>
            </View>
            <View style={styles.form}>
              <TextInput style={styles.input}
                placeholder= 'Amount'
                keyboardType='numeric'
                />
              
              <TextInput style={styles.input}
                placeholder= {isAgent? 'Agent Number': 'ATM Number'}
                keyboardType='numeric'
                />
              
              <Pressable style={styles.submitButton}>
                <Text style={styles.submitText}>Submit</Text>
              </Pressable>
            </View>
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
    formContainer:{
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    form:{
      flex: 2,
    },
    optionsContainer:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
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
    optionsButton:{
      margin: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 50,
      padding: 15
    }

})

export default Deposit