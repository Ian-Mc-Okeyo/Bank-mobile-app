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
  const[isBorrow, setIsBorrow]= useState(false)
  const[isRepay, setIsRepay]= useState(true)

  const changeBorrowIcon=()=>{
    setIsBorrow(true)
    setIsRepay(false)
  }
  const changeRepayIcon=()=>{
    setIsBorrow(false)
    setIsRepay(true)
  }
    return(
        <View style={styles.body}>
          <FontAwesome5 name='landmark' style={styles.icon}/>
          <Text style={{fontSize: 17, color: '#17b908', fontWeight:'600'}}>Outstanding Loan Balance:</Text><Text style={{fontSize: 15, color: '#fff'}}>0</Text>
          <Text style={{fontSize: 17, color: '#17b908', fontWeight:'600'}}>Loan Limit: </Text><Text style={{fontSize: 15, color: '#fff'}}>5000</Text>
          <View style={styles.formContainer}>
            <View style={styles.optionsContainer}>
              <Pressable 
              style={styles.optionsButton}
              onPress={changeBorrowIcon}>{
                isBorrow?
                  <FontAwesome5 name='hand-holding-usd' style={{fontSize: 20, color: '#17b908'}}/>
                  :
                  <FontAwesome5 name='hand-holding-usd' style={{fontSize: 10, color: '#fff'}}/>
              }
                <Text> Borrow</Text>
              </Pressable>
              <Pressable 
                style={styles.optionsButton}
                onPress={changeRepayIcon}>{
                  isRepay?
                  <FontAwesome5 name='funnel-dollar' style={{fontSize: 20, color: '#17b908'}}/>
                  :
                  <FontAwesome5 name='btc' style={{fontSize: 10, color: '#fff'}}/>
                }
                <Text>Repay</Text>
              </Pressable>
            </View>
            <View style={styles.form}>
              <TextInput style={styles.input}
                placeholder= {isBorrow? 'Amount To Borrow': 'Amount To Repay'}
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