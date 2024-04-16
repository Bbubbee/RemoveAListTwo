
import React, { SetStateAction } from 'react'
import { Text, View } from '@/components/Themed';
import { Button, Linking, Pressable, StyleSheet, TextInput } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { router } from 'expo-router';
import axios from 'axios'; 


import { SelectList } from 'react-native-dropdown-select-list'




const NewVehicle = () => {
  const [state, setState] = React.useState("");
  const [regoNumber, setRegoNumber] = React.useState("None");

  const states = [
    { key: '1', value: 'New South Wales' },
    { key: '2', value: 'Queensland' },
    { key: '3', value: 'Tasmania' },
    { key: '4', value: 'Victoria' },
    { key: '5', value: 'Western Australia' },
    { key: '6', value: 'South Australia' },
  ]

  async function handle_press() {
    // Get access token. 
    
    // Need header 

    const accessTokenUrl = "https://api.onegov.nsw.gov.au/oauth/client_credential/accesstoken?grant_type=client_credentials"
    console.log(accessTokenUrl);
    
    try {
      const result = await axios.get(accessTokenUrl, {
        headers: {
          'Authorization': process.env.EXPO_PUBLIC_API_KEY
        }
      });
      console.log(result.data);
    } catch (error) {
      console.log("error!!!!!!!", error);
    }

    // Call test api get. 


    // Go to Vehicle Information Page
    router.back()
    router.push("/(pages)/Vehicles/VehicleInfo")

    return
  }

  return (
    <View style={styles.container}>

      <Text style={styles.body}>
        Enter Your Vehicle Identification Number (VIN)
        {"\n"}OR {"\n"}
        Your Registration Number
      </Text>
      <TextInput style={styles.input} onChangeText={newText => { setRegoNumber(newText) }} />


      <Text style={styles.body}>
        Select Your State
      </Text>


      <View style={styles.stateContainer}>
        <SelectList
          search={false}
          setSelected={(val: SetStateAction<string>) => setState(val)}
          data={states}
          save="value"
          defaultOption={{ key: '1', value: 'New South Wales' }}
          boxStyles={{ width: '100%', backgroundColor: 'white', borderColor: '#757575' }}
          dropdownStyles={{ backgroundColor: 'white', }}
        />
      </View>


      <Pressable onPress={() => handle_press()} style={styles.lookupButton} >
        <Text style={styles.buttonText}>Get Info</Text>
        <FontAwesome6 name="magnifying-glass-arrow-right" size={24} color="white" />
      </Pressable>


    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    height: 40,
    width: '100%',
    borderRadius: 1,
    padding: 10,
    backgroundColor: "white",
  },

  container: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 20,
    paddingHorizontal: 25,
    backgroundColor: '#E8E6E6'
  },

  title: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },

  body: {
    marginTop: 30,
    fontWeight: 'bold',
  },

  lookupButton: {
    marginTop: 35,

    backgroundColor: '#276FB1',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 3,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',

    alignSelf: 'center',
  },

  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  stateContainer: {
    width: '100%',
    marginTop: 15,
    backgroundColor: '#E8E6E6',
  }
});

export default NewVehicle