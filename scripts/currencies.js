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
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Currencies(){
    const [MyCurrencies, setCurrencies] = useState([
        {name: 'Ksh', amount: 5000.00},
        {name: 'Dollar', amount: 17.90},
        {name: 'Euros', amount: 14.00},
        {name: 'Yemen', amount: 11.92},
        {name: 'Rand', amount: 45.89},
        {name: 'Tzsh', amount: 8000.00},
        {name: 'CaD', amount: 78.97},
        {name: 'CaD', amount: 78.97},
        {name: 'CaD', amount: 78.97},
        {name: 'CaD', amount: 78.97},
        {name: 'CaD', amount: 78.97},
        {name: 'CaD', amount: 78.97},
    ]);
    return(
        <View style={styles.body}>
           <FontAwesome5 name='money-bill-wave' style={styles.icon}/>
           <Text style={{fontSize: 17, fontWeight: '600', color:'#17b908'}}>Change Your money to Other Currencies</Text>
           <TextInput
            style={styles.input}
            placeholder='From (Must be one of your owned currency)'
           />
           <TextInput
            style={styles.input}
            placeholder='To (Any currency)'
           />
           <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder='Amount to change (Amount of the owned currency)'
           />
           <Pressable
            style={styles.convertButton}
           >
               <Text style={styles.convertText}>Convert</Text>
           </Pressable>
           <Text style={{color: '#fff', fontSize: 20, marginTop: -30}}>Your Currencies</Text>
            <FlatList
                style={styles.flastList}
                keyExtractor={(currency, index)=>index.toString()}
                data={MyCurrencies}
                renderItem={({item})=>(
                <View style={styles.currrenciesContainer}>
                    <Text style={styles.currencyName}>{item.name}</Text>
                    <Text style={styles.amount}>{item.amount}</Text>
                </View>
            )} />
        </View>
   
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#02001fce'
    },
    input: {
        width: '95%',
        borderRadius: 5,
        backgroundColor: '#fff',
        margin: 10
    },
    icon: {
        fontSize: 80,
        margin: 20,
        color: '#fff',
        fontWeight: '100'
      },
      convertButton: {
        width: '95%',
        backgroundColor: '#02001fef',
        marginTop: 20,
        marginBottom: 50,
        paddingBottom: 10,
        paddingTop: 5,
        borderRadius: 7,
      },
      convertText: {
        fontSize: 25,
        color: '#17b908',
        textAlign: 'center', 
        fontWeight: 'bold',
      },
      currrenciesContainer: {
          flex: 1,
          width: '100%',
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#02001fef',
          margin: 10,
          marginRight: 10,
      },
      flastList: {
          flexGrow: 1,
          width: '95%',
          
      },
      amount:{
          color: '#ffee00',
          fontSize: 20,
      },
      currencyName: {
          fontSize: 25,
          fontWeight: '300',
          color: '#17b908'

      }
})

export default Currencies