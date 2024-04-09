
import React, { SetStateAction } from 'react'
import { Text, View } from '@/components/Themed';
import { Button, Linking, StyleSheet } from 'react-native';

import { SelectList } from 'react-native-dropdown-select-list'


const Vehicle = () => {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: '1', value: 'New South Wales' },
    { key: '2', value: 'Queensland' },
    { key: '3', value: 'Tasmania' },
    { key: '4', value: 'Victoria' },
    { key: '5', value: 'Western Australia' },
    { key: '6', value: 'South Australia' },
  ]

  function handle_press() {
    switch (selected) {
      case 'New South Wales': {
        Linking.openURL('https://check-registration.service.nsw.gov.au/frc?isLoginRequired=true')
        break;
      }
      case 'Queensland': {
        Linking.openURL('https://www.service.transport.qld.gov.au/checkrego/application/VehicleSearch.xhtml?dswid=-992')
        break;
      }
      case 'Tasmania': {
        Linking.openURL('https://www.transport.tas.gov.au/MRSWebInterface/public/regoLookup/registrationLookup.jsf')
        break;
      }
      case 'Victoria': {
        Linking.openURL('https://www.vicroads.vic.gov.au/registration/buy-sell-or-transfer-a-vehicle/check-vehicle-registration/vehicle-registration-enquiry')
        break;
      }
      case 'Western Australia': {
        Linking.openURL('https://online.transport.wa.gov.au/webExternal/registration/?2')
        break;
      }
      case 'South Australia': {
        Linking.openURL('https://account.ezyreg.sa.gov.au/account/check-registration.htm')
        break;
      }

      default: {
        Linking.openURL('https://check-registration.service.nsw.gov.au/frc?isLoginRequired=true')
        break;
      }
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vehicle Details</Text>
      <Text>
        Select your state from the drop down menu below.
      </Text>


      <Button title='Search' onPress={() => {
        handle_press()
      }} />


      <SelectList
        search={false}
        setSelected={(val: SetStateAction<string>) => setSelected(val)}
        data={data}
        save="value"
        defaultOption={{ key: '1', value: 'New South Wales' }}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  title: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default Vehicle