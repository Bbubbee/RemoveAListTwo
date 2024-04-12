
import React, { SetStateAction } from 'react'
import { Text, View } from '@/components/Themed';
import { Button, Linking, Pressable, StyleSheet, TextInput } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';


import { SelectList } from 'react-native-dropdown-select-list'


const Vehicle = () => {
  const [selected, setSelected] = React.useState("");
  const [regoNumber, setRegoNumber] = React.useState("None");

  const data = [
    { key: '1', value: 'New South Wales' },
    { key: '2', value: 'Queensland' },
    { key: '3', value: 'Tasmania' },
    { key: '4', value: 'Victoria' },
    { key: '5', value: 'Western Australia' },
    { key: '6', value: 'South Australia' },
  ]

  function handle_press() {
    console.log(regoNumber);

    return

    // switch (selected) {
    //   case 'New South Wales': {
    //     Linking.openURL('https://check-registration.service.nsw.gov.au/frc?isLoginRequired=true')
    //     break;
    //   }
    //   case 'Queensland': {
    //     Linking.openURL('https://www.service.transport.qld.gov.au/checkrego/application/VehicleSearch.xhtml?dswid=-992')
    //     break;
    //   }
    //   case 'Tasmania': {
    //     Linking.openURL('https://www.transport.tas.gov.au/MRSWebInterface/public/regoLookup/registrationLookup.jsf')
    //     break;
    //   }
    //   case 'Victoria': {
    //     Linking.openURL('https://www.vicroads.vic.gov.au/registration/buy-sell-or-transfer-a-vehicle/check-vehicle-registration/vehicle-registration-enquiry')
    //     break;
    //   }
    //   case 'Western Australia': {
    //     Linking.openURL('https://online.transport.wa.gov.au/webExternal/registration/?2')
    //     break;
    //   }
    //   case 'South Australia': {
    //     Linking.openURL('https://account.ezyreg.sa.gov.au/account/check-registration.htm')
    //     break;
    //   }

    //   default: {
    //     Linking.openURL('https://check-registration.service.nsw.gov.au/frc?isLoginRequired=true')
    //     break;
    //   }
    // }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vehicle Details</Text>
      <Text style={styles.body}>
        Select your state from the drop down menu below.
      </Text>


      <View style={styles.stateContainer}>
        <SelectList
          search={false}
          setSelected={(val: SetStateAction<string>) => setSelected(val)}
          data={data}
          save="value"
          defaultOption={{ key: '1', value: 'New South Wales' }}
          boxStyles={{ width: '100%' }}
        />
      </View>

      <Text style={styles.body}>Please enter your vehicle rego details:</Text>

      <TextInput style={styles.input} onChangeText={newText => { setRegoNumber(newText) }}>
      </TextInput>


      <Pressable onPress={() => handle_press()} style={styles.lookupButton} >
        <Text style={styles.text}>Lookup</Text>
        <FontAwesome6 name="magnifying-glass-arrow-right" size={24} color="white" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    height: 40,
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    padding: 10,
  },

  container: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 15
  },

  title: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },

  body: {
    marginTop: 10
  },

  lookupButton: {
    marginTop: 10,

    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    alignItems: 'center',
    elevation: 3,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between'
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  stateContainer: {
    marginTop: 10
  }
});

export default Vehicle